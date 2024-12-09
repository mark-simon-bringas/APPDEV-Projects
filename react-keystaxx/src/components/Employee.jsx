import { useLocation } from "react-router-dom"

export default function Employee() {
    const location = useLocation()
    const employee = location.state.employee

    return (
        <>
            <div className="company-member-resume-info">
                <h1>{employee.name}</h1>
                <p>{employee.residence}</p>
                <p>{employee.email}</p>
                <p>Contact: {employee.contact}</p>
                <hr />

                <h2>Objective</h2>
                <p>{employee.objective}</p>
                <hr />

                <h2>Education</h2>
                {
                    employee.education.map((e) => (
                        <div key={e.id}>
                            <p><strong>{e.school}</strong></p>
                            <p><i>{e.program}</i></p>
                            <p><strong>{e.location}</strong></p>
                            <p><i>{e.graduation_date}</i></p>
                        </div>
                    ))
                }
                <hr />

                <h2>Experience</h2>
                    {
                        employee.experience.map((exp) => (
                            <div key={exp.id}>
                                <p><strong>{exp.position}</strong></p>
                                <p>{exp.company}</p>
                                <p><i>{exp.date}</i></p>
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

                <h2>Skills</h2>
                <ul>
                    {
                        employee.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))
                    }
                </ul>
            </div>
            
        </>
    )
}