import { Link } from "react-router-dom"
import default_image from "../assets/image/default.jpg"
import rsalcedo from "../assets/image/rsalcedo.jpg"
import wdosil from "../assets/image/wdosil.jpg"
import afajardo from "../assets/image/afajardo.png"
import jgonzaga from "../assets/image/jgonzaga.jpg"
import ibringas from "../assets/image/ibringas.jpg"

const employees = [
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
                description: ["Did stuff.", "Managed stuff.", "Lead Stuff."]
            },
            {
                id: 2,
                position: "Manager",
                company: "Royal Horizons Bank",
                date: "April 2024",
                description: ["Helped stuff.", "Maintained stuff.", "Assisted stuff."]
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
        objective: "",
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
                position: "",
                company: "",
                date: "",
                description: []
            },
            {
                id: 2,
                position: "",
                company: "",
                date: "",
                description: []
            }
        ],
        skills: [],
        image: wdosil
    },
    {
        id: 3,
        name: "Alfredo II Fajardo",
        email: "afajardo@keystaxx.com",
        residence: "Bulacan, Philippines 3002",
        position: "Chief Operations Officer (COO)",
        description: "The COO is tasked with optimizing KeyStaxx's operational efficiency and infrastructure. They oversee day-to-day business operations, manage internal processes, and ensure smooth coordination between different departments. This role involves implementing operational strategies, improving productivity, managing supply chain logistics, and supporting the company's manufacturing and distribution efforts for both artisan and regular keyboards.",
        objective: "",
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
                position: "",
                company: "",
                date: "",
                description: []
            },
            {
                id: 2,
                position: "",
                company: "",
                date: "",
                description: []
            }
        ],
        skills: [],
        image: afajardo
    },
    {
        id: 4,
        name: "Frenzhel Vhonn Sagoco",
        email: "fsagoco@keystaxx.com",
        residence: "Benguet, Philippines 2601",
        position: "Quality Assurance (QA) Manager",
        description: "The QA Manager is crucial in maintaining the high standards of KeyStaxx's keyboard products. They develop and implement quality control processes, conduct rigorous product testing, and ensure that every keyboard meets the company's strict quality standards. This role involves creating testing protocols, investigating and resolving product issues, maintaining quality documentation, and working closely with production teams to prevent defects and maintain the company's reputation for excellence.",
        objective: "",
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
                position: "",
                company: "",
                date: "",
                description: []
            },
            {
                id: 2,
                position: "",
                company: "",
                date: "",
                description: []
            }
        ],
        skills: [],
        image: default_image
    },
    {
        id: 5,
        name: "James Peter Gonzaga",
        email: "jgonzaga@keystaxx.com",
        residence: "La Union, Philippines 2518",
        position: "Production Manager",
        description: "Responsible for overseeing the entire manufacturing process of KeyStaxx's keyboards, the Production Manager ensures efficient and high-quality production. They manage production schedules, coordinate with suppliers, optimize manufacturing workflows, and implement cost-effective production strategies. This role involves managing production staff, ensuring compliance with production standards, and balancing the creation of both mass-market and artisan keyboard lines.",
        objective: "",
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
                position: "",
                company: "",
                date: "",
                description: []
            },
            {
                id: 2,
                position: "",
                company: "",
                date: "",
                description: []
            }
        ],
        skills: [],
        image: jgonzaga
    },
    {
        id: 6,
        name: "Ian Clester Bringas",
        email: "ibringas@keystaxx.com",
        residence: "Baguio City, Philippines 2600",
        position: "Sales & Marketing Manager",
        description: "The Sales & Marketing Manager develops and executes strategies to promote KeyStaxx's keyboard products and drive sales across different market segments. They are responsible for creating marketing campaigns, managing digital and traditional marketing channels, analyzing market trends, identifying potential customer bases (from office workers to PC enthusiasts), and developing sales strategies. This role involves managing the sales team, tracking sales performance, and creating marketing materials that showcase the unique value of KeyStaxx's keyboard offerings.",
        objective: "",
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
                position: "",
                company: "",
                date: "",
                description: []
            },
            {
                id: 2,
                position: "",
                company: "",
                date: "",
                description: []
            }
        ],
        skills: [],
        image: ibringas
    }
    
]

export default function Company() {
    return (
        <>
            <h1>Meet the Company Key Members</h1>
            {
                employees.map((employee) => {
                    return (
                        <>
                        <div className="company-member-info">
                            <div className="company-info-image">
                                <img
                                    src={employee.image}
                                    alt={employee.name}
                                    title={employee.name}
                                    style={{ width: "200px", height: "200px" }}
                                />
                            </div>
                            <div className="company-member-text">
                                <h2>{employee.name}</h2>
                                <h3>{employee.position}</h3>
                                <p>{employee.description}</p>
                            </div>
                            <Link to={`/company/member-${employee.id}`} state={{ employee }}>
                                <button>Resumé</button>
                            </Link>
                        </div>
                        <br />
                        </>
                    )
                })
            }
        </>
    )
}