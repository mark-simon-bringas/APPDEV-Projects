import { useLocation } from "react-router-dom"

export default function Employee() {
    const location = useLocation()
    const employee = location.state.employee

    return (
        <>
            <p>Employee page</p>
        </>
    )
}