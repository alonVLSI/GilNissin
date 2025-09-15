import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Phone, Mail, MapPin, Award } from 'lucide-react';
import WhatsappIcon from '../components/WhatsappIcon';

export default function Contact() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif mb-4">צור קשר</h1>
        </div>

        <div className="bg-light-gray p-8 sm:p-12 rounded-lg grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
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
                 <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer" className="block pt-4">
                    <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white w-full">
                      <WhatsappIcon className="w-5 h-5 ml-2" />
                      שליחת הודעה בוואטסאפ
                    </Button>
                  </a>
            </div>
            
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/b9f683f40_.jpg" 
                alt="קליניקה" 
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200">
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-10 h-10 text-teal" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">גיל ברדוגו נסים</h3>
              <p className="text-lg text-orange">פסיכותרפיסטית בגישה דינמית בעלת תואר שני (M.A)</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <p className="text-light mb-3">מטפלת מוסמכת בקליניקה פרטית באזור רחובות.</p>
              <p className="text-light">
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
    <div className="mt-1 w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-teal" />
    </div>
    <div>
      <h4 className="text-lg font-semibold font-serif text-gray-800">{title}:</h4>
      {href ? (
        <a href={href} className="text-lg text-light hover:text-teal">{content}</a>
      ) : (
        <p className="text-lg text-light">{content}</p>
      )}
    </div>
  </div>
);