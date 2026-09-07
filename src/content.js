import tracepilot from "./assets/tracepilot.png";
import mirror from "./assets/mirror.svg";
import fitforge from "./assets/fitforge.svg";
import forensic from "./assets/forensic.svg";

// ⚠️ TODO — fill these in before publishing
export const contact = {
  email: "your.email@example.com",
  github: "https://github.com/sutejym122",
  linkedin: "https://www.linkedin.com/in/YOUR-HANDLE",
};

export const projects = [
  {
    name: "TracePilot",
    kind: "Observability platform",
    blurb:
      "Release intelligence for teams that ship often. TracePilot connects services, releases, health checks and latency metrics into a single loop, so when a metric degrades you can trace it straight back to the release that likely caused it.",
    stack: ["FastAPI", "React", "TypeScript", "PostgreSQL"],
    image: tracepilot,
    featured: true,
    links: {
      demo: "https://trace-pilot-two.vercel.app",
      source: "https://github.com/sutejym122/TracePilot",
    },
  },
  {
    name: "Mirror",
    kind: "LLM evaluation harness",
    blurb:
      "Treats prompts like code. Mirror runs versioned test suites against a prompt, scores the responses, and fails the run when quality drops below a saved baseline — regression testing for models, built to sit inside CI.",
    stack: ["Python", "SQLAlchemy", "CLI"],
    image: mirror,
    featured: true,
    links: { source: null },
  },
  {
    name: "FitForge",
    kind: "iOS app",
    blurb:
      "A native fitness and nutrition companion. Reads activity from HealthKit, generates meal plans against your calorie and macro targets, and keeps streaks and weekly insights on the home screen.",
    stack: ["SwiftUI", "HealthKit", "WidgetKit", "FastAPI"],
    image: fitforge,
    links: { source: "https://github.com/sutejym122/FitForge-iOS" },
  },
  {
    name: "Forensic Face Sketch",
    kind: "Desktop application",
    blurb:
      "Builds composite suspect sketches from individual facial components, then compares them against stored records using cloud face recognition to surface likely matches.",
    stack: ["JavaFX", "AWS Rekognition", "AWS S3"],
    image: forensic,
    links: { source: "https://github.com/sutejym122/Forensic-Face-Sketch" },
  },
];

export const roles = [
  {
    // ⚠️ TODO — confirm exact months
    when: "Aug 2025 — Feb 2026",
    title: "Research Intern",
    org: "Binghamton University, School of Computing",
    points: [
      "Built the MAPS feature for OPRA, an open-source Django platform for preference reporting, voting and resource allocation used in departmental research.",
      "Designed a PostGIS-backed Django REST Framework API serving district, election and map-layer data, including an importer for real New Jersey congressional-district geometries.",
      "Built the front end with React and Leaflet — an interactive district map, filterable selection sidebar and vote-distribution panel.",
    ],
  },
  {
    // ⚠️ TODO — confirm exact months
    when: "2023",
    title: "Software Developer",
    org: "Find Me",
    points: [
      "Built store and product search end-to-end — React front end, Flask REST endpoints, Typesense indexing, and the full PostgreSQL and MongoDB schema behind it.",
      "Cut search latency by 40% by debouncing input ahead of the search API.",
      "Contributed to observability integration work across OpenTelemetry, Promtail and Grafana Loki.",
    ],
  },
  {
    when: "Mar 2022 — Jun 2023",
    title: "Programmer Analyst",
    org: "Cognizant Technology Solutions",
    points: [
      "Supported enterprise identity and ERP systems — Azure Active Directory access troubleshooting and configuration validation, alongside JD Edwards production issue investigation across logs, SQL and data flows.",
      "Automated repetitive administration and validation work with PowerShell, and handled integration tasks spanning AWS S3 and Azure Blob Storage.",
      "Converted from a nine-month internship into the full-time role.",
    ],
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Swift", "SQL"],
  },
  {
    group: "Backend",
    items: ["FastAPI", "Flask", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    group: "Frontend",
    items: ["React", "Angular", "SwiftUI", "HTML & CSS"],
  },
  {
    group: "Platform",
    items: ["AWS", "Docker", "Git", "OpenTelemetry"],
  },
];
