export type Project = {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  duration: string;
  category: "all" | "fullstack" | "backend" | "ai";
  categoryLabel: string;
  description: string;
  keyMetrics: { label: string; value: string }[];
  technologies: string[];
  highlights: string[];
  architecture: { step: string; detail: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "webmd-ignite",
    title: "WebMD Ignite",
    subtitle: "Healthcare Marketing & Campaign Automation Platform",
    company: "Happiest Minds Technologies (Client: WebMD / Mercury Healthcare)",
    duration: "Aug 2023 – Present",
    category: "fullstack",
    categoryLabel: "Full Stack • Cloud • Healthcare",
    featured: true,
    description:
      "Enterprise healthcare campaign intelligence and forecasting engine. Powers multi-channel patient acquisition, conversion tracking, analytics dashboards, and automated scheduled reporting across hospital networks.",
    keyMetrics: [
      { label: "APIs & Services", value: "25+ Endpoints" },
      { label: "Performance Gain", value: "35% Faster Queries" },
      { label: "Daily Data Ingestion", value: "500K+ Records" },
      { label: "Architecture", value: "Microservices on AWS" },
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "Angular 21",
      "React",
      "PostgreSQL",
      "Snowflake",
      "AWS S3",
      "AWS SQS",
      "Docker",
      "Jest",
      "Swagger / OpenAPI",
      "Claude Code",
      "GitHub Copilot",
    ],
    highlights: [
      "Architected and deployed 25+ production-grade REST APIs and microservices using NestJS, Node.js, and TypeScript.",
      "Engineered campaign forecasting & multi-channel marketing workflows integrating Google Ads and Meta Graph APIs for real-time reporting.",
      "Optimized PostgreSQL & Aurora relational queries, cutting critical endpoint latency by 35% using indexing, connection pooling, and caching.",
      "Constructed automated Snowflake data warehousing pipelines and cron-driven ETL processes handling 500K+ daily analytical records.",
      "Built Angular 21 admin dashboards, interactive analytics panels, and automated export engines generating customized PDF/Excel reports.",
      "Pioneered AI-assisted engineering using Claude Code, GitHub Copilot, and LLM prompt architectures to accelerate sprint delivery velocity by 40%.",
    ],
    architecture: [
      {
        step: "Client UI Layer",
        detail: "Angular 21 & React web applications with role-based auth and interactive Highcharts visualization.",
      },
      {
        step: "API Gateway & Microservices",
        detail: "NestJS / Express gateway handling JWT validation, rate limiting, and routing to dedicated business domains.",
      },
      {
        step: "Data & Storage Tier",
        detail: "High-throughput PostgreSQL/Aurora for transactional workloads + Snowflake for massive analytical queries.",
      },
      {
        step: "Async & Scheduling",
        detail: "Cron workers and AWS SQS queues processing scheduled data synchronization and report generation.",
      },
    ],
  },
  {
    id: "marketron-adtech",
    title: "Marketron Platform",
    subtitle: "AdTech Proposal Engine & Asynchronous Order System",
    company: "Happiest Minds Technologies (Client: Marketron)",
    duration: "Apr 2022 – Jun 2023",
    category: "backend",
    categoryLabel: "Backend • Microservices • AdTech",
    featured: true,
    description:
      "High-throughput advertising proposal and multi-channel campaign order management system. Streamlined cross-platform media buys with automated document compilation and queue-backed worker processing.",
    keyMetrics: [
      { label: "Manual Effort Reduction", value: "70%" },
      { label: "Queue Processing", value: "RabbitMQ Async" },
      { label: "Multi-Format Export", value: "PDF / PPTX / XLSX" },
      { label: "Test Coverage", value: "85%+" },
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "RabbitMQ",
      "AWS",
      "React",
      "JWT",
      "Jest",
      "PDFMake",
      "PptxGenJS",
      "ExcelJS",
    ],
    highlights: [
      "Built resilient backend microservices handling high-concurrency proposal workflows and multi-platform media mappings.",
      "Engineered automated worker pipelines using RabbitMQ to generate complex multi-slide presentation pitches and PDF media plans.",
      "Integrated Demand-Side Platforms (The Trade Desk, MatchCraft) via robust REST APIs and fault-tolerant retry handlers.",
      "Implemented comprehensive Jest automated unit and integration test coverage across all pricing calculation engines.",
    ],
    architecture: [
      {
        step: "Campaign Builder UI",
        detail: "React-based interactive media planning interface sending structured requests to backend services.",
      },
      {
        step: "Node.js Core Microservices",
        detail: "Express.js business logic computing dynamic audience pricing, inventory availability, and order status.",
      },
      {
        step: "RabbitMQ Message Broker",
        detail: "Decouples heavy compute document compilation from interactive API requests for zero-latency response.",
      },
      {
        step: "Document Generation Workers",
        detail: "Background workers compiling customized PowerPoint presentations and Excel financial summaries.",
      },
    ],
  },
  {
    id: "cukzz-foodtech",
    title: "Cukzz Food-Tech Platform",
    subtitle: "Marketplace Backend & Cloud Media Pipeline",
    company: "PRove IT Catalysts",
    duration: "Jul 2021 – Feb 2022",
    category: "backend",
    categoryLabel: "Backend • Cloud • Food-Tech",
    featured: false,
    description:
      "Consumer food-tech platform connecting local home-chef vendors with hungry consumers. Engineered relational schemas, validation pipelines, and secure AWS S3 cloud asset workflows.",
    keyMetrics: [
      { label: "Endpoints Built", value: "15+ Production APIs" },
      { label: "Validation Integrity", value: "100% AJV Schema" },
      { label: "Storage", value: "AWS S3 Cloud" },
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "MongoDB",
      "AWS S3",
      "AJV Schema",
      "Jest",
      "REST APIs",
    ],
    highlights: [
      "Designed PostgreSQL relational schemas with strict data constraints and foreign-key integrity for order processing.",
      "Integrated AWS S3 pre-signed URLs allowing direct, secure browser-to-cloud image uploads with minimal server overhead.",
      "Authored AJV schema validation middleware that intercepted and rejected malformed incoming JSON payloads.",
      "Established automated API testing and debugging workflows with Jest, accelerating bug turnaround time.",
    ],
    architecture: [
      {
        step: "API Consumers",
        detail: "Mobile & Web frontends interacting with authenticated RESTful endpoints.",
      },
      {
        step: "Node.js API Layer",
        detail: "Authentication, validation middleware, and order workflow state machines.",
      },
      {
        step: "Database & Cloud Storage",
        detail: "PostgreSQL for relational transactional integrity + AWS S3 for menu asset storage.",
      },
    ],
  },
  {
    id: "ai-rag-architecture",
    title: "Enterprise AI & RAG Backend",
    subtitle: "Context-Aware LLM Pipeline & Vector Search Engine",
    company: "Engineering & R&D Initiative",
    duration: "2024 – Present",
    category: "ai",
    categoryLabel: "AI Engineering • LLMs • RAG",
    featured: true,
    description:
      "Scalable backend architecture integrating Large Language Models (Claude / OpenAI) with enterprise knowledge bases using Retrieval-Augmented Generation (RAG), vector embeddings, and structured output parsing.",
    keyMetrics: [
      { label: "LLM Framework", value: "LangChain / OpenAI / Claude" },
      { label: "Vector Search", value: "pgvector / Pinecone" },
      { label: "Data Pipeline", value: "Chunking + Embeddings" },
      { label: "Response Validation", value: "Zod Schema Parsing" },
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "OpenAI API",
      "Claude API",
      "pgvector",
      "Pinecone",
      "LangChain",
      "Zod",
      "PostgreSQL",
    ],
    highlights: [
      "Designed RAG retrieval pipelines that ingest enterprise documents, generate vector embeddings, and retrieve semantic context.",
      "Implemented strict JSON schema response validation using Zod to guarantee deterministic LLM responses in production APIs.",
      "Built hybrid search combining PostgreSQL full-text search with vector cosine similarity for high retrieval precision.",
      "Applied prompt engineering techniques (chain-of-thought, few-shot prompting, guardrails) to minimize hallucinations.",
    ],
    architecture: [
      {
        step: "Document Ingestion",
        detail: "Extract, chunk, and embed application data into high-dimensional vector representations.",
      },
      {
        step: "Vector Storage & Indexing",
        detail: "Store vectors in pgvector / Pinecone with HNSW indexing for sub-10ms similarity queries.",
      },
      {
        step: "Semantic Retrieval & Augmentation",
        detail: "Fetch top-k relevant context chunks and inject into structured system prompts.",
      },
      {
        step: "LLM Execution & Validation",
        detail: "Execute model inference and validate returned JSON against strict runtime schemas.",
      },
    ],
  },
];