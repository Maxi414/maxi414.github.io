/* ═══════════════════════════════════════════════════════════
   PORTFOLIO · Máximo Bonarrico · main.js

   Todo el contenido está en los bloques de DATOS de abajo.
   Los textos van en pares { es: '...', en: '...' }.
   Fechas en formato 'AAAA-MM' (o 'AAAA-MM/AAAA-MM' para rangos);
   se formatean solas según el idioma.
═══════════════════════════════════════════════════════════ */

document.documentElement.classList.add('js');

/* ═══ DATOS ════════════════════════════════════════════════ */

/* ─── Textos fijos de la página (atributos data-i18n) ─────── */
const STRINGS = {
  es: {
    docTitle:     'Máximo Bonarrico | Analista SOC Trainee · Blue Team · Cloud Security',
    metaDesc:     'Portfolio de Máximo Bonarrico: estudiante de Gestión de TI (UADE) enfocado en SOC, Blue Team y Cloud Security. Labs documentados de Wazuh SIEM, hardening de Linux, AWS con Terraform y phishing simulation.',
    skip:         'Saltar a los labs',
    navLabel:     'Navegación principal',
    photoAlt:     'Foto de Máximo Bonarrico',
    status:       'DISPONIBLE',
    role:         'Analista SOC Trainee',
    pitch:        'Estudiante de Gestión de TI en el último cuatrimestre. Armo labs de detección, hardening y seguridad en AWS, y los documento de punta a punta en GitHub.',
    ctaLabs:      'Ver labs',
    ctaCv:        'Descargar CV',
    ctaEmail:     'Enviar email',
    labsLabel:    'Laboratorios',
    labsTitle:    'Labs documentados',
    labsCount:    'reportes en GitHub',
    aboutLabel:   'Sobre mí',
    aboutTitle:   'Perfil técnico',
    eduLabel:     'Formación',
    eduTitle:     'Academia y certificaciones',
    eduAcademic:  'Formación académica',
    eduProjects:  'Proyectos académicos',
    eduCerts:     'Certificaciones',
    contactTitle: 'Hablemos',
    contactSub:   'Busco mi primera oportunidad como Analista SOC / Blue Team trainee, y estoy abierto a roles junior en cloud security e infraestructura. Buenos Aires, Argentina.',
    footer:       'HTML, CSS & Vanilla JS · sin trackers ni dependencias',
    /* usados solo desde JS */
    completed:    'COMPLETADO',
    featured:     'DESTACADO',
    highlights:   'Lo más importante',
    viewRepo:     'Ver reporte en GitHub',
    present:      'actualidad',
    subjects:     'materias aprobadas',
    lastTerm:     'último cuatrimestre',
  },
  en: {
    docTitle:     'Máximo Bonarrico | SOC Analyst Trainee · Blue Team · Cloud Security',
    metaDesc:     'Portfolio of Máximo Bonarrico: IT Management student (UADE) focused on SOC, Blue Team and Cloud Security. Documented labs on Wazuh SIEM, Linux hardening, AWS with Terraform and phishing simulation.',
    skip:         'Skip to labs',
    navLabel:     'Main navigation',
    photoAlt:     'Photo of Máximo Bonarrico',
    status:       'OPEN TO WORK',
    role:         'SOC Analyst Trainee',
    pitch:        'IT Management student in my final semester. I build detection, hardening and AWS security labs, and document them end to end on GitHub.',
    ctaLabs:      'View labs',
    ctaCv:        'Download CV (ES)',
    ctaEmail:     'Send email',
    labsLabel:    'Labs',
    labsTitle:    'Documented labs',
    labsCount:    'reports on GitHub',
    aboutLabel:   'About',
    aboutTitle:   'Technical profile',
    eduLabel:     'Education',
    eduTitle:     'Academics & certifications',
    eduAcademic:  'Academic background',
    eduProjects:  'Academic projects',
    eduCerts:     'Certifications',
    contactTitle: 'Get in touch',
    contactSub:   "I'm looking for my first role as a SOC / Blue Team analyst trainee, and I'm open to junior roles in cloud security and infrastructure. Based in Buenos Aires, Argentina.",
    footer:       'HTML, CSS & Vanilla JS · no trackers, no dependencies',
    completed:    'COMPLETED',
    featured:     'FEATURED',
    highlights:   'Key results',
    viewRepo:     'View report on GitHub',
    present:      'present',
    subjects:     'courses passed',
    lastTerm:     'final semester',
  },
};

/* ─── LABS (el primero con featured:true va arriba a lo ancho) ─ */
const LABS = [
  {
    id: 'LAB-004', featured: true, date: '2026-07',
    url: 'https://github.com/Maxi414/wazuh-siem-detection-lab',
    title: { es: 'SIEM y detección de amenazas: Wazuh', en: 'SIEM & Threat Detection: Wazuh' },
    desc: {
      es: 'SIEM Wazuh sobre Docker monitoreando endpoints Linux y Windows en tiempo real. Ataques lanzados desde Kali, cada detección validada y mapeada a MITRE ATT&CK.',
      en: 'Wazuh SIEM on Docker monitoring Linux and Windows endpoints in real time. Attacks launched from Kali, every detection validated and mapped to MITRE ATT&CK.',
    },
    highlights: {
      es: [
        'Sysmon integrado para telemetría avanzada de los endpoints Windows.',
        'Ataques simulados: fuerza bruta SSH (Hydra), abuso de PowerShell y alteración de archivos detectada por FIM.',
        'Regla de correlación propia (fuerza bruta seguida de login exitoso), depurada con wazuh-logtest hasta dejarla operativa.',
      ],
      en: [
        'Sysmon integrated for deep telemetry on the Windows endpoints.',
        'Simulated attacks: SSH brute force (Hydra), PowerShell abuse and file tampering caught by FIM.',
        'Custom correlation rule (brute force followed by a successful login), debugged with wazuh-logtest until it fired reliably.',
      ],
    },
    tags: ['Wazuh', 'Sysmon', 'MITRE ATT&CK', 'Docker', 'FIM', 'Hydra'],
  },
  {
    id: 'LAB-005', date: '2026-07',
    url: 'https://github.com/Maxi414/gophish-phishing-simulation-lab',
    title: { es: 'Simulación de phishing: GoPhish', en: 'Phishing Simulation: GoPhish' },
    desc: {
      es: 'Campaña de punta a punta contra una organización ficticia: GoPhish detrás de un reverse proxy Nginx con TLS, OSINT pasivo con theHarvester y landing de captura de credenciales. Cierra con mitigaciones blue team (MFA, SPF/DKIM/DMARC).',
      en: 'End-to-end campaign against a fictional organization: GoPhish behind an Nginx reverse proxy with TLS, passive OSINT with theHarvester and a credential-harvesting landing page. Wraps up with blue-team mitigations (MFA, SPF/DKIM/DMARC).',
    },
    tags: ['GoPhish', 'Nginx', 'OSINT', 'theHarvester', 'DMARC'],
  },
  {
    id: 'LAB-003', date: '2026-06',
    url: 'https://github.com/Maxi414/aws-iam-s3-cloudtrail-hardening',
    title: { es: 'Cloud Security: AWS IAM, S3 y CloudTrail', en: 'Cloud Security: AWS IAM, S3 & CloudTrail' },
    desc: {
      es: 'Cuenta AWS endurecida 100% como código con Terraform: least privilege, MFA obligatorio y logging multi-región. Cada control validado por CLI y con ataques simulados, y Checkov corriendo en GitHub Actions.',
      en: 'AWS account hardened 100% as code with Terraform: least privilege, enforced MFA and multi-region logging. Every control validated via CLI and simulated attacks, with Checkov running in GitHub Actions.',
    },
    tags: ['AWS', 'Terraform', 'IAM', 'S3', 'CloudTrail', 'Checkov'],
  },
  {
    id: 'LAB-002', date: '2026-05/2026-06',
    url: 'https://github.com/Maxi414/linux-hardening-lab',
    title: { es: 'Linux Hardening: OS Bunker', en: 'Linux Hardening: OS Bunker' },
    desc: {
      es: 'Ubuntu Server endurecido con controles alineados a CIS (SSH, firewall UFW, auditd, AIDE, kernel), midiendo el impacto con Lynis y documentando cada verificación.',
      en: 'Ubuntu Server hardened with CIS-aligned controls (SSH, UFW firewall, auditd, AIDE, kernel), measuring the impact with Lynis and documenting every check.',
    },
    tags: ['Linux', 'CIS Benchmark', 'UFW', 'auditd', 'AIDE', 'Lynis'],
  },
  {
    id: 'LAB-001', date: '2026-05',
    url: 'https://github.com/Maxi414/network-audit-lab',
    title: { es: 'Network Audit Lab', en: 'Network Audit Lab' },
    desc: {
      es: 'Evaluación de vulnerabilidades sobre Metasploitable 2 en un entorno aislado de VirtualBox, con Nmap y Nessus desde Kali. Hallazgos clasificados por criticidad y su remediación.',
      en: 'Vulnerability assessment of Metasploitable 2 in an isolated VirtualBox environment, using Nmap and Nessus from Kali. Findings ranked by severity, with remediation steps.',
    },
    tags: ['Nmap', 'Nessus', 'Kali Linux', 'Vuln. assessment'],
  },
];

/* ─── PRÓXIMOS PASOS ──────────────────────────────────────── */
const ROADMAP = [
  { name: 'Incident Response Lab',        state: { es: 'próximo lab',    en: 'next lab' } },
  { name: 'AWS VPC Security Lab',         state: { es: 'próximo lab',    en: 'next lab' } },
  { name: 'CompTIA Security+ (SY0-701)',  state: { es: 'en preparación', en: 'studying' } },
];

/* ─── BIO (se muestra como JSON) ──────────────────────────── */
const BIO = {
  es: [
    ['nombre',     'Máximo Bonarrico'],
    ['rol',        'Analista SOC Trainee'],
    ['base',       'Buenos Aires, AR'],
    ['foco',       ['Detección & SIEM', 'Respuesta a incidentes', 'Cloud Security (AWS)']],
    ['idiomas',    ['Español (nativo)', 'Inglés (B2, camino a C1)']],
    ['sobre_mi',   'Armo labs de seguridad y los documento de punta a punta: setup, metodología, evidencia, hallazgos y también lo que no salió a la primera.'],
    ['disponible', true],
  ],
  en: [
    ['name',       'Máximo Bonarrico'],
    ['role',       'SOC Analyst Trainee'],
    ['based_in',   'Buenos Aires, AR'],
    ['focus',      ['Detection & SIEM', 'Incident response', 'Cloud Security (AWS)']],
    ['languages',  ['Spanish (native)', 'English (B2, working toward C1)']],
    ['about',      "I build security labs and document them end to end: setup, methodology, evidence, findings, and also what didn't work the first time."],
    ['available',  true],
  ],
};

/* ─── STATUS LOG ──────────────────────────────────────────── */
const STATUS_LOG = [
  { ok: true,  es: `${LABS.length} labs publicados en GitHub`,          en: `${LABS.length} labs published on GitHub` },
  { ok: true,  es: 'Google Cybersecurity · Cisco CCNAv7 ITN',           en: 'Google Cybersecurity · Cisco CCNAv7 ITN' },
  { ok: true,  es: 'Cambridge B2 First',                                en: 'Cambridge B2 First' },
  { ok: false, es: 'CompTIA Security+ (SY0-701) en preparación',        en: 'CompTIA Security+ (SY0-701) in progress' },
  { ok: false, es: 'Último cuatrimestre de la carrera',                 en: 'Final semester of my degree' },
];

/* ─── SKILLS ──────────────────────────────────────────────── */
const SKILL_CATEGORIES = [
  { label: { es: 'Detección & Respuesta', en: 'Detection & Response' }, items: [
    { name: 'Wazuh (SIEM)',                                  icon: 'siem' },
    { name: 'MITRE ATT&CK',                                  icon: 'mitre' },
    { name: 'Sysmon',                                        icon: 'sysmon' },
    { name: { es: 'Análisis de logs', en: 'Log analysis' },  icon: 'log' },
    { name: { es: 'FIM (integridad)', en: 'File integrity (FIM)' }, icon: 'fim' },
    { name: 'Wireshark',                                     icon: 'wireshark' },
  ]},
  { label: { es: 'Hardening & Vulnerabilidades', en: 'Hardening & Vuln. Management' }, items: [
    { name: 'Hardening (CIS)', icon: 'security' },
    { name: 'Lynis',           icon: 'lynis' },
    { name: 'Nessus',          icon: 'nessus' },
    { name: 'Nmap',            icon: 'nmap' },
  ]},
  { label: { es: 'Cloud & IaC', en: 'Cloud & IaC' }, items: [
    { name: 'AWS',            icon: 'aws' },
    { name: 'AWS IAM',        icon: 'iam' },
    { name: 'CloudTrail',     icon: 'cloudtrail' },
    { name: 'Terraform',      icon: 'terraform' },
    { name: 'Checkov',        icon: 'checkov' },
    { name: 'GitHub Actions', icon: 'gha' },
  ]},
  { label: { es: 'Sistemas & Redes', en: 'Systems & Networks' }, items: [
    { name: 'Linux',                                       icon: 'linux' },
    { name: { es: 'Redes TCP/IP', en: 'TCP/IP networking' }, icon: 'network' },
    { name: 'Cisco (CCNAv7)',                              icon: 'cisco' },
    { name: 'Docker',                                      icon: 'docker' },
    { name: 'Nginx',                                       icon: 'nginx' },
    { name: 'VirtualBox',                                  icon: 'vbox' },
  ]},
  { label: { es: 'Testing ofensivo', en: 'Offensive testing' },
    note:  { es: 'para defender mejor', en: 'to defend better' }, items: [
    { name: 'Kali Linux',                 icon: 'kali' },
    { name: 'Hydra',                      icon: 'hydra' },
    { name: 'GoPhish',                    icon: 'phish' },
    { name: 'OSINT (theHarvester)',       icon: 'osint' },
  ]},
  { label: { es: 'Scripting & Datos', en: 'Scripting & Data' }, items: [
    { name: 'Python',     icon: 'python' },
    { name: 'Bash',       icon: 'bash' },
    { name: 'PowerShell', icon: 'powershell' },
    { name: 'Git',        icon: 'git' },
    { name: 'SQL',        icon: 'sql' },
    { name: 'NoSQL',      icon: 'mongo' },
  ]},
];

/* ─── CARRERA ─────────────────────────────────────────────── */
const DEGREE = {
  title: { es: 'Lic. en Gestión de Tecnología de la Información', en: "Bachelor's in Information Technology Management" },
  org:   'Universidad Argentina de la Empresa (UADE)',
  date:  '2023-03/',            /* rango abierto = "actualidad" */
  passed: 34, total: 41,        /* actualizar cuando apruebes materias */
  subjects: {
    es: ['Seguridad Informática', 'Redes de Datos', 'Sistemas Operativos', 'Testing'],
    en: ['Information Security', 'Data Networks', 'Operating Systems', 'Software Testing'],
  },
};

const PROJECTS = [
  {
    date: '2025-08/2025-12',
    title: { es: 'Proyecto Rumbo: Cloud Security & QA', en: 'Project Rumbo: Cloud Security & QA' },
    org:   { es: 'UADE · equipo Scrum', en: 'UADE · Scrum team' },
    desc: {
      es: 'Arquitectura segura en AWS con validación de identidad (RENAPER + biometría) para frenar el fraude en el registro. Lideré QA y el MVP llegó a 96,8% de estabilidad.',
      en: 'Secure AWS architecture with identity verification (national registry + biometrics) to stop sign-up fraud. I led QA and the MVP reached 96.8% stability.',
    },
  },
  {
    date: '2025-05/2025-07',
    title: { es: 'Pentesting de una app cliente-servidor', en: 'Pentest of a client-server app' },
    org:   { es: 'UADE · investigación', en: 'UADE · research' },
    desc: {
      es: 'Pruebas Black Box sobre Argentum Online: vulnerabilidades lógicas y de memoria, scripts en Python para inyección de paquetes y recomendaciones de mitigación.',
      en: 'Black-box testing of Argentum Online: logic and memory flaws, Python packet-injection scripts and mitigation recommendations.',
    },
  },
];

/* ─── CERTIFICACIONES (wip:true = en curso) ───────────────── */
const CERTS = [
  { logo: 'G', date: '2024-02',
    name: 'Google Cybersecurity Professional Certificate',
    org:  'Google · Coursera',
    desc: { es: '8 cursos: redes, Linux y SQL, gestión de riesgo, SIEM y detección, respuesta a incidentes y Python para automatización.',
            en: '8 courses: networking, Linux and SQL, risk management, SIEM and detection, incident response and Python automation.' } },
  { logo: 'CISCO', date: '2024-11',
    name: 'Introduction to Networks (CCNAv7)',
    org:  'Cisco Networking Academy',
    desc: { es: 'Primer curso del itinerario CCNA: modelo OSI/TCP-IP, direccionamiento IPv4/IPv6, switching y configuración básica en Cisco IOS.',
            en: 'First course of the CCNA track: OSI/TCP-IP model, IPv4/IPv6 addressing, switching and basic Cisco IOS configuration.' } },
  { logo: 'PY', date: '2024-02/2024-03',
    name: 'Python Essentials 1 & 2',
    org:  'Cisco Networking Academy',
    desc: { es: 'Fundamentos de Python, módulos, excepciones, manejo de archivos y programación orientada a objetos.',
            en: 'Python fundamentals, modules, exceptions, file handling and object-oriented programming.' } },
  { logo: 'B2', date: '2023-02',
    name: 'B2 First (FCE)',
    org:  'University of Cambridge',
    desc: { es: 'Inglés nivel B2 (upper-intermediate). Hoy estudiando para C1.',
            en: 'English at B2 level (upper-intermediate). Currently working toward C1.' } },
  { logo: 'Sec+', wip: true,
    name: 'CompTIA Security+',
    org:  { es: 'SY0-701 · en preparación', en: 'SY0-701 · in progress' },
    desc: { es: 'Operaciones de seguridad, gestión de riesgo, arquitectura y respuesta a incidentes.',
            en: 'Security operations, risk management, architecture and incident response.' } },
];

/* ─── ICONOS SVG (inline) ─────────────────────────────────── */
const ICONS = {
  linux:      `<svg viewBox="0 0 24 24" fill="#f5c518"><path d="M12.5 0c-.2 0-.3 0-.5 0C8 .4 8.9 4.8 8.8 6.3c-.1 1.1-.3 2-1 3-.9 1-2.1 2.7-2.7 4.5-.3.8-.4 1.7-.3 2.5 0 0-.1.1-.1.1-.3.3-.4.6-.7.8-.2.2-.5.3-.8.4-.3.1-.7.3-.9.7-.1.2-.1.4-.1.6 0 .2 0 .4.1.5.1.4.1.7 0 1-.2.7-.3 1.1-.1 1.5.2.3.5.5.9.6.6.2 1.1.6 1.3 1.1.2.5.3 1.1.2 1.8-.1.7-.2 1.3-.2 2 0 .1 0 .2 0 .3.1.7.6 1.1 1.1 1.2.5.1 1 0 1.3-.1.7-.3 1.3-.6 1.8-.6h.2c.1 0 .2 0 .4 0 .6.1 1 .5 1.2 1s.3 1.1.4 1.8c.1 1.2.1 2.4.4 3.3.3.9.9 1.4 1.9 1.4.2 0 .5 0 .7-.1.7-.2 1.2-.5 1.5-.9.3-.4.4-.9.5-1.4.1-1-.1-2.1-.1-3.1 0-.4 0-.7.1-1.1.2-.6.5-1.1.8-1.4.4-.4.8-.6 1.3-.6h.2c.6 0 1.2.2 1.9.5.7.3 1.3.7 1.8 1.1.4.2.7.4 1 .6.3.1.5.2.8.2.2 0 .4-.1.6-.3.2-.2.3-.4.4-.6.1-.3.2-.6.2-.9.1-.5.1-1.1-.1-1.7-.1-.6-.5-1.1-1-1.5-.5-.4-1.3-.6-2.2-.7h-.1c-.5 0-1 .1-1.4.2-.4.1-.8.1-1.2.1-.4 0-.7 0-1-.1-.6-.2-1-.5-1.2-1-.2-.4-.2-1 0-1.5.1-.6.4-1.1.7-1.6.3-.5.6-.8.9-1.1.5-.6.8-.9.8-1.6v-.1c0-.5-.2-.9-.4-1.3-.2-.3-.6-.6-.9-.7-.4-.2-.7-.3-1.1-.3-.3 0-.7 0-1 .1z"/></svg>`,
  cisco:      `<svg viewBox="0 0 24 24" fill="#1ba0d7"><path d="M2 13h2v4H2v-4zm4-4h2v8H6V9zm4-5h2v13h-2V4zm4 5h2v8h-2V9zm4 4h2v4h-2v-4zM2 19h20v2H2v-2z"/></svg>`,
  network:    `<svg viewBox="0 0 24 24" fill="#3febff"><path d="M10 2h4v4h-1v3h6v3h1v4h-4v-4h1v-1h-4v1h1v4h-4v-4h1v-1H7v1h1v4H4v-4h1V9h6V6h-1V2z"/></svg>`,
  docker:     `<svg viewBox="0 0 24 24" fill="#2496ed"><path d="M22 11c-.4-.3-1.4-.4-2.2-.2-.1-.7-.5-1.4-1.1-1.9l-.3-.2-.2.3c-.3.5-.4 1.2-.3 1.8.1.4.2.7.5 1-.2.1-.6.3-1.1.3H1.6c-.3 1.6.1 3.4 1.2 4.7 1.2 1.3 2.9 2 5.2 2 5 0 8.7-2.3 10.5-6.5.7 0 2.2 0 3-1.5.1-.1.3-.4.4-.8l.1-.3-.3-.2zM6.3 7h-2v2h2V7zm2.7 0H7v2h2V7zm2.7 0h-2v2h2V7zm2.7 0h-2v2h2V7zM6.3 4.4h-2v2h2v-2zm2.7 0H7v2h2v-2zm2.7 0h-2v2h2v-2z"/></svg>`,
  vbox:       `<svg viewBox="0 0 24 24" fill="#3a7fc4"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7 3.5-7 3.5-7-3.5 7-3.5zM4 9.2l7 3.5v7L4 16.2V9.2zm16 0v7l-7 3.5v-7l7-3.5z"/></svg>`,
  nmap:       `<svg viewBox="0 0 24 24" fill="#1fd987"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3a7 7 0 110 14 7 7 0 010-14zm0 3a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"/></svg>`,
  nessus:     `<svg viewBox="0 0 24 24" fill="#00bcbc"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1 6h2v6h-2V7zm0 8h2v2h-2v-2z"/></svg>`,
  wireshark:  `<svg viewBox="0 0 24 24" fill="#3a9bd4"><path d="M2 11h4l2-6 4 12 3-9 2 3h5v2h-6l-2-3-3 9-4-12-2 6H2z"/></svg>`,
  siem:       `<svg viewBox="0 0 24 24" fill="#ffce4d"><path d="M12 1L3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5l-9-4zm0 4l6 2.7V11c0 3.8-2.6 7.4-6 8.9C8.6 18.4 6 14.8 6 11V7.7L12 5zm-1 3v4h2V8h-2zm0 6v2h2v-2h-2z"/></svg>`,
  security:   `<svg viewBox="0 0 24 24" fill="#ff5773"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 15l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z"/></svg>`,
  aws:        `<svg viewBox="0 0 24 24" fill="#ff9900"><path d="M6.8 10c0 .3 0 .5.1.7.1.2.1.4.3.6 0 .1.1.1.1.2 0 .1 0 .2-.2.2l-.5.3h-.2c-.1 0-.2 0-.2-.1l-.3-.4-.2-.5c-.6.7-1.4 1.1-2.3 1.1-.7 0-1.2-.2-1.6-.6-.4-.4-.6-.9-.6-1.5 0-.7.2-1.2.7-1.6.5-.4 1.1-.6 2-.6.3 0 .6 0 .8.1.3 0 .6.1.9.2v-.6c0-.6-.1-1-.4-1.3-.3-.2-.7-.4-1.3-.4-.3 0-.6 0-.9.1-.3.1-.6.2-.9.3h-.3c-.1 0-.2-.1-.2-.2v-.4c0-.1 0-.2.1-.3.1-.1.1-.1.2-.2.3-.1.6-.3 1-.4.4-.1.8-.1 1.2-.1 1 0 1.6.2 2.1.6.4.4.7 1.1.7 2v2.6zm-3.2 1.2c.3 0 .5 0 .8-.1.3-.1.5-.3.8-.5.1-.2.2-.3.3-.5 0-.2.1-.4.1-.7v-.3c-.2 0-.5-.1-.7-.1-.3 0-.5 0-.8 0-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.9 0 .4.1.7.3.8.2.2.5.3.8.3zm6.4.9c-.1 0-.2 0-.3-.1-.1 0-.1-.2-.2-.3L7.6 5.5c0-.1-.1-.2-.1-.3 0-.1.1-.2.2-.2h.8c.2 0 .3 0 .3.1.1 0 .1.2.2.3l1.3 5.3 1.2-5.3c0-.2.1-.3.2-.3.1 0 .2-.1.3-.1h.6c.2 0 .3 0 .3.1.1 0 .1.2.2.3l1.3 5.3 1.4-5.3c0-.2.1-.3.2-.3.1 0 .2-.1.3-.1h.7c.1 0 .2.1.2.2v.1l-.1.2-1.9 6.2c0 .2-.1.3-.2.3-.1 0-.2.1-.3.1h-.7c-.2 0-.3 0-.3-.1-.1-.1-.1-.2-.2-.3l-1.2-5.2-1.2 5.1c0 .2-.1.3-.2.3-.1.1-.2.1-.3.1zm10.3.2c-.4 0-.8 0-1.2-.1-.4-.1-.7-.2-.9-.3-.1-.1-.2-.2-.2-.2v-.5c0-.2.1-.2.2-.2h.1l.2.1c.3.1.6.2.9.3.3.1.6.1 1 .1.5 0 .9-.1 1.2-.3.3-.2.4-.4.4-.8 0-.2-.1-.4-.2-.6-.1-.2-.4-.3-.8-.4l-1.2-.4c-.6-.2-1-.5-1.3-.8-.3-.3-.4-.7-.4-1.2 0-.3.1-.6.2-.9.1-.3.3-.5.6-.7.2-.2.5-.3.8-.4.3-.1.7-.1 1-.1.2 0 .4 0 .5 0 .2 0 .4.1.5.1.2 0 .3.1.5.1.1 0 .3.1.3.1.1.1.2.1.2.2.1.1.1.2.1.3v.4c0 .2-.1.3-.2.3-.1 0-.2 0-.3-.1-.5-.2-1-.3-1.5-.3-.5 0-.8.1-1.1.2-.2.2-.4.4-.4.7 0 .2.1.4.2.6.2.2.5.3.9.4l1.1.4c.6.2 1 .4 1.2.8.2.3.4.7.4 1.1 0 .3-.1.7-.2.9-.1.3-.3.5-.6.7-.2.2-.5.3-.9.4-.4.1-.7.2-1.1.2zM21.7 16.2c-2.6 1.9-6.4 3-9.7 3-4.6 0-8.7-1.7-11.9-4.5-.2-.2 0-.5.3-.4 3.4 2 7.6 3.2 11.9 3.2 2.9 0 6.1-.6 9.1-1.9.4-.2.8.3.3.6zM22.8 15c-.3-.4-2.2-.2-3.1-.1-.3 0-.3-.2-.1-.4 1.5-1.1 4-.8 4.3-.4.3.4-.1 2.8-1.5 4-.2.2-.4.1-.3-.2.3-.8 1-2.6.7-2.9z"/></svg>`,
  iam:        `<svg viewBox="0 0 24 24" fill="#dd344c"><path d="M12 1a5 5 0 00-5 5v3H5v12h14V9h-2V6a5 5 0 00-5-5zm0 2a3 3 0 013 3v3H9V6a3 3 0 013-3zm0 9a2 2 0 011 3.7V18h-2v-2.3A2 2 0 0112 12z"/></svg>`,
  cloudtrail: `<svg viewBox="0 0 24 24" fill="#e7157b" fill-rule="evenodd"><path d="M6.5 20A5 5 0 016 10.03 6.5 6.5 0 0118.4 8.6 5.7 5.7 0 0118 20H6.5zM8 13v1.6h8V13H8zm0 3v1.6h5V16H8z"/></svg>`,
  terraform:  `<svg viewBox="0 0 24 24" fill="#7b42bc"><path d="M8.6 4.9v5.2l4.5 2.6V7.5L8.6 4.9zM13.7 7.5v5.2l4.5-2.6V4.9l-4.5 2.6zM3.5 2v5.2L8 9.8V4.6L3.5 2zM8.6 16.7l4.5 2.6V14L8.6 11.5v5.2z"/></svg>`,
  checkov:    `<svg viewBox="0 0 24 24" fill="#8a63d2"><path d="M9 2h6v1h1a2 2 0 012 2v15a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2h1V2zm0 3v1h6V5H9zm-.4 4.6L7.2 11l2 2 3.5-3.5-1.4-1.4-2.1 2.1-.6-.6zm0 5L7.2 16l2 2 3.5-3.5-1.4-1.4-2.1 2.1-.6-.6z"/></svg>`,
  gha:        `<svg viewBox="0 0 24 24" fill="#2f8cff" fill-rule="evenodd"><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm-2 6v8l6-4-6-4z"/></svg>`,
  python:     `<svg viewBox="0 0 24 24"><path fill="#3776ab" d="M11.9 0C5.8 0 6.2 2.7 6.2 2.7v2.7h5.8v.8H3.9S0 5.8 0 12s3.4 6 3.4 6h2V15s-.1-3.4 3.4-3.4h5.8s3.2.1 3.2-3.1V3.2S18.3 0 11.9 0zM8.7 1.8a1 1 0 110 2.1 1 1 0 010-2.1z"/><path fill="#ffd43b" d="M12.1 24c6.1 0 5.7-2.7 5.7-2.7v-2.7h-5.8v-.8h8.1S24 18.2 24 12s-3.4-6-3.4-6h-2V9s.1 3.4-3.4 3.4H9.5s-3.2-.1-3.2 3.1v5.3S5.7 24 12.1 24zm3.2-1.8a1 1 0 110-2.1 1 1 0 010 2.1z"/></svg>`,
  bash:       `<svg viewBox="0 0 24 24" fill="#4eaa25"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 3l3 2-3 2v1.5l4.5-3v-1L7 6.5V8zm5 5h5v1.5h-5V13z"/></svg>`,
  powershell: `<svg viewBox="0 0 24 24" fill="#5391fe" fill-rule="evenodd"><path d="M5.5 3H23l-4.5 18H1L5.5 3zm2.3 4.3l-.9 1.2 4.4 3.5-6.1 4.4.9 1.2 7.5-5.5-5.8-4.8zM12 16.2v1.6h5.5v-1.6H12z"/></svg>`,
  git:        `<svg viewBox="0 0 24 24" fill="#f05032"><path d="M23.5 10.9L13.1.5c-.6-.6-1.6-.6-2.2 0L8.7 2.6l2.8 2.8c.6-.2 1.4-.1 1.9.4.5.5.7 1.3.4 1.9l2.7 2.7c.6-.2 1.4-.1 1.9.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.7-1.3-.4-2L12.9 9v6.5c.2.1.3.2.5.3.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.2-.2.4-.3.6-.4V8.8c-.2-.1-.4-.2-.6-.4-.5-.5-.7-1.3-.4-2L7.6 3.7.5 10.9c-.6.6-.6 1.6 0 2.2l10.5 10.5c.6.6 1.6.6 2.2 0l10.4-10.4c.6-.6.6-1.6 0-2.2"/></svg>`,
  sql:        `<svg viewBox="0 0 24 24" fill="#00a3c4"><path d="M12 3C7.6 3 4 4.8 4 7v10c0 2.2 3.6 4 8 4s8-1.8 8-4V7c0-2.2-3.6-4-8-4zm0 2c3.9 0 6 1.5 6 2s-2.1 2-6 2-6-1.5-6-2 2.1-2 6-2zm0 14c-3.9 0-6-1.5-6-2v-2.2C7.6 15.6 9.7 16 12 16s4.4-.4 6-1.2V17c0 .5-2.1 2-6 2zm0-4c-3.9 0-6-1.5-6-2v-2.2C7.6 11.6 9.7 12 12 12s4.4-.4 6-1.2V13c0 .5-2.1 2-6 2z"/></svg>`,
  mongo:      `<svg viewBox="0 0 24 24" fill="#47a248"><path d="M17.2 9.6c-1.3-5.6-4.3-7.4-4.6-8.1-.3-.4-.5-1-.7-1.4 0 .5-.1.7-.5 1.2-.7.6-4.4 3.7-4.7 10C6.4 17.2 11 20.7 11.6 21.1l.1.1c0 1 .1 1.9.3 2.8h.5c.1-1 .3-2.1.5-3.1.4-.3.6-.5.9-.7 1.6-1.4 2.6-3.4 3.6-5.5.5-1.1.5-2.4.5-3.4 0-.8-.1-1.7-.3-2.2zM12 17.7s0-8.3.3-8.3c.2 0 .5 10.7.5 10.7-.4 0-.8-1.8-.8-2.4z"/></svg>`,
  mitre:      `<svg viewBox="0 0 24 24" fill="#ff8fa3"><path d="M12 1a11 11 0 100 22 11 11 0 000-22zm0 3a8 8 0 110 16 8 8 0 010-16zm0 4a4 4 0 100 8 4 4 0 000-8zm0 3a1 1 0 110 2 1 1 0 010-2z"/></svg>`,
  log:        `<svg viewBox="0 0 24 24" fill="#8ab4ff"><path d="M6 2h9l5 5v15H6V2zm8 1.5V8h4.5L14 3.5zM8 11h8v1.5H8V11zm0 3h8v1.5H8V14zm0 3h5v1.5H8V17z"/></svg>`,
  fim:        `<svg viewBox="0 0 24 24" fill="#5bd6c0"><path d="M6 2h9l5 5v15H6V2zm8 1.5V8h4.5L14 3.5zM8.6 15.4l1.4-1.4 1.8 1.8 4.2-4.2 1.4 1.4-5.6 5.6-3.2-3.2z"/></svg>`,
  lynis:      `<svg viewBox="0 0 24 24" fill="#ffb347" fill-rule="evenodd"><path d="M3 4h12v2H3V4zm0 4h8v2H3V8zm0 4h5v2H3v-2zm12.5-2a4.5 4.5 0 013.7 7.1l2.7 2.7-1.4 1.4-2.7-2.7A4.5 4.5 0 1115.5 10zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/></svg>`,
  kali:       `<svg viewBox="0 0 24 24" fill="#3aa0e0" fill-rule="evenodd"><path d="M3 14c1.3-.3 2.2-1.3 2.8-2.5C6.6 9.8 8 8 10.4 8l-.8-2.4 2.3 1.4c.7-.2 1.4-.2 2.1-.1l-.6-2.5 2.1 2.2c1.7.5 3.1 1.8 3.8 3.8.5 1.5.5 3 .1 4.5-1-1-2.3-1.4-3.7-1.3.3.9.3 1.8-.2 2.7-.5-1-1.4-1.7-2.4-1.9.1 1-.2 1.9-.9 2.6-.2-1.1-1-1.9-2-2.4-1.8-.8-3.6-1-5.2-2.7 1 .3 2 .2 2.8-.2-1 .1-1.9 0-2.8-.3-.4-.1-.8-.4-1.2-.8zm5-3.2a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/></svg>`,
  sysmon:     `<svg viewBox="0 0 24 24" fill="#4c9ff0" fill-rule="evenodd"><path d="M3 3h18a1 1 0 011 1v13a1 1 0 01-1 1h-6v2h2.5v2H6.5v-2H9v-2H3a1 1 0 01-1-1V4a1 1 0 011-1zm9 4c-2.9 0-5.2 2.1-6 3.5C6.8 12 9.1 14 12 14s5.2-2 6-3.5C17.2 9.1 14.9 7 12 7zm0 1.8a1.7 1.7 0 110 3.4 1.7 1.7 0 010-3.4z"/></svg>`,
  hydra:      `<svg viewBox="0 0 24 24" fill="#ff6b5c"><path d="M7 9V7a5 5 0 019.8-1.4l-1.9.6A3 3 0 009 7v2h9a1 1 0 011 1v9a1 1 0 01-1 1H6a1 1 0 01-1-1v-9a1 1 0 011-1h1zm5.5 2l-3 4h2l-.7 3 3.2-4.3h-2l.5-2.7z"/></svg>`,
  phish:      `<svg viewBox="0 0 24 24" fill="none" stroke="#ff7a4d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="15" cy="4.5" r="1.5" fill="#ff7a4d" stroke="none"/><path d="M15 6.5v8a4 4 0 01-8 0"/><path d="M4.8 12.4 7 14.6l2.2-2.2"/></svg>`,
  osint:      `<svg viewBox="0 0 24 24" fill="#5bd6c0"><path d="M10 2a8 8 0 105.3 14l5.2 5.2 1.4-1.4-5.2-5.2A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12zm0 2.5A3.5 3.5 0 1010 13.5 3.5 3.5 0 0010 6.5zm0 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/></svg>`,
  nginx:      `<svg viewBox="0 0 24 24" fill="#3fae5a"><path d="M4 3h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm2 2.5v1h2v-1H6zm-2 8h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 011-1zm2 2.5v1h2v-1H6z"/></svg>`,
};

const GH_ICON = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.5c-2 .4-2.5-.5-2.7-.9-.1-.2-.5-.9-.8-1.1-.3-.2-.7-.5 0-.5.6 0 1.1.6 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3.7 0 1.4.1 2 .3 1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.5.7.5 1.5v2.2c0 .2.2.5.5.4A8 8 0 0016 8c0-4.4-3.6-8-8-8z"/></svg>`;


/* ═══ LÓGICA ═══════════════════════════════════════════════ */

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = id => document.getElementById(id);

/* escape de HTML: todo texto de datos pasa por acá antes de ir a innerHTML */
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* storage defensivo (puede fallar en modo privado) */
const store = {
  get(k)    { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* noop */ } },
};

/* ─── idioma ─────────────────────────────────────────────── */
function detectLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'es' || q === 'en') return q;
  const saved = store.get('lang');
  if (saved === 'es' || saved === 'en') return saved;
  return (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
}
let lang = detectLang();

const S = key => STRINGS[lang][key];
const t = v => (v && typeof v === 'object' && !Array.isArray(v) && ('es' in v || 'en' in v)) ? (v[lang] ?? v.es) : v;

const MONTHS = {
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};
function fmtMonth(ym) {
  const [y, m] = ym.split('-');
  return `${MONTHS[lang][+m - 1]} ${y}`;
}
function fmtDate(d) {
  if (!d) return '';
  const [a, b] = d.split('/');
  if (b === undefined) return fmtMonth(a);
  if (b === '') return `${fmtMonth(a)} – ${S('present')}`;
  const [ya] = a.split('-'), [yb, mb] = b.split('-');
  return ya === yb ? `${MONTHS[lang][+a.split('-')[1] - 1]}–${MONTHS[lang][+mb - 1]} ${yb}` : `${fmtMonth(a)} – ${fmtMonth(b)}`;
}

/* ─── textos estáticos ───────────────────────────────────── */
function applyStatic() {
  document.documentElement.lang = lang;
  document.title = S('docTitle');
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', S('metaDesc'));
  document.querySelectorAll('[data-i18n]').forEach(el => { const v = S(el.dataset.i18n); if (v != null) el.textContent = v; });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = S(el.dataset.i18nAlt); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', S(el.dataset.i18nAria)); });
  document.querySelectorAll('.lang-switch button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
}

/* ─── render: labs ───────────────────────────────────────── */
function renderLabs() {
  const grid = $('labsGrid');
  if (!grid) return;
  $('labCount').textContent = LABS.length;
  grid.innerHTML = LABS.map((lab, i) => {
    const tags = `<div class="card-tags">${lab.tags.map(x => `<span class="tag">${esc(x)}</span>`).join('')}</div>`;
    const main = `
        <h3 class="card-title">${esc(t(lab.title))}</h3>
        <p class="card-desc">${esc(t(lab.desc))}</p>
        ${tags}`;
    const body = lab.featured && lab.highlights
      ? `<div class="card-main">${main}</div>
         <div class="card-highlights">
           <p class="hl-title">${esc(S('highlights'))}</p>
           <ul>${t(lab.highlights).map(h => `<li>${esc(h)}</li>`).join('')}</ul>
         </div>`
      : main;
    return `
    <article class="card reveal${lab.featured ? ' is-featured' : ''}" data-d="${i * 70}">
      <div class="card-header">
        <span class="card-id">${esc(lab.id)}</span>
        ${lab.featured ? `<span class="card-flag">${esc(S('featured'))}</span>` : ''}
        <span class="card-status"><span class="status-dot" aria-hidden="true"></span>${esc(S('completed'))}</span>
      </div>
      <div class="card-body">${body}</div>
      <div class="card-footer">
        <span class="card-meta">${esc(fmtDate(lab.date))}</span>
        <a href="${esc(lab.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">${GH_ICON} ${esc(S('viewRepo'))}</a>
      </div>
    </article>`;
  }).join('');

  $('roadmapList').innerHTML = ROADMAP.map(r =>
    `<li><span class="rm-state">[${esc(t(r.state))}]</span>${esc(r.name)}</li>`).join('');
}

/* ─── render: bio.json ───────────────────────────────────── */
function jsonValue(v) {
  if (typeof v === 'boolean' || typeof v === 'number') return `<span class="t-val">${v}</span>`;
  if (Array.isArray(v)) return `<span class="t-punc">[</span>${v.map(x => `<span class="t-string">"${esc(x)}"</span>`).join('<span class="t-punc">, </span>')}<span class="t-punc">]</span>`;
  return `<span class="t-string">"${esc(v)}"</span>`;
}
function renderBio() {
  const el = $('bioJson');
  if (!el) return;
  const rows = BIO[lang];
  el.innerHTML = `<div class="json-brace">{</div>` + rows.map(([k, v], i) =>
    `<div class="json-row"><span class="t-key">"${esc(k)}"</span><span class="t-punc">: </span>${jsonValue(v)}${i < rows.length - 1 ? '<span class="t-punc">,</span>' : ''}</div>`
  ).join('') + `<div class="json-brace">}</div>`;

  $('statusLog').innerHTML = STATUS_LOG.map(s =>
    `<li><span class="${s.ok ? 'st-ok' : 'st-wip'}">[ ${s.ok ? 'OK' : '..'} ]</span> ${esc(s[lang])}</li>`).join('');
}

/* ─── render: skills ─────────────────────────────────────── */
function renderSkills() {
  const el = $('skillsList');
  if (!el) return;
  el.innerHTML = SKILL_CATEGORIES.map(cat => `
    <div class="skill-category">
      <div class="skill-cat-label"><span>${esc(t(cat.label))}</span>${cat.note ? `<span class="skill-cat-note">// ${esc(t(cat.note))}</span>` : ''}</div>
      <ul class="skill-cat-grid">${cat.items.map(s => `
        <li class="skill-item">
          <span class="skill-icon" aria-hidden="true">${ICONS[s.icon] || ''}</span>
          <span class="skill-name">${esc(t(s.name))}</span>
        </li>`).join('')}
      </ul>
    </div>`).join('');
}

/* ─── render: formación ──────────────────────────────────── */
function renderEducation() {
  const pct = Math.round(DEGREE.passed / DEGREE.total * 100);
  $('eduBlock').innerHTML = `
    <div class="degree">
      <h4>${esc(t(DEGREE.title))}</h4>
      <div class="degree-org">${esc(DEGREE.org)}</div>
      <div class="degree-meta">${esc(fmtDate(DEGREE.date))}</div>
      <div class="degree-progress">
        <div class="dp-top"><span><b>${DEGREE.passed}/${DEGREE.total}</b> ${esc(S('subjects'))}</span><span>${esc(S('lastTerm'))}</span></div>
        <div class="dp-track" role="progressbar" aria-valuemin="0" aria-valuemax="${DEGREE.total}" aria-valuenow="${DEGREE.passed}" aria-label="${esc(S('subjects'))}">
          <div class="dp-fill" data-pct="${pct}"></div>
        </div>
      </div>
      <div class="degree-subjects">${t(DEGREE.subjects).map(s => `<span class="tag">${esc(s)}</span>`).join('')}</div>
    </div>`;

  $('projectList').innerHTML = PROJECTS.map(p => `
    <div class="project">
      <div class="project-top"><h4>${esc(t(p.title))}</h4><span class="project-date">${esc(fmtDate(p.date))}</span></div>
      <div class="project-org">${esc(t(p.org))}</div>
      <p class="project-desc">${esc(t(p.desc))}</p>
    </div>`).join('');

  $('certList').innerHTML = CERTS.map(c => `
    <div class="cert-item${c.wip ? ' is-wip' : ''}">
      <span class="cert-logo" aria-hidden="true">${esc(c.logo)}</span>
      <div class="cert-info">
        <h4>${esc(c.name)}</h4>
        <div class="cert-code">${esc(t(c.org))}${c.date ? ` · ${esc(fmtDate(c.date))}` : ''}</div>
        <p class="cert-desc">${esc(t(c.desc))}</p>
      </div>
    </div>`).join('');
}

/* ─── animaciones de entrada ─────────────────────────────── */
const revealObserver = ('IntersectionObserver' in window) ? new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.style.setProperty('--d', (el.dataset.d || 0) + 'ms');
    el.classList.add('visible');
    el.querySelectorAll('.dp-fill').forEach(f => { f.style.width = f.dataset.pct + '%'; });
    revealObserver.unobserve(el);
  });
}, { threshold: 0.12 }) : null;

function observeReveals(instant) {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    if (instant || !revealObserver) {
      el.style.setProperty('--d', '0ms');
      el.classList.add('visible');
    } else {
      revealObserver.observe(el);
    }
  });
  /* la barra de la carrera vive dentro de un panel ya visible al cambiar idioma */
  document.querySelectorAll('.visible .dp-fill').forEach(f => { f.style.width = f.dataset.pct + '%'; });
}

/* ─── render completo ────────────────────────────────────── */
function renderAll(instant) {
  applyStatic();
  renderLabs();
  renderBio();
  renderSkills();
  renderEducation();
  observeReveals(instant);
}
renderAll(false);

document.querySelectorAll('.lang-switch button').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.lang === lang) return;
    lang = btn.dataset.lang;
    store.set('lang', lang);
    renderAll(true);
  });
});

/* ─── nav activa según la sección visible ────────────────── */
(function navSpy() {
  const links = [...document.querySelectorAll('.topbar-nav a')];
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(s => io.observe(s));
})();

/* ─── reloj y año ────────────────────────────────────────── */
function updateClock() {
  const n = new Date();
  const p = x => String(x).padStart(2, '0');
  const el = $('clock');
  if (el) el.textContent = `${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}`;
}
updateClock();
setInterval(updateClock, 1000);
$('year').textContent = new Date().getFullYear();

/* ─── hero: fondo de código + glitch (solo si el hero se ve) ─ */
(function heroFx() {
  const hero = $('hero');
  const fill = $('codeFill');
  if (!hero || !fill) return;

  const POOL = [
    '<span class="c-cyan">$</span> nmap -sV -T4 192.168.0.221',
    '<span class="c-warn">[wazuh]</span> rule 100201 level 15 &rarr; brute force + login OK',
    '<span class="c-cyan">$</span> theHarvester -d target -b crtsh,duckduckgo,otx',
    '<span class="c-dim">[fim]</span> syscheck.diff: + backdoor_enabled=true',
    '<span class="c-cyan">$</span> terraform plan -out=hardening.tfplan',
    '<span class="c-dim">[checkov]</span> CKV_AWS_20 PASSED &middot; CKV_AWS_18 PASSED',
    '<span class="c-cyan">$</span> hydra -l victima -P wordlist.txt ssh://192.168.0.221',
    '<span class="c-warn">[sysmon]</span> EventID 11 &rarr; executable dropped &middot; T1105',
    '<span class="c-cyan">$</span> docker compose -f single-node up -d',
    '<span class="c-dim">GET</span> /?rid=... 200 (nginx) &middot; X-Gophish-* stripped',
    'MITRE ATT&amp;CK :: T1110 &middot; T1078 &middot; T1565.001',
    '<span class="c-cyan">$</span> sudo systemctl status wazuh-agent',
    '<span class="c-dim">[agent]</span> osbunker-linux &rarr; active',
    '<span class="c-cyan">$</span> git commit -m "docs: add detection evidence"',
    '<span class="c-warn">[alert]</span> 5763 sshd brute force detected',
    '<span class="c-cyan">$</span> sudo lynis audit system',
    '<span class="c-dim">[lynis]</span> hardening index: 78/100',
    '<span class="c-cyan">$</span> wazuh-logtest &lt; /var/log/auth.log',
    '<span class="c-dim">[rule]</span> 5715 authentication success &middot; T1078',
    '<span class="c-cyan">$</span> aws iam simulate-principal-policy --policy-source-arn ...',
    '<span class="c-dim">[aide]</span> /etc/ssh/sshd_config changed',
    '<span class="c-cyan">$</span> sudo ufw status verbose',
  ];
  const pick = () => POOL[Math.floor(Math.random() * POOL.length)];
  const plainOf = h => { const d = document.createElement('div'); d.innerHTML = h; return d.textContent; };

  const nodes = [];
  /* suficientes líneas para llenar todas las columnas visibles */
  const cols = innerWidth > 960 ? 3 : innerWidth > 768 ? 2 : 1;
  const total = Math.min(140, cols * Math.ceil(Math.max(hero.offsetHeight, innerHeight) / 27) + 4);
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'hero-code-line';
    d.innerHTML = pick();
    nodes.push(d);
    fill.appendChild(d);
  }
  if (REDUCED_MOTION) return;

  let active = true;
  const heroName = document.querySelector('.hero-name');

  function retype(node) {
    const html = pick(), plain = plainOf(html);
    let c = 0;
    (function step() {
      node.textContent = plain.slice(0, c);
      node.insertAdjacentHTML('beforeend', '<span class="cur">_</span>');
      if (c < plain.length) { c++; setTimeout(step, 22); } else { node.innerHTML = html; }
    })();
  }
  function loop() {
    if (active && !document.hidden) retype(nodes[Math.floor(Math.random() * nodes.length)]);
    setTimeout(loop, 700 + Math.random() * 600);
  }
  [300, 800, 1300].forEach(ms => setTimeout(loop, ms));

  setInterval(() => {
    if (!active || document.hidden || !heroName || Math.random() <= 0.85) return;
    heroName.style.textShadow = `${(Math.random() - .5) * 6}px 0 var(--red), ${(Math.random() - .5) * 6}px 0 var(--cyan)`;
    setTimeout(() => { heroName.style.textShadow = ''; }, 80);
  }, 2000);

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => { active = e.isIntersecting; }).observe(hero);
  }
})();
