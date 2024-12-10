import { Link } from "react-router-dom"
import employees from "../assets/data/EmployeeData"

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