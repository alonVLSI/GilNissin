import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Users, BookOpen, Heart, Brain, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../components/utils';

const LectureCard = ({ lecture }) => (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-12">
        <div className="p-8">
            <h3 className="text-2xl font-bold font-serif mb-3">{lecture.title}</h3>
            <p className="text-teal font-serif mb-4">{lecture.subtitle}</p>
            <p className="text-light leading-relaxed mb-6">{lecture.description}</p>
            
            <h4 className="font-semibold font-serif mb-3">מה בהרצאה?</h4>
            <ul className="space-y-2 text-light list-disc list-inside mb-6">
                {lecture.topics.map((topic, i) => <li key={i}>{topic}</li>)}
            </ul>

            <div className="bg-light-gray p-4 rounded-md text-sm text-light">
                <p><strong className="font-semibold">קהל יעד:</strong> {lecture.audience}</p>
                {lecture.special && <p className="mt-2"><strong className="font-semibold">מתכונת:</strong> {lecture.special}</p>}
            </div>
        </div>
    </div>
);

export default function Lectures() {
  const lectures = [
    {
      title: "מבעד למצלמה: על דימוי גוף וביטחון עצמי בעידן הדיגיטלי",
      subtitle: "",
      audience: "הורים, בני ובנות נוער, יועצות וצוותי חינוך",
      description: "בעידן בו הרשתות החברתיות מציבות סטנדרט של שלמות, בני נוער מתמודדים עם אתגרים מורכבים בכל הנוגע לדימוי הגוף והערך העצמי. הרצאה זו מזמינה הורים ונוער להתבונן פנימה אל עולם הרגשות והמחשבות, ולהבין את ההשפעות הסביבתיות המעצבות אותנו. ההרצאה חושפת את הקשר העמוק בין דימוי גוף לחוסן נפשי, מערכות יחסים בריאות והגשמה אישית.",
      topics: [
        "הבנה מעמיקה של האופן שבו השפה מעצבת ביטחון עצמי",
        "הקניית כלים מעשיים לחיזוק החוסן הנפשי מול אידיאל יופי לא מציאותי",
        "פיתוח חשיבה ביקורתית כלפי המסרים הסמויים ברשתות החברתיות"
      ]
    },
    {
      title: "על אש קטנה: על מערכות-היחסים הנרקמות בין אוכל, זיכרון ורגש",
      subtitle: "",
      audience: "הקהל הרחב, אנשי ונשות טיפול",
      description: "מערכת-היחסים עם אוכל ועם גוף עלולה להפוך למאבק מתמיד. הרצאה זו צוללת אל הקשר המשולש שבין רגש, אוכל וגוף, ומציעה לראות בו הזדמנות לחיים מלאים והרמוניים. במקום להילחם באכילה הרגשית, ההרצאה מזמינה להכיר בה כמענה לצורך עמוק, ולגלות את הסיפורים והרגשות החבויים מאחורי דפוסי האכילה, מתוך התבוננות עדינה ונטולת שיפוטיות.",
      topics: [
        "הבנת המניעים הרגשיים העומדים בבסיס דפוסי אכילה",
        "לימוד הקשבה לצרכים העמוקים שהבחירות באוכל מייצגות",
        "התייחסות ופענוח המושג \"אכילה רגשית\"",
        "הפניית המבט ממאבק להתבוננות, קבלה וחמלה"
      ],
      special: "מומלצת במיוחד מתכונת של סדנה בקבוצה אינטימית הכוללת 5 מפגשים חווייתיים ומעצימים"
    },
    {
      title: "בראי היחסים: על הקשר שבין יחסים ראשוניים והתהוות העצמי",
      subtitle: "",
      audience: "אנשי ונשות טיפול, יועצות וצוותי חינוך לגיל הרך",
      description: "תחושת הערך והביטחון של ילדים נבנית דרך מערכות-היחסים המשמעותיות ביותר בחייהם. האופן בו אנו כהורים ואנשי חינוך רואים אותם, מקשיבים להם, ומגיבים לצרכיהם, יוצר את ההשתקפות הראשונה בה הם לומדים להכיר את עצמם. הרצאה זו מפנה מבט אל תוך תהליך ההתהוות של העצמי ונוגעת בתיאוריית \"פסיכולוגיית העצמי\" של היינץ קוהוט.",
      topics: [
        "התייחסות לשלושה צרכים נפשיים מרכזיים בבניית העצמי המתפתח: שיקוף (Mirroring), האדרה (Idealizing), תאומות (Twinship)",
        "ההרצאה מציעה מסגרת יישומית עבור אנשי ונשות מקצוע, המאפשרת לזקק ולדייק את הגישה הטיפולית והחינוכית",
        "פיתוח כלים מעשיים לטיפוח עצמי בריא, חיוני וחסין בקרב ילדים ומטופלים"
      ]
    },
    {
      title: "בשוליי הטקסט-גוף: סדרת מפגשים המזמינה למבט חדש על השיח החברתי ודימוי הגוף הנשי",
      subtitle: "",
      audience: "הקהל הרחב, נשים, יועצות חינוכיות, צוותי חינוך וטיפול",
      description: "סדרת מפגשים לנשים הבוחנת את חוסר שביעות הרצון מהמראה החיצוני כתופעה חברתית רחבה - \"מיתוס היופי\". הסדנה מנתחת כיצד מנגנון כלכלי ותרבותי זה דוחף נשים למרדף אחר שלמות, ונוגעת במתח שבין הרצון לאותנטיות לבין הפחד להישאר בחוץ. הסדנה מציעה גישה של גמישות, חמלה ובחירה מודעת, ומטרתה להשיב את תחושת השליטה לידי המשתתפות, ולאפשר להן לבחור מתי וכיצד להשתתף בכללי המשחק החברתיים.",
      topics: [
        "ניתוח \"מיתוס היופי\" והשפעתו על חיינו",
        "חקירת המתח בין אותנטיות לצורך בשייכות",
        "פיתוח כלים לחמלה עצמית ובחירה מודעת"
      ],
      special: "סדרה של שני מפגשים, המשלבים ניתוח תיאורטי, דוגמאות ושיח פתוח"
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif mb-4">הרצאות וסדנאות</h1>
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/4cefc7785_.jpg"
            alt="מעוף ציפורים"
            className="w-full max-w-md mx-auto rounded-lg mb-8"
          />
          <p className="text-xl text-light max-w-4xl mx-auto leading-relaxed mb-8">
            אני מציעה הרצאות וסדנאות המיועדות לצוותי חינוך וטיפול, הורים, מתבגרים והקהל הרחב. המפגשים בוחנים את הקשר המורכב בין חוויות אישיות, התפתחות רגשית, תפיסת העצמי וביטוייהם בגוף, תוך שילוב ידע תיאורטי וכלים מעשיים.
          </p>
          <p className="text-lg text-light max-w-3xl mx-auto mb-8">
            ההרצאות והסדנאות שופכות אור על האופן שבו חוויותינו מושפעות מהשיח החברתי ומהצורך האנושי בשייכות. ניתן לבחור באחד מהנושאים הבאים או להתאים תוכן ייעודי עבורכם.
          </p>
          <div className="bg-light-gray p-6 rounded-lg text-center">
            <h3 className="text-xl font-serif mb-4">פורמטים זמינים</h3>
            <p className="text-light">
              <strong>הרצאה:</strong> מפגש חד-פעמי, או סדרת מפגשים מובנית<br/>
              <strong>סדנה:</strong> תהליך חווייתי ומעמיק הכולל 4 עד 6 מפגשים
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {lectures.map((lecture, index) => (
            <LectureCard key={index} lecture={lecture} />
          ))}
        </div>

        <div className="text-center bg-light-gray p-10 rounded-lg">
            <h2 className="text-3xl font-serif mb-4">מעוניינים בהרצאה או סדנה?</h2>
            <p className="text-lg text-light max-w-2xl mx-auto mb-6">
                כל אחד מן התכנים מותאם לקהל היעד. ניתן להתאים את התכנים לצרכים הייחודיים שלכם.
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