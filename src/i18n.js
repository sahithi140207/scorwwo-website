/* Minimal i18n for the static site. Replaces text for elements with data-i18n attributes.
   Supports English (en) and Hindi (hi). Persists selection to localStorage (site_lang).
*/
(function () {
  const translations = {
    en: {
      nav: { home: 'Home', aboutUs: 'About Us', divisions: 'Divisions', organisations: 'Organisations', services: 'Services', contact: 'Contact' },
      header: { searchPlaceholder: 'Search for services, information...', helpline: 'Helpline 139' },
      hero: { titleLine1: 'Beyond Tracks.', titleLine2: 'Towards Tomorrow.', paragraph: 'Driving progress. Connecting people. Building a sustainable and stronger tomorrow.', exploreMore: 'Explore More' },
      quickAccess: { title: 'QUICK<br>ACCESS', pnr: 'PNR Status', pnrDesc: 'Check your PNR', rrb: 'RRB Notifications', rrbDesc: 'Get updates on RRB notifications', vacancies: 'Vacancies', vacanciesDesc: 'Check available seats', reservation: 'Reservation', reservationDesc: 'Book your ticket', fare: 'Fare Enquiry', fareDesc: 'Check fare', feedback: 'Feedback', feedbackDesc: 'Share feedback' },
      leadership: { heading: 'MEET OUR LEADERSHIP', viewAll: 'View All Officers' },
      leadershipRoles: { drm: 'Divisional Railway Manager<br>Vijayawada', president: 'President<br>Vijayawada', vicePresident: 'Vice President<br>Vijayawada', generalSecretary: 'General Secretary<br>Vijayawada', juniorSecretary: 'Junior Secretary<br>Vijayawada', juniorGeneralSecretary: 'Junior General Secretary<br>Vijayawada', jackSecretary: 'Jack & Jills School Secretary<br>Vijayawada', eworldSecretary: 'E-WORLD Secretary<br>Vijayawada', canteenSecretary: 'Secretary - Canteen & Career World<br>Vijayawada', culturalSecretary: 'Cultural Secretary<br>Vijayawada', culturalMember: 'Cultural Member<br>Vijayawada' },
      organisations: { heading: 'OUR ORGANISATIONS', viewAll: 'View All Organisations' , items: [ { title: 'Vijayawada Division', desc: 'Manages train operations and infrastructure in the Vijayawada division.' }, { title: 'Visakhapatnam Division', desc: 'Manages train operations and infrastructure in the Visakhapatnam division.' }, { title: 'Guntur Division', desc: 'Manages train operations and infrastructure in the Guntur division.' }, { title: 'Guntakal Division', desc: 'Manages train operations and infrastructure in the Guntakal division.' } ] },
      initiatives: { heading: 'OUR KEY INITIATIVES', jack: { title: 'Jack & Jill Schools', subtitle: 'Shaping young minds with knowledge, confidence, and a brighter future.' }, eworld: { title: 'E-WORLD', subtitle: 'Connecting young talents to a world of digital learning and innovation.' }, asha: { title: 'Asha Kiran', subtitle: 'Bringing hope, care, and smiles to every special child.' }, career: { title: 'Career World', subtitle: 'Preparing students for RRB, Banking, SSC, ECET and other competitive exams.' } },
      events: { latest: 'LATEST EVENTS', announcements: 'IMPORTANT ANNOUNCEMENTS', items: [ 'Special trains announced for Summer Season 2024', 'South Coast Railway launches new Passenger App', 'Upgradation of Coast Junction Station completed' ], announcementsList: [ 'Travel advisory for passengers due to heavy rains in the region', 'Maintenance work on tracks between Coast - Belapur from 25th May', 'Please carry valid ID proof while traveling' ] },
      footer: { quickLinks: 'QUICK LINKS', app: 'SOUTH COAST RAILWAY APP', followUs: 'Follow Us', followSubtitle: 'Stay connected with us on social media.', newsletter: 'NEWSLETTER', copyright: '© 2024 South Coast Railway. All Rights Reserved.', links: { tenders: 'Tenders', careers: 'Careers', rti: 'Right to Information', grievance: 'Grievance Redressal', policies: 'Policies', charter: "Citizens' Charter" }, legal: { privacy: 'Privacy Policy', terms: 'Terms & Conditions', accessibility: 'Accessibility' }, brandName: 'SOUTH COAST RAILWAY', brandDesc: 'Committed to provide safe, reliable, efficient and affordable rail transport services to the nation.', about: 'ABOUT US', information: 'INFORMATION', help: 'HELP & SUPPORT' },
        footerExtra: { madeWith: 'Made with ❤️ for a better journey' },
      appPromo: { description: 'Your journey, in your hand.', pnr: 'PNR Status', book: 'Book Tickets', station: 'Station Info', scan: 'Scan to\nDownload' },
      stats: { dailyTrains: 'Daily Trains', stations: 'Stations', happy: 'Happy Passengers', safety: 'Safety Commitment' },
      forms: { newsletterPlaceholder: 'Enter your email', searchPlaceholder: 'Search for services, information...' },
      common: { english: 'English', hindi: 'हिन्दी', viewAll: 'View All' }
    },
    hi: {
      nav: { home: 'होम', aboutUs: 'हमारे बारे में', divisions: 'डिवीज़न', organisations: 'संगठन', services: 'सेवाएँ', contact: 'संपर्क' },
      header: { searchPlaceholder: 'सेवाओं, जानकारी के लिए खोजें...', helpline: 'हेल्पलाइन 139' },
      hero: { titleLine1: 'पटरियों के परे।', titleLine2: 'भविष्य की ओर।', paragraph: 'प्रगति को आगे बढ़ाना। लोगों को जोड़ना। एक टिकाऊ और मजबूत भविष्य का निर्माण।', exploreMore: 'और जानें' },
      quickAccess: { title: 'त्वरित<br>पहुंच', pnr: 'PNR स्थिति', pnrDesc: 'अपनी PNR स्थिति जाँचें', rrb: 'RRB सूचनाएँ', rrbDesc: 'RRB सूचनाओं के अपडेट प्राप्त करें', vacancies: 'रिक्तियाँ', vacanciesDesc: 'उपलब्ध सीटें जाँचें', reservation: 'आरक्षण', reservationDesc: 'अपना टिकट बुक करें', fare: 'किराया जानकारी', fareDesc: 'किराए की जाँच करें', feedback: 'प्रतिपुष्टि', feedbackDesc: 'प्रतिक्रिया साझा करें' },
      leadership: { heading: 'हमारी लीडरशिप से मिलें', viewAll: 'सभी अधिकारियों को देखें' },
      leadershipRoles: { drm: 'डिवीजनल रेलवे मैनेजर<br>विजयवाड़ा', president: 'अध्यक्ष<br>विजयवाड़ा', vicePresident: 'उपाध्यक्ष<br>विजयवाड़ा', generalSecretary: 'महासचिव<br>विजयवाड़ा', juniorSecretary: 'कनिष्ठ सचिव<br>विजयवाड़ा', juniorGeneralSecretary: 'कनिष्ठ महासचिव<br>विजयवाड़ा', jackSecretary: 'जैक एंड जिल स्कूल सचिव<br>विजयवाड़ा', eworldSecretary: 'ई-वर्ल्ड सचिव<br>विजयवाड़ा', canteenSecretary: 'सचिव - कैंटीन और करियर वर्ल्ड<br>विजयवाड़ा', culturalSecretary: 'सांस्कृतिक सचिव<br>विजयवाड़ा', culturalMember: 'सांस्कृतिक सदस्य<br>विजयवाड़ा' },
      organisations: { heading: 'हमारे संगठन', viewAll: 'सभी संगठनों को देखें', items: [ { title: 'Vijayawada Division', desc: 'विजयवाड़ा डिवीजन में ट्रेन संचालन और अवसंरचना का प्रबंधन।' }, { title: 'Visakhapatnam Division', desc: 'विशाखापत्तनम डिवीजन में ट्रेन संचालन और अवसंरचना का प्रबंधन।' }, { title: 'Guntur Division', desc: 'गुंटूर डिवीजन में ट्रेन संचालन और अवसंरचना का प्रबंधन।' }, { title: 'Guntakal Division', desc: 'गुंतकल डिवीजन में ट्रेन संचालन और अवसंरचना का प्रबंधन।' } ] },
      initiatives: { heading: 'हमारी प्रमुख पहलों', jack: { title: 'जैक एंड जिल स्कूल्स', subtitle: 'ज्ञान, आत्मविश्वास और उज्जवल भविष्य के साथ बच्चों का आकार देना।' }, eworld: { title: 'ई-वर्ल्ड', subtitle: 'डिजिटल लर्निंग और नवाचार की दुनिया से युवा प्रतिभाओं को जोड़ना।' }, asha: { title: 'आशा किरण', subtitle: 'विशेष आवश्यकताओं वाले हर बच्चे के लिए आशा, देखभाल और मुस्कान लाना।' }, career: { title: 'करियर वर्ल्ड', subtitle: 'आरआरबी, बैंकिंग, एसएससी, ईसीईटी और अन्य प्रतियोगी परीक्षाओं के लिए छात्रों को तैयार करना।' } },
      events: { latest: 'नवीनतम घटनाएँ', announcements: 'महत्वपूर्ण घोषणाएँ', items: [ 'गर्मी मौसम 2024 के लिए विशेष ट्रेन्स की घोषणा', 'साउथ कोस्ट रेलवे ने नया पैसेंजर ऐप लॉन्च किया', 'कोस्ट जंक्शन स्टेशन का उन्नयन पूरा हुआ' ], announcementsList: [ 'क्षेत्र में भारी बारिश के कारण यात्रियों के लिए यात्रा सलाह', '25 मई से कोस्ट - बेलापुर के बीच पटरियों पर रखरखाव कार्य', 'यात्रा करते समय कृपया वैध आईडी प्रमाण साथ रखें' ] },
      footer: { quickLinks: 'त्वरित लिंक', app: 'साउथ कोस्ट रेलवे ऐप', followUs: 'हमें फॉलो करें', followSubtitle: 'सोशल मीडिया पर हमारे साथ जुड़े रहें।', newsletter: 'समाचार-पत्र', copyright: '© 2024 साउथ कोस्ट रेलवे। सर्वाधिकार सुरक्षित।', links: { tenders: 'निविदाएँ', careers: 'करियर', rti: 'सूचना का अधिकार', grievance: 'शिकायत निवारण', policies: 'नीतियाँ', charter: 'नागरिक चार्टर' }, legal: { privacy: 'गोपनीयता नीति', terms: 'नियम और शर्तें', accessibility: 'पहुँच योग्यता' }, brandName: 'साउथ कोस्ट रेलवे', brandDesc: 'राष्ट्र को सुरक्षित, विश्वसनीय, कुशल और किफायती रेल परिवहन सेवाएं प्रदान करने के लिए प्रतिबद्ध।', about: 'हमारे बारे में', information: 'जानकारी', help: 'सहायता और समर्थन' },
      footerExtra: { madeWith: 'बेहतर यात्रा के लिए ❤️ के साथ निर्मित' },
      appPromo: { description: 'आपकी यात्रा, आपके हाथ में।', pnr: 'PNR स्थिति', book: 'टिकट बुक करें', station: 'स्टेशन जानकारी', scan: 'स्कैन करके डाउनलोड करें' },
      stats: { dailyTrains: 'दैनिक ट्रेन्स', stations: 'स्टेशन्स', happy: 'खुश यात्री', safety: 'सुरक्षा प्रतिबद्धता' },
      forms: { newsletterPlaceholder: 'अपना ईमेल दर्ज करें', searchPlaceholder: 'सेवाओं, जानकारी के लिए खोजें...' },
      common: { english: 'English', hindi: 'हिन्दी', viewAll: 'सभी देखें' }
    }
  };

  function getNested(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getNested(dict, key);
      if (!val) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    });

    // update language label in header
    const label = document.querySelector('.lang-label');
    if (label) label.textContent = lang === 'en' ? dict.common.english : dict.common.hindi;
  }

  function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    applyTranslations(lang);
    try { localStorage.setItem('site_lang', lang); } catch (e) {}
  }

  function buildLangMenu() {
    const btn = document.querySelector('.btn-lang');
    if (!btn) return;
    const menu = document.createElement('div');
    menu.className = 'dropdown-list';
    menu.style.display = 'none';
    menu.style.right = '0';
    menu.style.left = 'auto';

    const enOpt = document.createElement('a');
    enOpt.href = '#';
    enOpt.textContent = translations.en.common.english;
    enOpt.addEventListener('click', e => { e.preventDefault(); setLanguage('en'); menu.style.display = 'none'; });

    const hiOpt = document.createElement('a');
    hiOpt.href = '#';
    hiOpt.textContent = translations.hi.common.hindi;
    hiOpt.addEventListener('click', e => { e.preventDefault(); setLanguage('hi'); menu.style.display = 'none'; });

    menu.appendChild(enOpt);
    menu.appendChild(hiOpt);
    btn.parentElement.style.position = 'relative';
    btn.parentElement.appendChild(menu);

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', () => { menu.style.display = 'none'; });
  }

  document.addEventListener('DOMContentLoaded', () => {
    buildLangMenu();
    let lang = 'en';
    try { const stored = localStorage.getItem('site_lang'); if (stored) lang = stored; } catch (e) {}
    setLanguage(lang);
  });

  window.__setSiteLanguage = setLanguage;
})();
