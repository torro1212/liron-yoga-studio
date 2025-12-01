import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { BUSINESS_NAME, CONTACT } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black mb-4">{BUSINESS_NAME}</h2>
            <p className="text-gray-400 leading-relaxed">
              סטודיו בוטיק ליוגה וגמישות בהרצליה.
              מקום לנשום, להתחזק ולהתפתח.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">ניווט מהיר</h3>
            <ul className="space-y-2">
              {['בית', 'שירותים', 'אודות', 'צור קשר'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">פרטי קשר</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{CONTACT.address}</li>
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.email}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">עקבו אחרינו</h3>
            <div className="flex gap-4">
              <a 
                href={CONTACT.socials.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={CONTACT.socials.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;