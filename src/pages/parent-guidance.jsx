import React from 'react';
import { Button } from '../components/ui/Button';
import { CheckCircle, Heart, Users, Clock } from 'lucide-react';
import WhatsappIcon from '../components/WhatsappIcon';

export default function ParentGuidance() {
  const challenges = [
    "אתגרים, דאגות ולעיתים גם תחושת חוסר אונים",
    "השפה המשותפת עם הילד.ה זקוקה לחידוד",
    "קושי להבין התנהגויות מסוימות וביטויים של מצוקה רגשית",
    "רצון עמוק לעשות טוב יותר ולחזק את הקשר",
    "סיוע לילדים לצאת לעולם בטוחים בעצמם וממשים את עצמם"
  ];

  const goals = [
    "הבנת עולמו הפנימי של הילד",
    "חיזוק הקשר בינכם",
    "יצירת סביבה תומכת ומבינה",
    "מתן כלים להתפתחות מיטבית"
  ];

  return (
    <div className="py-20 px-6 bg-stone-100/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">טיפול מונחה הורים וטיפול דיאדי</h1>
          <p className="text-xl text-orange-600 mb-6">ליווי הורים ומשפחות בתהליכי צמיחה</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              כאמא ואשת מקצוע, אני יודעת שהורות היא מסע מופלא, מלא ברגעים קסומים, אבל גם באתגרים, דאגות ולעיתים גם בתחושת חוסר אונים. לפעמים אנחנו מרגישים שהשפה המשותפת עם הילד.ה שלנו זקוקה לחידוד, או שאנחנו מתקשים להבין התנהגויות מסוימות וביטויים של מצוקה רגשית.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              הפנייה לעזרה במצבים כאלה נובעת מהרצון העמוק ביותר שלנו לעשות טוב יותר, לחזק את הקשר ולעזור לילדינו לצאת לעולם בטוחים בעצמם וממשים את עצמם.
            </p>
            <div className="bg-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">מתוך ניסיון רב שנים</h3>
              <p className="text-gray-700">
                מתוך ניסיון רב שנים בעבודה עם משפחות והכשרה מקצועית (M.A) בהתפתחות הילד והמשפחה, אני מציעה מרחב בטוח שבו נוכל להבין יחד את עולמו של ילדכם.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">אתגרים נפוצים:</h3>
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

        <div className="bg-gradient-to-br from-teal-50 to-orange-50 p-8 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">שני מסלולים עיקריים לטיפול</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
                <h3 className="text-xl font-bold text-gray-900">טיפול דיאדי</h3>
              </div>
              <p className="text-gray-600 mb-4">(מתאים כטיפול בגיל הרך)</p>
              <p className="text-gray-700 leading-relaxed">
                מפגש משותף עם הילד או הילדה, שבו העבודה הטיפולית נעשית דרך משחק ויצירה. הטיפול מתמקד בחיזוק הקשר וביצירת חוויות חיוביות משותפות.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">טיפול מונחה הורים</h3>
              </div>
              <p className="text-gray-600 mb-4">מיקוד בכם, ההורים</p>
              <p className="text-gray-700 leading-relaxed">
                מפגש שבו המיקוד הוא בכם, ההורים, ובחוויה ההורית שלכם. עבודה על הבנת עולמו הפנימי של ילדכם ומציאת דרכי התמיכה הנכונות.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">המטרות המשותפות שלנו:</h3>
            <ul className="space-y-4">
              {goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-600 mt-1 ml-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-teal-600" />
              <h3 className="text-xl font-bold text-gray-900">פרטי הטיפול</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>• מפגש שבועי של 50 דקות</li>
              <li>• משך התהליך מותאם אישית</li>
              <li>• בהתאם לצרכים הייחודים של הילד.ה ושלכם ההורים</li>
              <li>• השאיפה אינה לחפש "אשמים"</li>
              <li>• אלא להבין לעומק ולמצוא דרכי תמיכה</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
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