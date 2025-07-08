import React from 'react';
import { Award, Brain, Users } from 'lucide-react';
import profile from '../components/profile.png'


export default function About() {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">עליי ועל הגישה הטיפולית</h1>
          <p className="text-xl text-orange-600 font-medium">מסע של חיבור בין גוף לנפש</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-teal-50 to-orange-50 rounded-xl">
                  <Award className="w-8 h-8 text-teal-600" />
                  <div>
                    <div className="font-semibold">פסיכותרפיסטית מוסמכת</div>
                    <div className="text-sm text-gray-600">התמחות בטיפול גוף-נפש</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-purple-50 rounded-xl">
                  <Brain className="w-8 h-8 text-orange-600" />
                  <div>
                    <div className="font-semibold">גישה אינטגרטיבית</div>
                    <div className="text-sm text-gray-600">שילוב שיחה, מודעות ותנועה</div>
                  </div>
                </div>
              </div>
          </div>
          
          <div className="lg:col-span-2">
            <img 
              src={profile}
              alt="סביבת טיפול רגועה המשלבת טבע"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
