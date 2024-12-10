import { useLocation } from "react-router-dom"

export default function Employee() {
    const location = useLocation()
    const employee = location.state.employee

    return (
        <>
            <div className="company-member-resume-info">
                <div className="company-member-resume-info-wrapper">
                    <h1 style={{paddingBottom: "10px"}}>{employee.name}</h1>
                    <p style={{paddingBottom: "10px"}}>{employee.residence}</p>
                    <p style={{paddingBottom: "10px"}}>{employee.email}</p>
                    <hr />
                </div>

                <div className="company-member-resume-info-wrapper">
                    <h2>Objective</h2>
                    <p>{employee.objective}</p>
                    <hr />
                </div>

                <div className="company-member-resume-info-wrapper">
                    <h2>Education</h2>
                    {
                        employee.education.map((e) => (
                            <div key={e.id}>
                                <div className="company-member-resume-info-education">
                                    <div>
                                        <p><strong>{e.school}</strong></p>
                                        <p><i>{e.program}</i></p>
                                    </div>
                                    <div className="right-justify">
                                        <p><strong>{e.location}</strong></p>
                                        <p><i>{e.graduation_date}</i></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <hr />
                </div>

                <div className="company-member-resume-info-wrapper">
                    <h2>Experience</h2>
                        {
                            employee.experience.map((exp) => (
                                <div key={exp.id}>
                                    <div className="company-member-resume-info-experience">
                                        <div>
                                            <p><strong>{exp.position}</strong></p>
                                            <p>{exp.company}</p>
                                        </div>
                                        <div className="right-justify">
                                            <p><i>{exp.date}</i></p>
                                        </div>
                                    </div>
                                    <ul>
                                        {
                                            exp.description.map((desc, index) => (
                                                <li key={index}>{desc}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    <hr />
                </div>

                <div className="company-member-resume-info-wrapper">
                    <h2>Skills</h2>
                    <ul>
                        {
                            employee.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}