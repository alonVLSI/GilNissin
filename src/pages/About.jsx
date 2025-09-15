import React from 'react';
import { Button } from '../components/ui/button';
import { createPageUrl } from '../utils';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif mb-4">עליי</h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
          <div className="lg:col-span-3 space-y-6 text-lg text-light leading-relaxed">
            <p>
              שמי גיל, אך לא תמיד נקראתי כך. פעם, מזמן, קראו לי גילה. הוריי העניקו לי את השם מתוך כוונה טובה שיסמל שמחה, אך אני חוויתי אותו כמקור לאי-נוחות. בגיל שמונה-עשרה, בצעד נאיבי ומתוך רצון לגשר על הפער בין תפיסת העצמי שלי לחווייתי בעולם, בחרתי לשנותו. חוויה מעצבת זו האירה על הדיאלוג הפנימי המתקיים בין חלקי הנפש – דיאלוג המעצב את חוויית חיינו.
            </p>
            <p>
              את דרכי המקצועית התחלתי בחינוך המיוחד, ומשם המשכתי ללימודים מתקדמים (M.A) בהתפתחות הילד והמשפחה. לאחר עשור של ניהול בתחום הגיל הרך, נכנסתי לעולם הטיפול דרך התמחות וטיפול בהתנהגויות אכילה ותפיסת הגוף בגישת שפת האכילה. בהמשך השלמתי הכשרה מקיפה בפסיכותרפיה פסיכודינמית.
            </p>
            <p>
              כמטפלת, אני שואפת ליצור מרחב המאפשר התבוננות והקשבה, שמזמין את חלקי העצמי השונים למפגש המוביל לחיבור, אינטגרציה וריפוי. אני מביאה עמי לקליניקה את הידע והניסיון שצברתי, לצד סקרנות, אמפתיה ואמונה עמוקה ביכולת שלנו לפגוש את עצמנו – על פסיפס החלקים המרכיבים אותנו – ברגישות ובחמלה.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/cecc328e1_.jpg"
              alt="גיל ברדוגו נסים"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        <div className="bg-light-gray p-10 rounded-lg text-center">
           <p className="text-xl md:text-2xl font-serif leading-relaxed text-light max-w-3xl mx-auto mb-8">
            אם הדברים מהדהדים בך, אני מזמינה אותך לתהליך אישי של הקשבה לא שיפוטית, מכילה ותומכת, בו מתקיים מפגש עם עצמך המאפשר לחוות חיוניות, שלמות, ונוכחות נעימה ושקטה יותר בחיים ובתוך גופך.
          </p>
          <p className="text-lg text-light mb-8">
            אני מקבלת לטיפול פרטני בקליניקה שלי במזכרת בתיה, ובמקביל מטפלת בילדים, נוער והוריהם במרכז "נתיבים להורות ומשפחה".
          </p>
          <Link to={createPageUrl("contact")}>
            <Button size="lg" className="bg-teal hover:bg-opacity-90 text-white">
              יצירת קשר
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}