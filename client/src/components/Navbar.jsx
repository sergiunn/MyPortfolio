import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">

        <Link to="/" className="text-xl font-bold hover:text-blue-600">
          Your Name
        </Link>

        <ul className="flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
