export interface Technology {
  name: string;
  icon: string;
  category: 'languages' | 'frameworks' | 'tools' | 'ml';
}

export const technologies: Technology[] = [
  { name: "Python", icon: "/icons/python.svg", category: "languages" },
  { name: "C/C++", icon: "/icons/cpp.svg", category: "languages" },
  { name: "JavaScript", icon: "/icons/javascript.svg", category: "languages" },
  { name: "SQL", icon: "/icons/sql.svg", category: "languages" },
  { name: "React", icon: "/icons/react.svg", category: "frameworks" },
  { name: "Flask", icon: "/icons/flask.svg", category: "frameworks" },
  { name: "PyTorch", icon: "/icons/pytorch.svg", category: "ml" },
  { name: "HuggingFace", icon: "/icons/huggingface.svg", category: "ml" },
  { name: "Sklearn", icon: "/icons/sklearn.svg", category: "ml" },
  { name: "LangChain", icon: "/icons/langchain.svg", category: "ml" },
  { name: "CI/CD", icon: "/icons/cicd.svg", category: "tools" },
  { name: "Docker", icon: "/icons/docker.svg", category: "tools" },
];

export const categories = {
  languages: "Programming Languages",
  frameworks: "Frameworks",
  tools: "Tools",
  ml: "Machine Learning"
};
