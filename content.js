// Edit text, skills, and entries here. Array order controls display order.
// skillIcons maps skill names to SVG filenames inside assets/icons (without .svg).
window.PORTFOLIO = {
  "name": "Tirthendu Chakravorty",
  "title": "Machine Learning & AI Engineer",
  "location": "Espoo, Finland",
  "email": "tirthendu496@gmail.com",
  "github": "https://github.com/tirtho496",
  "linkedin": "https://linkedin.com/in/tirtho496",
  "resume": "",
  "portrait": "assets/profile.jpeg",
  "introduction": "I build and improve ML systems, from multimodal retrieval to faster GPU training. My work connects experimentation with the software that makes it useful.",
  "about": "I am a recent joint Master’s graduate with experience across industrial machine learning, software engineering, and computer vision research. I enjoy understanding how systems behave, finding where they fail, and making changes that can be measured. My interests span production ML, performance engineering, and software built around intelligent systems.",
  "experience": [
    {
      "company": "Nokia",
      "role": "ML Engineering Trainee · Mobile Infrastructure RAN",
      "dates": "May 2026 — Present",
      "location": "Espoo, Finland",
      "points": [
        "Profiled and optimised PyTorch training workloads, improving throughput by 65% and reducing wall-clock time by up to 40%.",
        "Refactored data pipelines with GPU-resident loading, reducing a single-GPU training run from 17 hours to under 20 minutes."
      ],
      "skills": [
        "PyTorch",
        "Profiler",
        "MlFlow",
        "Kubeflow",
        "Jenkins",
        "Gerrit",
      ]
    },
    {
      "company": "Nokia",
      "role": "Thesis Worker · Cloud Network and Services",
      "dates": "Nov 2025 — May 2026",
      "location": "Espoo, Finland",
      "points": [
        "Built a stateful agentic multimodal RAG application combining hierarchical ingestion, retrieval, ranking, evidence handling, and generation.",
        "Developed evaluation workflows for retrieval accuracy, answer relevance, and faithfulness."
      ],
      "skills": [
        "Agentic RAG",
        "Multimodal retrieval",
        "Model evaluation",
        "Agentic Orchestration",
        "Research Methodologies",
        "Python"
      ]
    },
    {
      "company": "Nokia",
      "role": "ML Engineering Trainee · Cloud Network and Services",
      "dates": "May 2025 — Nov 2025",
      "location": "Espoo, Finland",
      "points": [
        "Developed and optimised production RAG pipelines for multimodal telecom data.",
        "Fine-tuned embedding models and collaborated with domain experts to diagnose retrieval failure modes."
      ],
      "skills": [
        "PyTorch",
        "Huggingface",
        "Opensearch",
        "Docker",
        "Kubernetes",
        "MlFlow",
        "AWS",
        "LLM",
        "MongoDB",
        "PostgreSQL"

      ]
    },
    {
      "company": "BRAC University",
      "role": "Adjunct Lecturer",
      "dates": "Jan 2024 — Sep 2024",
      "location": "Dhaka, Bangladesh",
      "points": [
        "Taught undergraduate computer science, building on earlier teaching-assistant experience in Data Structures."
      ],
      "skills": [
        "Teaching",
        "Technical communication",
        "Computer science"
      ]
    },
    {
      "company": "bKash Limited",
      "role": "Product and Technology Intern",
      "dates": "Jun 2023 — Sep 2023",
      "location": "Dhaka, Bangladesh",
      "points": [
        "Built and integrated a REST API for payment-gateway merchant onboarding, supporting application integration and user acceptance testing."
      ],
      "skills": [
        "REST APIs",
        "MySQL",
        "System integration",
        "User acceptance testing"
      ]
    }
  ],
  "projects": [
    {
      "title": "JobRadar",
      "category": "Software",
      "label": "Full-stack · Job discovery",
      "description": "A job discovery platform with asynchronous ingestion, deduplication, retries, automated tests, and continuous integration.",
      "tags": [
        "React",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "pgvector"
      ],
      "url": ""
    },
    {
      "title": "Agentic Multimodal RAG",
      "category": "AI / ML",
      "label": "Master’s thesis · Document intelligence",
      "description": "A stateful system for long technical documents, bringing together document structure, multimodal retrieval, evidence handling, and evaluation.",
      "tags": [
        "Python",
        "RAG",
        "Agentic Orchestration",
        "Research",
        "Multimodal retrieval",
        "Evaluation"
      ],
      "url": ""
    },
    {
      "title": "Hybrid Multimodal Asset Search",
      "category": "AI / ML",
      "label": "AILiveSim · Jan–May 2025",
      "description": "An end-to-end search application combining CLIP embeddings, LLM query parsing, and structured retrieval, with domain-specific BERT and CLIP fine-tuning.",
      "tags": [
        "CLIP",
        "BERT",
        "Vision-language models"
      ],
      "url": ""
    },
    {
      "title": "Squeak!",
      "category": "Software",
      "label": "Social media · Secure web development",
      "description": "A multi-user web application with authentication and session management. Tested and mitigated XSS, CSRF, session theft, and ReDoS vulnerabilities.",
      "tags": [
        "Node.js",
        "Express",
        "MongoDB",
        "Web Security"
      ],
      "url": ""
    },
    {
      "title": "Video Action Recognition",
      "category": "Research",
      "label": "Computer vision · Undergraduate research",
      "description": "Research into deep-learning methods for recognising actions and detecting violence in video, resulting in two IEEE conference papers.",
      "tags": [
        "Deep learning",
        "Video analysis",
        "Computer vision",
        "OpenCV",
        "Tensorflow",

      ],
      "url": ""
    }
  ],
  "education": [
    {
      "institution": "Åbo Akademi University & Mälardalen University",
      "degree": "M.Sc. in Computer Engineering",
      "detail": "Erasmus Mundus Joint Master’s · EDISS",
      "dates": "2024 — 2026",
      "location": "Finland & Sweden",
      "skills": [
        "Machine learning",
        "Data Science",
        "Artificial Intelligence",
        "Research methods",
        "Cloud Computing",
        "Embedded AI",
        "Web security",
        "GPU Programming"
      ]
    },
    {
      "institution": "BRAC University",
      "degree": "B.Sc. in Computer Science and Engineering",
      "detail": "CGPA 3.99 / 4.00",
      "dates": "2019 — 2023",
      "location": "Bangladesh",
      "skills": [
        "Data structures",
        "Algorithms",
        "Database systems",
        "Computer vision",
        "Software engineering",
        "Data Science",
        "Artificial Intelligence",
        "Operating Systems"
      ]
    }
  ],
  "publications": [
    {
      "title": "Hybrid 3D Asset Retrieval via Contrastive Vision-Language Matching and Structured Prompt Parsing",
      "venue": "IEEE Conference on Artificial Intelligence (CAI) · Granada · 2026",
      "url": "https://doi.org/10.1109/CAI68641.2026.11536426"
    },
    {
      "title": "Interpretable Violence Detection Using Separable Convolution and Bidirectional LSTM",
      "venue": "IEEE Asia-Pacific Conference on Computer Science and Data Engineering (CSDE) · Fiji · 2023",
      "url": "https://doi.org/10.1109/CSDE59766.2023.10487654"
    },
    {
      "title": "Spatial Feature Based Violence Detection Using Convolutional Neural Network",
      "venue": "IEEE International Conference on Artificial Intelligence in Engineering and Technology (IICAIET) · Kota Kinabalu · 2023",
      "url": "https://doi.org/10.1109/IICAIET59451.2023.10291749"
    }
  ],
  "skills": [
    {
      "group": "Machine learning",
      "items": [
        "PyTorch",
        "TensorFlow",
        "Hugging Face",
        "Computer vision",
        "Model evaluation"
      ]
    },
    {
      "group": "AI systems",
      "items": [
        "Agentic RAG",
        "Multimodal retrieval",
        "Embeddings",
        "LLM APIs",
        "OpenSearch"
      ]
    },
    {
      "group": "Software & data",
      "items": [
        "Python",
        "C++",
        "Javascript",
        "TypeScript",
        "React",
        "Node.js",
        "FastAPI",
        "PostgreSQL"
      ]
    },
    {
      "group": "Infrastructure",
      "items": [
        "Docker",
        "Kubernetes",
        "MLflow",
        "Kubeflow",
        "AWS",
        "GitHub Actions"
      ]
    }
  ],
  "hobbies": [
    {
      "title": "Music",
      "text": "I play violin, am learning guitar, and write songs. I am drawn to atmospheric arrangements and imagery that leaves room for interpretation."
    },
    {
      "title": "Writing",
      "text": "Songwriting gives me a different way to explore ideas: fewer words, more space, and meaning carried between the lines."
    }
  ],
  "skillIcons": {
    "PyTorch": "pytorch",
    "TensorFlow": "tensorflow",
    "Hugging Face": "huggingface",
    "Computer vision": "vision",
    "Model evaluation": "evaluation",
    "Agentic RAG": "agent",
    "Multimodal retrieval": "retrieval",
    "Embeddings": "embeddings",
    "LLM APIs": "api",
    "OpenSearch": "opensearch",
    "Python": "python",
    "TypeScript": "typescript",
    "React": "react",
    "Node.js": "nodejs",
    "FastAPI": "fastapi",
    "PostgreSQL": "postgresql",
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    "MLflow": "mlflow",
    "Kubeflow": "kubeflow",
    "AWS": "amazonwebservices",
    "GitHub Actions": "githubactions",
    "C++": "cpp",
    "Javascript": "javascript"
  }
};
