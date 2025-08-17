export interface Experience {
  id: string;
  title: string;
  company: string;
  contractType: string;
  location: string;
  dateRange: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "0",
    title: "Software Engineering Intern",
    company: "Klaviyo",
    contractType: "Internship",
    location: "Boston, MA",
    dateRange: "June 2025 - August 2025",
    description: [
      "Shipped a full-stack analytics feature (Python, React, AWS) for push notifications, adopted by 400+ companies and generating over 5,000 reports in two months.",
      "Enriched analytics reports with 5+ new key data attributes by orchestrating parallel public API calls, providing critical context for Klaviyo MCP server clients.",
      "Prototyped advanced features including a vector search index of Klaviyo help docs and data visualization UI for the Klaviyo MCP server, leading to their direct addition to the company's AI product roadmap."
    ]
  },
  {
    id: "1",
    title: "Researcher",
    company: "Center for Intelligent Information Retrieval",
    contractType: "Research",
    location: "UMass Amherst",
    dateRange: "September 2024 - Present",
    description: [
      "Researching how retrieval models can enhance and adapt to LLMs, as part of an NSF-funded REU",
      "Running experiments on LLMs using Python, HuggingFace API, and open-source text data"
    ]
  },
  {
    id: "2",
    title: "Software Engineering Intern",
    company: "X-Camp Academy",
    contractType: "Internship",
    location: "Remote",
    dateRange: "June 2024 - August 2024",
    description: [
      "Built an LLM-powered coding tutor for 2,000+ students across the US and China",
      "Collaborated with the CEO and IT team to deploy the chatbot using LangChain, React, and OpenAI API",
      "Overhauled the chatbot prototype by adding multi-threading and session-based concurrency across Flask and React, enabling multi-user functionality and scalable message storage",
      "Automated the conversion of 90,000+ student submissions into an embedding index using SQL and integrated it into a dense retrieval system, boosting debugger accuracy by 40%"
    ]
  },
  {
    id: "3",
    title: "Software Engineering Intern",
    company: "Space",
    contractType: "Internship",
    location: "Denver, CO",
    dateRange: "June 2023 - August 2023",
    description: [
      "Promoted to a larger satellite project, focusing on the data subsystem in Agile sprints",
      "Designed and implemented object-oriented subsystem interfaces using C++, Docker, and Google Test while coordinating across multiple different teams",
      "Developed a server in Python to replicate an unbuilt payload, streamlining the testing process and reducing development time"
    ]
  },
  {
    id: "4",
    title: "Junior Software Engineering Intern",
    company: "Lockheed Martin Space",
    contractType: "Internship",
    location: "Denver, CO",
    dateRange: "June 2022 - August 2022",
    description: [
      "Designed, tested, and launched components for a large C++ codebase in a Cubesat mission",
      "Collaborated in a large Agile team, developing with CI/CD pipelines in GitLab",
      "Accelerated inter-application messaging by 100% by enhancing the existing TCP service with multi-threading"
    ]
  }
];

