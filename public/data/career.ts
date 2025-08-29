// src/data/career.ts

export type Job = {
    slug: string;
    title: string;
    location: string;
    type: string;
    income: string;
    date: string;
    department: string;
    description: string;
    responsibilities: string[];
    qualifications: string[];
  };
  
  export const jobs: Job[] = [
    {
      slug: "ecommerce-manager",
      title: "E-commerce Manager",
      location: "United States",
      type: "Full-time",
      income: "$20,000 - $25,000",
      date: "August 09 2023",
      department: "Marketing",
      description:
        "We are seeking an experienced E-commerce Manager to oversee and optimize our online sales strategy.",
      responsibilities: [
        "Manage online product listings and promotions.",
        "Analyze e-commerce performance metrics.",
        "Collaborate with marketing to increase online sales.",
      ],
      qualifications: [
        "Bachelor’s degree in Marketing or Business.",
        "3+ years of e-commerce experience.",
        "Strong knowledge of Shopify or WooCommerce.",
      ],
    },
    {
      slug: "frontend-developer",
      title: "Frontend Developer",
      location: "India",
      type: "Full-time",
      income: "$25,000 - $30,000",
      date: "August 09 2023",
      department: "Development",
      description:
        "We are seeking a passionate and experienced Frontend Developer to join our growing team.",
      responsibilities: [
        "Develop and maintain responsive web applications using React.",
        "Collaborate with designers and backend developers.",
        "Optimize applications for maximum speed and scalability.",
      ],
      qualifications: [
        "Bachelor's degree in Computer Science or related field.",
        "5+ years of experience in frontend development.",
        "Strong proficiency in React, TypeScript, and modern CSS.",
      ],
    },
    {
      slug: "backend-developer",
      title: "Backend Developer",
      location: "Germany",
      type: "Full-time",
      income: "$28,000 - $35,000",
      date: "August 15 2023",
      department: "Development",
      description:
        "Looking for a skilled Backend Developer to build scalable APIs and manage data systems.",
      responsibilities: [
        "Develop RESTful APIs and GraphQL endpoints.",
        "Maintain and optimize databases.",
        "Collaborate with frontend developers and product managers.",
      ],
      qualifications: [
        "Bachelor's degree in Computer Science or equivalent experience.",
        "Strong knowledge of Node.js, Express, and databases (SQL/NoSQL).",
        "Experience with cloud services like AWS or GCP.",
      ],
    },
    {
      slug: "ui-ux-designer",
      title: "UI/UX Designer",
      location: "Remote",
      type: "Part-time",
      income: "$15,000 - $20,000",
      date: "July 25 2023",
      department: "Design",
      description:
        "Creative UI/UX Designer responsible for crafting user-friendly and visually appealing interfaces.",
      responsibilities: [
        "Design wireframes, prototypes, and high-fidelity mockups.",
        "Conduct user research and usability testing.",
        "Collaborate closely with developers to ensure pixel-perfect designs.",
      ],
      qualifications: [
        "Bachelor’s in Design or related field.",
        "Proficiency in Figma, Adobe XD, or Sketch.",
        "Strong portfolio showcasing UI/UX projects.",
      ],
    },
    {
      slug: "digital-marketing-specialist",
      title: "Digital Marketing Specialist",
      location: "United States",
      type: "Contract",
      income: "$18,000 - $22,000",
      date: "August 01 2023",
      department: "Marketing",
      description:
        "We are hiring a Digital Marketing Specialist to expand our online reach and engagement.",
      responsibilities: [
        "Plan and execute digital marketing campaigns.",
        "Monitor SEO/SEM strategies.",
        "Analyze performance metrics to improve ROI.",
      ],
      qualifications: [
        "Bachelor’s degree in Marketing or Communications.",
        "Knowledge of Google Analytics, AdWords, and SEO tools.",
        "Strong communication skills.",
      ],
    },
    {
      slug: "hr-manager",
      title: "HR Manager",
      location: "India",
      type: "Full-time",
      income: "$22,000 - $28,000",
      date: "August 20 2023",
      department: "HR",
      description:
        "We are seeking an HR Manager to lead recruitment, employee engagement, and compliance activities.",
      responsibilities: [
        "Develop and implement HR strategies and policies.",
        "Manage end-to-end recruitment.",
        "Ensure compliance with labor laws.",
      ],
      qualifications: [
        "Master’s in Human Resources or related field.",
        "5+ years of HR management experience.",
        "Strong organizational and interpersonal skills.",
      ],
    },
    {
      slug: "finance-analyst",
      title: "Finance Analyst",
      location: "Canada",
      type: "Full-time",
      income: "$30,000 - $40,000",
      date: "August 05 2023",
      department: "Finance",
      description:
        "Looking for a Finance Analyst to provide insights and forecasts for company growth.",
      responsibilities: [
        "Prepare financial reports and forecasts.",
        "Analyze market trends and business performance.",
        "Collaborate with management for budget planning.",
      ],
      qualifications: [
        "Bachelor’s degree in Finance or Accounting.",
        "Strong analytical and Excel skills.",
        "Knowledge of financial modeling tools.",
      ],
    },
    {
      slug: "sales-executive",
      title: "Sales Executive",
      location: "United States",
      type: "Full-time",
      income: "$18,000 - $25,000",
      date: "July 30 2023",
      department: "Sales",
      description:
        "Energetic Sales Executive to drive sales and maintain client relationships.",
      responsibilities: [
        "Identify and pursue new sales opportunities.",
        "Build and maintain strong client relationships.",
        "Achieve monthly and yearly sales targets.",
      ],
      qualifications: [
        "Bachelor’s degree in Business or equivalent.",
        "Proven experience in sales roles.",
        "Excellent communication and negotiation skills.",
      ],
    },
    {
      slug: "operations-coordinator",
      title: "Operations Coordinator",
      location: "Australia",
      type: "Full-time",
      income: "$20,000 - $27,000",
      date: "August 12 2023",
      department: "Operations",
      description:
        "We are hiring an Operations Coordinator to streamline internal processes and logistics.",
      responsibilities: [
        "Oversee daily operations and workflows.",
        "Coordinate between departments for smooth execution.",
        "Identify areas for operational improvement.",
      ],
      qualifications: [
        "Bachelor’s degree in Business or Operations.",
        "2+ years in operations or coordination roles.",
        "Strong problem-solving skills.",
      ],
    },
    {
        slug: "ui-ux-designer",
        title: "UI/UX Designer",
        location: "Remote",
        type: "Contract",
        income: "$15,000 - $20,000",
        date: "August 21 2023",
        department: "Design",
        description:
          "We are looking for a creative UI/UX Designer to craft engaging user experiences and intuitive interfaces for our digital products.",
        responsibilities: [
          "Design and prototype user interfaces for web and mobile applications.",
          "Conduct user research and usability testing to gather insights.",
          "Collaborate with product managers and developers to ensure seamless implementation.",
        ],
        qualifications: [
          "Bachelor’s degree in Design, HCI, or related field.",
          "3+ years of experience in UI/UX design.",
          "Proficiency in Figma, Adobe XD, or Sketch.",
          "Strong portfolio showcasing design projects and problem-solving skills.",
        ],
      },
      
  ];
  