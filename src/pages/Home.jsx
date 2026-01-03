import React from 'react';
import { Button } from '../components/ui/button';
import { createPageUrl } from '../components/utils';
import { Link } from 'react-router-dom';
import WhatsappIcon from '../components/WhatsappIcon';

export default function Home() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 text-right mb-8">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              גיל בֶּרדוגו נסים
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary font-medium">
              פסיכותרפיסטית משלבת גוף נפש
            </h2>
			<h2 className="sr-only">פסיכותרפיה משלבת גוף ונפש במזכרת בתיה</h2>
            <h2 className="sr-only">פסיכותרפיה במזכרת בתיה, מטפלת במזכרת בתיה, פסיכותרפיסטית במזכרת בתיה</h2>

          </div>
        </div>
      </section>

        <div className="bg-sky-50 py-8 px-8 mb-12">
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
נעים להכיר. 
שמי גיל, פסיכותרפיסטית מוסמכת המטפלת במבוגרים.ות, בבני ובנות נוער, ועוסקת גם בטיפול מונחה הורות ומשפחה.
התפיסה הטיפולית שלי נשענת על גישות המשלבות גוף-נפש, ומתאפיינת בקשב מעמיק ובשיחה המעצבת את תפיסת העצמי. 
הטיפול מתמקד בגישה דינמית בעלת ידע רב-תחומי בהתמודדות עם קשיים ומצוקות; לחץ ומתח נפשי, בעיות בתקשורת בינאישית ובמערכות יחסים, שינויים ותקופות הסתגלות, דימוי עצמי וגוף, וכן טיפול בהתנהגויות אכילה. 
לצד עבודתי בקליניקה, אני מטפלת במרכז להורות ולמשפחה, מנחה קבוצות ומרצה בתחום.

            </p>

          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-12">
          <div className="bg-sky-50 py-8 px-8 flex flex-col justify-between">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                את דרכי המקצועית התחלתי בחינוך המיוחד, ומשם המשכתי ללימודים מתקדמים (M.A) בהתפתחות הילד והמשפחה. לאחר עשור של ניהול בתחום הגיל הרך, נכנסתי לעולם הטיפול דרך התמחות וטיפול בהתנהגויות אכילה ותפיסת הגוף בגישת שפת האכילה. 
              </p>
              <p>
                בהמשך השלמתי הכשרה מקיפה בפסיכותרפיה פסיכודינמית.
              </p>
              <p>
                כמטפלת, אני שואפת ליצור מרחב המאפשר התבוננות והקשבה, שמזמין את חלקי העצמי השונים למפגש המוביל לחיבור, אינטגרציה וריפוי. אני מביאה עמי לקליניקה את הידע והניסיון שצברתי, לצד סקרנות, אמפתיה ואמונה עמוקה ביכולת שלנו לפגוש את עצמנו – על פסיפס החלקים המרכיבים אותנו – ברגישות ובחמלה.
              </p>
            </div>
          </div>
          
          <div>
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/918f04d69_profile.jpg"
              alt="גיל ברדוגו נסים, פסיכותרפיה במזכרת בתיה"
              className="w-full h-full object-cover shadow-md"
            />
          </div>
        </div>

        <div className="bg-sky-50 p-10 text-right mb-12">
           <p className="text-xl md:text-2xl leading-relaxed text-gray-800 max-w-3xl mb-8 text-justify">
            אם הדברים מהדהדים בך, אני מזמינה אותך לתהליך אישי של הקשבה לא שיפוטית, מכילה ותומכת, בו מתקיים מפגש עם עצמך המאפשר לחוות חיוניות, שלמות, ונוכחות נעימה ושקטה יותר בחיים ובתוך גופך.
          </p>
          <p className="text-lg text-gray-700 text-justify">
            אני מקבלת לטיפול פרטני בקליניקה שלי במזכרת בתיה, ובמקביל מטפלת בילדים, נוער והוריהם במרכז "נתיבים להורות ומשפחה".
          </p>
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