import React, {useContext} from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { AuthContext } from './../../context/AuthProvider/AuthProvider';

const Footer = () => {
  const {myStyle} = useContext(AuthContext);
    return (
        <div style={{width: '100%', height: 'auto'}} className='bg-light border border-1 '>
            <footer style={myStyle} className=" p-2 pt-4 px-4 row gap-4">
  <div  className='d-flex flex-column container col-12 col-md-3'>
    <span className="fs-4">Services</span> 
    <a className="text-decoration-none  mt-1">Branding</a> 
    <a className="text-decoration-none  mt-1">Design</a> 
    <a className="text-decoration-none  mt-1">Marketing</a> 
    <a className="text-decoration-none  mt-1">Advertisement</a>
  </div> 
  <div className='d-flex flex-column col-12 col-md-3'>
    <span className="fs-4">Company</span> 
    <a className="text-decoration-none  mt-1">About us</a> 
    <a className="text-decoration-none  mt-1">Contact</a> 
    <a className="text-decoration-none  mt-1">Jobs</a> 
    <a className="text-decoration-none  mt-1">Press kit</a>
  </div> 
  <div className='col-12 col-md-3'>
    <span className=" fs-4">Social</span> 
    <div className="grid grid-flow-col gap-4">
     <FaFacebook className='fs-2 me-3 mt-4'></FaFacebook>
     <FaWhatsapp className='fs-2 me-3 mt-4'></FaWhatsapp>
    <FaInstagram className='fs-2 me-3 mt-4'></FaInstagram>
      <FaTwitter className='fs-2 me-3 mt-4'></FaTwitter>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;