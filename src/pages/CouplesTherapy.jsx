
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';
import WhatsappIcon from '../components/WhatsappIcon';

export default function CouplesTherapy() {
  const goals = [
    "שיפור התקשורת וההקשבה ההדדית",
    "פתרון קונפליקטים ומריבות חוזרות",
    "חיזוק האינטימיות, החברות והתשוקה",
    "התמודדות עם משברים (בגידה, קשיים כלכליים)",
    "צמיחה משותפת וקבלת החלטות",
    "גישור וליווי בתהליכי פרידה"
  ];

  return (
    <div className="py-20 px-6 bg-stone-100/70">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">טיפול זוגי</h1>
            <p className="text-xl text-amber-700 mb-6">להצמיח מחדש את הקשר והאינטימיות</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              מערכת יחסים זוגית היא מהיסודות החשובים בחיינו, אך לעיתים היא נתקלת באתגרים, קונפליקטים ושחיקה. טיפול זוגי נועד לספק לכם מרחב ניטרלי ובטוח לדבר על הקשיים, להבין את הצרכים של כל אחד מכם, ולמצוא דרכים חדשות לתקשר ולהתחבר.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              בטיפול נלמד יחד שפה חדשה של הקשבה, כבוד הדדי ואמפתיה, ונבנה מחדש את הגשרים שנשחקו עם הזמן.
            </p>
          </div>
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">מטרות הטיפול הזוגי:</h3>
              <ul className="space-y-4">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 ml-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
