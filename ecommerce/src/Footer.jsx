import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import your SVG files
import gcashIcon from './assets/gcash.svg';
import metrobankIcon from './assets/metrobank.svg';
import mayaIcon from './assets/maya.svg';

function Footer() {
  return (
    <footer className="bg-green-100 text-black p-4"> {/* Adjusted padding here */}
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
          <h3 className="text-lg font-bold mb-2 text-center">Payment</h3>
          <div className="flex justify-center space-x-4 mb-4">
            <i className="fab fa-google-pay text-3xl"></i>
            <i className="fab fa-paypal text-3xl"></i>
            <img src={gcashIcon} alt="GCash" className="h-8 w-8" />
            <img src={metrobankIcon} alt="Metrobank" className="h-8 w-8" />
            <img src={mayaIcon} alt="Maya" className="h-8 w-8" />
          </div>
          <div className="construction-retailer text-center">
            <h3 className="text-lg font-bold mb-2">Construction Retailer</h3>
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
          <div className="flex flex-col items-start space-y-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
              <i className="fab fa-facebook text-3xl"></i>
              <p>Facebook</p>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
              <i className="fab fa-instagram text-3xl"></i>
              <p>Instagram</p>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
              <i className="fab fa-twitter text-3xl"></i>
              <p>Twitter/X</p>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
              <i className="fab fa-linkedin text-3xl"></i>
              <p>LinkedIn</p>
            </a>
          </div>
        </div>

        {/* NestFix Description Section */}
        <div className="w-full md:w-1/5 mb-4">
          <h3 className="text-lg font-bold mb-2">NestFix</h3>
          <p>Your go-to solution for reliable home services delivered right to your doorstep. From repairs to renovations, we connect you with trusted skilled workers to make home improvement hassle-free.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;