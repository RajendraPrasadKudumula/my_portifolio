export type Project = {
  title: string;
  company: string;
  duration: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  architecture: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "WebMD Ignite",
    company: "Formerly Mercury Healthcare",
    duration: "Aug 2023 – Present",
    category: "Full Stack • Backend • Healthcare",
    featured: true,

    description:
      "End-to-end backend and full-stack engineering across healthcare and campaign-management workflows, building scalable microservices, REST APIs, admin panels and data-driven application features.",

    technologies: [
      "Node.js",
      "NestJS",
      "Express.js",
      "TypeScript",
      "JavaScript",
      "Angular 21",
      "React",
      "PostgreSQL",
      "Aurora",
      "Snowflake",
      "AWS S3",
      "Microservices",
      "REST APIs",
      "AJV",
      "Swagger",
      "OpenAPI",
      "Highcharts",
      "ExcelJS",
      "PDFMake",
      "Jest",
      "YAML",
      "Cron Jobs",
      "GitHub Copilot",
      "Claude Code",
    ],

    highlights: [
      "Owned end-to-end backend and full-stack development",
      "Built and optimized 20+ RESTful APIs",
      "Developed Angular 21 admin panels and analytics dashboards",
      "Built campaign forecasting and performance workflows",
      "Integrated Google and Meta advertising platforms",
      "Implemented Snowflake data workflows and scheduled processing",
      "Built reusable internal packages and shared backend components",
      "Used AI-assisted development with Copilot, ChatGPT and Claude",
    ],

    architecture: [
      "Angular → REST APIs",
      "REST APIs → Express Services",
      "Services → PostgreSQL / Aurora",
      "Services → Snowflake",
      "Microservices → External Platforms",
      "Cron Jobs → Scheduled Data Processing",
      "Cloud → AWS",
    ],
  },

  {
    title: "Marketron",
    company: "Software Engineer",
    duration: "Apr 2022 – Jun 2023",
    category: "Backend • Microservices • AdTech",

    description:
      "Backend engineering across proposal, campaign, mapping and order-management workflows using Node.js, microservices, asynchronous processing and cloud services.",

    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "MongoDB",
      "AWS",
      "RabbitMQ",
      "REST APIs",
      "Microservices",
      "JWT",
      "Jest",
      "GitHub",
      "CI/CD",
      "PDFMake",
      "PptxGenJS",
      "ExcelJS",
    ],

    highlights: [
      "Built backend microservices and REST APIs",
      "Developed automated proposal-generation workflows",
      "Generated PDF, PowerPoint and Excel reports",
      "Integrated TTD and MatchCraft platforms",
      "Implemented asynchronous processing with RabbitMQ",
      "Supported proposal-to-order and campaign workflows",
      "Implemented JWT authentication and Jest testing",
      "Supported production debugging and CI/CD workflows",
    ],

    architecture: [
      "React → REST APIs",
      "API → Node.js Services",
      "Services → MongoDB",
      "Services → RabbitMQ",
      "Workers → Report Generation",
      "Services → External Platforms",
    ],
  },

  {
    title: "Cukzz Food-Tech Platform",
    company: "Junior Product Developer",
    duration: "Jul 2021 – Feb 2022",
    category: "Backend • Food-Tech",

    description:
      "Backend development for a food-tech platform connecting customers with home-cooked meal providers, with a focus on REST APIs, data workflows, validation and cloud storage.",

    technologies: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "MongoDB",
      "AWS S3",
      "Jest",
      "AJV",
      "REST APIs",
    ],

    highlights: [
      "Delivered backend features and REST APIs",
      "Worked with PostgreSQL and MongoDB workflows",
      "Implemented AJV schema-based validation",
      "Integrated AWS S3 file upload and storage",
      "Built and maintained Jest unit tests",
      "Diagnosed backend issues and feature defects",
      "Collaborated with senior engineers and product teams",
    ],

    architecture: [
      "Client → REST API",
      "API → Node.js Services",
      "Services → PostgreSQL / MongoDB",
      "Services → AWS S3",
      "Jest → Automated Testing",
    ],
  },
];