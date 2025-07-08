
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
    { name: "עמוד הבית", page: "Home" },
    { name: "טיפול אישי", page: "IndividualTherapy" },
    { name: "טיפול זוגי", page: "CouplesTherapy" },
    { name: "טיפול משפחתי", page: "FamilyTherapy" },
    { name: "עליי", page: "About" },
    { name: "צור קשר", page: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 text-xl md:text-2xl font-bold text-teal-700">
              <img 
                src="{logoImg}" 
                alt="לוגו - גיל ברדוגו נסים" 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-teal-200" 
              />
              <span className="hidden sm:block">גיל ברדוגו נסים</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`pb-1 border-b-2 transition-colors duration-300 ${
                    location.pathname === createPageUrl(item.page)
                      ? 'text-teal-700 border-teal-700'
                      : 'text-gray-600 border-transparent hover:text-teal-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Center - WhatsApp Button */}
            <div className="md:hidden">
              <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white px-3 py-2">
                  <WhatsappIcon className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Desktop WhatsApp Button */}
            <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <WhatsappIcon className="w-5 h-5 ml-2" />
                לשליחת הודעה
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-teal-700 hover:bg-teal-50 transition-colors"
              aria-label="תפריט"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-200 shadow-lg">
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      location.pathname === createPageUrl(item.page)
                        ? 'text-teal-700 bg-teal-50'
                        : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content with top padding for fixed header */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">גיל ברדוגו נסים</h3>
              <p className="text-gray-300 leading-relaxed">
                פסיכותרפיה המשלבת גוף ונפש, בדרך לחיים מאוזנים ומשמעותיים יותר.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-100 mb-4">קישורים מהירים</h4>
              <div className="space-y-2">
                {navItems.map(item => (
                   <div key={item.page}>
                    <Link to={createPageUrl(item.page)} className="text-gray-300 hover:text-teal-400 transition-colors">
                      {item.name}
                    </Link>
                   </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-100 mb-4">פרטי התקשרות</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-400" />
                    <span>054-427-6648</span>
                </div>
                 <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-teal-400" />
                    <span>gil@therapy.co.il</span>
                </div>
                 <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-teal-400" />
                    <span>רחוב הרצל 15, תל אביב</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
                  <WhatsappIcon className="w-5 h-5 ml-2" />
                  לשליחת הודעה
                </Button>
            </a>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7413e4a01_WhatsAppImage2025-07-01at143149.jpeg" 
              alt="לוגו גיל ברדוגו נסים"
              className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-gray-600"
            />
            <p>&copy; 2025 גיל ברדוגו נסים - פסיכותרפיה גוף-נפש. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
