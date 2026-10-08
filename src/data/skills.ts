export type SkillCategory = {
  id: string;
  title: string;
  tagline: string;
  featured?: boolean;
  skills: {
    name: string;
    level?: string;
    primary?: boolean;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & System Architecture",
    tagline: "Scalable microservices, resilient APIs, and asynchronous message processing.",
    featured: true,
    skills: [
      { name: "Node.js", primary: true },
      { name: "TypeScript", primary: true },
      { name: "NestJS", primary: true },
      { name: "Express.js", primary: true },
      { name: "REST APIs", primary: true },
      { name: "Microservices", primary: true },
      { name: "API Architecture & Design", primary: true },
      { name: "Message Queues (SQS, RabbitMQ)" },
      { name: "JWT & OAuth2 Authentication" },
      { name: "Cron Jobs & Scheduled Tasks" },
      { name: "AJV Schema Validation" },
      { name: "Swagger / OpenAPI" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Data Engineering",
    tagline: "Relational optimization, high-throughput analytical warehouses, and vector stores.",
    featured: true,
    skills: [
      { name: "PostgreSQL", primary: true },
      { name: "MongoDB", primary: true },
      { name: "Snowflake", primary: true },
      { name: "Amazon Aurora" },
      { name: "Redis Caching" },
      { name: "SQL Query Optimization", primary: true },
      { name: "Schema Design & Indexing", primary: true },
      { name: "pgvector (Vector DB)" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Full Stack",
    tagline: "Modern reactive user interfaces, dashboards, and enterprise design systems.",
    featured: true,
    skills: [
      { name: "React", primary: true },
      { name: "Next.js", primary: true },
      { name: "Angular (v14–v21)", primary: true },
      { name: "JavaScript (ES6+)", primary: true },
      { name: "Tailwind CSS", primary: true },
      { name: "HTML5 / CSS3" },
      { name: "Highcharts Data Visualizations" },
      { name: "State Management (Redux, Context)" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Infrastructure",
    tagline: "Deploying, containerizing, and orchestrating reliable cloud solutions on AWS.",
    featured: false,
    skills: [
      { name: "AWS (S3, SQS, EC2, Lambda)", primary: true },
      { name: "Docker & Containerization", primary: true },
      { name: "CI/CD Pipelines (GitHub Actions)" },
      { name: "Git & Version Control", primary: true },
      { name: "Vercel & Cloud Deployments" },
      { name: "Monitoring & Logging" },
    ],
  },
  {
    id: "ai-engineering",
    title: "AI & Augmented Engineering",
    tagline: "Harnessing LLM APIs, RAG pipelines, and AI-accelerated development workflows.",
    featured: true,
    skills: [
      { name: "LLM APIs (OpenAI, Anthropic Claude)", primary: true },
      { name: "RAG (Retrieval-Augmented Gen)", primary: true },
      { name: "Vector Databases & Embeddings" },
      { name: "Prompt Engineering & Few-Shot", primary: true },
      { name: "Claude Code & GitHub Copilot", primary: true },
      { name: "Structured JSON Parsing (Zod)" },
      { name: "ChatGPT Accelerated Delivery" },
    ],
  },
  {
    id: "testing-quality",
    title: "Testing, Tooling & Quality",
    tagline: "Ensuring fault-tolerance, backward compatibility, and clean maintainable code.",
    featured: false,
    skills: [
      { name: "Jest Testing Framework", primary: true },
      { name: "Unit & Integration Testing", primary: true },
      { name: "Postman & API Test Suites" },
      { name: "ExcelJS / PDFMake / PptxGenJS" },
      { name: "Clean Code & Design Patterns" },
      { name: "Agile & Scrum Methodologies" },
    ],
  },
];