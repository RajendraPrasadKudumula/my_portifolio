export type Experience = {
  company: string;
  location: string;
  period: string;
  role: string;
  badge?: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    company: "Happiest Minds Technologies Limited",
    location: "Bengaluru, India",
    period: "Aug 2023 – Present",
    role: "Senior Software Engineer",
    badge: "Promoted to Senior",
    summary:
      "Leading full-stack and backend engineering for enterprise healthcare & advertising platforms (WebMD Ignite). Architecting resilient microservices, scheduled data pipelines, high-concurrency REST APIs, and modern Angular/React client dashboards.",
    metrics: [
      { label: "APIs Delivered & Optimized", value: "25+" },
      { label: "Query Latency Reduction", value: "35%" },
      { label: "Data Pipeline Volume", value: "500K+ daily" },
      { label: "System Uptime", value: "99.9%" },
    ],
    highlights: [
      "Architected and deployed 25+ production-grade REST APIs and microservices using NestJS, Node.js, and TypeScript for WebMD Ignite.",
      "Engineered campaign forecasting & multi-channel marketing workflows integrating Google Ads and Meta Graph APIs for real-time reporting.",
      "Optimized PostgreSQL & Aurora relational queries, cutting critical endpoint latency by 35% using indexing, connection pooling, and caching.",
      "Constructed automated Snowflake data warehousing pipelines and cron-driven ETL processes handling 500K+ daily analytical records.",
      "Built Angular 21 admin dashboards, interactive analytics panels, and automated export engines generating customized PDF/Excel reports.",
      "Pioneered AI-assisted engineering using Claude Code, GitHub Copilot, and LLM prompt architectures to accelerate sprint delivery velocity by 40%.",
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "Angular 21",
      "React",
      "PostgreSQL",
      "AWS S3",
      "AWS SQS",
      "Snowflake",
      "Docker",
      "Microservices",
      "REST APIs",
      "Jest",
      "Claude Code",
      "GitHub Copilot",
    ],
  },
  {
    company: "Happiest Minds Technologies Limited",
    location: "Bengaluru, India",
    period: "Feb 2022 – Aug 2023",
    role: "Software Engineer",
    summary:
      "Developed scalable backend microservices, authentication layers, and asynchronous messaging pipelines for AdTech proposals, order management, and multi-tenant reporting systems.",
    metrics: [
      { label: "Microservices Built", value: "6+" },
      { label: "Manual Report Reduction", value: "70%" },
      { label: "Automated Test Coverage", value: "85%+" },
    ],
    highlights: [
      "Engineered core backend microservices for Marketron AdTech platform using Node.js, Express, MongoDB, and RabbitMQ.",
      "Built an automated proposal-to-order engine generating dynamic multi-format exports (PDF, PPTX, Excel) reducing manual effort by 70%.",
      "Integrated external demand-side and supply-side platforms (TTD, MatchCraft) via secure RESTful integrations and webhook listeners.",
      "Implemented JWT authentication, role-based access control (RBAC), and schema validation with AJV.",
      "Authored extensive unit and integration test suites using Jest, maintaining over 85% code coverage across core business modules.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "RabbitMQ",
      "AWS",
      "React",
      "REST APIs",
      "JWT",
      "Jest",
      "CI/CD",
    ],
  },
  {
    company: "PRove IT Catalysts",
    location: "Hyderabad, India",
    period: "Jan 2021 – Feb 2022",
    role: "Junior Product Developer",
    summary:
      "Engineered backend REST APIs, relational database schemas, cloud file storage, and data validation layers for a consumer food-tech ordering platform.",
    metrics: [
      { label: "Core Endpoints Built", value: "15+" },
      { label: "S3 Upload Automation", value: "100%" },
    ],
    highlights: [
      "Developed RESTful endpoints for user authentication, menu catalog management, and order placement workflows.",
      "Designed and maintained PostgreSQL and MongoDB databases, implementing data normalization and indexes.",
      "Integrated AWS S3 for secure media uploads, recipe images, and document storage with pre-signed URLs.",
      "Implemented robust request payload validation using AJV schemas to eliminate data corruption and invalid transactions.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "MongoDB",
      "AWS S3",
      "AJV",
      "Jest",
      "REST APIs",
    ],
  },
];