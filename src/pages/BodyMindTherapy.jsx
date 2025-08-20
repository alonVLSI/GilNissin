import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Heart } from 'lucide-react';
import WhatsappIcon from '../components/WhatsappIcon';

export default function BodyMindTherapy() {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-orange-50 via-stone-50 to-green-50">
      <div className="max-w-5xl mx-auto">
        {/* כותרת עליונה */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-stone-800 mb-4">
            פסיכותרפיה בגישה המשלבת גוף-נפש
          </h1>
          <p className="text-xl text-orange-700 mb-6">
            מסע להקשבה לגוף ולנפש מתוך חמלה
          </p>
          <div className="flex justify-center">
            <Heart className="w-10 h-10 text-green-700" />
          </div>
        </div>

        {/* כרטיס עם התוכן */}
        <Card className="bg-white/95 shadow-xl rounded-2xl border border-orange-200">
          <CardContent className="p-10 text-lg leading-relaxed text-stone-800 space-y-6">
            <p>
              האם קרה לכם.ן פעם שהרגשתם.ן שהגוף מנסה לספר משהו? שהכתפיים התפוסות, העייפות הלא מוסברת
              או מערכת היחסים המורכבת עם אוכל הם יותר מסתם תסמינים פיזיים?
            </p>
            <p>
              הגוף שלנו מדבר אותנו. הוא נושא את סיפור חיינו, ובדרכו הייחודית, הלא-מילולית, הוא מבטא את מה
              שלפעמים קשה להגיד במילים. מתח נפשי מתמשך יכול להתבטא בכיווץ שרירים, חוויות עבר עלולות להדהד
              בכאבים פיזיים, ורגשות שלא קיבלו מקום עשויים להתגלם בהפרעות שינה או בתשישות.
            </p>
            <p>
              באותו אופן, מערכת היחסים שלנו עם אוכל ועם הגוף היא לעיתים קרובות מראה של קונפליקטים פנימיים
              עמוקים יותר. זה יכול להרגיש כמו מאבק פנימי, שבו חלקים שונים בתוכנו מתנגשים ומערערים את תחושת
              השלמות והאיזון.
            </p>
            <p>
              אני מאמינה שהמסרים האלה מהגוף אינם סימפטומים שיש "לתקן" או להעלים, אלא הזמנה להקשבה.
              אם הדברים מהדהדים בך, אני מזמינה אותך לתהליך אישי של הקשבה לא שיפוטית, מכילה ותומכת,
              שבו יופנה קשב ולסך כל השיח העולה מתוכך.
            </p>
            <p>
              זהו מסע של גילוי, שבו אלווה אותך בחקירת הקשרים בין חוויות העבר, הרגשות, והאופן שבו הם באים לידי ביטוי
              בגופך ובנפשך היום. תהליך למידה זה פותח עבורך דלת להיכרות עצמית עמוקה יותר, ומאפשר לחוות
              חיוניות, שלמות, ונוכחות נעימה ושקטה יותר בחיים ובתוך גופך.
            </p>

            {/* תמונה של בבושקות */}
            <div className="flex justify-center mt-10">
              <img
                src="../images/babushkas.jpg"
                alt="תמונה של בבושקות"
                className="rounded-xl shadow-md w-64 border-4 border-green-200"
              />
            </div>
          </CardContent>
        </Card>

        {/* כפתור וואטסאפ */}
        <div className="text-center mt-16">
          <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-white text-lg rounded-xl shadow-md px-8"
            >
              <WhatsappIcon className="w-5 h-5 ml-2" />
              לתיאום פגישה
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
