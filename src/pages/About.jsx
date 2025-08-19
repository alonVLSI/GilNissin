import React from 'react';
import { Award, Brain, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">עליי</h1>
          <p className="text-xl text-orange-600 font-medium">מסע של חיבור בין גוף לנפש</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              שמי גיל, אך לא תמיד היה זה שמי. פעם, מזמן, קראו לי גילה.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              הוריי, בכוונה טובה, רצו להעניק לי שם המסמל שמחה. אך אני, בתוך השם הזה, לא מצאתי שמחה. הבנות סביבי נשאו שמות שהסתיימו בהברה המרככת, "-ית" – נורית, גלית, חגית – כאילו נועדו לעדן את נוכחותן בעולם. הרגשתי כי השם גילה כפה עליי נוכחות עצמית מסוימת, עוד בטרם למדתי את עצמי לדבר.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              בגיל שמונה עשרה, בצעד שהיה אולי נאיבי - ניסיון לעצב מחדש את זהותי, שיניתי את שמי לגיל. זה היה ניסיון להתפייס עם אותם חלקים שביקשו הכרה וביטוי אחר. אותה תחושת פער בין פנים לחוץ היא שהציתה בי את הסקרנות להבין את החיבור המורכב בין חלקי העצמי, ובין הנפש לגוף.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1599905292494-a924462635a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="סביבת טיפול רגועה המשלבת טבע"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-orange-50 p-8 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">הדרך המקצועית שלי</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              דרכי המקצועית החלה בחינוך המיוחד, המשיכה ללימודים מתקדמים (M.A) בהתפתחות הילד באוניברסיטה העברית, והעמיקה במסגרת ניהול מערכות למשפחה ולגיל הרך. בכל שלב, פגשתי ילדים, הורים ומשפחות, ובמפגשים אלו זיהיתי את הכמיהה האנושית המשותפת לכולנו: לחוש שלמות, הבנה וחיבור לעצמנו.
            </p>
            <p>
              את כניסתי לעולם הטיפול עשיתי דרך התמחות בטיפול בהתנהגויות אכילה ובדימוי גוף, על פי גישת "שפת האכילה". מתוך שאיפה להעניק מענה רחב ומעמיק יותר, המשכתי להכשרה מקיפה בפסיכותרפיה פסיכודינמית אינטגרטיבית באוניברסיטת בר-אילן.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-teal-50 to-orange-50 rounded-xl">
            <Award className="w-10 h-10 text-teal-600" />
            <div>
              <div className="font-semibold text-lg">פסיכותרפיסטית מוסמכת</div>
              <div className="text-sm text-gray-600">M.A בהתפתחות הילד - האוניברסיטה העברית</div>
              <div className="text-sm text-gray-600">התמחות בפסיכותרפיה פסיכודינמית - בר אילן</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-orange-50 to-purple-50 rounded-xl">
            <Brain className="w-10 h-10 text-orange-600" />
            <div>
              <div className="font-semibold text-lg">התמחויות</div>
              <div className="text-sm text-gray-600">טיפול בהתנהגויות אכילה ודימוי גוף</div>
              <div className="text-sm text-gray-600">טיפול מונחה הורים וטיפול דיאדי</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            כמטפלת, אני שואפת ליצור מרחב המאפשר דיאלוג פנימי – תהליך של התבוננות והקשבה המזמין את חלקי העצמי השונים למגע, ובכך מוביל לחיבור ולריפוי. אני מביאה אל הקליניקה את מכלול הידע והניסיון שצברתי, לצד סקרנות, אמפתיה ואמונה עמוקה בכך שתחושת שלמות פנימית מתאפשרת כאשר אנו מעזים לפגוש את עצמנו, על כל פסיפס חלקינו המבקשים להתעטף ברגישות ובחמלה.
          </p>
        </div>
      </div>
    </div>
  );
}