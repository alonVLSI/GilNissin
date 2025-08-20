import React from 'react';
import { Button } from '../components/ui/button';
import { Heart, Home, Shield } from 'lucide-react';
import WhatsappIcon from '../components/WhatsappIcon';

export default function Clinic() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">קליניקה שהיא מרחב</h1>
          <p className="text-xl text-orange-600 mb-6">יותר מאשר חדר - מרחב של ריפוי</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              הקליניקה היא יותר מאשר חדר. היא מרחב.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              מרחב שבו ניתן להניח לרגע את המגננות, את הציפיות ואת הרעש שמציף, ופשוט להיות.
            </p>
            <div className="bg-gradient-to-br from-teal-50 to-orange-50 p-6 rounded-xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                אני מאמינה שתהליך טיפולי מתחיל ביצירת קשר – קשר בטוח, מכיל ולא שיפוטי.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <Shield className="w-12 h-12 text-teal-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">גמישות</h3>
              </div>
              <div className="p-4">
                <Heart className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">הקשבה</h3>
              </div>
              <div className="p-4">
                <Home className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">התאמה אישית</h3>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-orange-400 to-purple-500 rounded-3xl blur opacity-25"></div>
              <img 
                src="../imgaes/clinic.jpeg"
                alt="קליניקה רגועה ומזמינה"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">המרחב הטיפולי</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">קליניקה פרטית במזכרת בתיה</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• טיפול פרטני שבועי או דו-שבועי</li>
                <li>• מרחב אינטימי ומכיל</li>
                <li>• סביבה שקטה ונעימה</li>
                <li>• התאמה אישית מלאה</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-600 mb-4">מרכז נתיבים למשפחה והורות</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• ליווי ילדים, נוער והוריהם</li>
                <li>• תהליכים פרטניים וקבוצתיים</li>
                <li>• טיפול מונחה הורים</li>
                <li>• עבודה מערכתית עם המשפחה</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            המרחב הטיפולי נוצר לא רק מהמקום הפיזי, אלא מהאיכות של המפגש, מהנוכחות והמחויבות ליצור יחד מסע של גילוי, צמיחה וריפוי.
          </p>
          <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg">
              <WhatsappIcon className="w-5 h-5 ml-2" />
              לשליחת הודעה
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}