import logo from "./assets/logo.png"

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" className="mr-2"/>
          <div>Project Manager</div>
        </a>
      </div>
    </nav>
  )
}
