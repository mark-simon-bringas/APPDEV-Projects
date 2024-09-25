export default function Footer() {
    // Stateless component = no hooks, no functions, no states.
    return (
        <>
            <footer>
                <hr />
                <p>&copy; {new Date().getFullYear()} My Counter Website || 
                Written by: Mark Simon Z. Bringas</p>
            </footer>
        </>
    )
}