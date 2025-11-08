import React from 'react';
import { Button } from '../components/ui/button';
import { Phone, Mail, MapPin, Award } from 'lucide-react';
import WhatsappIcon from '../components/WhatsappIcon';

export default function Contact() {
  return (
    <div className="py-0">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 bg-primary">
          <div className="flex items-center justify-center p-12">
            <h1 className="text-6xl font-bold text-white text-center leading-tight">צור קשר</h1>
          </div>
        </div>

        <div className="px-6">
          <div className="bg-gray-50 p-12 mb-12 max-w-4xl mx-auto">
            <div className="space-y-8 max-w-md mx-auto">
              <InfoItem 
                icon={Phone}
                title="נייד"
                content="054-4276648"
                href="tel:+972544276648"
              />
              <InfoItem 
                icon={Mail}
                title='דוא"ל'
                content="gil.psychotherapy@gmail.com"
                href="mailto:gil.psychotherapy@gmail.com"
              />
              <InfoItem 
                icon={MapPin}
                title="כתובת"
                content="מזכרת בתיה"
              />
            </div>
          </div>
          
          {/* כפתור וואטסאפ נפרד באמצע הדף */}
          <div className="flex justify-center mb-16">
            <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                <WhatsappIcon className="w-5 h-5 mr-2" />
                שליחת הודעה בוואטסאפ
              </Button>
            </a>
          </div>

          <div className="bg-white p-8 shadow-sm border border-gray-200 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-10 h-10 text-primary" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">גיל בֶּרדוגו נסים</h3>
                <p className="text-lg text-primary">פסיכותרפיסטית בגישה דינמית בעלת תואר שני (M.A)</p>
              </div>
            </div>
            
            <div className="text-gray-700 space-y-3">
              <p className="text-lg text-justify">מטפלת מוסמכת בקליניקה פרטית באזור רחובות.</p>
              <p className="text-lg text-justify">
                בעלת התמחות בגיל הרך וניסיון בטיפול אישי, טיפול מונחה הורים, טיפול בהתנהגויות אכילה ותפיסת הגוף.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InfoItem = ({ icon: Icon, title, content, href }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 w-12 h-12 bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{title}:</h4>
      {href ? (
        <a href={href} className="text-lg text-gray-700 hover:text-primary transition-colors">{content}</a>
      ) : (
        <p className="text-lg text-gray-700">{content}</p>
      )}
    </div>
  </div>
);