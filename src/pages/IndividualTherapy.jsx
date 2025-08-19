import React from 'react';
import { createPageUrl } from '../components/utils';
import { Button } from '../components/ui/Button';
import { CheckCircle, Clock, Users as UsersIcon } from 'lucide-react';
import WhatsappIcon from '../components/WhatsappIcon';

export default function IndividualTherapy() {
  const challenges = [
    "תחושה עמוקה של בדידות",
    "ההרגשה שאין עם מי לדבר",
    "חוסר היכולת למצוא את המילים כדי לבטא את עצמנו",
    "הפער בין החוויה הפנימית לבין המציאות החיצונית",
    "קשיים בדימוי העצמי ודימוי הגוף",
    "התנהגויות אכילה ותפיסת השייכות"
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">טיפול אישי</h1>
          <p className="text-xl text-orange-600 mb-6">מרחב אישי ובטוח לריפוי הוליסטי</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              ההחלטה לפנות לטיפול אישי היא צעד אמיץ, אשר באופן טבעי מלווה בחששות. המחשבה להיחשף בפני אדם זר ולחלוק את אשר על הלב יכולה לעורר תחושת זרות ואף להציב אתגר.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              לעיתים קרובות, הפנייה לטיפול נובעת מתחושה עמוקה של בדידות, מההרגשה שאין עם מי לדבר, או מחוסר היכולת למצוא את המילים כדי לבטא את הפער בין החוויה הפנימית של עצמנו למציאות החיצונית.
            </p>
            <div className="bg-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">איני יכולה להבטיח שהתהליך יהיה קל</h3>
              <p className="text-gray-700">
                נדרש זמן כדי לפתח תחושת נוחות וביטחון המאפשרת שיח פתוח וכנה. עם זאת, אני יכולה להבטיח שאהיה שם עבורך, במרחב בטוח ולא שיפוטי, שבו תוכל.י ללמוד את עצמך מחדש, ומתוך כך לחולל שינוי מיטיב בחייך.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">נושאים נפוצים בטיפול:</h3>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 ml-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-purple-50 p-8 rounded-2xl mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">הגישה הטיפולית שלי</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            אני מציעה גישה טיפולית המתמקדת בקשר העמוק שבין גוף לנפש. גישה זו מזמינה מפגש עם תהליכים רגשיים ונפשיים כפי שהם באים לידי ביטוי בשיח החברתי ובמערכות היחסים בחייך.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            הטיפול נוגע לא פעם בדימוי העצמי ובדימוי הגוף, ובהתאם לכך, עשוי להתמקד גם בהתנהגויות אכילה, בתפיסת הגוף ובתחושת השייכות.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-teal-600" />
              <h3 className="text-xl font-bold text-gray-900">פרטי הטיפול</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>• מפגש שבועי של 50 דקות</li>
              <li>• משך התהליך מותאם אישית</li>
              <li>• טיפול ממוקד וקצר מועד עד טיפול דינמי ארוך טווח</li>
              <li>• בהתאם לצרכים הייחודים של כל אחד ואחת</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <UsersIcon className="w-8 h-8 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-900">מיקומי הטיפול</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>• קליניקה פרטית במזכרת בתיה</li>
              <li>• מרכז נתיבים למשפחה והורות</li>
              <li>• טיפול פרטני, קבוצתי ומונחה הורים</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            אם גישה טיפולית זו מדברת אליך, אני מזמינה אותך ליצור עמי קשר. נוכל לתאם שיחת היכרות ראשונית ולבחון יחד אם נכון לך להתחיל בתהליך טיפולי.
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