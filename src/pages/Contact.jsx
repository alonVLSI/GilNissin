import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

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

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <InfoCard 
              icon={Phone}
              title="טלפון"
              content="052-123-4567"
              subContent="זמינה בימים א-ה, בין 9:00 ל-18:00"
            />
             <InfoCard 
              icon={Mail}
              title="דואר אלקטרוני"
              content="michal@therapy.co.il"
              subContent="מענה מובטח תוך 24 שעות"
            />
             <InfoCard 
              icon={MapPin}
              title="כתובת הקליניקה"
              content="רחוב הרצל 15, תל אביב"
              subContent="קליניקה נגישה עם חניה באזור"
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
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                        dir="rtl"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        placeholder="מספר טלפון"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                        dir="rtl"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="כתובת אימייל"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                        dir="rtl"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="במה תרצו שאסייע? (אופציונלי)"
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                        dir="rtl"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800 text-lg py-3">
                      שליחה
                    </Button>
                  </form>
                </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

const InfoCard = ({ icon: Icon, title, content, subContent }) => (
  <div className="flex items-start gap-4" dir="rtl">
    <div className="mt-1 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-amber-700" />
    </div>
    <div className="text-right">
      <h4 className="text-xl font-bold text-gray-900">{title}</h4>
      <p className="text-lg text-gray-700">{content}</p>
      <p className="text-sm text-gray-500">{subContent}</p>
    </div>
  </div>
);