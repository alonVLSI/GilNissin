import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Phone, Mail, MapPin, Award } from 'lucide-react';
import WhatsappIcon from '../components/WhatsappIcon';

export default function Contact() {
  return (
    <div className="py-20 px-6 bg-stone-100/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">צור קשר</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אני כאן כדי להקשיב. השאירו פרטים ואחזור אליכם בהקדם לקביעת פגישת היכרות ראשונית, טלפונית או בקליניקה.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <InfoCard 
              icon={Phone}
              title="טלפון נייד"
              content="054-4276648"
              subContent="זמינה לשיחות תיאום בימים א-ה"
            />
             <InfoCard 
              icon={Mail}
              title="דואר אלקטרוני"
              content="giln68@gmail.com"
              subContent="מענה מובטח תוך 24 שעות"
            />
             <InfoCard 
              icon={MapPin}
              title="מיקום הטיפול"
              content="מזכרת בתיה"
              subContent="קליניקה פרטית ומרכז נתיבים למשפחה והורות"
            />
          </div>

          <div className="lg:col-span-3">
            <Card className="bg-white text-gray-900 shadow-lg border-stone-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">השאירו פרטים ואחזור אליכם</h3>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="שם מלא"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        dir="rtl"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        placeholder="מספר טלפון"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        dir="rtl"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="כתובת אימייל"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        dir="rtl"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="במה תרצו שאסייע? (אופציונלי)"
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        dir="rtl"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3">
                      שליחה
                    </Button>
                  </form>
                </CardContent>
              </Card>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200">
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-10 h-10 text-teal-600" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">גיל ברדוגו נסים</h3>
              <p className="text-lg text-orange-600">פסיכותרפיסטית בגישה פסיכודינמית (M.A)</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">הכשרה והתמחויות:</h4>
              <ul className="space-y-2">
                <li>• M.A בהתפתחות הילד - האוניברסיטה העברית</li>
                <li>• התמחות בפסיכותרפיה פסיכודינמית - בר אילן</li>
                <li>• התמחות בגיל הרך</li>
                <li>• טיפול בהתנהגויות אכילה ותפיסת הגוף</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">תחומי טיפול:</h4>
              <ul className="space-y-2">
                <li>• טיפול אישי</li>
                <li>• טיפול מונחה הורים</li>
                <li>• טיפול דיאדי (הורה-ילד)</li>
                <li>• הרצאות וסדנאות</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3">
              <WhatsappIcon className="w-5 h-5 ml-2" />
              לשליחת הודעה בוואטסאפ
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

const InfoCard = ({ icon: Icon, title, content, subContent }) => (
  <div className="flex items-start gap-4" dir="rtl">
    <div className="mt-1 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-teal-600" />
    </div>
    <div className="text-right">
      <h4 className="text-xl font-bold text-gray-900">{title}</h4>
      <p className="text-lg text-gray-700">{content}</p>
      <p className="text-sm text-gray-500">{subContent}</p>
    </div>
  </div>
);