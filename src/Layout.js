
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import WhatsappIcon from './components/WhatsappIcon';
import logoImg from './components/Logo.png';

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
const navItems = [
  //{ name: "עמוד הבית", page: "Home" },
  { name: "פסיכותרפיית גוף-נפש", page: "BodyMindTherapy" },
  { name: "עליי", page: "About" },
  { name: "הקליניקה", page: "Clinic" },
  { name: "טיפול אישי", page: "IndividualTherapy" },
  { name: "טיפול הורה-ילד", page: "ParentGuidance" },
  { name: "הרצאות", page: "Lectures" },
  { name: "צור קשר", page: "Contact" },
];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap');
        
        body {
          background: linear-gradient(135deg, #ffffff 0%, #fef7f0 100%);
          color: #2d3748;
          font-family: 'Heebo', sans-serif;
          line-height: 1.6;
        }

        h1, h2, h3, h4, .font-serif {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
        }

        .text-primary { color: #ff6b35; }
        .bg-primary { background-color: #ff6b35; }
        .border-primary { border-color: #ff6b35; }
        
        .text-secondary { color: #4ecdc4; }
        .bg-secondary { background-color: #4ecdc4; }
        .border-secondary { border-color: #4ecdc4; }

        .text-accent { color: #ffd23f; }
        .bg-accent { background-color: #ffd23f; }
        
        .text-purple { color: #9b59b6; }
        .bg-purple { background-color: #9b59b6; }

        .gradient-bg {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 25%, #4ecdc4 50%, #9b59b6 75%, #ff6b35 100%);
          background-size: 400% 400%;
          animation: gradient-shift 8s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
      `}</style>
      <div className="min-h-screen" dir="rtl">
        {/* Navigation */}
        <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-md border-b-4 border-primary z-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-24">
              <Link to={createPageUrl("Home")} className="flex items-center gap-3 hover-lift">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7413e4a01_WhatsAppImage2025-07-01at143149.jpeg" 
                  alt="לוגו - גיל ברדוגו נסים" 
                  className="w-20 h-20 object-contain rounded-full" 
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex gap-8 items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className={`text-base font-semibold tracking-wide transition-all duration-300 hover:scale-105 ${
                      location.pathname === createPageUrl(item.page)
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-md text-gray-600 hover:text-primary"
                  aria-label="תפריט"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Desktop CTA Button */}
              <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
                <Button className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-6 py-3 rounded-full hover-lift">
                                 וואסטאפ <WhatsappIcon className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b-4 border-secondary shadow-xl">
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 px-4 text-center text-lg rounded-lg font-semibold transition-colors ${
                      location.pathname === createPageUrl(item.page)
                        ? 'text-white bg-primary'
                        : 'text-gray-700 hover:text-primary hover:bg-orange-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="bg-gradient-to-r from-primary to-secondary text-white font-bold w-full py-3 rounded-full">
                      <WhatsappIcon className="w-5 h-5 ml-2" />
                      יצירת קשר בוואטסאפ
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="gradient-bg text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-3 gap-12 text-center md:text-right">
              <div className="md:col-span-1">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7413e4a01_WhatsAppImage2025-07-01at143149.jpeg" 
                  alt="לוגו גיל ברדוגו נסים"
                  className="w-24 h-24 mx-auto md:mx-0 mb-4 rounded-full"
                />
                <h3 className="text-2xl font-bold font-serif">גיל בֶּרדוגו נסים</h3>
                <p className="text-white/90 text-lg">פסיכותרפיה משלבת גוף-נפש</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold font-serif mb-6">ניווט מהיר</h4>
                <ul className="space-y-3">
                  {navItems.slice(1).map((item, index) => (
                    <li key={index}>
                      <Link to={createPageUrl(item.page)} className="text-white/90 hover:text-white transition-colors text-lg">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold font-serif mb-6">יצירת קשר</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start gap-3 text-white/90">
                    <Phone className="w-5 h-5" />
                    <a href="tel:+972544276648" className="hover:text-white text-lg">054-4276648</a>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3 text-white/90">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:gil.psychotherapy@gmail.com" className="hover:text-white text-lg">gil.psychotherapy@gmail.com</a>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3 text-white/90">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">מזכרת בתיה</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/80">
              <p className="text-lg">&copy; {new Date().getFullYear()} גיל בֶּרדוגו נסים. כל הזכויות שמורות.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}