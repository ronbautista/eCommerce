import React from 'react';
import './App.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="bg-white-100 text-black py-6">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">
        
        {/* Company Section */}
        <div className="w-full md:w-1/5 mb-4">
          <h3 className="text-lg font-bold mb-2">Company</h3>
          <ul>
            <li><a href="#" className="hover:underline">About NestFix</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Payment Section */}
        <div className="w-full md:w-1/5 mb-4">
          <h3 className="text-lg font-bold mb-2">Payment</h3>
          <div className="flex flex-col items-center space-y-2">
            <i className="fab fa-google-pay text-3xl"></i>
            <i className="fab fa-paypal text-3xl"></i>
            <i className="fab fa-maya text-3xl"></i>
          </div>
        </div>

        {/* Construction Retailer Section */}
        <div className="w-full md:w-1/5 mb-4">
          <h3 className="text-lg font-bold mb-2">Construction Retailer</h3>
          <div className="flex flex-col items-center">
            <img 
              src="https://wilcon-assets.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/07/02201341/wilcon-logo-only-e1635884021951.png" 
              alt="Wilcon Logo" 
              className="w-20"
            />
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="w-full md:w-1/5 mb-4">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex flex-col items-center space-y-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <i className="fab fa-facebook text-3xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
          </div>
        </div>

        {/* NestFix Description Section */}
        <div className="w-full md:w-1/5 mb-4">
          <h3 className="text-lg font-bold mb-2">NestFix</h3>
          <p>Your go-to solution for reliable home services delivered right to your doorstep. From repairs to renovations, we connect you with trusted professionals to make home improvement hassle-free.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
