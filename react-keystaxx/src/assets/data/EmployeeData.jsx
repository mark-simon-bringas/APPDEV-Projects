import default_image from "/src/assets/image/default.jpg"
import rsalcedo from "/src/assets/image/rsalcedo.jpg"
import wdosil from "/src/assets/image/wdosil.jpg"
import afajardo from "/src/assets/image/afajardo.png"
import jgonzaga from "/src/assets/image/jgonzaga.jpg"
import ibringas from "/src/assets/image/ibringas.jpg"

const employeeData = [
    {
        id: 1,
        name: "R J Salcedo",
        email: "rsalcedo@keystaxx.com",
        residence: "Pangasinan, Philippines 2445",
        position: "Chief Executive Officer (CEO)",
        description: "As the strategic leader of KeyStaxx, the CEO is responsible for setting the overall vision and direction of the company. They make high-level decisions, drive company growth, manage the executive team, and ensure the company's long-term success in the competitive mechanical keyboard market. The CEO oversees the alignment of business strategies with the company's core mission of creating innovative and artisan keyboard solutions.",
        objective: "Visionary technology leader with a passion for innovative keyboard design and strategic business growth. Seeking to leverage extensive leadership experience and technical expertise to drive market expansion, foster technological innovation, and establish the company as a premier mechanical keyboard manufacturer. Committed to transforming organizational vision into executable strategies that create value for stakeholders, employees, and customers.",
        education: [
            {
                id: 1,
                school: "University of Baguio",
                program: "Bachelor of Science in Computer Science",
                graduation_date: "June 2027",
                location: "Baguio City, Philippines"
            }
        ],
        experience: [
            {
                id: 1,
                position: "Assistant Project Manager",
                company: "SBS Corporation",
                date: "September 2024",
                description: [
                    "Coordinated cross-functional teams to ensure timely delivery of project milestones, achieving a 20% improvement in on-time completion rates.",
                    "Developed detailed project plans, budgets, and resource allocation schedules, resulting in a 15% cost reduction across key initiatives.",
                    "Facilitated regular team meetings to track progress, address challenges, and maintain alignment with project objectives."
                ]
            },
            {
                id: 2,
                position: "Manager",
                company: "Royal Horizons Bank",
                date: "April 2024",
                description: [
                    "Led a team of 10 professionals in daily banking operations, achieving a 30% increase in customer satisfaction scores through improved service delivery.",
                    "Streamlined operational processes, reducing transaction processing times by 25% and enhancing overall branch efficiency.",
                    "Mentored and developed junior staff, fostering a high-performance culture and contributing to a 20% improvement in employee retention rates."
                ]
            }
        ],
        skills: [
            "Great communication skills", 
            "Effective collaborator", 
            "Shows transparency", 
            "Creative thinker",
            "Proficient understanding in computer technology",
            "Proficient understanding in BI tools (Microsoft Power BI, SAP Business Objects)",
            "Advanced spreadsheet skills (Microsoft Excel, Google Sheets)"
        ],
        image: rsalcedo
    },
    {
        id: 2,
        name: "William Dosil",
        email: "wdosil@keystaxx.com",
        residence: "Baguio City, Philippines 2600",
        position: "Chief Financial Officer (CFO)",
        description: "The CFO manages all financial aspects of KeyStaxx, including financial planning, budget management, and economic strategy. They are responsible for financial reporting, risk management, and ensuring the company's financial health. This role involves analyzing financial data, managing investor relations, overseeing accounting operations, and providing strategic financial guidance to support the company's growth and innovation in the keyboard market.",
        objective: "Strategic financial leader with a proven track record in budget optimization and economic planning. Seeking to leverage expertise in financial modeling, investment strategy, and operational efficiency to drive sustainable growth and innovation for KeyStaxx. Dedicated to creating value for stakeholders while maintaining fiscal responsibility and supporting technological advancements.",
        education: [
            {
                id: 1,
                school: "University of Baguio",
                program: "Bachelor of Science in Computer Science",
                graduation_date: "June 2027",
                location: "Baguio City, Philippines"
            }
        ],
        experience: [
            {
                id: 1,
                position: "Senior Financial Analyst",
                company: "Equity Partners Inc.",
                date: "May 2022 - August 2024",
                description: [
                    "Developed comprehensive financial models to support strategic planning and decision-making processes.",
                    "Analyzed market trends to identify investment opportunities, resulting in a 15% growth in portfolio value.",
                    "Prepared detailed financial reports and presented findings to stakeholders, enhancing transparency and informed decision-making."
                ]
            },
            {
                id: 2,
                position: "Finance Manager",
                company: "HighPoint Ventures",
                date: "August 2024 - September 2024",
                description: [
                    "Implemented a new budgeting system that reduced operational costs by 20% while maintaining service quality.",
                    "Oversaw quarterly and annual financial audits, ensuring compliance with regulatory standards and internal policies.",
                    "Led a cross-functional team to optimize financial processes, improving efficiency by 25%."
                ]
            }
        ],
        skills: [
            "Financial Planning and Analysis",
            "Budgeting and Cost Management",
            "Risk Assessment and Mitigation",
            "Investment Strategy",
            "Financial Modeling",
            "Regulatory Compliance",
            "Stakeholder Communication",
            "Team Leadership and Mentoring"
        ],
        image: wdosil
    },
    {
        id: 3,
        name: "Alfredo II Fajardo",
        email: "afajardo@keystaxx.com",
        residence: "Bulacan, Philippines 3002",
        position: "Chief Operations Officer (COO)",
        description: "The COO is tasked with optimizing KeyStaxx's operational efficiency and infrastructure. They oversee day-to-day business operations, manage internal processes, and ensure smooth coordination between different departments. This role involves implementing operational strategies, improving productivity, managing supply chain logistics, and supporting the company's manufacturing and distribution efforts for both artisan and regular keyboards.",
        objective: "Operations leader with a proven track record in process optimization and supply chain management. Dedicated to leveraging expertise in logistics, team management, and operational strategies to foster scalable growth and innovation for KeyStaxx. Committed to streamlining operations and enhancing productivity to deliver exceptional customer value.",
        education: [
            {
                id: 1,
                school: "University of Baguio",
                program: "Bachelor of Science in Computer Science",
                graduation_date: "June 2027",
                location: "Baguio City, Philippines"
            }
        ],
        experience: [
            {
                id: 1,
                position: "Operations Manager",
                company: "Global Supply Solutions",
                date: "April 2023 - July 2025",
                description: [
                    "Spearheaded supply chain optimization initiatives, reducing logistics costs by 18% through process improvements.",
                    "Managed day-to-day operations across departments, ensuring seamless communication and efficiency.",
                    "Developed performance metrics that improved productivity by 22% within the first year."
                ]
            },
            {
                id: 2,
                position: "Senior Logistics Coordinator",
                company: "TechLine Manufacturing",
                date: "July 2025 - August 2025",
                description: [
                    "Overhauled inventory management systems, reducing overstock by 30% and minimizing delays in production.",
                    "Led cross-functional teams to implement new manufacturing workflows, enhancing output by 15%.",
                    "Negotiated with vendors and suppliers to secure cost-effective contracts, saving the company ₱2M annually."
                ]
            }
        ],
        skills: [
            "Operational Strategy Development",
            "Supply Chain Management",
            "Process Optimization",
            "Cross-Departmental Coordination",
            "Team Leadership and Mentoring",
            "Logistics Planning",
            "Vendor and Supplier Relations",
            "Performance Metrics Analysis"
        ],
        image: afajardo
    },
    {
        id: 4,
        name: "Frenzhel Vhonn Sagoco",
        email: "fsagoco@keystaxx.com",
        residence: "Benguet, Philippines 2601",
        position: "Quality Assurance (QA) Manager",
        description: "The QA Manager is crucial in maintaining the high standards of KeyStaxx's keyboard products. They develop and implement quality control processes, conduct rigorous product testing, and ensure that every keyboard meets the company's strict quality standards. This role involves creating testing protocols, investigating and resolving product issues, maintaining quality documentation, and working closely with production teams to prevent defects and maintain the company's reputation for excellence.",
        objective: "Quality-focused professional dedicated to enhancing product reliability and customer satisfaction through meticulous testing and process improvement. Seeking to leverage extensive experience in quality assurance, defect prevention, and cross-functional collaboration to uphold and exceed industry standards in manufacturing excellence at KeyStaxx.",
        education: [
            {
                id: 1,
                school: "University of Baguio",
                program: "Bachelor of Science in Computer Science",
                graduation_date: "June 2027",
                location: "Baguio City, Philippines"
            }
        ],
        experience: [
            {
                id: 1,
                position: "QA Specialist",
                company: "TechLine Manufacturing",
                date: "June 2023 - July 2024",
                description: [
                    "Developed and executed quality testing protocols that reduced product defects by 20%.",
                    "Collaborated with production teams to identify root causes of defects and implement effective solutions.",
                    "Maintained detailed quality assurance documentation to ensure compliance with industry standards."
                ]
            },
            {
                id: 2,
                position: "Senior QA Engineer",
                company: "Precision Electronics Inc.",
                date: "October 2024 - September 2025",
                description: [
                    "Led a team of QA engineers in implementing a new automated testing system, improving testing efficiency by 30%.",
                    "Conducted in-depth analysis of product failures, resulting in a 25% improvement in overall product reliability.",
                    "Streamlined quality control processes, achieving ISO certification for manufacturing standards."
                ]
            }
        ],
        skills: [
            "Quality Assurance and Control",
            "Testing Protocol Development",
            "Root Cause Analysis",
            "Defect Prevention",
            "Team Leadership",
            "Quality Documentation Management",
            "Process Improvement",
            "Compliance with Industry Standards"
        ],
        image: default_image
    },
    {
        id: 5,
        name: "James Peter Gonzaga",
        email: "jgonzaga@keystaxx.com",
        residence: "La Union, Philippines 2518",
        position: "Production Manager",
        description: "Responsible for overseeing the entire manufacturing process of KeyStaxx's keyboards, the Production Manager ensures efficient and high-quality production. They manage production schedules, coordinate with suppliers, optimize manufacturing workflows, and implement cost-effective production strategies. This role involves managing production staff, ensuring compliance with production standards, and balancing the creation of both mass-market and artisan keyboard lines.",
        objective: "Results-driven Production Manager with extensive experience in optimizing manufacturing processes and leading high-performing teams. Seeking to apply my expertise in production scheduling, workflow management, and quality assurance to deliver top-tier products while maintaining operational efficiency and cost control.",
        education: [
            {
                id: 1,
                school: "University of Baguio",
                program: "Bachelor of Science in Computer Science",
                graduation_date: "June 2027",
                location: "Baguio City, Philippines"
            }
        ],
        experience: [
            {
                id: 1,
                position: "Production Supervisor",
                company: "Tech Assembly Solutions",
                date: "July 2023 - December 2023",
                description: [
                    "Supervised daily production activities, ensuring adherence to production schedules and quality standards.",
                    "Trained and mentored production staff, reducing errors and improving productivity by 15%.",
                    "Implemented new inventory tracking methods, reducing raw material wastage by 10%."
                ]
            },
            {
                id: 2,
                position: "Manufacturing Coordinator",
                company: "Precision Electronics Manufacturing",
                date: "February 2024 - January 2025",
                description: [
                    "Streamlined manufacturing processes, resulting in a 20% improvement in production efficiency.",
                    "Collaborated with cross-functional teams to resolve bottlenecks and optimize production flow.",
                    "Conducted regular audits to ensure compliance with safety and quality standards."
                ]
            },
            {
                id: 3,
                position: "Production Manager",
                company: "Elite Keyboard Designs",
                date: "June 2025 - June 2026",
                description: [
                    "Led a team of 50+ staff members to achieve a 25% increase in output while maintaining quality standards.",
                    "Optimized supply chain operations, reducing production costs by 18%.",
                    "Developed a dual production strategy to balance mass-market and artisan keyboard manufacturing effectively."
                ]
            }
        ],
        skills: [
            "Production Scheduling",
            "Workflow Optimization",
            "Team Leadership",
            "Quality Assurance",
            "Supplier Coordination",
            "Cost Management",
            "Supply Chain Optimization",
            "Inventory Control"
        ],
        image: jgonzaga
    },
    {
        id: 6,
        name: "Ian Clester Bringas",
        email: "ibringas@keystaxx.com",
        residence: "Baguio City, Philippines 2600",
        position: "Sales & Marketing Manager",
        description: "The Sales & Marketing Manager develops and executes strategies to promote KeyStaxx's keyboard products and drive sales across different market segments. They are responsible for creating marketing campaigns, managing digital and traditional marketing channels, analyzing market trends, identifying potential customer bases (from office workers to PC enthusiasts), and developing sales strategies. This role involves managing the sales team, tracking sales performance, and creating marketing materials that showcase the unique value of KeyStaxx's keyboard offerings.",
        objective: "Creative and results-oriented Sales & Marketing Manager with a strong background in digital and traditional marketing strategies. Dedicated to driving business growth through market analysis, targeted campaigns, and dynamic sales strategies. Seeking to deliver impactful marketing solutions that resonate with KeyStaxx's diverse customer base.",
        education: [
            {
                id: 1,
                school: "University of Baguio",
                program: "Bachelor of Science in Information Technology Major in Web Technology",
                graduation_date: "June 2027",
                location: "Baguio City, Philippines",
            }
        ],
        experience: [
            {
                id: 1,
                position: "Marketing Specialist",
                company: "Dynamic Digital Solutions",
                date: "August 2025 - October 2027",
                description: [
                    "Developed and executed targeted marketing campaigns, increasing product awareness by 30%.",
                    "Analyzed customer data to identify trends, improving campaign efficiency by 20%.",
                    "Collaborated with the sales team to align marketing strategies with revenue objectives."
                ]
            }
        ],
        skills: [
            "Marketing Strategy Development",
            "Market Trend Analysis",
            "Digital Marketing",
            "Campaign Management",
            "Sales Team Collaboration",
            "Content Creation",
            "Brand Promotion",
            "Performance Tracking"
        ],
        image: ibringas
    }
]

export default employeeData