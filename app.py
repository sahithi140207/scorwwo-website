from flask import Flask, jsonify, send_from_directory
import os
from flask_cors import CORS

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    # Mock data to demonstrate the Python backend working
    return jsonify({
        "status": "success",
        "message": "Hello from the Python Backend!",
        "liveTrains": [
            {"trainNo": "12727", "name": "Godavari Express", "status": "On Time"},
            {"trainNo": "12739", "name": "Garibrath Express", "status": "Delayed by 15 mins"}
        ],
        "zonals": ["Vijayawada", "Visakhapatnam", "Guntur", "Guntakal"]
    })

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    # Serve static files from project root. If path doesn't exist, serve index.html
    if path != '' and os.path.exists(path):
        return send_from_directory('.', path)
    return send_from_directory('.', 'index.html')


@app.route('/api/status', methods=['GET'])
def status():
    # Compatibility endpoint used by the Node proxy
    return get_data()


if __name__ == '__main__':
    app.run(port=5000, debug=True)
