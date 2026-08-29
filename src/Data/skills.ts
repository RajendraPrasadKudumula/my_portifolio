export const skills = {
  backend: [
    "Node.js",
    "TypeScript",
    "JavaScript",
    "NestJS",
    "Express.js",
    "REST APIs",
    "Microservices",
    "API Design",
    "Authentication",
    "Authorization",
  ],

  frontend: [
    "React",
    "Next.js",
    "React Native",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Redux Toolkit",
    "React Query",
  ],

  databases: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "SQL",
    "Database Design",
    "Indexing",
    "Query Optimization",
  ],

  cloud: [
    "AWS",
    "Amazon S3",
    "Amazon SQS",
    "Docker",
    "CI/CD",
    "Cloud Architecture",
  ],

  testing: [
    "Jest",
    "Unit Testing",
    "Integration Testing",
    "API Testing",
  ],

  ai: [
    "LLM Integration",
    "RAG",
    "Vector Databases",
    "Prompt Engineering",
    "AI APIs",
    "Claude",
    "GitHub Copilot",
    "ChatGPT",
  ],
};

export const skillCategories = [
  {
    title: "Backend Engineering",
    description:
      "Building APIs, services and scalable backend systems.",
    items: skills.backend,
    featured: true,
  },
  {
    title: "Frontend Engineering",
    description:
      "Building responsive interfaces and modern full-stack applications.",
    items: skills.frontend,
    featured: true,
  },
  {
    title: "Databases",
    description:
      "Designing data models and reliable database systems.",
    items: skills.databases,
    featured: false,
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Deploying and operating production-ready applications.",
    items: skills.cloud,
    featured: false,
  },
  {
    title: "Testing & Quality",
    description:
      "Writing reliable, maintainable and testable software.",
    items: skills.testing,
    featured: false,
  },
  {
    title: "AI Engineering",
    description:
      "Integrating modern AI capabilities into practical applications.",
    items: skills.ai,
    featured: true,
  },
];