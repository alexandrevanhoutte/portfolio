export interface CapabilityGroup {
  id: string;
  category: string;
  title: string;
  technologies: string[];
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "interfaces",
    category: "Interfaces",
    title: "API Interfaces",
    technologies: ["REST", "GraphQL", "gRPC"],
  },
  {
    id: "services",
    category: "Services",
    title: "Go Services",
    technologies: ["Go", "Domain Modeling", "Authentication"],
  },
  {
    id: "data",
    category: "Data",
    title: "Data Stores",
    technologies: ["PostgreSQL", "TimescaleDB", "ClickHouse"],
  },
  {
    id: "search",
    category: "Search",
    title: "Search Systems",
    technologies: ["Elasticsearch", "Neo4j"],
  },
  {
    id: "workflows",
    category: "Workflows",
    title: "Event Workflows",
    technologies: ["Redpanda", "Temporal"],
  },
  {
    id: "platform",
    category: "Platform",
    title: "Delivery Platform",
    technologies: ["Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    id: "observability",
    category: "Observability",
    title: "Operational Signals",
    technologies: ["Grafana", "Logs", "Metrics"],
  },
];
