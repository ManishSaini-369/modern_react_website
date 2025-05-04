import companyLogo from '../assets/Supreme_logos.svg'
import { FaLinkedinIn } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white shadow-sm px-6 py-2 flex justify-between items-center sticky top-0">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
        <img src={companyLogo} alt="Supreme Group Logo" className="h-6" />
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-4">
        <button className="bg-sky-400 hover:bg-sky-500 text-white px-4 py-1 rounded-full text-sm">
            Contact Us
        </button>
        <a href="#" className="text-black hover:text-blue-600">
            <FaLinkedinIn size={16} />
        </a>
        <a href="#" className="text-black hover:text-blue-600">
            <BsTranslate  size={16} />
        </a>
        </div>
    </nav>
  )
}

export default Navbar
