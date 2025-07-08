
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';
import WhatsappIcon from '../components/WhatsappIcon';

export default function FamilyTherapy() {
  const issues = [
    "קשיים בתקשורת בין בני המשפחה",
    "התמודדות עם התנהגות מאתגרת של ילדים ומתבגרים",
    "משברים משפחתיים (גירושין, מחלה, אובדן)",
    "קונפליקטים בין אחים",
    "מעברים ושינויים (לידה, מעבר דירה, גיל ההתבגרות)",
    "שיפור האווירה המשפחתית הכוללת"
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">טיפול משפחתי</h1>
            <p className="text-xl text-orange-600 mb-6">חיזוק התא המשפחתי וההתמודדות המשותפת</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
             המשפחה היא המערכת הראשונה והחשובה ביותר בחיינו. כאשר המערכת הזו חווה קשיים, הדבר משפיע על כל אחד ואחת מבני המשפחה. טיפול משפחתי רואה את המשפחה כמערכת אחת, ומטרתו לסייע לה למצוא דרכי התמודדות ותקשורת בריאות יותר.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              במפגשים המשפחתיים, ניתן לכל אחד את המקום לבטא את עצמו, ונלמד יחד לזהות את הדינמיקה המשפחתית, לחזק את נקודות החוזק שלה ולהתמודד עם האתגרים בצורה בונה ומקרבת.
            </p>
            <a href="https://wa.me/972521234567" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg">
                <WhatsappIcon className="w-5 h-5 ml-2" />
                לשליחת הודעה
              </Button>
            </a>
          </div>
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">הנושאים בהם הטיפול מסייע:</h3>
              <ul className="space-y-4">
                {issues.map((issue, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-teal-600 mt-1 ml-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{issue}</span>
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
