export default function Header() {
    return(
      <header className="header">
        <h1 className="site-title">My Website</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#" className="nav-link">Home</a></li>
            <li><a href="#" className="nav-link">About</a></li>
            <li><a href="#" className="nav-link">Contact</a></li>
          </ul>
        </nav>
        <hr />
      </header> 
    );
}