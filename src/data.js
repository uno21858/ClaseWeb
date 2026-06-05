// src/data.js — portfolio content for Erick Sánchez
export const identity = {
  name: 'Erick Sánchez',
  role: 'Fullstack & Software Engineer',
  location: 'Guadalajara, Jalisco · MX',
  headline: ['Crafting code', 'as digital', 'artifacts.'],
  intro:
    'Computer Science student at Tecnológico de Monterrey, shipping real software — from a LATAM expense-splitting app and invoice-automation tools to AWS deployments and a self-hosted GPU home lab.',
  email: 'contact@uno21things.dev',
  github: 'github.com/uno21858',
  githubUrl: 'https://github.com/uno21858',
  githubUser: 'uno21858',
  linkedin: 'linkedin.com/in/erick-alberto-sanchez',
  linkedinUrl: 'https://www.linkedin.com/in/erick-alberto-sanchez',
  resume: '/Erick_Sanchez_Resume.pdf',
};

export const stats = [
  { value: '10+', label: 'Projects shipped' },
  { value: 'AWS', label: 'Cloud Practitioner' },
  { value: '1st', label: 'Skilliket Symposium' },
  { value: '9.0', label: 'GPA · CS @ ITESM' },
];

export const projects = [
  {
    id: '01',
    name: 'Cuentas Claras LATAM',
    subtitle: 'Expense-Splitting Mobile App',
    tags: ['Flutter', 'AWS Cognito', 'Lambda', 'Supabase', 'Firebase'],
    description:
      'Cross-platform (iOS & Android) expense-splitting app for users 13+ across LATAM — built solo in Flutter/Dart with DEV/PROD flavors and no bank-account integration. Multi-cloud serverless backend: AWS Cognito federated auth (Google/Apple) with a Pre-Token Generation Lambda injecting custom JWT claims, plus Supabase Edge Functions and Firebase. Hardened with row-level security, 80+ SECURITY DEFINER procedures with caller validation, pgcrypto encryption and rate-limited endpoints.',
    badge: 'Solo Developer · Live',
    year: '2025 — Now',
    url: 'https://cuentasclaraslatam.com',
    featured: true,
  },
  {
    id: '02',
    name: 'Zenalyse',
    subtitle: 'IoT Environmental Monitoring System',
    tags: ['Raspberry Pi', 'AWS EC2', 'Next.js', 'PostgreSQL', 'Python'],
    description:
      'Real-time IoT monitoring using a Raspberry Pi with DHT11, MQ-135, PIR and LDR sensors to track air quality, temperature, humidity, light and movement — polling every 5 seconds and correlating environmental data with user stress levels via an integrated survey. Backend on AWS EC2 with PostgreSQL and Next.js, exposed via Cloudflare Tunnel.',
    badge: '1st place · Skilliket Symposium',
    year: 'Nov 2025',
    url: 'https://www.linkedin.com/posts/erick-alberto-sanchez_iot-internetofthings-raspberrypi-ugcPost-7404780671338180608-Ht0X',
  },
  {
    id: '03',
    name: 'Traffic Sign CNN',
    subtitle: 'Convolutional Neural Network',
    tags: ['Python', 'PyTorch', 'Jupyter', 'CNN', 'ML'],
    description:
      'Undergraduate research at Tec de Monterrey: CNNs trained on the GTSRB dataset (43 classes), reaching 93% test accuracy with a ~628K-parameter baseline in 10 epochs. Trained on self-hosted GPU infrastructure (dual RTX 3060, RHEL) exposed via Cloudflare Tunnel.',
    badge: '93% accuracy · GTSRB',
    year: '2026',
    url: 'https://github.com/uno21858/traffic-sign-cnn',
  },
  {
    id: '04',
    name: 'Hack2Dawn',
    subtitle: 'CTF Competition Infrastructure',
    tags: ['Docker', 'GitHub Actions', 'CTFd', 'OSINT'],
    description:
      'Self-hosted CTFd platform for PawnGuard’s internal jeopardy CTF — sponsored by MLH, 330ohms and Google Cloud. CI/CD with GitHub Actions + Docker, plus two custom OSINT challenges.',
    badge: 'PawnGuard · ITESM',
    year: 'Oct 2025',
    url: 'https://hack.pawnguard.org',
  },
  {
    id: '05',
    name: 'GatePredict',
    subtitle: 'Airline Catering w/ AI Vision — HackMTY',
    tags: ['Flutter', 'FastAPI', 'PostgreSQL', 'Gemini Vision'],
    description:
      'Backend for an offline-first airline-catering system. Syncs flight plans pre-flight, runs offline on SQLite mid-flight, and reconciles on landing. Uses Gemini Vision for product recognition.',
    badge: 'HackMTY 2025',
    year: 'Oct 2025',
    url: 'https://github.com/PlekDev/gateGroup',
  },
  {
    id: '06',
    name: 'Home Lab',
    subtitle: 'Self-Hosted GPU Infrastructure',
    tags: ['Proxmox', 'RHEL', 'NVIDIA CUDA', 'Cloudflare'],
    description:
      'Proxmox VE hypervisor with dual RTX 3060 passthrough on RHEL 10. Runs local LLMs via Ollama + Open WebUI, self-hosted Gitea and GPU JupyterLab, exposed through Cloudflare Tunnels with Zero Trust.',
    year: '2026',
    url: '',
  },
  {
    id: '07',
    name: 'KueskiWidget',
    subtitle: 'Browser Extension — Tec × Kueski',
    tags: ['TypeScript', 'React', 'WXT', 'Supabase'],
    description:
      'Browser extension built with the WXT framework, React and TypeScript. Academic challenge for Kueski at Tec de Monterrey, with pnpm workspaces and a 3NF Supabase backend.',
    year: 'Mar 2026',
    url: 'https://github.com/PlekDev/KueskiWidget',
  },
  {
    id: '08',
    name: 'FDM',
    subtitle: 'Invoice Automation Tool',
    tags: ['Python', 'PySide6', 'Selenium'],
    description:
      'Desktop automation that streamlines invoice retrieval from Mexico’s tax authority (SAT) — cutting manual workload by 50% with real-time logging and error handling. Packaged as a Windows installer via PyInstaller + NSIS.',
    year: 'Aug 2022',
    url: 'https://github.com/uno21858/FacturaDieselManager',
  },
  {
    id: '09',
    name: 'FlowCast',
    subtitle: 'Streaming Service Modeling System',
    tags: ['C++', 'OOP', 'CMake'],
    description:
      'Object-oriented streaming-platform model with films/series classification, satisfaction ratings and report generation — demonstrating inheritance, polymorphism and operator overloading.',
    year: 'Jun 2025',
    url: 'https://github.com/uno21858/FlowCast',
  },
];

export const timeline = [
  {
    index: '01',
    period: '2022 — Now',
    role: 'Software Developer',
    company: 'Transportes Sánchez Barcelata',
    description:
      'Built FDM, a Python automation tool (PySide6 + Selenium) to streamline invoice retrieval from Mexico’s SAT — reducing manual workload by 50%, with real-time logging and error handling for financial operations. Also built a batch tool to bulk-download a full fiscal-year of payroll invoices for a compliance audit.',
    tags: ['Python', 'Selenium', 'PySide6'],
    current: true,
  },
  {
    index: '02',
    period: 'Oct 2025 — Now',
    role: 'Infrastructure Staff',
    company: 'PawnGuard — ITESM Guadalajara',
    description:
      'Built a CI/CD pipeline with GitHub Actions and Docker to provision CTFd infrastructure for Hack2Dawn, an internal CTF. Authored OSINT challenge labs including GitHub forensics and search-engine reconnaissance.',
    tags: ['Docker', 'GitHub Actions', 'CTFd'],
    current: true,
  },
  {
    index: '03',
    period: '2024 — 2028',
    role: 'B.S. Computer Science & Technology',
    company: 'Tecnológico de Monterrey — ITESM',
    description:
      'Bachelor’s in Computer Science and Technology · GPA 9.0/10.0. AWS Certified Cloud Practitioner (Aug 2025).',
    tags: ['AWS Certified', 'Cloud Practitioner'],
    current: false,
  },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'C++', 'Dart', 'TypeScript', 'JavaScript', 'SQL'] },
  { group: 'ML & Data', items: ['PyTorch', 'NumPy', 'Pandas', 'scikit-learn'] },
  { group: 'Frameworks & Backend', items: ['Flutter', 'Next.js', 'FastAPI', 'AWS', 'Firebase', 'Supabase', 'PostgreSQL'] },
  { group: 'Infra & Security', items: ['Docker', 'GitHub Actions', 'Linux (RHEL)', 'Cloudflare', 'CTFd', 'Nmap'] },
];

export const techs = [
  'Python', 'JavaScript', 'TypeScript', 'C++', 'Dart', 'React', 'Next.js', 'Flutter',
  'Tailwind', 'Node.js', 'FastAPI', 'PyTorch', 'NumPy', 'Pandas', 'PostgreSQL',
  'SQLite', 'Supabase', 'Firebase', 'AWS', 'Docker', 'Proxmox', 'RHEL', 'Cloudflare', 'Figma',
];

export const learning = [
  'TypeScript / TSX',
  'Next.js',
  'PyTorch',
  'SQL — Normalization (NF)',
];
