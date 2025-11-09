
import React from 'react';
import { Button } from '../components/ui/button';
import WhatsappIcon from '../components/WhatsappIcon';

export default function ParentGuidance() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-right mb-16">
          <h1 className="text-5xl font-bold mb-4">טיפול מונחה הורים וטיפול דיאדי</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-12">
          <div className="bg-cyan-50 flex flex-col justify-between h-full pt-1 pb-3 px-8">
            <div className="space-y-10 text-lg text-gray-700 leading-relaxed text-justify flex-1 flex flex-col justify-between">
              <p>
                הורות היא מסע מופלא ומורכב, המשלב רגעים של קסם עם אתגרים, דאגות, ולעיתים גם תחושת חוסר אונים.
              </p>
              <p>
                באופן טבעי, ישנם מצבים בהם אנו חשים שהשפה המשותפת עם ילדינו זקוקה לחידוד, או שאנו מתקשים להבין את התנהגותם ואת עולמם הרגשי.
              </p>
              <p>
                הפנייה לעזרה במצבים אלו היא ביטוי לרצון העמוק לחזק את הקשר ולהעניק לילדים בסיס בטוח לצמיחתם.
              </p>
            </div>
          </div>
          
          <div>
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/0bd5291ce_.jpg"
              alt="כלבים - כלבה וגור"
              className="w-full h-full object-cover shadow-md"
            />
          </div>
        </div>

        <div className="bg-cyan-50 p-10 mb-12 text-right">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              מתוך ניסיון רב שנים בעבודה עם משפחות והכשרה מקצועית (M.A) בהתפתחות הילד, אני מציעה מרחב בטוח להבנת עולמו של ילדכם. מטרתנו המשותפת היא לחזק את הקשר ביניכם וליצור סביבה תומכת ומבינה, שתאפשר התפתחות מיטבית.
            </p>
            <p>
              מטרת הטיפול אינה לחפש "אשמים", אלא להבין לעומק את מה שהילד מנסה לבטא, ולמצוא יחד את דרכי התמיכה הנכונות ביותר עבורכם.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 mb-12 text-right">
          <h2 className="text-3xl mb-6">מסלולי הטיפול</h2>
          <p className="text-gray-700 mb-8 text-lg">אני מציעה שני מסלולים עיקריים, המותאמים לצרכי המשפחה:</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 shadow-sm">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7413e4a01_WhatsAppImage2025-07-01at143149.jpeg"
                  alt="לוגו"
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">טיפול דיאדי (הורה-ילד לגיל הרך)</h3>
              <p className="text-gray-700 text-lg leading-relaxed">מפגש משותף בו העבודה הטיפולית נעשית דרך משחק ויצירה, במטרה לחזק את הקשר והתקשורת.</p>
            </div>
            <div className="bg-gray-50 p-8 shadow-sm">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7413e4a01_WhatsAppImage2025-07-01at143149.jpeg"
                  alt="לוגו"
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">טיפול מונחה הורים</h3>
              <p className="text-gray-700 text-lg leading-relaxed">מפגש הממקד את תשומת הלב בכם, ההורים, ובחוויה ההורית שלכם, ומספק כלים להתמודדות ולהבנת הילד.</p>
            </div>
          </div>
        </div>
        
        <div className="text-lg text-gray-700 leading-relaxed space-y-4 max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-justify">הטיפול מתקיים במתכונת של מפגש שבועי בן 50 דקות.</p>
          <p className="text-justify">משך התהליך מותאם אישית לצרכים הייחודיים שלכם ושל ילדכם.</p>
        </div>

        <div className="text-center">
          <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8"
            >
              <WhatsappIcon className="w-5 h-5 mr-2" />
              לתיאום פגישה
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
