# Portfolio Website Alignment Plan

## Executive Summary
After reviewing your resume against the current portfolio website, I've identified significant gaps in technical depth, specific achievements, and professional presentation. The website undersells your accomplishments and lacks the precision that would impress a Google-level recruiter. This plan outlines all necessary changes to align the website with your resume and elevate it to professional standards.

---

## Key Issues Identified

### 1. **Missing or Understated Achievements**
- **CIIR Research**: Website is extremely vague. Resume shows you're second author on EMNLP '25 paper, achieved SOTA on BRIGHT benchmark, 15x throughput improvement
- **Klaviyo**: Website missing critical details about MCP server lifecycle ownership, threaded/cached orchestration layer, semantic documentation search prototype
- **Poker Agent**: Resume mentions 7th place in 22-team tournament - completely missing from website
- **Publications**: Not prominently featured despite having an EMNLP publication

### 2. **Technical Depth Inconsistencies**
- **Lockheed Martin**: Website combines both summers generically; resume has specific details about LM 50 & 400 satellites, serialization routines, async packet processing with mutexes
- **X-Camp**: Metric discrepancy (40% vs 42% improvement); missing "FAISS-backed" detail and "LLM-judged response quality" specificity
- **CLIP Project**: Resume mentions "adaptive batching with queue-and-timeout mechanism to maximize GPU utilization" - website is less specific

### 3. **Technology Stack Gaps**
**Missing from website but on resume:**
- Java (language)
- vLLM (important for LLM inference)
- LlamaIndex (LLM orchestration framework)
- FAISS (vector database)
- Pinecone (vector database)

**On website but not resume:**
- JavaScript (less relevant for your AI/ML focus)
- Sklearn (present on website, not on resume)

### 4. **Professional Presentation Issues**
- Education information (MS in progress, GPA) not clearly visible
- Publication not featured prominently
- Some descriptions read as generic rather than impact-focused
- Metrics and numbers not consistently emphasized
- Missing concrete competitive achievements (tournament placement)

---

## Detailed Changes Required

### A. Experience Section Updates

#### 1. **Klaviyo (data/experiences.ts lines 12-24)**

**Current Problems:**
- Missing MCP server lifecycle ownership
- Doesn't mention threaded/cached orchestration replacing simple API wrappers
- Missing metadata filtering for semantic context
- Missing technical prototype details for semantic documentation search
- Missing prompt management system

**Recommended Changes:**
```typescript
description: [
  "Owned the end-to-end lifecycle of a Model Context Protocol (MCP) server extension, deploying a dynamic prompt template feature to production",
  "Replaced simple API wrappers with a threaded, cached orchestration layer to chain complex data retrievals; implemented metadata filtering to provide dense, semantic context for improved LLM grounding",
  "Built a technical prototype for semantic documentation search and a prompt management system to replace hardcoded templates; delivered design docs and codebase for the product roadmap",
  "Developed push notification analytics metrics used by 400+ companies (Python, React), integrating push metrics such as bounce and click rates into existing reporting infrastructure; utilized ReactQuery for optimized caching to support the generation of 5,000+ push metric reports in under two weeks"
]
```

**Why:** This matches resume exactly and emphasizes technical depth (threaded/cached orchestration, metadata filtering) that demonstrates senior-level engineering.

---

#### 2. **CIIR Research (data/experiences.ts lines 25-36)**

**Current Problems:**
- Extremely vague ("Researching how retrieval models can enhance and adapt to LLMs")
- Missing publication credit (second author on EMNLP '25)
- Missing SOTA achievement on BRIGHT benchmark
- Missing 15x throughput improvement
- Missing technical details (DeepSpeed, A100 clusters)

**Recommended Changes:**
```typescript
description: [
  "Second author on RaDeR (EMNLP '25); contributed to experiment design for synthetic data generation, co-authored paper sections, and implemented training pipelines and baseline retrieval systems",
  "Fine-tuned novel dense retrieval models on A100 GPU clusters using DeepSpeed, achieving state-of-the-art results on the BRIGHT benchmark",
  "Boosted data throughput by 15x for LLM post-training by designing a three-tier parallel pipeline: utilized Python multiprocessing for LLM-guided tree traversal, threaded I/O for vLLM server requests, and model parallelism across A100 GPUs"
]
```

**Why:** This is a major accomplishment (published research at top-tier NLP conference, SOTA results) that should be front and center. Current website completely undersells this.

---

#### 3. **X-Camp Academy (data/experiences.ts lines 37-50)**

**Current Problems:**
- Missing cookie-based session management detail
- Missing "FAISS-backed" specification for dense retrieval
- Metric shows 40% vs resume's 42%
- Missing "LLM-judged response quality" precision

**Recommended Changes:**
```typescript
description: [
  "Implemented cookie-based session management for a prototype chatbot, maintaining persistent state and conversation context across sessions; supported frontend and backend development across the product (Flask, React)",
  "Automated the conversion of 90,000+ student submissions into an embedding index and integrated it into a FAISS-backed dense retrieval system for a prototype coding tutor agent, improving LLM-judged response quality by 42%"
]
```

**Why:** More technically precise, matches resume metrics exactly, demonstrates full-stack capability.

---

#### 4. **Lockheed Martin (data/experiences.ts lines 51-76)**

**Current Problems:**
- Two experiences are shown but lack specificity about satellite models
- Missing serialization and validation routines detail
- Missing async packet processing and custom OS limitation detail
- Missing mutexes/locks detail

**Recommended Changes:**

**Summer 2023 Entry:**
```typescript
{
  id: "3",
  title: "Software Engineering Intern",
  company: "Lockheed Martin Space",
  contractType: "Internship",
  location: "Denver, CO",
  dateRange: "June 2023 - August 2023",
  description: [
    "Developed performance-critical C++ data interfaces for the LM 50 & 400 satellites, enabling real-time communication between satellite components",
    "Built serialization and validation routines for satellite telemetry data, ensuring reliable, low-latency delivery of sensor readings under strict memory constraints",
    "Engineered a reusable C++ class to manage asynchronous packet processing, overcoming a custom OS limitation that previously restricted messaging to one callback at a time; utilized mutexes and locks to ensure thread safety in a memory-constrained environment"
  ]
}
```

**Summer 2022 Entry:**
```typescript
{
  id: "4",
  title: "Software Engineering Intern",
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
```

**Why:** Shows systems-level programming expertise with specific technical constraints - critical for demonstrating depth beyond typical web development.

---

### B. Projects Section Updates

#### 1. **CLIP Project (data/projects.ts lines 36-43)**

**Current Problem:**
- Missing "adaptive batching with queue-and-timeout mechanism to maximize GPU utilization"
- Not specific enough about Pinecone indexing

**Recommended Changes:**
```typescript
{
  id: "4",
  title: "CLIP Image and Text Embedding Pipeline and Inference System",
  description: "Built an end-to-end ML inference API for CLIP embeddings using FastAPI; implemented adaptive batching with a queue-and-timeout mechanism to maximize GPU utilization; indexed 100k images in Pinecone for similarity search",
  image: "/openai-clip.webp",
  technologies: ["Python", "FastAPI", "CLIP", "Pinecone"],
  github: "https://github.com/Sejal135/532Project",
  link: "https://www.youtube.com/watch?v=S8pFvLiviMs"
}
```

**Why:** Demonstrates ML engineering and performance optimization expertise.

---

#### 2. **Poker Agent (data/projects.ts lines 28-34)**

**Current Problem:**
- Missing competitive achievement: "secured 7th place in a 22-team tournament"

**Recommended Changes:**
```typescript
{
  id: "3",
  title: "Poker Agent",
  description: "Engineered a deep reinforcement learning agent for Texas Hold'em, leveraging a Monte Carlo Tree Search (MCTS) guided by a custom deep learning policy network to learn decision-making under uncertainty; secured 7th place in a 22-team tournament",
  image: "/poker_image.png",
  technologies: ["Python", "PyTorch", "MCTS"],
  github: "https://github.com/samonuall/alpha-zero-general/tree/630df23a0436e242733cc54e8af331bd9cc28937"
}
```

**Why:** Competitive placement validates technical capability in a measurable way.

---

#### 3. **RL Final Project (data/projects.ts lines 12-18)**

**Current Problem:**
- Title and description don't match resume format
- Resume calls this "Deep Reinforcement Learning: Advantage Actor Critic"

**Recommended Changes:**
```typescript
{
  id: "7",
  title: "Deep Reinforcement Learning: Advantage Actor Critic",
  description: "Implemented Advantage Actor-Critic (A2C) with generalized advantage estimation from scratch in PyTorch; trained on OpenAI Gymnasium environments (Lunar Lander, Cart Pole) to validate convergence and policy stability",
  image: "/lunar_lander_screenshot.png",
  technologies: ["Python", "PyTorch", "Gym"]
}
```

**Why:** Matches resume exactly, emphasizes "from scratch" implementation showing deep understanding.

---

#### 4. **Add Missing Project: Fine-Tuning LLMs**

**Current:** Project exists (#8) but needs title update

**Recommended Changes:**
```typescript
{
  id: "8",
  title: "Fine-Tuning LLMs for System Initiative Prediction",
  description: "Quantized and fine-tuned Llama-7b on tens of thousands of MS Dialog conversations, presenting findings at a final poster session",
  image: "/sip_poster.jpg",
  technologies: ["Python", "HuggingFace", "PyTorch"],
  link: "https://colab.research.google.com/drive/1Jud-_r0wpBRpk6IyCk5PfVVZCgFxPi3Z?usp=sharing"
}
```

---

### C. Technologies Section Updates (data/technologies.ts)

**Add:**
- Java (languages category)
- vLLM (ml category)
- LlamaIndex (ml category)
- FAISS (ml category)
- Pinecone (ml category)

**Consider Removing/Replacing:**
- JavaScript → less relevant for AI/ML role
- Sklearn → not on resume

**Recommended New List:**
```typescript
export const technologies: Technology[] = [
  { name: "Python", icon: "/icons/python.svg", category: "languages" },
  { name: "C/C++", icon: "/icons/cpp.svg", category: "languages" },
  { name: "Java", icon: "/icons/java.svg", category: "languages" },
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
```

**Note:** Will need to source/create SVG icons for: Java, vLLM, LlamaIndex, FAISS, Pinecone

---

### D. Homepage Updates (app/page.tsx)

#### 1. **Hero Section Subtitle (line 86-89)**

**Current:**
```typescript
<p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
  AI engineer and researcher building production-ready systems with resilient MLOps,
  concise research, and thoughtful interfaces.
</p>
```

**Recommended:**
```typescript
<p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
  AI engineer and researcher with published work at EMNLP '25, building production-ready
  systems with resilient MLOps, efficient inference pipelines, and thoughtful interfaces.
</p>
```

**Why:** Immediately establishes research credibility.

---

#### 2. **Add Education/Publication Section**

**Where:** After skills section (around line 139)

**Recommended Addition:**
```typescript
<ScrollAnimation className="mb-24" delay={120} rootMargin="160px 0px">
  <section className="rounded-3xl border border-border/30 bg-card/20 p-6 sm:p-10 shadow-2xl">
    <h2 className="text-3xl font-semibold mb-6 text-primary">Education & Publications</h2>
    <div className="space-y-6">
      <div className="border-l-4 border-primary/50 pl-4">
        <h3 className="text-xl font-semibold text-foreground">University of Massachusetts Amherst</h3>
        <p className="text-muted-foreground">MS in Computer Science • Expected May 2026</p>
        <p className="text-muted-foreground">BS in Computer Science & Economics • 3.9 GPA • Graduated December 2024</p>
      </div>

      <div className="border-l-4 border-emerald-500/50 pl-4">
        <h3 className="text-xl font-semibold text-foreground">Publications</h3>
        <p className="text-foreground">
          D. Das, <strong>S. O'Nuallain</strong>, R. Rahimi. (2025).
          <em> RaDeR: Reasoning-aware Dense Retrieval Models.</em> EMNLP '25
        </p>
        <a
          href="https://debrup-61.github.io/RaDeR.github.io/"
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline text-sm"
        >
          View publication →
        </a>
      </div>
    </div>
  </section>
</ScrollAnimation>
```

**Why:** Education and publications are critical credibility markers for research-focused roles.

---

### E. StoryScroller Updates (components/StoryScroller.tsx)

Multiple panels need updates to match resume precision:

#### Panel 1: Klaviyo (lines 40-71)
**Update summary/detail to include:**
- "MCP server extension lifecycle"
- "threaded, cached orchestration layer replacing simple API wrappers"
- "metadata filtering for semantic context"

#### Panel 2: CLIP (lines 72-99)
**Update metrics:**
- Add metric about "adaptive batching" and "GPU utilization"

#### Panel 3: X-Camp (lines 100-129)
**Update metrics:**
- Change debugger lift from "+40%" to "+42%"
- Add "FAISS-backed" to description

#### Panel 5: RaDeR (lines 153-176)
**Major update needed:**
```typescript
{
  id: "rader",
  eyebrow: "EMNLP '25 Publication • UMass CIIR",
  title: "Second author on reasoning-aware dense retrieval",
  summary: "Co-authored RaDeR, published at EMNLP '25; contributed to experiment design, synthetic data generation, and implemented training pipelines for dense retrieval models",
  detail: "Fine-tuned models on A100 clusters using DeepSpeed, achieving state-of-the-art results on the BRIGHT benchmark. Designed a three-tier parallel pipeline that boosted LLM post-training data throughput by 15x.",
  tags: ["Python", "HuggingFace", "PyTorch", "DeepSpeed", "A100"],
  metrics: [
    {
      label: "Publication",
      value: "EMNLP '25",
      hint: "second author, top-tier NLP conference",
    },
    {
      label: "Benchmark",
      value: "SOTA on BRIGHT",
      hint: "reasoning-aware dense retrieval",
    },
    {
      label: "Data pipeline",
      value: "15x throughput",
      hint: "vLLM GPU data generation",
    },
  ],
  accent: "from-cyan-400/20 via-emerald-300/20 to-transparent",
}
```

---

## Professional Standards Checklist

### Content Quality
- [ ] All metrics match resume exactly (42% not 40%, etc.)
- [ ] Technical terminology is precise (FAISS-backed, not just "dense retrieval")
- [ ] Achievements are quantified with specific numbers
- [ ] Competitive placements are mentioned where applicable
- [ ] Publication is prominently featured multiple places

### Technical Depth
- [ ] Specific technologies mentioned (DeepSpeed, A100, vLLM, mutexes, etc.)
- [ ] System constraints highlighted (memory-constrained, low-latency, etc.)
- [ ] Architecture decisions explained (threaded/cached orchestration, three-tier pipeline)
- [ ] Performance optimizations detailed (adaptive batching, 15x throughput)

### Professionalism
- [ ] No typos or grammatical errors
- [ ] Consistent formatting across all experiences
- [ ] Clear hierarchy: most impressive achievements first
- [ ] Academic credentials clearly displayed
- [ ] Links to publications, GitHub repos work correctly

### Google Recruiter Standards
- [ ] Would this demonstrate capability for L4/L5 engineer level?
- [ ] Are achievements specific enough to verify?
- [ ] Does it show progression and growth?
- [ ] Is there evidence of both breadth (full-stack) and depth (ML systems)?
- [ ] Would a technical interviewer find talking points?

---

## Implementation Priority

### High Priority (Do First)
1. **CIIR Research description** - This is your strongest accomplishment
2. **Klaviyo description** - Shows production engineering capability
3. **Add Publications section** - Critical credibility marker
4. **Poker tournament placement** - Easy win for competitive achievement
5. **Technologies list** - Add FAISS, Pinecone, vLLM, LlamaIndex

### Medium Priority
6. Lockheed Martin detail expansion
7. X-Camp metric correction (40% → 42%)
8. CLIP project batching detail
9. StoryScroller panel updates

### Lower Priority
10. Homepage hero subtitle tweak
11. RL project title alignment

---

## Files to Modify

1. `/data/experiences.ts` - All experience descriptions
2. `/data/projects.ts` - Project descriptions and titles
3. `/data/technologies.ts` - Technology stack
4. `/app/page.tsx` - Add education/publications section
5. `/components/StoryScroller.tsx` - Update panel content
6. `/public/icons/` - Add new technology SVG icons

---

## Post-Implementation Validation

After making changes:
1. Review entire site and compare line-by-line with resume
2. Check all numbers/metrics match exactly
3. Verify all links work (GitHub, publications, etc.)
4. Proofread for typos
5. Test on mobile for readability
6. Ask: "Would this impress a Google L5 hiring committee?"

---

## Notes

- The current website significantly undersells your accomplishments
- Missing the publication is a major oversight for research-focused roles
- Technical depth needs to match resume's precision
- Some experiences are too generic ("researching...") when resume shows concrete achievements
- Numbers and metrics should be exact, not approximations
- The technologies list should reflect all resume skills, especially ML infrastructure tools
