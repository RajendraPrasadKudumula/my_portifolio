export type Experience = {
  company: string;
  location: string;
  period: string;
  role: string;
  description: string;
  technologies: string[];
};

export const experience: Experience[] = [
  {
    company: "Happiest Minds Technologies Limited",
    location: "Bengaluru, India",
    period: "Aug 2023 – Present",
    role: "Senior Software Engineer",
    description:
      "Building and enhancing production-grade full-stack and backend applications across healthcare and campaign-management workflows, with a focus on scalable APIs, microservices, data processing and AI-assisted engineering.",
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "Angular",
      "PostgreSQL",
      "AWS",
      "Snowflake",
      "Microservices",
      "REST APIs",
      "GitHub Copilot",
      "Claude Code",
    ],
  },

  {
    company: "Happiest Minds Technologies Limited",
    location: "Bengaluru, India",
    period: "Feb 2022 – Aug 2023",
    role: "Software Engineer",
    description:
      "Developed backend services, REST APIs and full-stack application features while working with databases, cloud services, third-party integrations and production application workflows.",
    technologies: [
      "Node.js",
      "NestJS",
      "Express.js",
      "TypeScript",
      "JavaScript",
      "Angular",
      "React",
      "PostgreSQL",
      "AWS",
      "Microservices",
      "REST APIs",
      "Jest",
    ],
  },

  {
    company: "PRove IT Catalysts",
    location: "Hyderabad, India",
    period: "Jan 2021 – Feb 2022",
    role: "Junior Product Developer (Internship)",
    description:
      "Started my professional software engineering journey by contributing to backend features, REST APIs, database workflows, validation, cloud storage and application testing.",
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
  },
];