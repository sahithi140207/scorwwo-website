import React, { useState } from 'react';

type InitiativeId = 'jack-jill' | 'e-world' | 'asha-kiran' | 'sakhi-mart';

type Initiative = {
  id: InitiativeId;
  title: string;
  tagline: string;
  shortDescription: string;
  about: string;
  vision: string;
  mission: string[];
  services: string[];
  activities: string[];
  impact: string;
  contact?: string[];
  icon: React.ReactNode;
  accent: string;
};

function SchoolIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 10.5L12 6l9 4.5-9 4.5L3 10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M6 11.5V16c0 1.3 2.7 3 6 3s6-1.7 6-3v-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 9.5v3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function WorldIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 3c2.8 2.4 4.5 5.4 4.5 9S14.8 18.6 12 21c-2.8-2.4-4.5-5.4-4.5-9S9.2 5.4 12 3Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function HeartHandIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8.5 14.5 6 12.2a2.3 2.3 0 0 1 3.2-3.3l1 1 .8-.8a2.4 2.4 0 0 1 3.4 0l.8.8 1-1a2.3 2.3 0 1 1 3.2 3.3l-2.5 2.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 15.5c1.7 0 2.9 1 4.4 1H14c1.4 0 2.4-1 3.8-1H19c1 0 1.8.8 1.8 1.8 0 1-.8 1.8-1.8 1.8H11.5c-1.5 0-2.5.9-4.1.9H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StoreIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5V10H3V7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 14h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const INITIATIVES: Initiative[] = [
  {
    id: 'jack-jill',
    title: 'Jack & Jill Schools',
    tagline: 'Building confident learners and future leaders.',
    shortDescription: 'Quality education focused on academic excellence, creativity, confidence, and character development.',
    about:
      'Jack & Jill Schools is committed to providing quality education that nurtures academic excellence, creativity, confidence, and character development. Through innovative teaching methods, modern learning environments, and holistic development programs, we prepare students to become responsible citizens and future leaders.',
    vision:
      'To build a generation of confident, creative, and responsible learners who excel academically and contribute positively to society.',
    mission: [
      'Provide engaging and student-centered learning experiences.',
      'Encourage creativity, character building, and confidence.',
      'Support holistic development through academics and co-curricular activities.',
      'Prepare students for leadership, responsibility, and lifelong learning.',
    ],
    services: [
      'Academic instruction and subject enrichment',
      'Character development and value education',
      'Holistic learning and co-curricular activities',
      'Student mentoring and supportive learning environments',
    ],
    activities: [
      'Classroom learning programs',
      'Competitions, celebrations, and cultural activities',
      'Workshops for students and parents',
      'Creative projects, sports, and life-skill programs',
    ],
    impact:
      'Jack & Jill Schools helps children gain strong academic foundations, confidence, and social skills. The initiative strengthens communities by nurturing responsible, capable, and future-ready students.',
    contact: ['Admissions and academic support through the school office', 'Community updates shared via official railway announcements'],
    icon: <SchoolIcon className="h-6 w-6" />,
    accent: 'from-indigo-500 to-violet-500',
  },
  {
    id: 'e-world',
    title: 'E-WORLD',
    tagline: 'Digital learning for a future-ready generation.',
    shortDescription: 'A digital learning initiative connecting young talents with modern technology and innovation.',
    about:
      'E-WORLD is a digital learning initiative that connects young talents with modern technology, online education, and innovation. Through skill-development programs, digital literacy training, and technology-driven learning opportunities, E-WORLD empowers individuals to succeed in the digital era.',
    vision:
      'To create a digitally empowered generation equipped with the knowledge and skills needed to thrive in a technology-driven world.',
    mission: [
      'Promote digital literacy and technology-based learning.',
      'Provide access to modern online education and skill development.',
      'Support innovation, creativity, and self-learning.',
      'Prepare learners for careers and opportunities in the digital economy.',
    ],
    services: [
      'Digital learning programs',
      'Skill-development and training workshops',
      'Technology orientation sessions',
      'Online learning support and mentoring',
    ],
    activities: [
      'Workshops on digital tools and platforms',
      'Training sessions on online learning skills',
      'Awareness programs on emerging technologies',
      'Competitions and innovation-based events',
    ],
    impact:
      'E-WORLD improves digital access and learning opportunities, helping youth become more confident, skilled, and job-ready. It bridges the gap between traditional education and modern technological needs.',
    contact: ['Technology and training updates via official digital programs', 'Workshop announcements shared through initiative channels'],
    icon: <WorldIcon className="h-6 w-6" />,
    accent: 'from-cyan-500 to-sky-500',
  },
  {
    id: 'asha-kiran',
    title: 'Asha Kiran',
    tagline: 'Care, inclusion, and opportunity for every child.',
    shortDescription: 'Support for children with special needs through care, therapy, education, and inclusion.',
    about:
      'Asha Kiran is dedicated to supporting children with special needs through education, therapy, care, and community inclusion. Our mission is to empower every child with confidence, independence, and opportunities for growth. Through personalized support programs, family counseling, and awareness initiatives, we strive to create an inclusive society where every child can thrive and achieve their full potential.',
    vision:
      'To create a compassionate and inclusive society where every child with special needs is respected, supported, and empowered to live with dignity.',
    mission: [
      'Provide education and developmental support tailored to individual needs.',
      'Offer therapy, care, and confidence-building support for children.',
      'Engage families through counseling and guidance.',
      'Promote awareness and inclusion within the wider community.',
    ],
    services: [
      'Special education support',
      'Therapy and care assistance',
      'Family counseling and guidance',
      'Awareness and inclusion initiatives',
    ],
    activities: [
      'Therapy and learning sessions',
      'Family support meetings',
      'Awareness drives and inclusion campaigns',
      'Skill-building and confidence-development activities',
    ],
    impact:
      'Asha Kiran brings hope, inclusion, and practical support to children and families. It helps build a kinder community where children with special needs can learn, grow, and thrive with confidence.',
    contact: ['Family support and outreach through the program coordination desk', 'Awareness and inclusion programs announced periodically'],
    icon: <HeartHandIcon className="h-6 w-6" />,
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'sakhi-mart',
    title: 'Sakhi Mart',
    tagline: 'Handmade creativity that supports women entrepreneurs.',
    shortDescription: 'A platform for handmade products, traditional craftsmanship, and women entrepreneurs.',
    about:
      'Sakhi Mart promotes traditional craftsmanship and empowers women entrepreneurs by providing a platform to showcase and sell handmade products. The initiative supports sustainable livelihoods, preserves cultural heritage, and connects skilled artisans with wider markets. Every product reflects creativity, dedication, and the rich traditions of local communities.',
    vision:
      'To empower artisans and women entrepreneurs by turning traditional craft into sustainable livelihood and wider market opportunity.',
    mission: [
      'Showcase handmade and traditional products in a supportive marketplace.',
      'Empower women entrepreneurs through business opportunities.',
      'Preserve cultural heritage and traditional craftsmanship.',
      'Connect artisans with wider audiences and sustainable markets.',
    ],
    services: [
      'Handmade product promotion and sales support',
      'Entrepreneurship encouragement for women',
      'Craft and heritage preservation',
      'Market access and livelihood support',
    ],
    activities: [
      'Product display and community sales events',
      'Craft awareness and exhibition programs',
      'Women entrepreneurship promotion sessions',
      'Workshops on sustainable handicraft development',
    ],
    impact:
      'Sakhi Mart strengthens local livelihoods by connecting artisans to customers and opportunities. It preserves tradition while helping women and communities grow economically.',
    contact: ['Product showcases and market events are updated by the coordination team', 'Craft fairs and sales events are announced through the initiative network'],
    icon: <StoreIcon className="h-6 w-6" />,
    accent: 'from-amber-500 to-orange-500',
  },
];

function InitiativeCard({ item, onClick }: { item: Initiative; onClick: (id: InitiativeId) => void }) {
  return (
    <button
      type="button"
      onClick={() => onClick(item.id)}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)] focus:outline-none focus:ring-4 focus:ring-indigo-200 cursor-pointer"
      aria-label={`Open ${item.title}`}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />
      <div className="flex items-start gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}>
          {item.icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-extrabold tracking-tight text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.shortDescription}</p>
        </div>
      </div>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-transform duration-300 group-hover:translate-x-1">
        Learn more
        <span aria-hidden="true">→</span>
      </div>
    </button>
  );
}

const SECTION_ACCENTS = {
  indigo: 'bg-indigo-500',
  violet: 'bg-violet-500',
  emerald: 'bg-emerald-500',
  sky: 'bg-sky-500',
  amber: 'bg-amber-500',
  rose: 'bg-rose-500',
} as const;

function ProfileSection({
  title,
  children,
  accent = 'indigo',
}: {
  title: string;
  children: React.ReactNode;
  accent?: keyof typeof SECTION_ACCENTS;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className={`h-2.5 w-2.5 rounded-full ${SECTION_ACCENTS[accent]}`} aria-hidden="true" />
        <h3 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">{title}</h3>
      </div>
      <div className="text-sm leading-7 text-slate-600 sm:text-[15px]">{children}</div>
    </section>
  );
}

function InitiativeDetail({ item, onBack }: { item: Initiative; onBack: () => void }) {
  return (
    <div
      className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
      style={{ animation: 'fadeSlideIn 320ms ease' }}
    >
      <div className={`rounded-t-3xl bg-gradient-to-r ${item.accent} px-6 py-5 text-white sm:px-8`}>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">Overview of {item.title}</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">{item.title}</h2>
        <p className="mt-2 max-w-3xl text-sm font-medium text-white/90 sm:text-base">{item.tagline}</p>
      </div>

      <div className="grid gap-5 p-6 sm:p-8 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5">
          <section className="rounded-2xl bg-slate-50 p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg`}>
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Short Description</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{item.shortDescription}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
            >
              <span aria-hidden="true">←</span>
              Back to Initiatives
            </button>
          </section>

          <ProfileSection title={`About ${item.title}`} accent="indigo">
            <p>{item.about}</p>
          </ProfileSection>

          <ProfileSection title="Vision" accent="violet">
            <p>{item.vision}</p>
          </ProfileSection>

          <ProfileSection title="Mission" accent="emerald">
            <ul className="space-y-2">
              {item.mission.map((point) => (
                <li key={point} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </ProfileSection>
        </div>

        <div className="space-y-5">
          <ProfileSection title="Key Services / Programs" accent="sky">
            <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {item.services.map((service) => (
                <li key={service} className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  {service}
                </li>
              ))}
            </ul>
          </ProfileSection>

          <ProfileSection title="Activities & Events" accent="amber">
            <ul className="space-y-2">
              {item.activities.map((activity) => (
                <li key={activity} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </ProfileSection>

          <ProfileSection title="Impact on Community" accent="rose">
            <p>{item.impact}</p>
          </ProfileSection>

          {item.contact && item.contact.length > 0 && (
            <ProfileSection title="Contact / Additional Information" accent="indigo">
              <ul className="space-y-2">
                {item.contact.map((entry) => (
                  <li key={entry} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500" aria-hidden="true" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </ProfileSection>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OurKeyInitiatives() {
  const [selectedId, setSelectedId] = useState<InitiativeId | null>(null);

  const selectedInitiative = INITIATIVES.find((item) => item.id === selectedId) ?? null;

  return (
    <section className="w-full rounded-3xl bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">Explore</p>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Our Key Initiatives</h2>
          </div>
          <p className="text-sm text-slate-500">Click any card to view details</p>
        </div>

        <div
          className={`transition-all duration-300 ${selectedInitiative ? 'pointer-events-none max-h-0 overflow-hidden opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}
          aria-hidden={!!selectedInitiative}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {INITIATIVES.map((item) => (
              <InitiativeCard key={item.id} item={item} onClick={setSelectedId} />
            ))}
          </div>
        </div>

        {selectedInitiative && (
          <div className="opacity-100" style={{ animation: 'fadeSlideIn 320ms ease' }}>
            <InitiativeDetail item={selectedInitiative} onBack={() => setSelectedId(null)} />
          </div>
        )}
      </div>
    </section>
  );
}
