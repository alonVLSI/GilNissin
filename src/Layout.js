
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './components/utils';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import WhatsappIcon from './components/WhatsappIcon';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
const navItems = [
  { name: "עמוד ראשי", page: "Home" },
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
      <SEO />
      <ScrollToTop />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700&display=swap');
        
        * {
          font-family: 'Heebo', sans-serif !important;
        }
        
        body {
          background: #ffffff;
          color: #2d3748;
          font-family: 'Heebo', sans-serif;
          line-height: 1.7;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Heebo', sans-serif;
          font-weight: 700;
        }

        .text-primary { color: #0e7490; }
        .bg-primary { background-color: #0e7490; }
        .border-primary { border-color: #0e7490; }
        
        .text-secondary { color: #0e7490; }
        .bg-secondary { background-color: #0e7490; }
        .border-secondary { border-color: #0e7490; }

        .text-gray-dark { color: #374151; }
        .bg-gray-50 { background-color: #f9fafb; }

        .hover-lift {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
      `}</style>
      <div className="min-h-screen" dir="rtl">
        {/* Navigation */}
        <nav className="sticky top-0 w-full bg-white border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-24">
              <Link to={createPageUrl("Home")} className="flex items-center">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7413e4a01_WhatsAppImage2025-07-01at143149.jpeg" 
                  alt="לוגו - גיל ברדוגו נסים" 
                  className="w-20 h-20 object-cover" 
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex gap-8 items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === createPageUrl(item.page)
                        ? 'text-primary border-b-2 border-primary pb-1'
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
                  className="p-2 text-gray-600 hover:text-primary"
                  aria-label="תפריט"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Desktop CTA Button */}
              <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium px-4 py-2">
                  וואטסאפ <WhatsappIcon className="w-4 h-4 mr-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200">
              <div className="px-6 py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 px-4 text-center font-medium transition-colors ${
                      location.pathname === createPageUrl(item.page)
                        ? 'text-white bg-primary'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium w-full py-3">
                      <WhatsappIcon className="w-4 h-4 mr-2" />
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
        <footer className="bg-gray-600 text-white">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7413e4a01_WhatsAppImage2025-07-01at143149.jpeg" 
                  alt="לוגו גיל ברדוגו נסים"
                  className="w-24 h-24 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">גיל בֶּרדוגו נסים</h3>
                <p className="text-gray-200">פסיכותרפיה משלבת גוף-נפש</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">ניווט מהיר</h4>
                <ul className="space-y-2">
                  {/* The "Home" link is now part of navItems */}
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link to={createPageUrl(item.page)} className="text-gray-200 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">יצירת קשר</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-200">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+972544276648" className="hover:text-white">054-4276648</a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:gil.psychotherapy@gmail.com" className="hover:text-white">gil.psychotherapy@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <MapPin className="w-4 h-4" />
                    <span>מזכרת בתיה</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-500 mt-8 pt-6 text-center text-gray-200">
              <p>&copy; {new Date().getFullYear()} גיל בֶּרדוגו נסים. כל הזכויות שמורות.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
