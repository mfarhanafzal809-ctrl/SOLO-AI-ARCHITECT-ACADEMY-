/* ================================================================
   AI ARCHITECT ACADEMY — MAIN JS
   Router, Data, Render Functions, Event Listeners (bound once)
   ================================================================ */

// ────────────────────────────────────────────────────────────────
// CURRICULUM DATA
// ────────────────────────────────────────────────────────────────
const PHASES = [
  {
    id:1, icon:'📐', shortTitle:'Mathematics & Foundations', tag:'Math Foundation',
    title:'High-Dimensional Mathematics & Applied Foundations',
    goal:'Master the vector spaces, continuous optimization rules, and probabilistic frameworks that prevent deep learning architectures from failing.',
    color:'#00c8ff',
    topics:[
      {
        number:'1', title:'Linear Algebra — The Language of AI',
        desc:'Linear algebra provides the multi-dimensional grid structures required to map, weight, and transform numeric tokens.',
        bullets:[
          '<strong>Scalars, Vectors, Matrices & Tensors:</strong> Core structures for storing high-dimensional coordinate spaces.',
          '<strong>Matrix Operations & Spaces:</strong> Row-column matrix products, dot products, and multi-dimensional space transformations.',
          '<strong>Eigenvalues & Eigenvectors:</strong> Extracting non-deforming directional vectors to capture maximum spatial variance — the foundation of PCA and dimensionality reduction.'
        ],
        courseUrl:'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
        courseName:'3Blue1Brown: Essence of Linear Algebra'
      },
      {
        number:'2', title:'Calculus & Optimization — The Learning Engine',
        desc:'Calculus tracks model errors across continuous multi-dimensional functions and dynamically shifts weights to drive performance errors down.',
        bullets:[
          '<strong>Limits, Derivatives & Slopes:</strong> Measuring local instantaneous rates of output change.',
          '<strong>Gradient Descent Variants:</strong> Optimization paths designed to step parameter matrices into local error minima without overshooting.',
          '<strong>The Computational Chain Rule:</strong> The algebraic engine that propagates derivative error steps backward through thousands of layers.'
        ],
        courseUrl:'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr',
        courseName:'3Blue1Brown: Essence of Calculus'
      },
      {
        number:'3', title:'Probability & Statistics — Data Validation',
        desc:'Probability theory provides the mathematical frameworks needed to calculate likelihoods from noisy, imperfect data inputs.',
        bullets:[
          '<strong>Descriptive Statistics & Dispersion:</strong> Measuring structural data properties via means, variances, and standard deviations.',
          "<strong>Bayes' Theorem & Distributions:</strong> Updating structural beliefs as new real-world data points roll in — Gaussian and Poisson distributions."
        ],
        courseUrl:'https://www.youtube.com/@statquest/playlists',
        courseName:'StatQuest: Statistics Fundamentals'
      }
    ],
    projects:[
      {type:'foundation', title:'Multi-Dimensional Vector Visualizer',
       what:'A Python script using matplotlib to plot vectors, perform dot products, and animate a matrix transformation in 2D space.',
       desc:'Tests basic Python and pure math logic — the output should clearly illustrate how matrix multiplication transforms vector space geometrically.'},
      {type:'capstone', title:'Custom Auto-Differentiation Engine',
       what:'A standalone mathematical execution library written in pure Python with no external ML frameworks.',
       desc:'Build a directed acyclic graph (DAG) that records manual arithmetic operations forward and triggers a custom reverse-mode automatic differentiation sequence backward to compute exact partial derivatives of any composite function.'}
    ]
  },
  {
    id:2, icon:'💻', shortTitle:'Software Engineering & DSA', tag:'Software Engineering',
    title:'Software Engineering & Data Structures',
    goal:'Write production-grade, highly optimized software. AI models are useless if they are wrapped in fragile, inefficient code.',
    color:'#a855f7',
    topics:[
      {
        number:'1', title:'Advanced Python Programming & OOP',
        desc:'Transitioning from standard scripts to robust, object-oriented software systems.',
        bullets:[
          '<strong>Classes, Inheritance & Polymorphism:</strong> Structuring AI components as reusable, modular objects.',
          '<strong>Memory Management:</strong> Understanding generators, decorators, and garbage collection to prevent memory leaks during massive data ingestion.'
        ],
        courseUrl:'https://www.youtube.com/@coreyms',
        courseName:'Corey Schafer: Advanced Python & OOP'
      },
      {
        number:'2', title:'Data Structures & Algorithms (DSA)',
        desc:'The logic required to search, sort, and retrieve tokens in sub-millisecond timeframes.',
        bullets:[
          '<strong>Hash Maps & Graphs:</strong> Creating instantaneous lookups and mapping complex neural routing paths.',
          '<strong>Trees (B-Trees & Binary Search):</strong> The foundational structures behind how databases store vector embeddings.'
        ],
        courseUrl:'https://www.youtube.com/@abdul_bari',
        courseName:'Abdul Bari: Algorithms Masterclass'
      },
      {
        number:'3', title:'Asynchronous Computing & Concurrency',
        desc:'Handling millions of simultaneous AI requests without crashing the CPU.',
        bullets:[
          '<strong>Multithreading vs. Multiprocessing:</strong> Splitting Python workloads across multiple CPU cores for parallel computation.',
          '<strong>AsyncIO & Awaits:</strong> Writing non-blocking code for high-throughput AI API endpoints that serve thousands of concurrent users.'
        ],
        courseUrl:'https://www.youtube.com/watch?v=t5Bo1Je9EmE',
        courseName:'Tech With Tim: Python AsyncIO Deep Dive'
      }
    ],
    projects:[
      {type:'foundation', title:'Object-Oriented Matrix Library',
       what:'Rebuilding numpy-style array operations using strict Object-Oriented design patterns (Classes, dunder methods).',
       desc:'Implement matrix creation, addition, multiplication, transposition, and determinant calculation using pure Python classes — no numpy allowed.'},
      {type:'capstone', title:'Concurrent Web Scraper & Data Pipeline',
       what:'An asynchronous multi-threaded system that scrapes 10,000 text articles from the web concurrently.',
       desc:'Clean the raw strings, deduplicate content, store metadata in memory, and export to structured CSV without crashing or throttling — tested under sustained concurrency.'}
    ]
  },
  {
    id:3, icon:'🗄️', shortTitle:'Data Systems & Vector Storage', tag:'Data Engineering',
    title:'Enterprise Data Systems & Vector Storage',
    goal:'Architect the massive storage layers capable of feeding terabytes of structured and unstructured text into AI models.',
    color:'#f97316',
    topics:[
      {
        number:'1', title:'Relational Database Architecture (SQL)',
        desc:'Mastering the backbone of global corporate data.',
        bullets:[
          '<strong>Advanced SQL Queries:</strong> Window functions, complex joins, and CTEs (Common Table Expressions) for analytical workloads.',
          '<strong>Database Normalization (1NF to 3NF):</strong> Designing schemas that eliminate data redundancy and dramatically speed up queries.'
        ],
        courseUrl:'https://www.youtube.com/watch?v=HXV3zeQKqGY',
        courseName:'FreeCodeCamp: Database Design & SQL Masterclass'
      },
      {
        number:'2', title:'NoSQL & Unstructured Data Streams',
        desc:'Handling dynamic data that does not fit neatly into rows and columns.',
        bullets:[
          '<strong>MongoDB & Document Stores:</strong> Storing raw conversational logs, complex API payloads, and semi-structured JSON at terabyte scale.',
          '<strong>Schema Flexibility:</strong> Designing document models that evolve without costly migrations as the AI product requirements change.'
        ],
        courseUrl:'https://university.mongodb.com/',
        courseName:'MongoDB University: Complete Developer Path'
      },
      {
        number:'3', title:'Vector Databases — The AI Memory Bank',
        desc:'The exact technology that allows LLMs to "remember" billions of custom documents.',
        bullets:[
          '<strong>Embeddings & High-Dimensional Storage:</strong> Converting words into numbers and storing them in searchable vector spaces.',
          '<strong>HNSW Indexes:</strong> The mathematical algorithm for lightning-fast approximate nearest neighbor (ANN) searches across billions of vectors.'
        ],
        courseUrl:'https://learn.deeplearning.ai/courses/vector-databases-embeddings-applications',
        courseName:'Pinecone & DeepLearning.AI: Vector Databases'
      }
    ],
    projects:[
      {type:'foundation', title:'Relational CRM Schema Builder',
       what:'Designing and querying a pure PostgreSQL database with 5 interconnected tables simulating a company\'s user data.',
       desc:'Include users, products, orders, payments, and reviews tables — fully normalized to 3NF with indexes, foreign key constraints, and complex analytical queries.'},
      {type:'capstone', title:'Multi-Engine Storage API',
       what:'A unified Python backend that ingests a PDF, stores the metadata in PostgreSQL, and embeds the raw text chunks into a vector database.',
       desc:'Build a FastAPI endpoint that accepts a PDF upload, extracts text, stores document metadata in PostgreSQL, chunks and embeds the content into Pinecone/Milvus, and exposes a semantic search endpoint for sub-second retrieval.'}
    ]
  },
  {
    id:4, icon:'🤖', shortTitle:'Classical Machine Learning', tag:'Classical ML',
    title:'Classical Machine Learning',
    goal:'Master the predictive, statistical algorithms that rule tabular corporate data before moving to deep neural networks.',
    color:'#10b981',
    topics:[
      {
        number:'1', title:'Supervised Learning Systems',
        desc:'Teaching algorithms to map inputs to precise, labeled outputs.',
        bullets:[
          '<strong>Linear & Logistic Regression:</strong> Modeling continuous predictions and binary classifications with mathematically interpretable outputs.',
          '<strong>Support Vector Machines (SVM):</strong> Drawing optimal hyperplanes to separate complex data clusters in high-dimensional feature spaces.'
        ],
        courseUrl:'https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU',
        courseName:'Stanford CS229: Machine Learning (Andrew Ng)'
      },
      {
        number:'2', title:'Tree-Based Models & Ensembles',
        desc:'The undisputed champions of tabular data competitions.',
        bullets:[
          '<strong>Decision Trees & Random Forests:</strong> Aggregating hundreds of algorithmic trees to prevent model overfitting via bagging.',
          '<strong>Gradient Boosting (XGBoost/LightGBM):</strong> Sequentially training trees where each new tree corrects the mathematical errors of the previous one.'
        ],
        courseUrl:'https://www.youtube.com/watch?v=OtD8wVaFm6E',
        courseName:'StatQuest: XGBoost & Gradient Boosting Trees'
      },
      {
        number:'3', title:'Unsupervised Learning & Dimensionality Reduction',
        desc:'Discovering hidden patterns in massive, unlabeled datasets.',
        bullets:[
          '<strong>K-Means Clustering:</strong> Grouping customers or behaviors into distinct segments without human labels.',
          '<strong>PCA (Principal Component Analysis):</strong> Squashing 10,000-dimensional data down to 2D for visualization while retaining maximum statistical variance.'
        ],
        courseUrl:'https://www.youtube.com/watch?v=FgakZw6K1QQ',
        courseName:'StatQuest: PCA Clearly Explained'
      }
    ],
    projects:[
      {type:'foundation', title:'Raw Python Linear Regression',
       what:'Writing a gradient descent loop to fit a regression line to a dataset without using Scikit-Learn.',
       desc:'Implement the full training loop from scratch: initialize weights, compute MSE loss, calculate gradients manually, update weights, and plot convergence curves.'},
      {type:'capstone', title:'Customer Lifetime Value (CLV) Prediction Pipeline',
       what:'A complete ML pipeline taking a massive, messy corporate dataset to a deployed XGBoost prediction model.',
       desc:'Engineer features from raw transaction logs, handle missing values and outliers, tune hyperparameters via cross-validation, and deploy an XGBoost model that accurately predicts 5-year customer revenue — with a SHAP explanation layer.'}
    ]
  },
  {
    id:5, icon:'🧠', shortTitle:'Deep Learning & Tensor Mechanics', tag:'Deep Learning',
    title:'Deep Learning & Tensor Mechanics',
    goal:'Build the multi-layered neural architectures capable of hierarchical reasoning, operating purely in PyTorch.',
    color:'#00c8ff',
    topics:[
      {
        number:'1', title:'Neural Network Foundations',
        desc:'Understanding the biological inspiration translated into pure matrix multiplication.',
        bullets:[
          '<strong>Perceptrons & Hidden Layers:</strong> The structure of multi-layer perceptrons (MLPs) — linear transformations stacked with non-linearities.',
          '<strong>Activation Functions:</strong> Injecting non-linearity (ReLU, Sigmoid, GeLU) so the network can learn complex curves, not just straight lines.'
        ],
        courseUrl:'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ',
        courseName:'Andrej Karpathy: Neural Networks Zero to Hero'
      },
      {
        number:'2', title:'Loss Functions & Backpropagation',
        desc:'The exact mechanism by which an AI model "learns" from its mistakes.',
        bullets:[
          '<strong>Cross-Entropy & MSE:</strong> Mathematically penalizing the network for wrong answers at the output layer.',
          '<strong>The Backprop Engine:</strong> Applying the calculus chain rule to propagate gradients and update millions of weights simultaneously.'
        ],
        courseUrl:'https://course.fast.ai/',
        courseName:'Fast.ai: Practical Deep Learning for Coders'
      },
      {
        number:'3', title:'Advanced Optimizers & Regularization',
        desc:'Ensuring models learn efficiently without memorizing the training data.',
        bullets:[
          '<strong>Adam & RMSProp:</strong> Algorithms that dynamically adjust the learning rate for every single parameter based on historical gradient moments.',
          '<strong>Dropout & Batch Normalization:</strong> Randomly disabling neurons during training to force the network to build robust, generalized representations.'
        ],
        courseUrl:'https://course.fast.ai/',
        courseName:'Fast.ai: Practical Deep Learning for Coders'
      }
    ],
    projects:[
      {type:'foundation', title:'PyTorch MLP Digit Recognizer',
       what:'Building a 3-layer neural network in PyTorch to classify handwritten digits on the MNIST dataset.',
       desc:'Implement DataLoader, define the MLP architecture with ReLU activations, train with Adam optimizer, plot training/validation loss curves, and achieve >98% test accuracy.'},
      {type:'capstone', title:'Custom Neural Optimizer Framework',
       what:'Writing the Adam optimization algorithm from scratch in Python — without using torch.optim.',
       desc:'Implement the full Adam update rule with first and second moment estimates, bias correction, and epsilon stability. Integrate it into a deep neural network and prove with convergence plots that it outperforms standard SGD.'}
    ]
  },
  {
    id:6, icon:'👁️', shortTitle:'Computer Vision & Spatial AI', tag:'Computer Vision',
    title:'Computer Vision & Spatial AI',
    goal:'Give machines the ability to extract complex semantic meaning from multi-dimensional pixel arrays — images and video.',
    color:'#a855f7',
    topics:[
      {
        number:'1', title:'Convolutional Neural Networks (CNNs)',
        desc:'Moving away from dense layers to translation-invariant spatial feature extractors.',
        bullets:[
          '<strong>Kernels & Filters:</strong> Sliding mathematical grids over images to detect edges, curves, textures, and higher-level semantic features.',
          '<strong>Pooling & Strides:</strong> Downsampling image dimensions to reduce compute cost while maintaining critical features for classification.'
        ],
        courseUrl:'https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv',
        courseName:'Stanford CS231n: CNNs for Visual Recognition'
      },
      {
        number:'2', title:'Advanced Vision Architectures',
        desc:'Studying the historical breakthroughs that redefined image processing.',
        bullets:[
          '<strong>ResNets (Residual Networks):</strong> Using skip-connections to train networks hundreds of layers deep without the gradients vanishing into zero.',
          '<strong>Vision Transformers (ViT):</strong> Slicing images into patches and using NLP attention mechanisms to process visual tokens.'
        ],
        courseUrl:'https://www.coursera.org/learn/convolutional-neural-networks',
        courseName:'DeepLearning.AI: Advanced Computer Vision'
      },
      {
        number:'3', title:'Object Detection & Segmentation',
        desc:'Moving beyond classifying whole images to identifying exact object boundaries in real-time.',
        bullets:[
          '<strong>YOLO (You Only Look Once):</strong> Real-time bounding box regression — detecting and localizing multiple objects in a single forward pass.',
          '<strong>Semantic Segmentation (U-Net):</strong> Classifying every single pixel in an image — used heavily in medical imaging and autonomous vehicles.'
        ],
        courseUrl:'https://www.coursera.org/learn/convolutional-neural-networks',
        courseName:'DeepLearning.AI: Advanced Computer Vision'
      }
    ],
    projects:[
      {type:'foundation', title:'ResNet Image Classifier',
       what:'Fine-tuning a pre-trained ResNet-50 model to classify 100 different species of animals.',
       desc:'Apply transfer learning by freezing the backbone, replacing the classification head, and fine-tuning on a custom dataset — achieving 95%+ accuracy with data augmentation.'},
      {type:'capstone', title:'Real-Time YOLO Target Tracking Engine',
       what:'Deploying a YOLOv8 model via a webcam feed with speed and trajectory analysis.',
       desc:'Not only place bounding boxes around detected moving vehicles, but calculate their trajectory and estimated speed across the video frame in real-time using centroid tracking algorithms.'}
    ]
  },
  {
    id:7, icon:'🗣️', shortTitle:'NLP & Transformer Architecture', tag:'NLP & Transformers',
    title:'Sequence Modeling & Natural Language Processing',
    goal:'Master the Transformer architecture — the foundational algorithm powering ChatGPT, Claude, and Gemini.',
    color:'#f97316',
    topics:[
      {
        number:'1', title:'Tokenization & Embeddings',
        desc:'Converting human language into machine-readable continuous vector representations.',
        bullets:[
          '<strong>BPE (Byte-Pair Encoding):</strong> The algorithm used to chunk words into sub-word tokens efficiently — the foundation of all modern LLM tokenizers.',
          '<strong>Word2Vec & Contextual Embeddings:</strong> Mapping words into vector spaces where spatial distance equals semantic meaning — King − Man + Woman = Queen.'
        ],
        courseUrl:'https://www.youtube.com/playlist?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ',
        courseName:'Stanford CS224N: NLP with Deep Learning'
      },
      {
        number:'2', title:'The Attention Mechanism',
        desc:'The single most important breakthrough in modern AI history.',
        bullets:[
          '<strong>Self-Attention & Multi-Head Attention:</strong> Allowing the network to mathematically weigh the importance of every word against every other word simultaneously.',
          '<strong>Positional Encoding:</strong> Injecting mathematical time-signatures into tokens so the model understands word order without slow recurrent loops.'
        ],
        courseUrl:'https://www.youtube.com/watch?v=kCc8FmEb1nY',
        courseName:"Andrej Karpathy: Let's Build GPT from Scratch"
      },
      {
        number:'3', title:'The Transformer Architecture',
        desc:'Building the engine of Generative AI from first principles.',
        bullets:[
          '<strong>Encoders (BERT):</strong> Reading entire documents to understand deep, bidirectional context — used for classification and retrieval.',
          '<strong>Decoders (GPT):</strong> Masked auto-regressive generation — predicting the exact next token based on all previous context.'
        ],
        courseUrl:'https://www.youtube.com/watch?v=kCc8FmEb1nY',
        courseName:"Andrej Karpathy: Let's Build GPT from Scratch"
      }
    ],
    projects:[
      {type:'foundation', title:'Bi-Directional LSTM Sentiment Analyzer',
       what:'Building a recurrent network that reads movie reviews sequence-by-sequence and predicts human emotion.',
       desc:'Implement embedding layers, bidirectional LSTM cells, and a classification head — train on IMDb reviews and achieve >88% sentiment accuracy with attention visualization.'},
      {type:'capstone', title:'Decoder-Only GPT Built from Scratch',
       what:'Writing the exact Transformer decoder block in PyTorch and training a miniature GPT to write text.',
       desc:'Implement Multi-Head Self-Attention, Feed Forward layers, Layer Normalization, and Positional Encodings from scratch. Train on a Shakespeare corpus and generate coherent text in his style at inference time.'}
    ]
  },
  {
    id:8, icon:'🔍', shortTitle:'Advanced RAG Systems', tag:'RAG Engineering',
    title:'Advanced RAG — Retrieval-Augmented Generation',
    goal:'Solve LLM hallucinations by securely hooking foundational models into private, live corporate databases.',
    color:'#10b981',
    topics:[
      {
        number:'1', title:'Advanced Document Processing',
        desc:'Ingesting chaotic corporate data into uniform, machine-readable formats.',
        bullets:[
          '<strong>Semantic Chunking & Parsing:</strong> Splitting massive PDFs not by character count, but by logical paragraph and semantic meaning boundaries.',
          '<strong>Multimodal Embedding:</strong> Embedding text, tables, and images into the exact same vector space for unified retrieval.'
        ],
        courseUrl:'https://learn.deeplearning.ai/courses/advanced-retrieval-for-ai',
        courseName:'LangChain & DeepLearning.AI: Advanced Retrieval for AI'
      },
      {
        number:'2', title:'Complex Retrieval Strategies',
        desc:'Moving beyond basic keyword searches to intelligent, precision data fetching.',
        bullets:[
          '<strong>Hybrid Search (BM25 + Dense Vectors):</strong> Combining exact keyword matching with deep semantic understanding to guarantee perfect document retrieval.',
          '<strong>Query Routing & Expansion:</strong> Using an LLM to rewrite a user\'s prompt into multiple optimized queries before searching the database.'
        ],
        courseUrl:'https://learn.deeplearning.ai/courses/advanced-retrieval-for-ai',
        courseName:'LangChain & DeepLearning.AI: Advanced Retrieval for AI'
      },
      {
        number:'3', title:'Re-Ranking & Generation Optimization',
        desc:'Ensuring only the most mathematically relevant data reaches the generation layer.',
        bullets:[
          '<strong>Cross-Encoder Re-Ranking:</strong> Passing the top 20 database results through a secondary neural network to precisely score their relevance to the original prompt.',
          '<strong>Context Window Management:</strong> Dynamically compressing retrieved text so it fits within an LLM API limit without losing critical facts.'
        ],
        courseUrl:'https://learn.deeplearning.ai/courses/advanced-retrieval-for-ai',
        courseName:'LangChain & DeepLearning.AI: Advanced Retrieval for AI'
      }
    ],
    projects:[
      {type:'foundation', title:'Naive Semantic Q&A Bot',
       what:'A basic script that loads a text document, chunks it, embeds it using OpenAI APIs, and answers a direct question.',
       desc:'Build the minimal viable RAG loop: load PDF → chunk by paragraph → embed with text-embedding-ada-002 → store in memory → retrieve top-k chunks → pass to GPT-4 with context prompt.'},
      {type:'capstone', title:'Enterprise Multi-Modal RAG Firewall',
       what:'A production application that ingests complex PDF financial reports containing text, tables, and charts.',
       desc:'Implement Hybrid Search (BM25 + dense vectors) and a Cohere Re-Ranker to retrieve exact financial figures. Generate cited, hallucination-free summaries with source attribution and a confidence score for each claim.'}
    ]
  },
  {
    id:9, icon:'🕵️', shortTitle:'Multi-Agent AI Frameworks', tag:'AI Agents',
    title:'Stateful Multi-Agent Frameworks',
    goal:'Transition from models that "answer questions" to autonomous agents that plan, use tools, write code, and correct their own errors.',
    color:'#00c8ff',
    topics:[
      {
        number:'1', title:'Agentic Reasoning Protocols',
        desc:'Teaching LLMs how to think systematically before they type.',
        bullets:[
          '<strong>ReAct (Reason + Act):</strong> Forcing models to output a thought process, decide on an action, execute a tool, and observe the result in a structured loop.',
          '<strong>Chain of Thought & Tree of Thoughts:</strong> Allowing the model to branch out multiple logic paths and evaluate the most promising one before proceeding.'
        ],
        courseUrl:'https://learn.deeplearning.ai/courses/ai-agents-in-langgraph',
        courseName:'Andrew Ng / DeepLearning.AI: AI Agentic Design Patterns'
      },
      {
        number:'2', title:'Tool Use — Function Calling',
        desc:'Giving LLMs hands to interact with the outside world.',
        bullets:[
          '<strong>API Binding:</strong> Training an LLM to generate precise JSON payloads that execute SQL queries, search Google, trigger terminal commands, or call internal APIs.',
          '<strong>Tool Schemas & Validation:</strong> Defining strict input/output contracts so agents cannot hallucinate invalid tool calls or corrupt downstream systems.'
        ],
        courseUrl:'https://academy.langchain.com/courses/intro-to-langgraph',
        courseName:'LangChain Academy: LangGraph Foundations'
      },
      {
        number:'3', title:'Multi-Agent Orchestration',
        desc:'Building companies of AI models that collaborate, delegate, and self-correct.',
        bullets:[
          '<strong>State Machines for AI:</strong> Using directed graphs to manage memory, workflow states, and conditional branching between different specialist agents.',
          '<strong>Swarm Architectures:</strong> A Manager Agent breaks down a complex prompt and delegates to Coder Agents, Reviewer Agents, and Researcher Agents working in parallel.'
        ],
        courseUrl:'https://academy.langchain.com/courses/intro-to-langgraph',
        courseName:'LangChain Academy: LangGraph Foundations'
      }
    ],
    projects:[
      {type:'foundation', title:'ReAct Wikipedia Researcher Agent',
       what:'A single agent given a complex multi-hop query that automatically searches Wikipedia, reads results, and formulates a structured answer.',
       desc:'Implement the full ReAct loop from scratch: Thought → Action (Wikipedia search API) → Observation → Thought → Final Answer — with a maximum step limit and hallucination guard.'},
      {type:'capstone', title:'Autonomous Code-Generating AI Swarm',
       what:'A multi-agent system using LangGraph where you input a software requirement and receive working, tested code.',
       desc:'Agent 1 (Architect) designs the system specification. Agent 2 (Coder) writes the Python implementation. Agent 3 (Tester) runs the code in a sandbox, catches errors, and forces Agent 2 to rewrite until it compiles and passes all tests flawlessly.'}
    ]
  },
  {
    id:10, icon:'⚡', shortTitle:'Distributed Big Data & Compute', tag:'Big Data',
    title:'Distributed Big Data & Compute',
    goal:'Process the terabytes of data required to train foundation models without hardware bottlenecking or crashing.',
    color:'#a855f7',
    topics:[
      {
        number:'1', title:'Distributed Storage & Processing',
        desc:'Moving from processing data on one laptop to a cluster of 100 servers.',
        bullets:[
          '<strong>Hadoop & Parquet:</strong> Understanding columnar storage formats that compress data efficiently for ML ingestion at petabyte scale.',
          '<strong>Apache Spark (PySpark):</strong> Distributing massive data-cleaning operations across a cluster of CPUs with fault-tolerant resilient distributed datasets (RDDs).'
        ],
        courseUrl:'https://www.databricks.com/learn/training/apache-spark-programming-with-databricks',
        courseName:'Databricks Academy: Apache Spark Programming'
      },
      {
        number:'2', title:'Streaming Data Ingestion',
        desc:'Feeding real-time data into live AI models continuously.',
        bullets:[
          '<strong>Apache Kafka:</strong> Building event-streaming pipelines that handle millions of messages per second with guaranteed delivery and exactly-once semantics.',
          '<strong>Stream Processing:</strong> Consuming, transforming, and routing real-time data streams into vector databases and model inference endpoints without buffering delays.'
        ],
        courseUrl:'https://developer.confluent.io/courses/apache-kafka/get-started/',
        courseName:'Confluent: Apache Kafka for Beginners'
      },
      {
        number:'3', title:'Distributed AI Training',
        desc:'Training models that are too large to fit on a single graphics card.',
        bullets:[
          '<strong>Data Parallelism vs. Tensor Parallelism:</strong> Splitting the dataset across GPUs versus splitting the actual neural network layers — each strategy has different memory and communication tradeoffs.',
          '<strong>Mixed Precision Training:</strong> Using FP16 computations with FP32 master weights to double training throughput without sacrificing numerical stability.'
        ],
        courseUrl:'https://pytorch.org/tutorials/beginner/dist_overview.html',
        courseName:'PyTorch: Distributed Training Official Masterclass'
      }
    ],
    projects:[
      {type:'foundation', title:'PySpark Batch ETL Pipeline',
       what:'Processing a 10GB dataset of raw user logs using PySpark to clean, filter, and output ML-ready data.',
       desc:'Load raw JSON logs, filter invalid records, standardize timestamps, compute session-level aggregations, and output Parquet files optimized for downstream model training — with a data quality validation report.'},
      {type:'capstone', title:'Real-Time Kafka Vector Streaming Engine',
       what:'Simulating a live feed of 10,000 incoming user messages and embedding them into a vector database in real-time.',
       desc:'Use Kafka to stream messages, process them via an embedding model on the fly, write vectors directly into a distributed Pinecone database in real-time, and build a dashboard showing ingestion throughput and latency percentiles.'}
    ]
  },
  {
    id:11, icon:'🚀', shortTitle:'Enterprise MLOps & Model Serving', tag:'MLOps',
    title:'Enterprise MLOps & Model Serving',
    goal:'Deploy machine learning models into highly scalable, automated cloud production environments that serve millions of users.',
    color:'#f97316',
    topics:[
      {
        number:'1', title:'Containerization & Orchestration',
        desc:'Packaging your AI so it runs flawlessly on any server on Earth.',
        bullets:[
          '<strong>Docker:</strong> Wrapping models, APIs, and all dependencies into isolated, reproducible container images that eliminate "it works on my machine" problems.',
          '<strong>Kubernetes (K8s):</strong> The orchestrator that automatically scales up your Docker containers when traffic spikes and destroys idle instances when traffic drops.'
        ],
        courseUrl:'https://www.youtube.com/watch?v=3c-iBn73dDE',
        courseName:'TechWorld with Nana: Docker & Kubernetes Tutorial'
      },
      {
        number:'2', title:'High-Performance Model Serving',
        desc:'Exposing your model to the world via production-grade APIs.',
        bullets:[
          '<strong>FastAPI & Uvicorn:</strong> Building lightning-fast, asynchronous Python web servers that serve model predictions with sub-100ms latency.',
          '<strong>vLLM & Continuous Batching:</strong> Specialized serving engines for LLMs that batch multiple user prompts together inside GPU memory to maximize throughput and minimize cost-per-token.'
        ],
        courseUrl:'https://madewithml.com/',
        courseName:'Made With ML: MLOps Masterclass'
      },
      {
        number:'3', title:'CI/CD Pipelines & Model Drift Monitoring',
        desc:'Automating model updates and ensuring models do not degrade over time.',
        bullets:[
          '<strong>GitHub Actions:</strong> Writing automated pipelines that test, validate, and deploy your AI code the moment you push an update to the repository.',
          '<strong>Data & Concept Drift Detection:</strong> Setting up statistical triggers to alert you when real-world input data starts diverging from the original training distribution.'
        ],
        courseUrl:'https://madewithml.com/',
        courseName:'Made With ML: MLOps Masterclass'
      }
    ],
    projects:[
      {type:'foundation', title:'Dockerized FastAPI Model API',
       what:'Wrapping a Scikit-Learn model inside a FastAPI endpoint and containerizing it with Docker.',
       desc:'Train a classification model, expose a /predict endpoint via FastAPI with Pydantic request validation, build a Docker image, and demonstrate live JSON request/response with latency measurements.'},
      {type:'capstone', title:'Auto-Scaling Kubernetes LLM Serving Gateway',
       what:'Deploying an open-source LLM onto a Kubernetes cluster using vLLM for high-throughput batching.',
       desc:'Deploy Llama 3 8B with vLLM continuous batching, configure Kubernetes Horizontal Pod Autoscaler to scale on GPU utilization, and build a Prometheus/Grafana dashboard tracking GPU temperature, inference latency p50/p95/p99, and token throughput.'}
    ]
  },
  {
    id:12, icon:'🎛️', shortTitle:'Hardware-Aware AI & Edge Deployment', tag:'Edge AI',
    title:'Hardware-Aware AI & Edge Deployment',
    goal:'Compress massive, billions-of-parameter models so they can run on mobile phones, edge devices, and local servers without cloud dependency.',
    color:'#10b981',
    topics:[
      {
        number:'1', title:'Model Compression Mathematics',
        desc:'Reducing model weight without destroying its intelligence.',
        bullets:[
          '<strong>Quantization (FP16 to INT8/INT4):</strong> Converting 32-bit floating-point numbers in the model\'s weights into 4-bit integers to slash memory usage by 80% with minimal accuracy loss.',
          '<strong>Knowledge Distillation:</strong> Training a massive "Teacher" model to transfer its learned representations to a tiny "Student" model via soft probability targets.'
        ],
        courseUrl:'https://huggingface.co/docs/optimum/index',
        courseName:'Hugging Face: Quantization and Model Optimization'
      },
      {
        number:'2', title:'Low-Rank Adaptation (LoRA & QLoRA)',
        desc:'Fine-tuning massive open-source models on consumer hardware.',
        bullets:[
          '<strong>LoRA Architecture:</strong> Instead of updating 70 billion parameters, freezing the model and injecting tiny trainable rank-decomposition matrices to teach new skills on a single GPU.',
          '<strong>QLoRA:</strong> Combining 4-bit NF4 quantization with LoRA adapters to fine-tune 65B+ parameter models on a single 48GB GPU — democratizing frontier model customization.'
        ],
        courseUrl:'https://www.youtube.com/watch?v=PXWGgN0KaoY',
        courseName:'Umar Jamil: LoRA and QLoRA Explained Deeply'
      },
      {
        number:'3', title:'Edge Inference Engines',
        desc:'Compiling models to run natively on Apple Silicon, Android, or IoT chips.',
        bullets:[
          '<strong>ONNX & TensorRT:</strong> Converting PyTorch models into highly optimized, hardware-specific computation graphs for maximum inference speed.',
          '<strong>llama.cpp:</strong> Running massive LLMs purely on CPU/RAM when GPUs are unavailable — achieving 20-40 tokens/second on consumer laptops.'
        ],
        courseUrl:'https://huggingface.co/docs/optimum/index',
        courseName:'Hugging Face: Quantization and Model Optimization'
      }
    ],
    projects:[
      {type:'foundation', title:'ONNX Vision Model Exporter',
       what:'Training a custom CNN in PyTorch, converting it to an ONNX computation graph, and running inference locally without PyTorch.',
       desc:'Export the model to ONNX format, validate output equivalence numerically, run inference via onnxruntime, and benchmark the latency and memory improvement versus the original PyTorch model.'},
      {type:'capstone', title:'QLoRA Fine-Tuned & Quantized Local LLM',
       what:'Taking an open-weights model, fine-tuning it with QLoRA on specialized data, quantizing it, and running it locally.',
       desc:'Use QLoRA to fine-tune on a highly specialized medical text dataset using a single GPU, quantize the merged model to 4-bit precision using GGUF format, run locally via llama.cpp at 30+ tokens per second, and benchmark accuracy retention versus the base model.'}
    ]
  },
  {
    id:13, icon:'🛡️', shortTitle:'Adversarial AI & Security', tag:'AI Security',
    title:'Adversarial AI, Security & Red-Teaming',
    goal:'Protect the systems you build from exploitation. Any senior engineer who cannot secure an AI model is an architectural liability to an enterprise.',
    color:'#ff4fcb',
    topics:[
      {
        number:'1', title:'Adversarial Machine Learning & Robustness',
        desc:'Discovering how neural networks can be tricked and learning how to harden them mathematically.',
        bullets:[
          '<strong>Evasion & Poisoning Mechanics:</strong> Studying how attackers inject malicious data into training sets or modify inputs to bypass model classification systems.',
          '<strong>Adversarial Training Regimens:</strong> Training models directly on adversarial examples to build mathematical resilience against zero-day input manipulation attacks.'
        ],
        courseUrl:'https://introtodeeplearning.com/',
        courseName:'MIT 6.S191: Adversarial Machine Learning & Robustness'
      },
      {
        number:'2', title:'LLM Vulnerabilities & OWASP Top 10',
        desc:'Securing generative AI applications against unique, non-deterministic security exploits.',
        bullets:[
          '<strong>Prompt Injection & Data Leaks:</strong> Analyzing indirect prompt injections and preventing the extraction of hidden system prompts, API keys, or private user data.',
          "<strong>Insecure Output Handling:</strong> Safeguarding downstream applications — databases, terminals, browsers — from executing malicious code generated by a hallucinating LLM."
        ],
        courseUrl:'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
        courseName:'OWASP LLM Top 10 Masterclass'
      },
      {
        number:'3', title:'Vulnerability Exploit Deep Dives',
        desc:'Analyzing structural risk surfaces within model weight files.',
        bullets:[
          '<strong>Sleeper Agents & Serialized Vulnerabilities:</strong> Identifying malicious code hidden inside pre-trained .pkl file formats and transitioning infrastructure to secure SafeTensors alternatives.',
          '<strong>Supply Chain Attacks:</strong> Auditing model cards, dataset provenance, and fine-tuning pipelines for backdoor injection risks before deploying to production.'
        ],
        courseUrl:'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
        courseName:'OWASP LLM Top 10 Masterclass'
      }
    ],
    projects:[
      {type:'foundation', title:'Prompt Injection Tester Script',
       what:'A Python script that automatically feeds known jailbreak payloads into an LLM API to test if the system prompt breaks.',
       desc:'Build a dataset of 50+ known injection attack patterns, automate submission to a target LLM endpoint, parse responses for signs of system prompt leakage, and generate a structured vulnerability report.'},
      {type:'capstone', title:'Automated Red-Teaming & NeMo Guardrails Firewall',
       what:'An end-to-end automated security pipeline that attacks and then defends an LLM deployment.',
       desc:'Program an autonomous "Attacker Script" that subjects a target RAG model to recursive jailbreak attempts and generates a threat report. Then build a validation firewall using Nvidia\'s NeMo Guardrails to mathematically intercept and sanitize malicious inputs before they reach the model.'}
    ]
  },
  {
    id:14, icon:'🏛️', shortTitle:'AI Strategy & Governance', tag:'AI Leadership',
    title:'AI Strategy, Ethics & Corporate Governance',
    goal:'Bridge the gap between engineering metrics and company profits — the exact skill set required to step into Principal Architect and C-Suite executive roles.',
    color:'#f97316',
    topics:[
      {
        number:'1', title:'Enterprise AI Strategy & Operational ROI',
        desc:'Translating raw algorithmic predictions into corporate value — and knowing when not to use AI.',
        bullets:[
          '<strong>Cost-Benefit Frameworks:</strong> Evaluating the financial trade-offs of building custom local open-weight pipelines versus integrating cloud wrapper APIs like OpenAI or Anthropic.',
          '<strong>AI Key Performance Indicators (KPIs):</strong> Tracking engineering benchmarks like throughput latency side-by-side with business revenue metrics to prove ROI to the board.'
        ],
        courseUrl:'https://hai.stanford.edu/education',
        courseName:'Stanford HAI: AI, Economics, and Strategy'
      },
      {
        number:'2', title:'AI GRC — Governance, Risk & Compliance',
        desc:'Structuring deployment pipelines to comply with modern international technology regulations.',
        bullets:[
          '<strong>The NIST AI Risk Management Framework:</strong> Documenting model behaviors to ensure accountability, transparency, and data privacy for corporate audits and regulators.',
          '<strong>Global Regulatory Compliance:</strong> Aligning system architectures with the EU AI Act, GDPR, and enterprise auditing requirements to operate legally in every market.'
        ],
        courseUrl:'https://www.nist.gov/artificial-intelligence/ai-risk-management-framework',
        courseName:'NIST AI Risk Management Framework Official Training'
      },
      {
        number:'3', title:'Responsible AI & Explainability (XAI)',
        desc:'Removing the "black box" mystery behind complex neural network outputs.',
        bullets:[
          '<strong>Bias Detection & Mitigation:</strong> Auditing models to catch and correct systematic demographic disparities in training sets before they reach production.',
          '<strong>Algorithmic Explainability (SHAP & LIME):</strong> Designing mathematical workflows that make complex model conclusions interpretable for legal teams, regulators, and non-technical stakeholders.'
        ],
        courseUrl:'https://www.youtube.com/watch?v=aRAFOB1zt5Y',
        courseName:'IBM Technology: Responsible AI — Governance, Ethics & Best Practices'
      }
    ],
    projects:[
      {type:'foundation', title:'Server Cost & Latency ROI Calculator',
       what:'A Python tool that models the exact cloud cost vs. hardware depreciation cost of serving 1 million LLM requests per day.',
       desc:'Build an interactive CLI tool that accepts model size, expected QPS, hardware cost, and cloud pricing as inputs — outputting a detailed 12-month TCO comparison matrix across 3 deployment architectures with break-even analysis.'},
      {type:'capstone', title:'The Boardroom AI Governance Proposal & Audit',
       what:'A comprehensive, production-ready system architecture review for a high-stakes AI deployment such as automated underwriting.',
       desc:'Detail the total operational server cost matrix, mathematical data bias metrics across demographic cohorts, exact risk mitigation logs using NIST AI RMF categories, specific legal compliance mappings for GDPR and EU AI Act, and a board-ready executive summary with a strategic recommendation.'}
    ]
  }
];

const TIMELINE = [
  { milestone:1, icon:'🧱', title:'The Bedrock', phases:'Phases 1–3', duration:'Months 1–10', color:'#00c8ff',
    objective:'Transitioning from zero to competent Software Engineer capable of building backend data systems, writing production Python, and architecting relational and vector storage layers.' },
  { milestone:2, icon:'🧠', title:'Core Intelligence', phases:'Phases 4–6', duration:'Months 11–19', color:'#a855f7',
    objective:'Building the classical and neural mechanisms that allow machines to map data to predictions — from XGBoost to PyTorch deep networks and real-time computer vision systems.' },
  { milestone:3, icon:'⚡', title:'The Bleeding Edge', phases:'Phases 7–9', duration:'Months 20–29', color:'#f97316',
    objective:'Mastering generative text, Transformer sequence modeling, production RAG systems, and autonomous multi-agent reasoning frameworks using LangGraph.' },
  { milestone:4, icon:'🏗️', title:'Enterprise Scale', phases:'Phases 10–12', duration:'Months 30–37', color:'#10b981',
    objective:"Transitioning from 'building models' to distributed big data pipelines, Kubernetes-grade serving infrastructure, and hardware-aware edge deployment with LoRA/QLoRA fine-tuning." },
  { milestone:5, icon:'🎯', title:'The Architect', phases:'Phases 13–14', duration:'Months 38–40', color:'#ff4fcb',
    objective:"Stepping into the Principal role: breaking models via cyber attacks with automated red-teaming, governing them under NIST/GDPR/EU AI Act frameworks, and driving board-level ROI decisions." }
];

const DIRECTIVES = [
  { number:'01', label:'Law 1 — Repository First', title:"The 'Repository First' Rule",
    desc:"You are not allowed to claim you have finished a Phase until both the Foundation Project and Master Capstone Project are fully coded, pushed to a public GitHub repository, and documented with a professional README.",
    highlight:'Your GitHub is your resume. No code pushed = phase not complete.' },
  { number:'02', label:'Law 2 — Two-Pass Method', title:"The 'Two-Pass' Daily Study Routine",
    desc:"Spend 40% of your time watching the Master Course Links taking conceptual notes. Spend 60% of your time with the video closed, writing the code from scratch in your IDE, debugging the errors manually.",
    highlight:'40% consume → 60% build. Passive watching builds zero skills.' },
  { number:'03', label:'Law 3 — Deep Work', title:'Isolation & Deep Work',
    desc:"Treat this journey like a high-level university degree combined with a full-time job. AI Engineering of this magnitude cannot be learned while distracted. Block out 4–6 hours a day of pure, uninterrupted execution.",
    highlight:'4–6 hours daily. Zero notifications. No exceptions.' }
];

// ────────────────────────────────────────────────────────────────
// CONTACT FORM — Global function (accessible from inline onclick)
// ────────────────────────────────────────────────────────────────
function sendContactMessage() {
  const nameEl    = document.getElementById('contact-name');
  const emailEl   = document.getElementById('contact-email');
  const messageEl = document.getElementById('contact-message');
  const feedback  = document.getElementById('contact-feedback');

  if (!nameEl || !emailEl || !messageEl) return;

  const name    = nameEl.value.trim();
  const email   = emailEl.value.trim();
  const message = messageEl.value.trim();

  // Validation
  if (!name || !email || !message) {
    feedback.className = 'contact-validation error';
    feedback.textContent = '⚠ Please fill in all fields before sending.';
    return;
  }
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRx.test(email)) {
    feedback.className = 'contact-validation error';
    feedback.textContent = '⚠ Please enter a valid email address.';
    return;
  }

  // Build Gmail compose URL
  const subject = encodeURIComponent(`AI Architect Academy Inquiry — ${name}`);
  const body    = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n──────────────────\nMessage:\n${message}\n──────────────────\n\nSent via AI Architect Academy`
  );
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=mfarhanafzal809@gmail.com&su=${subject}&body=${body}`;

  window.open(gmailURL, '_blank', 'noopener,noreferrer');

  // Success state
  feedback.className = 'contact-validation success';
  feedback.textContent = '✓ Gmail opened with your message! Just hit Send in Gmail.';
  nameEl.value = '';
  emailEl.value = '';
  messageEl.value = '';
}

// ────────────────────────────────────────────────────────────────
// CONTACT FORM HTML (reused in both contact page + about page)
// ────────────────────────────────────────────────────────────────
function contactFormHTML() {
  return `
    <div class="contact-section">
      <div class="contact-card">
        <div class="contact-title">Get In Touch</div>
        <div class="contact-subtitle">Have questions, feedback, or want to collaborate?<br>We respond within 24 hours.</div>

        <div class="contact-field">
          <label class="contact-label" for="contact-name">Your Name</label>
          <input class="contact-input" type="text" id="contact-name" placeholder="Your Name" autocomplete="name"/>
        </div>
        <div class="contact-field">
          <label class="contact-label" for="contact-email">Your Email</label>
          <input class="contact-input" type="email" id="contact-email" placeholder="Your Email" autocomplete="email"/>
        </div>
        <div class="contact-field">
          <label class="contact-label" for="contact-message">Your Message</label>
          <textarea class="contact-input contact-textarea" id="contact-message" placeholder="Your Message"></textarea>
        </div>

        <button class="contact-send-btn" onclick="sendContactMessage()">
          ✉ Send Message
        </button>

        <div id="contact-feedback" class="contact-validation"></div>

        <div class="contact-direct">
          Direct email:&nbsp;
          <a class="contact-email-link" href="mailto:mfarhanafzal809@gmail.com">
            mfarhanafzal809@gmail.com
          </a>
        </div>
      </div>
    </div>`;
}

// ────────────────────────────────────────────────────────────────
// SPA ROUTER
// ────────────────────────────────────────────────────────────────
const Router = {
  currentPage: 'home',
  params: {},

  navigate(page, params = {}) {
    this.currentPage = page;
    this.params = params;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeSidebar();
  },

  render() {
    const main = document.getElementById('main-view');
    if (!main) return;
    switch (this.currentPage) {
      case 'home':     main.innerHTML = renderHome();                      break;
      case 'phase':    main.innerHTML = renderPhasePage(this.params.id);   break;
      case 'projects': main.innerHTML = renderProjectsPage(this.params.id);break;
      case 'timeline': main.innerHTML = renderTimelinePage();              break;
      case 'strategy': main.innerHTML = renderStrategyPage();              break;
      case 'contact':  main.innerHTML = renderContactPage();               break;
      case 'guide':    main.innerHTML = renderGuidePage();                 break;
      case 'about':    main.innerHTML = renderAboutPage();                 break;
      default:         main.innerHTML = renderHome();
    }
    initRevealAnimation();
  }
};

// ────────────────────────────────────────────────────────────────
// RENDER — HOME
// ────────────────────────────────────────────────────────────────
function renderHome() {
  return `
  <section class="hero">
    <div class="hero-eyebrow"><span class="hero-eyebrow-dot"></span>Zero to Principal AI Engineer</div>
    <h1 class="hero-title">
      <span class="line-gradient">Master AI Engineering</span>
      <span class="line-white">at Architect Level</span>
    </h1>
    <p class="hero-subtitle">The definitive Principal AI Engineer blueprint — 14 phases from pure mathematics to multi-agent systems, hardware optimization, and enterprise AI governance. Uncompressed. Uncompromising.</p>
    <div class="hero-stats">
      <div class="hero-stat"><span class="hero-stat-value">14</span><span class="hero-stat-label">Phases</span></div>
      <div class="hero-stat"><span class="hero-stat-value">40</span><span class="hero-stat-label">Months</span></div>
      <div class="hero-stat"><span class="hero-stat-value">28+</span><span class="hero-stat-label">Projects</span></div>
      <div class="hero-stat"><span class="hero-stat-value">5</span><span class="hero-stat-label">Milestones</span></div>
    </div>
    <div class="hero-cta">
      <button class="btn-primary" onclick="Router.navigate('phase',{id:1})">🚀 Begin Phase 1</button>
      <button class="btn-secondary" onclick="Router.navigate('guide')">📖 How to Use This</button>
    </div>
    <div class="scroll-indicator"><div class="scroll-line"></div>SCROLL TO EXPLORE</div>
  </section>

  <section class="phases-section">
    <div class="section-header reveal">
      <span class="section-eyebrow">The Blueprint</span>
      <h2 class="section-title">14 Phases. Zero Fluff.</h2>
      <p class="section-subtitle">Each phase builds on the last — from mathematical foundations to adversarial AI security and corporate governance.</p>
    </div>
    <div class="phases-grid">
      ${PHASES.map(p => `
        <a class="phase-card" onclick="Router.navigate('phase',{id:${p.id}})" href="javascript:void(0)" role="button" aria-label="Open Phase ${p.id}: ${p.shortTitle}">
          <div class="phase-card-glow"></div>
          <div class="phase-number">Phase ${String(p.id).padStart(2,'0')}</div>
          <span class="phase-icon">${p.icon}</span>
          <div class="phase-title">${p.shortTitle}</div>
          <div class="phase-desc">${p.goal.substring(0,90)}…</div>
          <span class="phase-tag">${p.tag}</span>
          <div class="phase-arrow">→</div>
        </a>`).join('')}
    </div>
  </section>

  <section style="max-width:900px;margin:0 auto;padding:0 24px">
    <div class="section-header reveal">
      <span class="section-eyebrow">Your Journey</span>
      <h2 class="section-title">Plan. Execute. Architect.</h2>
    </div>
  </section>

  <div class="bottom-actions">
    <a class="big-action-card" onclick="Router.navigate('timeline')" href="javascript:void(0)">
      <div class="big-action-icon">🗓️</div>
      <div class="big-action-title">40-Month Master Timeline</div>
      <div class="big-action-desc">The exact milestone roadmap from absolute zero to Principal AI Engineer — broken into five strategic milestones with clear phase targets.</div>
      <div class="big-action-btn">View Full Timeline →</div>
    </a>
    <a class="big-action-card" onclick="Router.navigate('strategy')" href="javascript:void(0)">
      <div class="big-action-icon">⚡</div>
      <div class="big-action-title">Execution Directives</div>
      <div class="big-action-desc">The three non-negotiable laws that separate engineers who reach Principal level from those who plateau permanently at mid-level.</div>
      <div class="big-action-btn">Read The Laws →</div>
    </a>
  </div>

  <footer class="footer">
    <div class="footer-brand">Solo AI Architect Academy</div>
    <p>The Ultimate Zero-to-Principal AI Engineering Master Curriculum</p>
    <p style="margin-top:8px">Built for engineers who refuse to be average.</p>
  </footer>`;
}

// ────────────────────────────────────────────────────────────────
// RENDER — PHASE DETAIL
// ────────────────────────────────────────────────────────────────
function renderPhasePage(id) {
  const p = PHASES.find(x => x.id === id);
  if (!p) return '<p style="padding:40px;color:var(--text-secondary)">Phase not found.</p>';
  return `
  <div class="page-hero">
    <button class="back-btn" onclick="Router.navigate('home')">← Back to All Phases</button>
    <div class="phase-hero-tag">${p.icon} Phase ${String(p.id).padStart(2,'0')} · ${p.tag}</div>
    <h1 class="phase-hero-title"><span>${p.title}</span></h1>
    <div class="phase-hero-goal">${p.goal}</div>
  </div>

  <div class="topics-container">
    ${p.topics.map((t,i) => `
      <div class="topic-card reveal" style="animation-delay:${i*.1}s">
        <div class="topic-number">Topic ${t.number}</div>
        <div class="topic-title">${t.title}</div>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:14px;line-height:1.6">${t.desc}</p>
        <ul class="topic-bullets">${t.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
        <a class="learn-btn" href="${t.courseUrl}" target="_blank" rel="noopener noreferrer">
          ▶ Start Learning — ${t.courseName}
        </a>
      </div>`).join('')}
  </div>

  <div style="padding:0 32px;max-width:900px;margin:0 auto 16px">
    <div class="projects-section-btn reveal" onclick="Router.navigate('projects',{id:${p.id}})">
      <div class="projects-btn-left">
        <div class="projects-btn-icon">🛠️</div>
        <div>
          <div class="projects-btn-title">Phase ${p.id} Projects</div>
          <div class="projects-btn-sub">1 Foundation Project · 1 Master Capstone</div>
        </div>
      </div>
      <div class="projects-btn-arrow">→</div>
    </div>
  </div>

  <div style="max-width:900px;margin:0 auto;padding:16px 32px 60px;display:flex;gap:12px;flex-wrap:wrap">
    ${p.id > 1  ? `<button class="btn-secondary" onclick="Router.navigate('phase',{id:${p.id-1}})">← Phase ${p.id-1}</button>` : ''}
    ${p.id < 14 ? `<button class="btn-primary"   onclick="Router.navigate('phase',{id:${p.id+1}})">Phase ${p.id+1} →</button>` : ''}
  </div>

  <footer class="footer">
    <div class="footer-brand">solo AI Architect Academy</div>
    <p>Phase ${p.id} of 14 · ${p.tag}</p>
  </footer>`;
}

// ────────────────────────────────────────────────────────────────
// RENDER — PROJECTS PAGE
// ────────────────────────────────────────────────────────────────
function renderProjectsPage(id) {
  const p = PHASES.find(x => x.id === id);
  if (!p) return '<p style="padding:40px;color:var(--text-secondary)">Phase not found.</p>';
  return `
  <div class="page-hero">
    <button class="back-btn" onclick="Router.navigate('phase',{id:${p.id}})">← Back to Phase ${p.id}</button>
    <div class="phase-hero-tag">🛠️ Phase ${p.id} Projects</div>
    <h1 class="phase-hero-title"><span>${p.shortTitle}</span> Projects</h1>
    <div class="phase-hero-goal">Build. Push. Document. These projects are your proof of competence — not exercises, but professional deliverables that belong on your GitHub profile.</div>
  </div>

  <div class="projects-grid">
    ${p.projects.map((proj,i) => `
      <div class="project-card ${proj.type} reveal" style="animation-delay:${i*.15}s">
        <div class="project-badge ${proj.type}">
          ${proj.type==='foundation' ? '🏗 Foundation Project' : '🎯 Master Capstone'}
        </div>
        <div class="project-title">${proj.title}</div>
        <div class="project-what">What it is:</div>
        <p class="project-desc" style="margin-bottom:8px">${proj.what}</p>
        <div class="project-what">What it must do:</div>
        <p class="project-desc">${proj.desc}</p>
        <button class="learn-btn" onclick="alert('Open your IDE and start building! Push to GitHub with a professional README when complete.')">
          💻 Start Building
        </button>
      </div>`).join('')}
  </div>

  <div style="max-width:900px;margin:0 auto;padding:0 32px 70px">
    <div class="reveal" style="background:linear-gradient(135deg,rgba(0,200,255,0.05),rgba(168,85,247,0.07));border:1px solid rgba(0,200,255,0.16);border-radius:var(--radius-lg);padding:26px;text-align:center">
      <div style="font-size:26px;margin-bottom:10px">📌</div>
      <div style="font-family:var(--font-display);font-size:17px;font-weight:700;color:var(--text-primary);margin-bottom:8px">Repository First Rule</div>
      <div style="font-size:14px;color:var(--text-secondary);line-height:1.7">Both projects must be fully coded, pushed to a public GitHub repository with a professional README.md before marking this phase complete. Your GitHub is your résumé — every phase is a visible credential.</div>
    </div>
  </div>

  <footer class="footer">
    <div class="footer-brand">Solo AI Architect Academy</div>
    <p>Phase ${p.id} Projects · Build. Deploy. Document.</p>
  </footer>`;
}

// ────────────────────────────────────────────────────────────────
// RENDER — TIMELINE
// ────────────────────────────────────────────────────────────────
function renderTimelinePage() {
  return `
  <div class="page-hero">
    <button class="back-btn" onclick="Router.navigate('home')">← Back to Home</button>
    <div class="phase-hero-tag">🗓️ Execution Plan</div>
    <h1 class="phase-hero-title"><span>40-Month Master</span> Timeline</h1>
    <div class="phase-hero-goal">The exact milestone roadmap from absolute zero to Principal AI Engineer. Follow this pacing with deliberate practice, deep work blocks, and structural synthesis — no shortcuts.</div>
  </div>

  <div class="timeline-container">
    <div class="timeline-line"></div>
    ${TIMELINE.map((item,i) => `
      <div class="timeline-item reveal" style="animation-delay:${i*.15}s">
        <div class="timeline-milestone">
          <div class="timeline-dot" style="background:linear-gradient(135deg,${item.color},${item.color}99)">${item.milestone}</div>
        </div>
        <div class="timeline-content">
          <div class="timeline-phase-tags">
            <span class="timeline-tag">${item.phases}</span>
            <span class="timeline-tag" style="color:var(--accent-green);border-color:rgba(16,185,129,0.25);background:rgba(16,185,129,0.08)">⏱ ${item.duration}</span>
          </div>
          <div class="timeline-milestone-title">${item.icon} Milestone ${item.milestone}: ${item.title}</div>
          <div class="timeline-objective">${item.objective}</div>
          <div style="margin-top:14px">
            <button class="learn-btn" onclick="Router.navigate('phase',{id:${(item.milestone-1)*3+1 > 14 ? 13 : (item.milestone-1)*3+1}})">
              Start ${item.phases} →
            </button>
          </div>
        </div>
      </div>`).join('')}
  </div>

  <div style="max-width:700px;margin:0 auto;padding:0 32px 80px">
    <div class="reveal" style="background:linear-gradient(135deg,rgba(249,115,22,0.05),rgba(255,79,203,0.07));border:1px solid rgba(249,115,22,0.18);border-radius:var(--radius-lg);padding:30px;text-align:center">
      <div style="font-size:30px;margin-bottom:12px">⚡</div>
      <div style="font-family:var(--font-display);font-size:19px;font-weight:700;color:var(--text-primary);margin-bottom:12px">This is the end of the planning phase.</div>
      <div style="font-size:14px;color:var(--text-secondary);line-height:1.7">There is nothing left to design, nothing left to search for, and nothing left to compress. Execution begins now.</div>
      <button class="btn-primary" style="margin-top:18px" onclick="Router.navigate('phase',{id:1})">🚀 Begin Phase 1 Now</button>
    </div>
  </div>

  <footer class="footer">
    <div class="footer-brand">Solo AI Architect Academy</div>
    <p>40 Months · 5 Milestones · 14 Phases · Principal Engineer</p>
  </footer>`;
}

// ────────────────────────────────────────────────────────────────
// RENDER — STRATEGY / DIRECTIVES
// ────────────────────────────────────────────────────────────────
function renderStrategyPage() {
  return `
  <div class="page-hero">
    <button class="back-btn" onclick="Router.navigate('home')">← Back to Home</button>
    <div class="phase-hero-tag">⚡ Non-Negotiable</div>
    <h1 class="phase-hero-title"><span>Final Execution</span> Directives</h1>
    <div class="phase-hero-goal">You have the most powerful AI Engineering curriculum ever generated for this track. Do not waste it by being passive. Adhere strictly to these three laws.</div>
  </div>

  <div class="directives-container">
    ${DIRECTIVES.map((d,i) => `
      <div class="directive-card reveal" style="animation-delay:${i*.15}s">
        <div class="directive-number">${d.number}</div>
        <div class="directive-label">${d.label}</div>
        <div class="directive-title">${d.title}</div>
        <div class="directive-desc">${d.desc}</div>
        <div class="directive-highlight">${d.highlight}</div>
      </div>`).join('')}

    <div class="oath-card reveal">
      <div class="oath-title">⚔ The Principal Engineer's Oath</div>
      <ul class="oath-items">
        <li>🔬 I build before I claim to understand.</li>
        <li>📌 My GitHub is my résumé — every phase is a visible credential.</li>
        <li>🧠 I spend 60% of my time building, not watching.</li>
        <li>🛡️ I do not ship code I cannot defend architecturally.</li>
        <li>🚀 I do not plateau. I identify the gap and close it.</li>
      </ul>
      <button class="btn-primary" onclick="Router.navigate('phase',{id:1})">Begin Your Journey →</button>
    </div>
  </div>

  <footer class="footer">
    <div class="footer-brand">Solo AI Architect Academy</div>
    <p>Strategy without execution is hallucination.</p>
  </footer>`;
}

// ────────────────────────────────────────────────────────────────
// RENDER — CONTACT PAGE
// ────────────────────────────────────────────────────────────────
function renderContactPage() {
  return `
  <div class="page-hero">
    <button class="back-btn" onclick="Router.navigate('home')">← Back to Home</button>
    <div class="phase-hero-tag">✉️ Reach Out</div>
    <h1 class="phase-hero-title"><span>Contact</span> Us</h1>
    <div class="phase-hero-goal">Have questions about the curriculum, feedback on a phase, or want to collaborate? Fill in the form below — your message opens directly in Gmail, ready to send.</div>
  </div>
  ${contactFormHTML()}
  <footer class="footer">
    <div class="footer-brand">Solo AI Architect Academy</div>
    <p>We respond within 24 hours.</p>
  </footer>`;
}

// ────────────────────────────────────────────────────────────────
// RENDER — GUIDE
// ────────────────────────────────────────────────────────────────
function renderGuidePage() {
  const steps = [
    { title:'Read the Phase Goal First',
      desc:'Before watching any video or writing any code, read the goal statement at the top of the phase page. This frames your entire mental model before you consume content. Know the destination before you start the journey.' },
    { title:'Watch → Close → Build (The Two-Pass Method)',
      desc:'For each topic, click "Start Learning" to open the linked course. Watch at 1.25x speed while taking concise notes. Then close the video entirely and rebuild the concept from scratch in your IDE — no copy-paste allowed. Debug your own errors.' },
    { title:'Complete Both Projects Per Phase',
      desc:'Every phase has a Foundation Project and a Master Capstone. The Foundation verifies you understood the basics. The Capstone verifies you can apply concepts in realistic, ambiguous, production conditions. Skip neither.' },
    { title:'Push to GitHub Immediately',
      desc:'Every project goes to a public GitHub repository with a professional README.md. Document your logic, approach, key findings, and how to run the code. Your GitHub profile is your résumé — every pushed phase is a visible credential.' },
    { title:'Follow the 40-Month Timeline Strictly',
      desc:'Check the Timeline page and print it. Phases 1–3 in the first 10 months are the hardest stretch. Resist the urge to skip ahead. The phases are sequentially dependent — jumping to Deep Learning without strong Python fundamentals will collapse your understanding.' },
    { title:'Use the Sidebar for Rapid Navigation',
      desc:'Press ☰ (top left) at any time to jump between phases, the timeline, strategy page, or contact — without losing context. The sidebar phase grid gives you instant access to all 14 phases in two taps.' },
    { title:'Return to Directives When Motivation Dips',
      desc:'When the work gets hard — and it will — open the Execution Directives page. Read the three laws. Remember the Repository First rule. Reconnect to why you started. The gap between engineers who reach Principal and those who plateau is execution discipline, nothing else.' }
  ];
  return `
  <div class="page-hero">
    <button class="back-btn" onclick="Router.navigate('home')">← Back to Home</button>
    <div class="phase-hero-tag">📖 Getting Started</div>
    <h1 class="phase-hero-title"><span>How to Use</span> This Curriculum</h1>
    <div class="phase-hero-goal">A step-by-step guide to extracting maximum value from this system. Used with discipline, this curriculum will deliver you to a Principal AI Engineering role in 40 months.</div>
  </div>
  <div class="guide-container">
    ${steps.map((s,i) => `
      <div class="guide-step reveal" style="animation-delay:${i*.08}s">
        <div class="guide-step-num">${i+1}</div>
        <div class="guide-step-content">
          <div class="guide-step-title">${s.title}</div>
          <div class="guide-step-desc">${s.desc}</div>
        </div>
      </div>`).join('')}
    <div class="pro-tips reveal">
      <div class="pro-tips-title">✦ Pro Tips from Principal Engineers</div>
      ${[
        'Build your Phase projects on real-world datasets from Kaggle, Hugging Face, or live APIs — not toy examples. Interviewers can tell the difference.',
        'Pair each phase with one real case study: read how OpenAI, Google DeepMind, or Anthropic solved a similar problem at scale.',
        'Time-box your sessions: 90-minute focused blocks with a 15-minute break outperform 4-hour unfocused marathons every time.',
        'Teach each concept to a rubber duck or a text file. Explaining forces clarity gaps to surface. If you cannot explain it simply, revisit it.',
        'Track your GitHub contribution graph daily. Streaks build identity. Identity builds habits. Habits build Principal Engineers.'
      ].map(t=>`<div class="pro-tip-item">${t}</div>`).join('')}
    </div>
  </div>
  <footer class="footer">
    <div class="footer-brand">Solo AI Architect Academy</div>
    <p>Disciplined use of this curriculum produces a Principal AI Engineer in 40 months.</p>
  </footer>`;
}

// ────────────────────────────────────────────────────────────────
// RENDER — ABOUT
// ────────────────────────────────────────────────────────────────
function renderAboutPage() {
  const features = [
    { icon:'🎯', title:'Principal-Engineered',  desc:'Every topic, project, and course link is selected to match the exact job requirements of a Senior/Principal AI Engineer at top-tier tech companies.' },
    { icon:'🔄', title:'Sequentially Structured', desc:'14 phases build on each other with mathematical precision. Skip-proofed by design — each phase assumes mastery of the prior one.' },
    { icon:'⚡', title:'Production-Grade Projects', desc:'28+ projects mirror real enterprise scenarios — auto-diff engines, distributed Kafka pipelines, red-teaming firewalls, and board-level governance proposals.' },
    { icon:'🌐', title:'100% Free Resources',     desc:'Every single course link points to the world\'s best free educational content. Zero paywalls required to complete this curriculum end-to-end.' },
    { icon:'🛡️', title:'Security-Forward',        desc:'Phase 13 dedicates an entire phase to adversarial AI, prompt injection, and automated red-teaming — skills most curricula completely ignore.' },
    { icon:'🎛️', title:'Hardware-Aware',          desc:'Phase 12 teaches QLoRA, ONNX, and llama.cpp — enabling you to deploy frontier models locally on consumer hardware without cloud dependency.' },
    { icon:'🏗️', title:'GitHub-First',            desc:'The Repository First rule means you graduate with a fully public, documented proof-of-work portfolio that replaces certificates in technical hiring.' },
    { icon:'🏛️', title:'Architect-Level Depth',  desc:'Phase 14 covers NIST AI Risk Frameworks, EU AI Act compliance, and boardroom ROI proposals — the skills that separate engineers from architects.' }
  ];
  return `
  <div class="about-hero">
    <button class="back-btn" onclick="Router.navigate('home')" style="display:inline-flex;margin-bottom:30px">← Back to Home</button>
    <div class="phase-hero-tag" style="margin-bottom:22px">🌐 About This Platform</div>
    <h1 class="phase-hero-title" style="font-size:clamp(28px,5vw,54px)">
      Built for Those Who <span>Refuse to be Average</span>
    </h1>
    <p style="font-size:16px;color:var(--text-secondary);line-height:1.7;max-width:620px;margin:18px auto 0">
      AI Architect Academy is not a course platform. It is an engineered execution system — a zero-to-architect 
      Principal AI Engineering blueprint compressed into the most efficient, mathematically complete, 
      and uncompromising learning structure ever assembled for the field.
    </p>
  </div>

  <div class="about-features">
    ${features.map((f,i) => `
      <div class="about-feature reveal" style="animation-delay:${i*.07}s">
        <span class="about-feature-icon">${f.icon}</span>
        <div class="about-feature-title">${f.title}</div>
        <div class="about-feature-desc">${f.desc}</div>
      </div>`).join('')}
  </div>

  <div style="max-width:680px;margin:0 auto;padding:0 32px 40px">
    <div class="reveal" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-xl);padding:38px;text-align:center;backdrop-filter:blur(12px)">
      <div style="font-family:var(--font-display);font-size:20px;font-weight:700;background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:14px">The Mission</div>
      <p style="font-size:15px;color:var(--text-secondary);line-height:1.75">
        To take anyone from absolute zero in AI — regardless of background, budget, or geography — 
        and deliver them to the doorstep of a Principal AI Engineering role through uncompromising 
        curriculum architecture, production-grade project portfolios, and relentless execution discipline.
      </p>
      <p style="font-size:13px;color:var(--text-muted);margin-top:14px;font-family:var(--font-mono)">
        AI is the most powerful technology in human history. You are here to architect it.
      </p>
    </div>
  </div>

  ${contactFormHTML()}

  <footer class="footer">
    <div class="footer-brand">Solo AI Architect Academy</div>
    <p>The Ultimate Zero-to-Principal AI Engineering Master Curriculum</p>
    <p style="margin-top:8px;font-size:11px">Execution begins now.</p>
  </footer>`;
}

// ────────────────────────────────────────────────────────────────
// SIDEBAR CONTROLS
// ────────────────────────────────────────────────────────────────
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('visible');
  document.getElementById('menu-toggle').classList.add('open');
  document.getElementById('menu-toggle').setAttribute('aria-expanded','true');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');
  document.getElementById('menu-toggle').classList.remove('open');
  document.getElementById('menu-toggle').setAttribute('aria-expanded','false');
}
function toggleSidebar() {
  document.getElementById('sidebar').classList.contains('open') ? closeSidebar() : openSidebar();
}

// ────────────────────────────────────────────────────────────────
// THEME
// ────────────────────────────────────────────────────────────────
function setTheme(mode) {
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`[data-theme-btn="${mode}"]`);
  if (btn) btn.classList.add('active');
  if (mode === 'light') {
    document.documentElement.setAttribute('data-theme','light');
  } else if (mode === 'dark') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? document.documentElement.removeAttribute('data-theme')
      : document.documentElement.setAttribute('data-theme','light');
  }
  localStorage.setItem('aia-theme', mode);
}
function loadTheme() {
  setTheme(localStorage.getItem('aia-theme') || 'dark');
}

// ────────────────────────────────────────────────────────────────
// REVEAL ANIMATION (Intersection Observer)
// ────────────────────────────────────────────────────────────────
function initRevealAnimation() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ────────────────────────────────────────────────────────────────
// PARTICLE CANVAS
// ────────────────────────────────────────────────────────────────
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [], raf;

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

  const COLORS = ['0,200,255','168,85,247','249,115,22','16,185,129','255,79,203'];

  function Particle() {
    this.reset = function() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.r = Math.random() * 1.4 + 0.3;
      this.vx = (Math.random() - 0.5) * 0.28;
      this.vy = (Math.random() - 0.5) * 0.28;
      this.a = Math.random() * 0.4 + 0.08;
      this.c = COLORS[Math.floor(Math.random() * COLORS.length)];
    };
    this.update = function() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    };
    this.draw = function() {
      ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${this.c},${this.a})`; ctx.fill();
    };
    this.reset();
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i+1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < 95) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,200,255,${0.055*(1-d/95)})`;
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    raf = requestAnimationFrame(animate);
  }

  resize();
  particles = Array.from({ length: 110 }, () => new Particle());
  animate();
  window.addEventListener('resize', resize);
}

// ────────────────────────────────────────────────────────────────
// INIT — All event listeners bound ONCE at DOMContentLoaded
// ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Theme
  loadTheme();

  // Initial render
  Router.navigate('home');

  // Particle background
  initParticleCanvas();

  // ── Hamburger menu ──
  document.getElementById('menu-toggle').addEventListener('click', toggleSidebar);

  // ── Sidebar overlay click to close ──
  document.getElementById('sidebar-overlay').addEventListener('click', closeSidebar);

  // ── Navbar brand → home ──
  document.getElementById('nav-home-btn').addEventListener('click', () => Router.navigate('home'));

  // ── Sidebar logo → home ──
  document.getElementById('sidebar-home-btn').addEventListener('click', () => Router.navigate('home'));

  // ── Sidebar nav links ──
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const nav = el.dataset.nav;
      Router.navigate(nav);
      // Update active state
      document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
      el.classList.add('active');
    });
  });

  // ── Sidebar phase buttons ──
  document.querySelectorAll('[data-phase-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      Router.navigate('phase', { id: parseInt(btn.dataset.phaseNav, 10) });
    });
  });

  // ── Theme buttons ──
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => setTheme(btn.dataset.themeBtn));
  });

  // ── Keyboard: Escape closes sidebar ──
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSidebar();
  });

});
