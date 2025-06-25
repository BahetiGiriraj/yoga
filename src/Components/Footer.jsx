import Logo from "../assets/Logo.JPG";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white px-6 sm:px-12">
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        <div>
          <img className="w-[100px]" src={Logo} />
          <p className='w-full md:w-2/3 text-gray-500'>
            Find your balance and inner peace through mindful practice and expert guidance.
          </p>
        </div>


        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='hover:text-black cursor-pointer'>Home</li>
            <li className='hover:text-black cursor-pointer'>About Us</li>
            <li className='hover:text-black cursor-pointer'>Delivery</li>
            <li className='hover:text-black cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

    
        <div>
          <p className='text-xl font-medium mb-5'>Connect</p>
          <div className='flex gap-5 '>
            <FaInstagram  size={22} />
          <FaTelegram  size={22} />
          <FaLinkedin  size={22} />
          </div>
          
          <ul className='flex flex-col gap-1 text-gray-600 mt-3'>
            <li>📞 +91 3212345902</li>
            <li>📧 yoja@gmail.com</li>
          </ul>
        </div>
      </div>

    
      <div className='text-center text-xs text-gray-400 py-4 border-t'>
        © {new Date().getFullYear()}  YoJa. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
