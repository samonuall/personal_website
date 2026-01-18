export interface Technology {
  name: string;
  icon: string;
  category: 'languages' | 'frameworks' | 'ml';
}

export const technologies: Technology[] = [
  { name: "Python", icon: "/icons/python.svg", category: "languages" },
  { name: "C/C++", icon: "/icons/cpp.svg", category: "languages" },
  { name: "Java", icon: "/icons/java.svg", category: "languages" },
  { name: "JavaScript", icon: "/icons/javascript.svg", category: "languages" },
  { name: "SQL", icon: "/icons/sql.svg", category: "languages" },
  { name: "React", icon: "/icons/react.svg", category: "frameworks" },
  { name: "FastAPI", icon: "/icons/FastAPI.svg", category: "frameworks" },
  { name: "PyTorch", icon: "/icons/pytorch.svg", category: "ml" },
  { name: "HuggingFace", icon: "/icons/huggingface.svg", category: "ml" },
  { name: "vLLM", icon: "/icons/vllm.svg", category: "ml" },
  { name: "LangChain", icon: "/icons/langchain.svg", category: "ml" },
  { name: "LlamaIndex", icon: "/icons/llamaindex.svg", category: "ml" },
  { name: "FAISS", icon: "/icons/faiss.svg", category: "ml" },
  { name: "Pinecone", icon: "/icons/pinecone.svg", category: "ml" }
];

export const categories = {
  languages: "Programming Languages",
  frameworks: "Frameworks",
  ml: "Machine Learning"
};

