import tracepilot from "./assets/tracepilot.png";
import landed from "./assets/landed.png";
import mirror from "./assets/mirror.svg";
import fitforge from "./assets/fitforge.svg";
import forensic from "./assets/forensic.svg";

// ⚠️ TODO: fill these in before publishing
export const contact = {
  email: "ymsutej122@gmail.com",
  github: "https://github.com/sutejym122",
  linkedin: "https://www.linkedin.com/in/sutej-ym/",
  // Drop your PDF at public/resume.pdf and this just works.
  resume: "/Sutej YM Software Engineer.pdf",
};

// Scannable proof, right under the headline. Keep these verifiable.
export const proof = [
  { stat: "40%", label: "faster product search at Find Me" },
  { stat: "15 mo", label: "supporting enterprise IAM & ERP systems" },
  { stat: "5", label: "products built end-to-end, solo" },
  { stat: "M.S.", label: "Computer Science, SUNY Binghamton" },
];

// Shown beside the contact CTA so recruiters can qualify fast.
export const lookingFor = {
  roles: "Backend, full-stack or platform engineering",
  level: "Roughly 2 years of professional experience",
  stack: "Python · FastAPI · TypeScript · React · PostgreSQL · AWS",
  // ⚠️ TODO: set your real location and work preference, and add work
  // authorization here if you want it answered before the first call.
  location: "Open to remote and relocation",
};

export const projects = [
  {
    name: "TracePilot",
    kind: "Observability platform",
    blurb:
      "When a service degrades, the first question is always \u201cwhat changed?\u201d TracePilot answers it. Services, releases, health checks and latency metrics all connect into one loop, so a bad metric traces straight back to the release that caused it. Built end to end: schema, API, dashboard, deploy.",
    stack: ["FastAPI", "React", "TypeScript", "PostgreSQL"],
    image: tracepilot,
    featured: true,
    links: {
      demo: "https://trace-pilot-two.vercel.app",
      source: "https://github.com/sutejym122/TracePilot",
    },
  },
  {
    name: "Landed",
    kind: "Job search tracker",
    blurb:
      "A spreadsheet tells you what you applied to. It does not tell you that your response rate fell the week you stopped writing cover letters, or that eight applications have gone quiet long enough to chase. Landed tracks applications on a board, derives funnel and response-rate analytics from stage history, and checks any posting against your skills.",
    stack: ["FastAPI", "React", "SQLAlchemy", "SQLite"],
    image: landed,
    featured: true,
    links: {
      demo: "https://landed-five.vercel.app",
      source: "https://github.com/sutejym122/landed",
    },
  },
  {
    name: "Mirror",
    kind: "LLM evaluation harness",
    blurb:
      "LLM output degrades quietly. A prompt tweak passes review and breaks extraction two weeks later. Mirror treats prompts like code: versioned test suites, scored responses, and a hard pass or fail against a saved baseline, so regressions block the build instead of reaching users.",
    stack: ["Python", "SQLAlchemy", "CLI"],
    image: mirror,
    featured: true,
    links: { source: "https://github.com/sutejym122/mirror" },
  },
  {
    name: "FitForge",
    kind: "iOS app",
    blurb:
      "A native iOS companion for training and nutrition. Pulls activity from HealthKit, generates meal plans against calorie and macro targets through a FastAPI service, and surfaces streaks and weekly insight on the home screen through WidgetKit.",
    stack: ["SwiftUI", "HealthKit", "WidgetKit", "FastAPI"],
    image: fitforge,
    links: { source: "https://github.com/sutejym122/FitForge-iOS" },
  },
  {
    name: "Forensic Face Sketch",
    kind: "Desktop application",
    blurb:
      "Assembles composite suspect sketches from individual facial features, encodes them, then ranks them against a stored record set using cloud face recognition. Turns a manual sketch and compare workflow into a searchable one.",
    stack: ["JavaFX", "AWS Rekognition", "AWS S3"],
    image: forensic,
    links: { source: "https://github.com/sutejym122/Forensic-Face-Sketch" },
  },
];

export const roles = [
  {
    // ⚠️ TODO: confirm exact months
    when: "Aug 2025 - Feb 2026",
    title: "Research Intern",
    org: "Binghamton University, School of Computing",
    points: [
      "Built the MAPS feature for OPRA, an open-source Django platform for preference reporting, voting and resource allocation used in departmental research.",
      "Designed a PostGIS-backed Django REST Framework API serving district, election and map-layer data, including an importer for real New Jersey congressional-district geometries.",
      "Built the front end with React and Leaflet: an interactive district map, a filterable selection sidebar and a vote distribution panel.",
    ],
  },
  {
    // ⚠️ TODO: confirm exact months
    when: "2023",
    title: "Software Developer",
    org: "Find Me",
    points: [
      "Built store and product search end to end, covering the React front end, Flask REST endpoints, Typesense indexing, and the full PostgreSQL and MongoDB schema behind it.",
      "Cut search latency by 40% by debouncing input ahead of the search API.",
      "Contributed to observability integration work across OpenTelemetry, Promtail and Grafana Loki.",
    ],
  },
  {
    when: "Mar 2022 - Jun 2023",
    title: "Programmer Analyst",
    org: "Cognizant Technology Solutions",
    points: [
      "Supported enterprise identity and ERP systems, covering Azure Active Directory access troubleshooting and configuration validation alongside JD Edwards production issue investigation across logs, SQL and data flows.",
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
