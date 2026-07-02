const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve all your static HTML pages, CSS, JS, and photo folders
// from the project root (same folder this file lives in).
app.use(express.static(path.join(__dirname, ".")));

/* DATABASE */

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 4000,
    ssl: {
        minVersion: "TLSv1.2",
        rejectUnauthorized: true
    }
});

db.connect((err) => {
    if (err) {
        console.log("Database Error:", err);
    } else {
        console.log("Database Connected Successfully");
    }
});

/* EMAIL */

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

/* GEMINI */

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: process.env.GEMINI_MODEL || "gemini-2.5-flash"
});

if (!process.env.GEMINI_API_KEY) {
    console.error(
        "Missing GEMINI_API_KEY in .env. Chatbot requests will fail without a valid key."
    );
}

/* CONTACT FORM */

app.post("/contact", (req, res) => {
    const { full_name, email, phone, subject, message } = req.body;

    const sql = `
        INSERT INTO enquiries
        (full_name,email,phone,subject,message)
        VALUES (?,?,?,?,?)
    `;

    db.query(sql, [full_name, email, phone, subject, message], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Website Enquiry",
            text: `
Name: ${full_name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Email Error:", error);
            } else {
                console.log("Email Sent Successfully");
            }
        });

        res.json({
            success: true,
            message: "Enquiry Saved Successfully"
        });
    });
});

/* AI CHATBOT */

app.post("/chat", async (req, res) => {
    try {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({
                success: false,
                answer: "Question is required"
            });
        }

        const prompt = `
You are SCoRWWO Assistant, a helpful and friendly AI chatbot for SCoRWWO (South Coast Railway Women's Welfare Organisation).

You can answer any general questions (just like a standard Gemini AI assistant), but you have special, authoritative knowledge about SCoRWWO, its divisions, and its units.

Here is the special context about SCoRWWO, its divisions, and its units:

1. **SCoRWWO Divisions**:
   - Vijayawada Division: Manages railway welfare and activities in Vijayawada.
   - Visakhapatnam Division: Headquarter division of SCoRWWO.
   - Guntur Division: Manages railway welfare and activities in Guntur.
   - Guntakal Division: Manages railway welfare and activities in Guntakal.

2. **The 6 Main Units of SCoRWWO**:
   - **Asha Kiran Centre** (or Asha Kiran): A special school and rehabilitation centre for specially-abled/differently-abled children. It provides autism care, Down syndrome support, speech therapy, hearing impairment support, and life skills training.
   - **Jack & Jill School** (or Jack and Jill): An English Medium primary/pre-school providing quality education to children of railway staff and the local community.
   - **Career World**: A vocational training, computer education, coaching, and skill development center for women and youth to enhance career opportunities.
   - **E-World** (or E-World Software Development Center): A digital learning, computer education, and software development center.
   - **Canteen & Masala Unit**: A unit managing food services and producing high-quality spices/masalas for railway employees and welfare events.
   - **Sakhi Mart**: A welfare store and boutique supporting women empowerment, distributing eco-friendly sanitary napkins, and introducing coin-operated sanitary napkin dispensers and incinerators at railway stations.

Instructions:
- If the question is about SCoRWWO, its divisions, its units, or its website, use the special context above to provide an accurate, helpful, and detailed response.
- If the question is a general question (about programming, science, history, general railway questions, or anything else), answer it fully and helpful using your general knowledge.
- Do not refuse to answer general questions. Act like a general Gemini chatbot with SCoRWWO expertise.
- Accept questions in any casing (uppercase, lowercase, mixed case).
- Keep the tone warm, welcoming, and professional.

User Question:
${question}
`;

        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }]
        });

        let answer = "";

        if (result?.response?.text && typeof result.response.text === "function") {
            answer = result.response.text();
        } else if (result?.response?.candidates?.[0]?.content?.parts?.[0]?.text) {
            answer = result.response.candidates[0].content.parts[0].text;
        } else {
            answer = "Sorry, I could not get a response from the AI.";
        }

        res.json({ success: true, answer });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            answer: "Sorry, I could not process your request."
        });
    }
});

/* DATA ENDPOINTS
   (previously the root server.js proxied these to a separate process on
   port 5000 via axios — now they're answered directly, no proxy needed) */

app.get("/api/data", (req, res) => {
    res.json({
        status: "success",
        message: "Hello from the Node Backend!",
        liveTrains: [
            { trainNo: "12727", name: "Godavari Express", status: "On Time" },
            { trainNo: "12739", name: "Garibrath Express", status: "Delayed by 15 mins" }
        ],
        zonals: ["Vijayawada", "Visakhapatnam", "Guntur", "Guntakal"]
    });
});

app.get("/api/status", (req, res) => {
    res.redirect("/api/data");
});

// TODO: your old root server.js also had a GET /events route that proxied
// to http://localhost:5000/events — that route didn't exist in your
// backend/server.js, so it may have been served by app.py (Python) instead.
// Paste app.py's content and I'll port that logic in here too, or tell me
// to remove this route if it's unused.
app.get("/events", (req, res) => {
    res.status(501).json({ message: "Events endpoint not yet ported — see TODO in server.js" });
});

/* SERVE THE SITE */

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});