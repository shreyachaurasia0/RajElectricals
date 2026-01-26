import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
        <footer className="w-full bg-white border-t border-gray-200 mt-40 pt-10 pb-6 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
                {/* Logo & About */}
                <div className="flex flex-col items-center justify-center">
                    <img src={assets.Raj} className="w-42  align-top" alt="Raj Electricals Logo" style={{marginBottom: 0, paddingBottom: 0}} />
                </div>
                {/* Company & Social */}
                <div>
                    <p className="text-xl font-semibold mb-4">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600 mb-6">
                        <li> 
                        <Link to="/contact"onClick={() => window.scrollTo(0, 0)}
                        >Contact Us</Link>
                        </li>

                        <li><Link to="/about" onClick={() => window.scrollTo(0, 0)}
                        >About Us</Link></li>
                        <li><Link to="/collection"onClick={() => window.scrollTo(0, 0)}
                        >Review Us</Link></li>
                        <li><Link to="/contact"onClick={() => window.scrollTo(0, 0)}
                        >Sell with Us</Link></li>
                    </ul>
                    <p className="text-xl font-semibold mb-4">Stay Connected!</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>
  <a
    href="https://m.facebook.com/61581890652072/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Facebook
  </a>
</li>

                         <li>
  <a
    href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.justdial.com%2FShillong%2FRaj-Electricians-Laitumkhrah-Bazar-Laitumkhrah%2F9999PX364-X364-221130224848-X4P7_BZDET&h=AT1lGjTberfCLwk88qCrOSKYIBAzHMtTJndJAWftJReOsF1qLGGk5s-lRrNMdD54amCUry_GxqScpGD3JaekcLrRduBHHjJMizXkQVDb1TZ-xZMMT09nF2KcC9-OVFfx_qJ6JZOnstrIMLxynymu3J45JED8mu-L9ZVokQ"
    target="_blank"
    rel="noopener noreferrer"
  >
    Justdial
  </a>
</li>
                        
                        <li>Youtube</li>
                    </ul>
                </div>
                {/* Privacy & Reach Us */}
                <div>
                    <p className="text-xl font-semibold mb-4">Privacy Information</p>
                    <ul className="flex flex-col gap-1 text-gray-600 mb-6">
                        <li>Return Policy</li>
                        <li>Terms Of Use</li>
                        <li>Sitemap</li>
                        <li>Grievance</li>
                        <li>GST Information</li>
                    </ul>
                    <p className="text-xl font-semibold mb-4">Reach Us</p>
                    <p className="text-gray-600">
                        Raj Electricals Laitumkhrah Bazar ,Shillong, Meghalaya

Latitude: 25.5695°N | Longitude: 91.8978°E
                    </p>
                </div>
                {/* Help Topics */}
                <div>
                    <p className="text-xl font-semibold mb-4">Help Topics</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>
  <a href="tel:+919876543210">
    FAQs
  </a>
</li>

                        <li><a
            href="https://wa.me/919862098737"
            target="_blank"
            rel="noopener noreferrer">
            Payments
            </a></li>
                         <li><a
            href="https://wa.me/919862098737"
            target="_blank"
            rel="noopener noreferrer">
            Shipping
            </a></li>
                         <li><a
            href="https://wa.me/919862098737"
            target="_blank"
            rel="noopener noreferrer">
            Cancellation & Return
            </a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 text-center text-md bg-slate-100 p-3 text-gray-700">
                &copy; {new Date().getFullYear()} Raj Electricals. All rights reserved.
            </div>
        </footer>
  )
}

export default Footer
