
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { createPageUrl } from '../utils';
import { Button } from '../components/ui/button';
import WhatsappIcon from '../components/WhatsappIcon';

export default function IndividualTherapy() {
  const topics = [
    "התמודדות עם חרדה ודיכאון",
    "התמודדות עם משברי חיים (אובדן, גירושין, פיטורין)",
    "שיפור דימוי וביטחון עצמי",
    "קשיים במערכות יחסים",
    "חיפוש אחר משמעות ומימוש עצמי",
    "התמודדות עם טראומה ופוסט-טראומה"
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">טיפול אישי</h1>
            <p className="text-xl text-orange-600 mb-6">מרחב אישי ובטוח לריפוי הוליסטי</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              טיפול אישי בגישת גוף-נפש הוא מסע משותף בו נשלב בין שיחה פתוחה לבין התחברות לחכמת הגוף. במרחב בטוח ומכיל, נאפשר לעצמנו לחקור, להרגיש ולעבד את מה שעולה - לא רק במחשבות, אלא גם בתחושות.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              מטרת הטיפול היא לשחרר דפוסים רגשיים ופיזיים שאינם משרתים אותך עוד, לחזק את הקשר בין הגוף והנפש שלך, ולהעניק לך כלים מעשיים להתמודדות עם אתגרי החיים מתוך מקום שלם ומחובר יותר.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">נושאים נפוצים בטיפול:</h3>
              <ul className="space-y-4">
                {topics.map((topic, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-teal-600 mt-1 ml-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{topic}</span>
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
