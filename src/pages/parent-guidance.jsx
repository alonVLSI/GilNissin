import React from 'react';
import { Button } from '../components/ui/button';
import { Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function ParentGuidance() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif mb-4">טיפול מונחה הורים וטיפול דיאדי (הורה-ילד)</h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center mb-12">
          <div className="lg:col-span-3 space-y-6 text-lg text-light leading-relaxed">
            <p>
              הורות היא מסע מופלא ומורכב, המשלב רגעים של קסם עם אתגרים, דאגות, ולעיתים גם תחושת חוסר אונים. באופן טבעי, ישנם מצבים בהם אנו חשים שהשפה המשותפת עם ילדינו זקוקה לחידוד, או שאנו מתקשים להבין את התנהגותם ואת עולמם הרגשי. הפנייה לעזרה במצבים אלו היא ביטוי לרצון העמוק לחזק את הקשר ולהעניק לילדינו בסיס בטוח לצמיחה.
            </p>
            <p>
              מתוך ניסיון רב שנים בעבודה עם משפחות והכשרה מקצועית (M.A) בהתפתחות הילד, אני מציעה מרחב בטוח להבנת עולמו של ילדכם. מטרתנו המשותפת היא לחזק את הקשר ביניכם וליצור סביבה תומכת ומבינה, שתאפשר התפתחות מיטבית. מטרת הטיפול אינה לחפש "אשמים", אלא להבין לעומק את מה שהילד מנסה לבטא, ולמצוא יחד את דרכי התמיכה הנכונות ביותר עבורכם.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/0bd5291ce_.jpg"
              alt="כלבים - כלבה וגור"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        <div className="bg-light-gray p-10 rounded-lg mb-12">
          <h2 className="text-3xl font-serif text-center mb-8">מסלולי הטיפול</h2>
          <p className="text-center text-light mb-8">אני מציעה שני מסלולים עיקריים, המותאמים לצרכי המשפחה:</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white">
                <Heart className="w-8 h-8 text-orange" />
              </div>
              <h3 className="text-2xl font-serif mb-3">טיפול דיאדי (הורה-ילד לגיל הרך)</h3>
              <p className="text-light">מפגש משותף בו העבודה הטיפולית נעשית דרך משחק ויצירה, במטרה לחזק את הקשר והתקשורת.</p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white">
                <Users className="w-8 h-8 text-teal" />
              </div>
              <h3 className="text-2xl font-serif mb-3">טיפול מונחה הורים</h3>
              <p className="text-light">מפגש הממקד את תשומת הלב בכם, ההורים, ובחוויה ההורית שלכם, ומספק כלים להתמודדות ולהבנת הילד.</p>
            </div>
          </div>
        </div>
        
        <div className="text-lg text-light leading-relaxed space-y-4 text-center">
            <p className="text-xl font-serif">הטיפול מתקיים במתכונת של מפגש שבועי בן 50 דקות.</p>
            <p>משך התהליך מותאם אישית לצרכים הייחודיים שלכם ושל ילדכם.</p>
            <div className="pt-4">
                 <Link to={createPageUrl("contact")}>
                    <Button size="lg" className="bg-teal hover:bg-opacity-90 text-white">
                        יצירת קשר
                    </Button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}