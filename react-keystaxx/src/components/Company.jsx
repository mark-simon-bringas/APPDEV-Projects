import { Link } from "react-router-dom"
import employees from "../assets/data/EmployeeData"

export default function Company() {
    return (
        <>
            <div className="company-info">
                <h1 className="page-title">Meet the Company Key Members</h1>
                <div className="company-members">
                    {
                        employees.map((employee) => {
                            return (
                                <div className="company-member-info" key={employee.id}>
                                    <div className="company-info-image">
                                        <img
                                            src={employee.image}
                                            alt={employee.name}
                                            title={employee.name}
                                            className="member-image"
                                        />
                                    </div>
                                    <div className="company-member-text">
                                        <h2>{employee.name}</h2>
                                        <h3>{employee.position}</h3>
                                        <p>{employee.description}</p>
                                        <Link to={`/company/member-${employee.id}`} state={{ employee }}>
                                            <button className="resume-button">Resumé</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}