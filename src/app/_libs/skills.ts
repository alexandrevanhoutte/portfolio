export interface SkillGroup {
  category: string;
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend Stack",
    title: "Backend Technologies",
    skills: ["Go", "Node.js", "TypeScript", "NestJS"],
  },
  {
    category: "Engineering",
    title: "Backend Engineering",
    skills: [
      "API Design",
      "System Design",
      "Authentication",
      "Multi-tenancy",
      "Calculation Workflows",
    ],
  },
  {
    category: "Interfaces",
    title: "APIs and Contracts",
    skills: ["REST", "GraphQL", "gRPC", "Protobuf"],
  },
  {
    category: "Data",
    title: "Data and Search",
    skills: ["PostgreSQL", "TimescaleDB", "Elasticsearch", "Neo4j", "Redis"],
  },
  {
    category: "Distributed Systems",
    title: "Events and Workflows",
    skills: ["Redpanda", "Temporal", "Event-Driven Processing"],
  },
  {
    category: "Platform",
    title: "Platform and Observability",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "ArgoCD",
      "Grafana",
    ],
  },
];
