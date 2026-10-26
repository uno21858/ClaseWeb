// src/data.js: portfolio content for Erick Sánchez (synced with Resume V8)
export const identity = {
  name: 'Erick Sánchez',
  role: 'Embedded & Software Engineer',
  focus: 'Embedded · Backend · ML',
  location: 'Guadalajara, Jalisco · MX',
  headline: ['Crafting code', 'as digital', 'artifacts.'],
  intro:
    'Computer Science student and undergraduate research assistant at Tecnológico de Monterrey. I build embedded systems end to end, from ESP-IDF firmware and KiCad sensor boards to the telemetry backends behind them, and I ship software: an expense-splitting app live on the App Store and Google Play, PyTorch models trained on my own GPU server, and invoice automation for Mexico’s SAT.',
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

// linkLabel is optional; defaults to "Source"
export const projects = [
  {
    id: '01',
    name: 'Home Water SCADA',
    subtitle: 'Water Monitoring & Chlorination Controller',
    tags: ['C++', 'ESP32-S3', 'ESP-IDF', 'FreeRTOS', 'LVGL', 'KiCad'],
    description:
      'ESP32-S3 controller with a 7-inch touch HMI that reads a hall-effect flow sensor, two pressure transducers through a 16-bit I2C ADC (ADS1115) and a 4–20 mA level transmitter, and drives a MOSFET-switched 12 V mixing pump; metered volume sets the chlorine dosing. Firmware on ESP-IDF with FreeRTOS tasks (sensors, LVGL, uploads), signed OTA updates over WiFi with automatic rollback, and a telemetry client (Influx line protocol, one-day offline queue) for a home metrics server. HMI in C++ with LVGL, developed on a desktop simulator before the board. Sensor node designed in KiCad (12 V input, 5 V regulation, 24 V boost, fused and zener-clamped input, flyback diode), built on perfboard and bench-tested channel by channel, expected vs. measured, with the values recorded in the repo.',
    badge: 'Self-directed',
    year: 'Sep 2026 – Now',
    url: 'https://github.com/uno21858/home-water-scada',
    featured: true,
  },
  {
    id: '02',
    name: 'Cuentas Claras LATAM',
    subtitle: 'Expense-Splitting Mobile App',
    tags: ['Flutter', 'Supabase', 'AWS Cognito', 'Lambda', 'RevenueCat'],
    description:
      'Built solo and shipped to the App Store and Google Play. The client never queries tables directly: ~170 SECURITY DEFINER RPCs check the caller’s Cognito JWT, RLS covers all 21 tables and bank details are encrypted with pgcrypto using a key held in Supabase Vault. Security-tested my own production API with reFlutter, Frida/objection and Burp Suite, replaying requests with a second account’s JWT, and found and fixed an IDOR that let a regular user modify other users’ data.',
    badge: 'Solo Developer · Live',
    year: '2025 – Now',
    url: 'https://cuentasclaraslatam.com',
    linkLabel: 'Visit site',
  },
  {
    id: '03',
    name: 'Water Column Telemetry',
    subtitle: 'Filtration Rig Telemetry · Undergraduate Research',
    tags: ['C++', 'ESP8266', 'Supabase', 'Next.js', 'Vercel'],
    description:
      'Telemetry stack for a four-column water filtration rig at Tec de Monterrey: interrupt-driven ESP8266 firmware in C++ that counts flow-sensor pulses per column, a Supabase (PostgreSQL) schema for the readings and a Next.js dashboard on Vercel. Interrupts instead of polling: ISRs placed in IRAM, as the ESP8266 requires, and shared counters read inside critical sections so no pulse is lost or torn between the ISR and the main loop.',
    badge: 'Research · ITESM',
    year: 'Aug 2026 – Now',
    url: 'https://github.com/uno21858/water-column-telemetry',
  },
  {
    id: '04',
    name: 'Traffic Sign CNN',
    subtitle: 'Computer Vision · Undergraduate Research',
    tags: ['Python', 'PyTorch', 'CNN', 'Docker', 'FastAPI'],
    description:
      'Undergraduate research at Tec de Monterrey with Prof. Atoany Fierro Radilla: a custom ~628K-parameter CNN trained in PyTorch on GTSRB (43 classes), reaching 92% on the official test set. GPU training on a self-hosted RHEL server (Docker, NVIDIA Container Toolkit), with the model served through FastAPI.',
    badge: '92% accuracy · GTSRB',
    year: 'Feb – Jun 2026',
    url: 'https://github.com/uno21858/traffic-sign-cnn',
  },
  {
    id: '05',
    name: 'Home Lab & LLM Fine-Tuning',
    subtitle: 'Self-Hosted GPU Infrastructure',
    tags: ['Proxmox', 'RHEL', 'CUDA', 'PEFT', 'Ollama'],
    description:
      'Proxmox VE hypervisor with dual RTX 3060 passthrough on RHEL 10, exposed through Cloudflare Tunnels with Zero Trust. On it I fine-tuned Qwen3-8B with QLoRA on 200K+ personal chat messages to model a conversational persona, merged the adapters with PEFT, quantized to GGUF and served it locally via Ollama.',
    badge: 'Dual RTX 3060',
    year: '2026',
    url: '',
  },
  {
    id: '06',
    name: 'Zenalyse',
    subtitle: 'IoT Environmental Monitoring System',
    tags: ['Raspberry Pi', 'AWS EC2', 'Next.js', 'PostgreSQL', 'Python'],
    description:
      'Backend and project manager in a 6-person team. AWS EC2 backend with PostgreSQL behind a Next.js dashboard, correlating Raspberry Pi sensor data (DHT11, MQ-135, PIR) with user stress surveys.',
    badge: '1st of 8 teams · Skilliket',
    year: 'Nov 2025',
    url: 'https://www.linkedin.com/posts/erick-alberto-sanchez_iot-internetofthings-raspberrypi-ugcPost-7404780671338180608-Ht0X',
    linkLabel: 'Read post',
  },
  {
    id: '07',
    name: 'Hack2Dawn',
    subtitle: 'CTF Competition Infrastructure',
    tags: ['Docker', 'GitHub Actions', 'CTFd', 'OSINT'],
    description:
      'Internal jeopardy-style CTF for PawnGuard, sponsored by MLH, 330ohms and Google Cloud. CI/CD pipeline with GitHub Actions and Docker that provisions CTFd on a VPS, live server monitoring during the event, and two custom OSINT challenges: GitHub commit forensics and search-engine dorking for exposed documents.',
    badge: 'PawnGuard · ITESM',
    year: 'Oct 2025',
    url: 'https://hack.pawnguard.org',
    linkLabel: 'Visit site',
  },
  {
    id: '08',
    name: 'FDM',
    subtitle: 'Factura Diesel Manager · SAT Automation',
    tags: ['Python', 'PySide6', 'Selenium', 'PyInstaller'],
    description:
      'Desktop app built on my own initiative that downloads diesel invoices from Mexico’s tax authority (SAT) and totals liters and cost, replacing a manual reconciliation workflow. Ships as a Windows installer (PyInstaller + NSIS). Its architecture became a bulk payroll-invoice downloader (PDF + XML) with batch scheduling and retry logic that pulled 5,000+ invoices for a full fiscal-year audit within SAT’s daily download limits.',
    badge: '5,000+ invoices',
    year: 'Aug 2022',
    url: 'https://github.com/uno21858/FacturaDieselManager',
  },
  {
    id: '09',
    name: 'KueskiWidget',
    subtitle: 'Browser Extension · Tec × Kueski',
    tags: ['TypeScript', 'React', 'WXT', 'Supabase'],
    description:
      'Browser extension built with the WXT framework, React and TypeScript. Academic challenge for Kueski at Tec de Monterrey, with pnpm workspaces and a 3NF Supabase backend.',
    year: 'Mar 2026',
    url: 'https://github.com/PlekDev/KueskiWidget',
  },
  {
    id: '10',
    name: 'GatePredict',
    subtitle: 'Airline Catering w/ AI Vision · HackMTY',
    tags: ['Flutter', 'FastAPI', 'PostgreSQL', 'Gemini Vision'],
    description:
      'Backend for an offline-first airline-catering system. Syncs flight plans pre-flight, runs offline on SQLite mid-flight, and reconciles on landing. Uses Gemini Vision for product recognition.',
    badge: 'HackMTY 2025',
    year: 'Oct 2025',
    url: 'https://github.com/PlekDev/gateGroup',
  },
  {
    id: '11',
    name: 'FlowCast',
    subtitle: 'Streaming Service Modeling System',
    tags: ['C++', 'OOP', 'CMake'],
    description:
      'Object-oriented streaming-platform model with films/series classification, satisfaction ratings and report generation, demonstrating inheritance, polymorphism and operator overloading.',
    year: 'Jun 2025',
    url: 'https://github.com/uno21858/FlowCast',
  },
];

// status: label shown on the left of each entry; current: highlights the node
export const timeline = [
  {
    index: '01',
    period: 'Aug 2026 – Now',
    role: 'Undergraduate Research Assistant',
    company: 'Water Filtration Telemetry · Tec de Monterrey',
    description:
      'Building the telemetry stack for a four-column water filtration rig: interrupt-driven ESP8266 firmware in C++ that counts flow-sensor pulses per column, a Supabase (PostgreSQL) schema for the readings and a Next.js dashboard on Vercel. Chose interrupts over polling for the four flow sensors: ISRs placed in IRAM and shared counters read inside critical sections so no pulse is lost or torn between the ISR and the main loop.',
    tags: ['C++', 'ESP8266', 'Supabase', 'Next.js'],
    status: 'Current',
    current: true,
  },
  {
    index: '02',
    period: 'Feb – Jun 2026',
    role: 'Undergraduate Research Assistant',
    company: 'Computer Vision · Tec de Monterrey',
    description:
      'Trained a custom ~628K-parameter CNN in PyTorch on GTSRB traffic signs (43 classes), reaching 92% on the official test set. Set up GPU training on a self-hosted RHEL server (Docker, NVIDIA Container Toolkit) and served the model with FastAPI. Advisor: Prof. Atoany Fierro Radilla.',
    tags: ['PyTorch', 'Docker', 'FastAPI'],
    status: 'Completed',
    current: false,
  },
  {
    index: '03',
    period: 'Oct 2025 – Now',
    role: 'Treasurer, previously Infrastructure Staff',
    company: 'PawnGuard · Cybersecurity Student Group',
    description:
      'Co-organized Hack2Dawn, an internal jeopardy-style CTF sponsored by MLH, 330ohms and Google Cloud. Engineered its CI/CD pipeline (GitHub Actions, Docker) that provisions CTFd on a VPS, monitored the server during the live event and wrote two OSINT challenges: GitHub commit forensics and search-engine dorking.',
    tags: ['Docker', 'GitHub Actions', 'CTFd', 'OSINT'],
    status: 'Current',
    current: true,
  },
  {
    index: '04',
    period: 'Aug 2022 – Now',
    role: 'Administrative Assistant (Part-time)',
    company: 'Transportes Sánchez Barcelata',
    description:
      'Built FDM on my own initiative: a Python desktop app (PySide6, Selenium) that downloads diesel invoices from SAT and totals liters and cost, replacing a manual reconciliation workflow. Adapted its architecture into a bulk payroll-invoice downloader with batch scheduling and retry logic that pulled 5,000+ invoices (PDF + XML) for a full fiscal-year compliance audit within SAT’s daily download limits.',
    tags: ['Python', 'PySide6', 'Selenium'],
    status: 'Current',
    current: true,
  },
  {
    index: '05',
    period: 'Aug 2024 – Jun 2028',
    role: 'B.S. Computer Science & Technology',
    company: 'Tecnológico de Monterrey · ITESM',
    description:
      'GPA 9.0/10.0. Coursework: Data Structures and Algorithms, Computer Architecture, Computer Networks, IoT Software Engineering, Cybersecurity. Planned concentration in Semiconductors (E1002–E1004) starting Aug 2027.',
    tags: ['AWS Cloud Practitioner', 'Oracle Java Foundations', 'Cambridge B2 First'],
    status: 'Education',
    current: false,
  },
];

export const skills = [
  { group: 'Languages', items: ['C++', 'Python', 'Dart', 'SQL (PL/pgSQL)', 'TypeScript', 'JavaScript', 'Java', 'Bash'] },
  {
    group: 'Embedded',
    items: [
      'ESP32-S3 / ESP8266', 'ESP-IDF', 'FreeRTOS', 'PlatformIO', 'ARM Cortex-M33 (RP2350)', 'Pico SDK',
      'Interrupts & ISRs', 'I2C', 'UART', 'ADC & 4–20 mA', 'LVGL', 'KiCad', 'Bench testing', '3D printing',
    ],
  },
  { group: 'ML & Data', items: ['PyTorch', 'PEFT (QLoRA)', 'NumPy', 'Pandas', 'scikit-learn', 'CUDA (basics)'] },
  { group: 'Backend & Cloud', items: ['Supabase', 'PostgreSQL', 'AWS (Cognito, Lambda, EC2)', 'Firebase', 'FastAPI'] },
  {
    group: 'Frameworks & Tools',
    items: ['Flutter', 'Next.js', 'PySide6', 'Selenium', 'Docker', 'Git', 'GitHub Actions', 'Linux (RHEL, Ubuntu)', 'Cloudflare (Zero Trust, Tunnels)'],
  },
  { group: 'Security', items: ['Burp Suite', 'Frida', 'objection', 'reFlutter', 'Nmap', 'Wireshark'] },
];

export const techs = [
  'C++', 'Python', 'TypeScript', 'Dart', 'SQL', 'ESP32', 'ESP-IDF', 'FreeRTOS',
  'RP2350', 'LVGL', 'KiCad', 'PlatformIO', 'React', 'Next.js', 'Flutter', 'FastAPI',
  'PyTorch', 'PEFT', 'Supabase', 'PostgreSQL', 'AWS', 'Firebase', 'Docker',
  'GitHub Actions', 'Proxmox', 'RHEL', 'Ollama', 'Cloudflare', 'Burp Suite',
];

export const learning = [
  'ESP-IDF · FreeRTOS',
  'ARM Cortex-M33 · RP2350 / Pico SDK',
  'CUDA · GPU programming',
  'Semiconductors',
];
