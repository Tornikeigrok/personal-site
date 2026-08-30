export const EDUCATION = {
  school: 'Towson University',
  degree: 'B.S. in Computer Science',
  period: '05/2027',
  location: 'Baltimore, MD',
  honors: "Dean's List — recognized for academic excellence (Fall 2025)",
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Computer Architecture',
    'Operating Systems',
    'Software Engineering',
    'Web Programming',
  ],
}

export const SKILLS = [
  {
    category: 'Languages & Frontend',
    items: 'Java, JavaScript (ES6+), TypeScript, React, HTML5, CSS3, Tailwind',
  },
  {
    category: 'Backend & Databases',
    items:
      'Spring Boot, Hibernate/JPA, Express, REST APIs, Sequelize, BullMQ, PostgreSQL, Redis, OpenAI API Integration, Multithreading',
  },
  {
    category: 'Testing & Tools',
    items:
      'JUnit, Jest, Artillery, Git, GitHub, npm, REST API Testing, Integration Testing, Load Testing, CI/CD Fundamentals',
  },
]

export const EXPERIENCE = [
  {
    role: 'Software Engineer Intern',
    org: 'GoPanda',
    period: '05/2026 – Present',
    location: 'Remote',
    bullets: [
      'Maintained and enhanced a production auction platform serving thousands of users.',
      'Improved application efficiency by optimizing workloads across processes and worker threads, following performance and concurrency best practices.',
      'Implemented, tested, and deployed production updates and feature enhancements.',
    ],
  },
  {
    role: 'AI Data Trainer',
    org: 'Outlier.ai',
    period: '06/2023 – 01/2024',
    location: 'Remote',
    bullets: [
      'Evaluated and improved 750+ AI-generated JavaScript outputs, identifying edge cases and improving model accuracy.',
      'Performed systematic debugging and data analysis to validate algorithmic correctness and ensure reliable outputs.',
      'Analyzed LLM reasoning steps and conducted structured prompt experiments to improve model performance and reproducibility.',
    ],
  },
]

export const PROJECTS = [
  {
    name: 'MockStack AI',
    link: 'https://www.mockstackai.com/',
    description: 'AI-powered backend interview preparation platform.',
    period: '05/2026 – 06/2026',
    stack: ['Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Stripe'],
    bullets: [
      'Architected and deployed a full-stack AI-powered backend interview platform using Spring Boot, React, PostgreSQL, Redis, and Stripe.',
      'Designed an AI-driven interview engine that generates backend-focused questions and detailed explanations across SQL, REST APIs, concurrency, caching, networking, and system design.',
      'Built a production-ready platform used by early users to practice backend interview concepts through AI-generated questions and personalized explanations.',
    ],
  },
  {
    name: 'Fault-Tolerant Job Processing System',
    description: 'Asynchronous job processing system built for high-volume, unreliable workloads.',
    period: '03/2026 – 03/2026',
    stack: ['Java', 'Spring Boot', 'PostgreSQL'],
    bullets: [
      'Architected and built an asynchronous job processing system using multithreading to handle high-volume background workloads reliably.',
      'Engineered fault-tolerant retry workflows with exponential backoff, rate limiting, and failure recovery mechanisms.',
      'Engineered a concurrent worker system using thread pools to process jobs efficiently at scale.',
    ],
  },
]
