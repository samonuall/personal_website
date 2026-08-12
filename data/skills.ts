export interface Skill {
  name: string;
  /** Path under /public/icons. Falls back to initials when absent. */
  icon?: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "C++", icon: "/icons/cpp.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "SQL", icon: "/icons/sql.svg" },
      { name: "Java" },
    ],
  },
  {
    id: "ml",
    label: "ML & research",
    skills: [
      { name: "PyTorch", icon: "/icons/pytorch.svg" },
      { name: "HuggingFace", icon: "/icons/huggingface.svg" },
      { name: "scikit-learn", icon: "/icons/sklearn.svg" },
      { name: "vLLM" },
      { name: "DeepSpeed" },
    ],
  },
  {
    id: "systems",
    label: "Systems & retrieval",
    skills: [
      { name: "FastAPI", icon: "/icons/FastAPI.svg" },
      { name: "Docker", icon: "/icons/docker_logo.svg" },
      { name: "LangChain", icon: "/icons/langchain.svg" },
      { name: "FAISS" },
      { name: "Pinecone" },
    ],
  },
  {
    id: "web",
    label: "Web",
    skills: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js" },
      { name: "Django REST", icon: "/icons/django-rest_logo.svg" },
    ],
  },
];
