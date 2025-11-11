import React from 'react';
import { Button } from '../components/ui/button';
import { createPageUrl } from '../components/utils';
import { Link } from 'react-router-dom';
import WhatsappIcon from '../components/WhatsappIcon';

export default function About() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-right mb-16">
          <h1 className="text-5xl font-bold mb-4">עליי</h1>
        </div>

        <div className="bg-sky-50 py-8 px-8 mb-12">
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              שמי גיל, אך לא תמיד נקראתי כך. פעם, מזמן, קראו לי גילה. הוריי העניקו לי את השם מתוך כוונה טובה שיסמל שמחה, אך אני חוויתי אותו כמקור לאי-נוחות. בגיל שמונה-עשרה, בצעד נאיבי ומתוך רצון לגשר על הפער בין תפיסת העצמי שלי לחווייתי בעולם, בחרתי לשנותו. 
            </p>
            <p>
              חוויה מעצבת זו האירה על הדיאלוג הפנימי המתקיים בין חלקי הנפש – דיאלוג המעצב את חוויית חיינו.
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