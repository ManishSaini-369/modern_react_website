import companyLogo from '../assets/Supreme_logos.svg'

const Footer = () => {
  return (
    <footer className="bg-[#F5F2F2] text-black px-10 py-10 w-full h-96">
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8">
        {/* Logo */}
        <div className="col-span-1 flex items-start">
          <img src={companyLogo} alt="Supreme Group" className="h-16" />
        </div>

        {/* Footer Sections */}
        <div className="col-span-4 grid grid-cols-4 gap-6 text-sm">
          {/* Applications */}
          <div>
            <h4 className="font-semibold mb-2">APPLICATIONS</h4>
            <ul className="space-y-1">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customised Solutions</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-2">COMPANY</h4>
            <ul className="space-y-1">
              <li>Innovation</li>
              <li>Global Competency</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-semibold mb-2">MORE</h4>
            <ul className="space-y-1">
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-2">FOLLOW US</h4>
            <ul className="space-y-1">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Medium</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-xs flex flex-col md:flex-row justify-between max-w-7xl mx-auto text-gray-600">
        <p>©2023. All Rights Reserved.</p>
        <p>Supreme House: 110, 16th Road, Chembur, Mumbai – 400071.</p>
      </div>
    </footer>
  )
}

export default Footer
