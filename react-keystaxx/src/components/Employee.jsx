<<<<<<< HEAD
import { useLocation } from "react-router-dom"

export default function Employee() {
    const location = useLocation()
    const employee = location.state.employee

    return (
        <>
            <p>Employee page</p>
        </>
    )
=======
import { useLocation } from "react-router-dom"

export default function Employee() {
    const location = useLocation()
    const employee = location.state.employee

    return (
        <>
            <p>Employee page</p>
        </>
    )
>>>>>>> 2cb83542e095037af5af94eec9b81b670dbdc6b5
}