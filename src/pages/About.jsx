import React from 'react';
import { Award, Brain } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* כותרת ממורכזת */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">עליי ועל הגישה הטיפולית</h1>
          <p className="text-xl text-amber-700 font-medium">מסע של חיבור בין גוף לנפש</p>

        {/* עוטף את כל התוכן ב-center */}
          <div className="grid lg:grid-cols-5 gap-12 items-center justify-center">
            {/* טקסט וכרטיסיות */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                שמי גיל ברדוגו נסים, פסיכותרפיסטית מוסמכת המתמחה בגישה המשלבת גוף ונפש. אני מאמינה שהגוף שלנו נושא את סיפור חיינו, את הרגשות, החוויות והטראומות שלנו. הוא מחזיק מפתחות לריפוי עמוק ובר קיימא.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                בטיפול, אנחנו לא רק מדברים על הקשיים, אלא גם לומדים להקשיב לתחושות, לסימנים ולאינטליגנציה של הגוף. דרך שילוב של שיחה, מודעות גופנית, נשימה וכלים נוספים, אנו מאפשרים שחרור של מתחים פיזיים ורגשיים, עיבוד של חוויות עבר וחיזוק החוסן הפנימי.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                ה"אני מאמין" שלי הוא שהדרך לרווחה נפשית עוברת דרך חיבור אמיתי וכנה לכל חלקינו - המחשבות, הרגשות והתחושות הפיזיות. תפקידי הוא להחזיק עבורכם מרחב בטוח, מקצועי ואמפתי, בו תוכלו לצאת למסע הריפוי הייחודי שלכם.
              </p>

              {/* כרטיסיות */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 justify-items-center">
                <div className="flex flex-col items-center gap-3 p-4 bg-stone-100 rounded-xl">
                  <Award className="w-8 h-8 text-amber-700" />
                    <div className="font-semibold">פסיכותרפיסטית מוסמכת</div>
                    <div className="text-sm text-gray-600">התמחות בטיפול גוף-נפש</div>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 bg-stone-100 rounded-xl">
                  <Brain className="w-8 h-8 text-amber-700" />
                    <div className="font-semibold">גישה אינטגרטיבית</div>
                    <div className="text-sm text-gray-600">שילוב שיחה, מודעות ותנועה</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
