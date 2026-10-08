export type Education = {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  badgeText?: string;
};

export const educationData: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics & Communication Engineering",
    institution: "JNTU Hyderabad Affiliated Institution",
    period: "2017 – 2021",
    location: "Telangana, India",
    highlights: [
      "Graduated with strong foundation in Computer Science fundamentals, Data Structures & Algorithms, and Computer Networking.",
      "Developed end-to-end software projects and completed specialized training in Full Stack JavaScript & Node.js ecosystem.",
    ],
  },
];

export const certificationsData: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner / Cloud Architectures",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    badgeText: "Cloud Architecture",
  },
  {
    name: "Advanced Full-Stack Engineering (Node.js, NestJS & React)",
    issuer: "Enterprise Training - Happiest Minds",
    year: "2023",
    badgeText: "Enterprise Certified",
  },
  {
    name: "AI Engineering & Modern LLM Workflows",
    issuer: "Specialized Upskilling",
    year: "2025",
    badgeText: "AI & RAG",
  },
];

