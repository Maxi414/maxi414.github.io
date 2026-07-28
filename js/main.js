/* ═══════════════════════════════════════════════════════════
   PORTFOLIO — Máximo Bonarrico · main.js
   Editá los datos de abajo cuando completes un lab o sumes skill.
═══════════════════════════════════════════════════════════ */

/* ─── ICONOS SVG (inline) ─────────────────────────────────── */
const ICONS = {
  linux:     `<svg viewBox="0 0 24 24" fill="#f5c518"><path d="M12.5 0c-.2 0-.3 0-.5 0C8 .4 8.9 4.8 8.8 6.3c-.1 1.1-.3 2-1 3-.9 1-2.1 2.7-2.7 4.5-.3.8-.4 1.7-.3 2.5 0 0-.1.1-.1.1-.3.3-.4.6-.7.8-.2.2-.5.3-.8.4-.3.1-.7.3-.9.7-.1.2-.1.4-.1.6 0 .2 0 .4.1.5.1.4.1.7 0 1-.2.7-.3 1.1-.1 1.5.2.3.5.5.9.6.6.2 1.1.6 1.3 1.1.2.5.3 1.1.2 1.8-.1.7-.2 1.3-.2 2 0 .1 0 .2 0 .3.1.7.6 1.1 1.1 1.2.5.1 1 0 1.3-.1.7-.3 1.3-.6 1.8-.6h.2c.1 0 .2 0 .4 0 .6.1 1 .5 1.2 1s.3 1.1.4 1.8c.1 1.2.1 2.4.4 3.3.3.9.9 1.4 1.9 1.4.2 0 .5 0 .7-.1.7-.2 1.2-.5 1.5-.9.3-.4.4-.9.5-1.4.1-1-.1-2.1-.1-3.1 0-.4 0-.7.1-1.1.2-.6.5-1.1.8-1.4.4-.4.8-.6 1.3-.6h.2c.6 0 1.2.2 1.9.5.7.3 1.3.7 1.8 1.1.4.2.7.4 1 .6.3.1.5.2.8.2.2 0 .4-.1.6-.3.2-.2.3-.4.4-.6.1-.3.2-.6.2-.9.1-.5.1-1.1-.1-1.7-.1-.6-.5-1.1-1-1.5-.5-.4-1.3-.6-2.2-.7h-.1c-.5 0-1 .1-1.4.2-.4.1-.8.1-1.2.1-.4 0-.7 0-1-.1-.6-.2-1-.5-1.2-1-.2-.4-.2-1 0-1.5.1-.6.4-1.1.7-1.6.3-.5.6-.8.9-1.1.5-.6.8-.9.8-1.6v-.1c0-.5-.2-.9-.4-1.3-.2-.3-.6-.6-.9-.7-.4-.2-.7-.3-1.1-.3-.3 0-.7 0-1 .1z"/></svg>`,
  cisco:     `<svg viewBox="0 0 24 24" fill="#1ba0d7"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>`,
  network:   `<svg viewBox="0 0 24 24" fill="#3febff"><path d="M3 3h6v6H3V3zm12 0h6v6h-6V3zM3 15h6v6H3v-6zm12 0h6v6h-6v-6zM6 9v6m6-12v18m6-12v6M9 6h6m-6 12h6"/></svg>`,
  docker:    `<svg viewBox="0 0 24 24" fill="#2496ed"><path d="M22 11c-.4-.3-1.4-.4-2.2-.2-.1-.7-.5-1.4-1.1-1.9l-.3-.2-.2.3c-.3.5-.4 1.2-.3 1.8.1.4.2.7.5 1-.2.1-.6.3-1.1.3H1.6c-.3 1.6.1 3.4 1.2 4.7 1.2 1.3 2.9 2 5.2 2 5 0 8.7-2.3 10.5-6.5.7 0 2.2 0 3-1.5.1-.1.3-.4.4-.8l.1-.3-.3-.2zM6.3 7h-2v2h2V7zm2.7 0H7v2h2V7zm2.7 0h-2v2h2V7zm2.7 0h-2v2h2V7zM6.3 4.4h-2v2h2v-2zm2.7 0H7v2h2v-2zm2.7 0h-2v2h2v-2z"/></svg>`,
  vbox:      `<svg viewBox="0 0 24 24" fill="#3a7fc4"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7 3.5-7 3.5-7-3.5 7-3.5zM4 9.2l7 3.5v7L4 16.2V9.2zm16 0v7l-7 3.5v-7l7-3.5z"/></svg>`,
  nmap:      `<svg viewBox="0 0 24 24" fill="#1fd987"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3a7 7 0 110 14 7 7 0 010-14zm0 3a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"/></svg>`,
  nessus:    `<svg viewBox="0 0 24 24" fill="#00bcbc"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1 6h2v6h-2V7zm0 8h2v2h-2v-2z"/></svg>`,
  wireshark: `<svg viewBox="0 0 24 24" fill="#3a9bd4"><path d="M2 11h4l2-6 4 12 3-9 2 3h5v2h-6l-2-3-3 9-4-12-2 6H2z"/></svg>`,
  siem:      `<svg viewBox="0 0 24 24" fill="#ffce4d"><path d="M12 1L3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5l-9-4zm0 4l6 2.7V11c0 3.8-2.6 7.4-6 8.9C8.6 18.4 6 14.8 6 11V7.7L12 5zm-1 3v4h2V8h-2zm0 6v2h2v-2h-2z"/></svg>`,
  security:  `<svg viewBox="0 0 24 24" fill="#ff5773"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l6 2.67V11c0 3.83-2.6 7.4-6 8.93C8.6 18.4 6 14.83 6 11V7.67L12 5zm-1 3v4h2V8h-2zm0 6v2h2v-2h-2z"/></svg>`,
  aws:       `<svg viewBox="0 0 24 24" fill="#ff9900"><path d="M6.8 10c0 .3 0 .5.1.7.1.2.1.4.3.6 0 .1.1.1.1.2 0 .1 0 .2-.2.2l-.5.3h-.2c-.1 0-.2 0-.2-.1l-.3-.4-.2-.5c-.6.7-1.4 1.1-2.3 1.1-.7 0-1.2-.2-1.6-.6-.4-.4-.6-.9-.6-1.5 0-.7.2-1.2.7-1.6.5-.4 1.1-.6 2-.6.3 0 .6 0 .8.1.3 0 .6.1.9.2v-.6c0-.6-.1-1-.4-1.3-.3-.2-.7-.4-1.3-.4-.3 0-.6 0-.9.1-.3.1-.6.2-.9.3h-.3c-.1 0-.2-.1-.2-.2v-.4c0-.1 0-.2.1-.3.1-.1.1-.1.2-.2.3-.1.6-.3 1-.4.4-.1.8-.1 1.2-.1 1 0 1.6.2 2.1.6.4.4.7 1.1.7 2v2.6zm-3.2 1.2c.3 0 .5 0 .8-.1.3-.1.5-.3.8-.5.1-.2.2-.3.3-.5 0-.2.1-.4.1-.7v-.3c-.2 0-.5-.1-.7-.1-.3 0-.5 0-.8 0-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.9 0 .4.1.7.3.8.2.2.5.3.8.3zm6.4.9c-.1 0-.2 0-.3-.1-.1 0-.1-.2-.2-.3L7.6 5.5c0-.1-.1-.2-.1-.3 0-.1.1-.2.2-.2h.8c.2 0 .3 0 .3.1.1 0 .1.2.2.3l1.3 5.3 1.2-5.3c0-.2.1-.3.2-.3.1 0 .2-.1.3-.1h.6c.2 0 .3 0 .3.1.1 0 .1.2.2.3l1.3 5.3 1.4-5.3c0-.2.1-.3.2-.3.1 0 .2-.1.3-.1h.7c.1 0 .2.1.2.2v.1l-.1.2-1.9 6.2c0 .2-.1.3-.2.3-.1 0-.2.1-.3.1h-.7c-.2 0-.3 0-.3-.1-.1-.1-.1-.2-.2-.3l-1.2-5.2-1.2 5.1c0 .2-.1.3-.2.3-.1.1-.2.1-.3.1zm10.3.2c-.4 0-.8 0-1.2-.1-.4-.1-.7-.2-.9-.3-.1-.1-.2-.2-.2-.2v-.5c0-.2.1-.2.2-.2h.1l.2.1c.3.1.6.2.9.3.3.1.6.1 1 .1.5 0 .9-.1 1.2-.3.3-.2.4-.4.4-.8 0-.2-.1-.4-.2-.6-.1-.2-.4-.3-.8-.4l-1.2-.4c-.6-.2-1-.5-1.3-.8-.3-.3-.4-.7-.4-1.2 0-.3.1-.6.2-.9.1-.3.3-.5.6-.7.2-.2.5-.3.8-.4.3-.1.7-.1 1-.1.2 0 .4 0 .5 0 .2 0 .4.1.5.1.2 0 .3.1.5.1.1 0 .3.1.3.1.1.1.2.1.2.2.1.1.1.2.1.3v.4c0 .2-.1.3-.2.3-.1 0-.2 0-.3-.1-.5-.2-1-.3-1.5-.3-.5 0-.8.1-1.1.2-.2.2-.4.4-.4.7 0 .2.1.4.2.6.2.2.5.3.9.4l1.1.4c.6.2 1 .4 1.2.8.2.3.4.7.4 1.1 0 .3-.1.7-.2.9-.1.3-.3.5-.6.7-.2.2-.5.3-.9.4-.4.1-.7.2-1.1.2zM21.7 16.2c-2.6 1.9-6.4 3-9.7 3-4.6 0-8.7-1.7-11.9-4.5-.2-.2 0-.5.3-.4 3.4 2 7.6 3.2 11.9 3.2 2.9 0 6.1-.6 9.1-1.9.4-.2.8.3.3.6zM22.8 15c-.3-.4-2.2-.2-3.1-.1-.3 0-.3-.2-.1-.4 1.5-1.1 4-.8 4.3-.4.3.4-.1 2.8-1.5 4-.2.2-.4.1-.3-.2.3-.8 1-2.6.7-2.9z"/></svg>`,
  iam:       `<svg viewBox="0 0 24 24" fill="#dd344c"><path d="M12 1a5 5 0 00-5 5v3H5v12h14V9h-2V6a5 5 0 00-5-5zm0 2a3 3 0 013 3v3H9V6a3 3 0 013-3zm0 9a2 2 0 011 3.7V18h-2v-2.3A2 2 0 0112 12z"/></svg>`,
  terraform: `<svg viewBox="0 0 24 24" fill="#7b42bc"><path d="M8.6 4.9v5.2l4.5 2.6V7.5L8.6 4.9zM13.7 7.5v5.2l4.5-2.6V4.9l-4.5 2.6zM3.5 2v5.2L8 9.8V4.6L3.5 2zM8.6 16.7l4.5 2.6V14L8.6 11.5v5.2z"/></svg>`,
  python:    `<svg viewBox="0 0 24 24"><defs><linearGradient id="pyg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3776AB"/><stop offset="1" stop-color="#FFD43B"/></linearGradient></defs><path fill="url(#pyg)" d="M11.9 0C5.8 0 6.2 2.7 6.2 2.7v2.7h5.8v.8H3.9S0 5.8 0 12s3.4 6 3.4 6h2V15s-.1-3.4 3.4-3.4h5.8s3.2.1 3.2-3.1V3.2S18.3 0 11.9 0zM8.7 1.8a1 1 0 110 2.1 1 1 0 010-2.1zM12.1 24c6.1 0 5.7-2.7 5.7-2.7v-2.7h-5.8v-.8h8.1S24 18.2 24 12s-3.4-6-3.4-6h-2V9s.1 3.4-3.4 3.4H9.5s-3.2-.1-3.2 3.1v5.3S5.7 24 12.1 24zm3.2-1.8a1 1 0 110-2.1 1 1 0 010 2.1z"/></svg>`,
  bash:      `<svg viewBox="0 0 24 24" fill="#4eaa25"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 3l3 2-3 2v1.5l4.5-3v-1L7 6.5V8zm5 5h5v1.5h-5V13z"/></svg>`,
  git:       `<svg viewBox="0 0 24 24" fill="#f05032"><path d="M23.5 10.9L13.1.5c-.6-.6-1.6-.6-2.2 0L8.7 2.6l2.8 2.8c.6-.2 1.4-.1 1.9.4.5.5.7 1.3.4 1.9l2.7 2.7c.6-.2 1.4-.1 1.9.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.7-1.3-.4-2L12.9 9v6.5c.2.1.3.2.5.3.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.2-.2.4-.3.6-.4V8.8c-.2-.1-.4-.2-.6-.4-.5-.5-.7-1.3-.4-2L7.6 3.7.5 10.9c-.6.6-.6 1.6 0 2.2l10.5 10.5c.6.6 1.6.6 2.2 0l10.4-10.4c.6-.6.6-1.6 0-2.2"/></svg>`,
  sql:       `<svg viewBox="0 0 24 24" fill="#00a3c4"><path d="M12 3C7.6 3 4 4.8 4 7v10c0 2.2 3.6 4 8 4s8-1.8 8-4V7c0-2.2-3.6-4-8-4zm0 2c3.9 0 6 1.5 6 2s-2.1 2-6 2-6-1.5-6-2 2.1-2 6-2zm0 14c-3.9 0-6-1.5-6-2v-2.2C7.6 15.6 9.7 16 12 16s4.4-.4 6-1.2V17c0 .5-2.1 2-6 2zm0-4c-3.9 0-6-1.5-6-2v-2.2C7.6 11.6 9.7 12 12 12s4.4-.4 6-1.2V13c0 .5-2.1 2-6 2z"/></svg>`,
  mongo:     `<svg viewBox="0 0 24 24" fill="#47a248"><path d="M17.2 9.6c-1.3-5.6-4.3-7.4-4.6-8.1-.3-.4-.5-1-.7-1.4 0 .5-.1.7-.5 1.2-.7.6-4.4 3.7-4.7 10C6.4 17.2 11 20.7 11.6 21.1l.1.1c0 1 .1 1.9.3 2.8h.5c.1-1 .3-2.1.5-3.1.4-.3.6-.5.9-.7 1.6-1.4 2.6-3.4 3.6-5.5.5-1.1.5-2.4.5-3.4 0-.8-.1-1.7-.3-2.2zM12 17.7s0-8.3.3-8.3c.2 0 .5 10.7.5 10.7-.4 0-.8-1.8-.8-2.4z"/></svg>`,
  windows:   `<svg viewBox="0 0 24 24" fill="#3a9bd4"><path d="M3 5.5l7.4-1v7.3H3V5.5zM3 13.2h7.4V21L3 20V13.2zM11.3 4.3L21 3v9.2h-9.7V4.3zM11.3 13.2H21V21l-9.7-1.3V13.2z"/></svg>`,
  mitre:     `<svg viewBox="0 0 24 24" fill="#ff8fa3"><path d="M12 1a11 11 0 100 22 11 11 0 000-22zm0 3a8 8 0 110 16 8 8 0 010-16zm0 4a4 4 0 100 8 4 4 0 000-8zm0 3a1 1 0 110 2 1 1 0 010-2z"/></svg>`,
  log:       `<svg viewBox="0 0 24 24" fill="#8ab4ff"><path d="M6 2h9l5 5v15H6V2zm8 1.5V8h4.5L14 3.5zM8 11h8v1.5H8V11zm0 3h8v1.5H8V14zm0 3h5v1.5H8V17z"/></svg>`,
  kali:      `<svg viewBox="0 0 24 24" fill="#3aa0e0" fill-rule="evenodd"><path d="M3 14c1.3-.3 2.2-1.3 2.8-2.5C6.6 9.8 8 8 10.4 8l-.8-2.4 2.3 1.4c.7-.2 1.4-.2 2.1-.1l-.6-2.5 2.1 2.2c1.7.5 3.1 1.8 3.8 3.8.5 1.5.5 3 .1 4.5-1-1-2.3-1.4-3.7-1.3.3.9.3 1.8-.2 2.7-.5-1-1.4-1.7-2.4-1.9.1 1-.2 1.9-.9 2.6-.2-1.1-1-1.9-2-2.4-1.8-.8-3.6-1-5.2-2.7 1 .3 2 .2 2.8-.2-1 .1-1.9 0-2.8-.3-.4-.1-.8-.4-1.2-.8zm5-3.2a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/></svg>`,
  sysmon:    `<svg viewBox="0 0 24 24" fill="#4c9ff0" fill-rule="evenodd"><path d="M3 3h18a1 1 0 011 1v13a1 1 0 01-1 1h-6v2h2.5v2H6.5v-2H9v-2H3a1 1 0 01-1-1V4a1 1 0 011-1zm9 4c-2.9 0-5.2 2.1-6 3.5C6.8 12 9.1 14 12 14s5.2-2 6-3.5C17.2 9.1 14.9 7 12 7zm0 1.8a1.7 1.7 0 110 3.4 1.7 1.7 0 010-3.4z"/></svg>`,
  hydra:     `<svg viewBox="0 0 24 24" fill="#ff6b5c"><path d="M7 9V7a5 5 0 019.8-1.4l-1.9.6A3 3 0 009 7v2h9a1 1 0 011 1v9a1 1 0 01-1 1H6a1 1 0 01-1-1v-9a1 1 0 011-1h1zm5.5 2l-3 4h2l-.7 3 3.2-4.3h-2l.5-2.7z"/></svg>`,
  checkov:   `<svg viewBox="0 0 24 24" fill="#8a63d2"><path d="M9 2h6v1h1a2 2 0 012 2v15a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2h1V2zm0 3v1h6V5H9zm-.4 4.6L7.2 11l2 2 3.5-3.5-1.4-1.4-2.1 2.1-.6-.6zm0 5L7.2 16l2 2 3.5-3.5-1.4-1.4-2.1 2.1-.6-.6z"/></svg>`,
  phish:     `<svg viewBox="0 0 24 24" fill="none" stroke="#ff7a4d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="15" cy="4.5" r="1.5" fill="#ff7a4d" stroke="none"/><path d="M15 6.5v8a4 4 0 01-8 0"/><path d="M4.8 12.4 7 14.6l2.2-2.2"/></svg>`,
  osint:     `<svg viewBox="0 0 24 24" fill="#5bd6c0"><path d="M10 2a8 8 0 105.3 14l5.2 5.2 1.4-1.4-5.2-5.2A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12zm0 2.5A3.5 3.5 0 1010 13.5 3.5 3.5 0 0010 6.5zm0 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/></svg>`,
  social:    `<svg viewBox="0 0 24 24" fill="#c79bff"><path d="M9 3a4 4 0 100 8 4 4 0 000-8zm0 10c-3.3 0-6 1.8-6 4v2h12v-2c0-2.2-2.7-4-6-4zm8-8a3 3 0 00-1 5.8V13c1.7.3 3 1.1 3.6 2.2H21v-1.5c0-1.7-1.8-3-4-3.3A3 3 0 0017 5z"/></svg>`,
  nginx:     `<svg viewBox="0 0 24 24" fill="#3fae5a"><path d="M4 3h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm2 2.5v1h2v-1H6zm-2 8h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 011-1zm2 2.5v1h2v-1H6z"/></svg>`,
};

/* iconos para tarjetas de certificación (logo en texto) */
const CERT_ICONS = {
  comptia:   'Sec+',
  google:    'G',
  cisco:     'CISCO',
  python:    'PY',
  cambridge: 'B2',
};

/* ─── SKILLS ──────────────────────────────────────────────── */
const SKILL_CATEGORIES = [
  { label: 'Seguridad Defensiva & Blue Team', items: [
    { name: 'Wazuh (SIEM)',     icon: 'siem' },
    { name: 'MITRE ATT&CK',     icon: 'mitre' },
    { name: 'Análisis de Logs', icon: 'log' },
    { name: 'Sysmon',           icon: 'sysmon' },
    { name: 'Hardening (CIS)',  icon: 'security' },
  ]},
  { label: 'Ofensiva, OSINT & Ingeniería Social', items: [
    { name: 'Nmap',              icon: 'nmap' },
    { name: 'Nessus',            icon: 'nessus' },
    { name: 'Wireshark',         icon: 'wireshark' },
    { name: 'Hydra',             icon: 'hydra' },
    { name: 'Kali Linux',        icon: 'kali' },
    { name: 'GoPhish',           icon: 'phish' },
    { name: 'OSINT',             icon: 'osint' },
    { name: 'Ingeniería Social', icon: 'social' },
  ]},
  { label: 'Sistemas, Redes & Contenedores', items: [
    { name: 'Linux',            icon: 'linux' },
    { name: 'Redes (TCP/IP)',   icon: 'network' },
    { name: 'Cisco Networking', icon: 'cisco' },
    { name: 'Nginx',            icon: 'nginx' },
    { name: 'Docker',           icon: 'docker' },
    { name: 'VirtualBox',       icon: 'vbox' },
  ]},
  { label: 'Cloud & IaC', items: [
    { name: 'AWS',       icon: 'aws' },
    { name: 'AWS IAM',   icon: 'iam' },
    { name: 'Terraform', icon: 'terraform' },
    { name: 'Checkov',   icon: 'checkov' },
  ]},
  { label: 'Scripting & Datos', items: [
    { name: 'Python', icon: 'python' },
    { name: 'Bash',   icon: 'bash' },
    { name: 'Git',    icon: 'git' },
    { name: 'SQL',    icon: 'sql' },
    { name: 'NoSQL',  icon: 'mongo' },
  ]},
];

/* ─── FORMACIÓN ───────────────────────────────────────────── */
const EDUCATION = [
  { title: 'Lic. en Gestión de Tecnología de la Información', org: 'UADE', meta: 'mar. 2023 – Actualidad' },
  { title: 'Google Cybersecurity Certificate', org: 'Coursera · Programa de 8 cursos', meta: 'abr. 2023 – feb. 2024' },
];

/* ─── CERTIFICACIONES ─────────────────────────────────────── */
const CERTS = [
  { name: 'CompTIA Security+', code: 'SY0-701 · en preparación', desc: 'Operaciones de seguridad, riesgo, arquitectura y respuesta a incidentes.', logo: 'comptia' },
  { name: 'Google Cybersecurity', code: 'Coursera · feb. 2024', desc: 'Seguridad de redes, análisis de tráfico, gestión de incidentes y herramientas SIEM.', logo: 'google' },
  { name: 'Introduction to Networks (Cisco CCNAv7)', code: 'Cisco Networking Academy · nov. 2024', desc: 'Primer curso del itinerario CCNA: fundamentos de redes, routing y switching, TCP/IP.', logo: 'cisco' },
  { name: 'Python Essentials 1 & 2', code: 'Cisco · feb–mar. 2024', desc: 'Fundamentos de Python y programación orientada a objetos (POO).', logo: 'python' },
  { name: 'B2 First', code: 'University of Cambridge · feb. 2023', desc: 'Certificación de inglés nivel B2 (upper-intermediate).', logo: 'cambridge' },
];

/* ─── LABS · status: 'done' | 'in-progress' | 'planned' ───── */
const LABS = [
  { id: 'LAB-001', title: 'Network Audit Lab', desc: 'Reconocimiento y auditoría de red con Nmap y análisis de vulnerabilidades con Nessus en entorno controlado.', tags: ['Nmap','Nessus','TCP/IP','Reconnaissance'], date: 'Jun 2026', status: 'done', url: 'https://github.com/Maxi414/network-audit-lab' },
  { id: 'LAB-002', title: 'Linux Hardening — OS Bunker', desc: 'Bastionado de sistema operativo Linux aplicando CIS Benchmarks, restricción de servicios y configuración de firewall.', tags: ['Linux','UFW','CIS Benchmark','Bash'], date: 'Jun 2026', status: 'done', url: 'https://github.com/Maxi414/linux-hardening-lab' },
  { id: 'LAB-003', title: 'Cloud Security — AWS IAM', desc: 'Hardening de IAM, S3 y CloudTrail en AWS provisionado con Terraform, validado por CLI, ataques simulados y análisis estático (Checkov) en CI.', tags: ['AWS','Terraform','IAM','S3','CloudTrail','Checkov'], date: 'Jun 2026', status: 'done', url: 'https://github.com/Maxi414/aws-iam-s3-cloudtrail-hardening' },
  { id: 'LAB-004', title: 'SIEM Monitoring — Wazuh', desc: 'SIEM Wazuh sobre Docker monitoreando endpoints Linux y Windows en tiempo real: simulación de ataques, correlación de eventos, integración de Sysmon y una regla de detección propia mapeada a MITRE ATT&CK.', tags: ['Wazuh','SIEM','MITRE ATT&CK','Sysmon','Docker'], date: 'Jul 2026', status: 'done', url: 'https://github.com/Maxi414/wazuh-siem-detection-lab' },
  { id: 'LAB-005', title: 'Phishing Simulation — GoPhish', desc: 'Campaña de phishing de punta a punta: GoPhish detrás de un reverse proxy Nginx con TLS, OSINT pasivo con theHarvester, landing de captura de credenciales y una campaña completa contra una organización ficticia, del envío hasta las credenciales capturadas. Todo aislado en el lab.', tags: ['GoPhish','OSINT','Phishing','Nginx','Social Engineering'], date: 'Jul 2026', status: 'done', url: 'https://github.com/Maxi414/gophish-phishing-simulation-lab' },
];

/* ═══════════════════════════════════════════════════════════
   RENDER
═══════════════════════════════════════════════════════════ */

/* reloj */
function updateClock() {
  const n = new Date();
  const p = x => String(x).padStart(2, '0');
  const el = document.getElementById('clock');
  if (el) el.textContent = `${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}`;
}
updateClock();
setInterval(updateClock, 1000);

/* año */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* skills */
const skillsList = document.getElementById('skillsList');
if (skillsList) {
  SKILL_CATEGORIES.forEach(cat => {
    const items = cat.items.map(s => `
      <div class="skill-item">
        <span class="skill-icon">${ICONS[s.icon] || ''}</span>
        <span class="skill-info">
          <span class="skill-name">${s.name}</span>
        </span>
      </div>`).join('');
    skillsList.insertAdjacentHTML('beforeend', `
      <div class="skill-category">
        <div class="skill-cat-label">${cat.label}</div>
        <div class="skill-cat-grid">${items}</div>
      </div>`);
  });
}

/* formación */
const eduList = document.getElementById('eduList');
if (eduList) {
  EDUCATION.forEach(e => {
    eduList.insertAdjacentHTML('beforeend', `
      <div class="edu-item">
        <h4>${e.title}</h4>
        <div class="edu-org">${e.org}</div>
        <div class="edu-meta">${e.meta}</div>
      </div>`);
  });
}

/* certificaciones */
const certList = document.getElementById('certList');
if (certList) {
  CERTS.forEach(c => {
    certList.insertAdjacentHTML('beforeend', `
      <div class="cert-item">
        <span class="cert-logo">${CERT_ICONS[c.logo] || '✓'}</span>
        <span class="cert-info">
          <h4>${c.name}</h4>
          <div class="cert-code">${c.code}</div>
          <div class="cert-desc">${c.desc}</div>
        </span>
      </div>`);
  });
}

/* labs */
const grid = document.getElementById('labsGrid');
const ghIcon = `<svg viewBox="0 0 16 16"><path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.5c-2 .4-2.5-.5-2.7-.9-.1-.2-.5-.9-.8-1.1-.3-.2-.7-.5 0-.5.6 0 1.1.6 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3.7 0 1.4.1 2 .3 1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.5.7.5 1.5v2.2c0 .2.2.5.5.4A8 8 0 0016 8c0-4.4-3.6-8-8-8z"/></svg>`;
const STATUS = {
  'done':        { label: 'ACTIVE',      cardClass: '' },
  'in-progress': { label: 'IN PROGRESS', cardClass: 'is-progress' },
  'planned':     { label: 'PLANNED',     cardClass: 'is-planned' },
};

if (grid) {
  document.getElementById('labCount').textContent = LABS.length;
  const doneCount = LABS.filter(l => l.status === 'done').length;
  document.getElementById('pbDone').textContent = doneCount;
  const pbTotalEl = document.getElementById('pbTotal'); if (pbTotalEl) pbTotalEl.textContent = LABS.length;
  const pbFill = document.getElementById('pbFill');
  if (pbFill) setTimeout(() => { pbFill.style.width = (doneCount / LABS.length * 100) + '%'; }, 300);

  LABS.forEach((lab, i) => {
    const cfg = STATUS[lab.status] || STATUS.planned;
    const card = document.createElement('article');
    card.className = `card ${cfg.cardClass}`.trim();
    card.style.transitionDelay = `${i * 80}ms`;
    const btn = lab.status === 'done'
      ? `<a href="${lab.url}" target="_blank" rel="noopener" class="btn btn-primary">${ghIcon} Ver Reporte en GitHub</a>`
      : `<span class="btn disabled">${ghIcon} ${lab.status === 'in-progress' ? 'En progreso…' : 'Pendiente'}</span>`;
    card.innerHTML = `
      <div class="card-header">
        <span class="card-id">${lab.id}</span>
        <span class="card-status"><span class="status-dot"></span><span>${cfg.label}</span></span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${lab.title}</h3>
        <p class="card-desc">${lab.desc}</p>
        <div class="card-tags">${lab.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
      <div class="card-footer">
        <span class="card-meta">${lab.date}</span>
        ${btn}
      </div>`;
    grid.appendChild(card);
  });
}

/* animación de entrada de cards */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.card').forEach(el => observer.observe(el));

/* glitch ocasional en el nombre */
const heroName = document.querySelector('.hero-name');
if (heroName && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => {
    if (Math.random() > 0.85) {
      heroName.style.textShadow = `${(Math.random()-.5)*6}px 0 var(--red), ${(Math.random()-.5)*6}px 0 var(--cyan)`;
      setTimeout(() => { heroName.style.textShadow = ''; }, 80);
    }
  }, 2000);
}

/* ── Fondo de código del hero ── */
(function () {
  function initHeroCode() {
    var fill = document.getElementById('codeFill');
    if (!fill) return;
    var POOL = [
      '<span class="c-cyan">$</span> nmap -sV -T4 192.168.0.221',
      '<span class="c-warn">[wazuh]</span> rule 100201 level 15 &rarr; COMPROMISO PROBABLE',
      '<span class="c-cyan">$</span> theHarvester -d target -b crtsh,duckduckgo,otx',
      '<span class="c-dim">[fim]</span> syscheck.diff: + backdoor_enabled=true',
      '<span class="c-cyan">$</span> terraform plan -out=hardening.tfplan',
      '<span class="c-dim">[checkov]</span> CKV_AWS_20 PASSED &middot; CKV_AWS_18 PASSED',
      '<span class="c-cyan">$</span> hydra -l victima -P wordlist.txt ssh://192.168.0.221',
      '<span class="c-warn">[sysmon]</span> EventID 11 &rarr; executable dropped &middot; T1105',
      '<span class="c-cyan">$</span> docker compose -f single-node up -d',
      '<span class="c-cyan">$</span> ssh -L 3333:127.0.0.1:3333 maxi141@192.168.0.221',
      '<span class="c-dim">GET</span> /?rid=... 200 (nginx) &middot; X-Gophish-* stripped',
      'MITRE ATT&amp;CK :: T1110 &middot; T1078 &middot; T1565.001',
      '<span class="c-cyan">$</span> sudo systemctl status wazuh-agent',
      '<span class="c-dim">[agent]</span> osbunker-linux &rarr; active',
      '<span class="c-cyan">$</span> git commit -m "feat: publish LAB-005"',
      '<span class="c-warn">[alert]</span> 5763 sshd brute force detected',
      '<span class="c-cyan">$</span> sudo lynis audit system',
      '<span class="c-dim">[lynis]</span> hardening index: 78/100',
      '<span class="c-cyan">$</span> wazuh-logtest &lt; /var/log/auth.log',
      '<span class="c-dim">[rule]</span> 5715 authentication success &middot; T1078'
    ];
    function plainOf(h){ var t=document.createElement('div'); t.innerHTML=h; return t.textContent; }
    var TOTAL = 54, nodes = [];
    for (var i=0;i<TOTAL;i++){ var d=document.createElement('div'); d.className='hero-code-line'; d.innerHTML=POOL[Math.floor(Math.random()*POOL.length)]; nodes.push(d); fill.appendChild(d); }
    function retype(node){
      var html=POOL[Math.floor(Math.random()*POOL.length)], plain=plainOf(html), c=0;
      (function step(){
        node.innerHTML = plain.slice(0,c).replace(/&/g,'&amp;').replace(/</g,'&lt;') + '<span class="cur">_</span>';
        if (c<plain.length){ c++; setTimeout(step,22); } else { node.innerHTML=html; }
      })();
    }
    function loop(){ retype(nodes[Math.floor(Math.random()*nodes.length)]); setTimeout(loop, 700+Math.random()*600); }
    setTimeout(loop,300); setTimeout(loop,800); setTimeout(loop,1300);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initHeroCode);
  else initHeroCode();
})();