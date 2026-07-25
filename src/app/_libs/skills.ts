export interface SkillGroup {
  category: string;
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    title: "Programming Languages",
    skills: ["Go", "TypeScript", "Python"],
  },
  {
    category: "Backend",
    title: "Backend Engineering",
    skills: [
      "API Design",
      "Business Logic",
      "Authentication",
      "Calculation Engines",
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
    skills: [
      "PostgreSQL",
      "TimescaleDB",
      "ClickHouse",
      "Elasticsearch",
      "Neo4j",
    ],
  },
  {
    category: "Distributed Systems",
    title: "Events and Workflows",
    skills: ["Temporal", "Redpanda", "Event-Driven Processing"],
  },
  {
    category: "Platform",
    title: "Platform and Reliability",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "Grafana"],
  },
];
