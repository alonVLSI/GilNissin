import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Users, BookOpen, Heart, Brain, Clock, Target } from 'lucide-react';
import WhatsappIcon from '../components/WhatsappIcon';

export default function Lectures() {
  const lectures = [
    {
      title: "דימוי גוף וביטחון עצמי בעידן הדיגיטלי - מבעד לעדשה",
      subtitle: "הרצאה להורים לבני ובנות נוער",
      audience: "הורים לבני ובנות נוער",
      description: "בעולם שבו המסכים הם המראה החדשה והרשתות החברתיות מציבות סטנדרט של שלמות, בני ובנות נוער מתמודדים עם אתגרים מורכבים בכל הנוגע לדימוי הגוף והערך העצמי שלהם.",
      topics: [
        "כיצד השפה יכולה לבנות ביטחון או לערער אותו",
        "כלים פרקטיים לחיזוק החוסן הנפשי והביטחון העצמי",
        "פיתוח חשיבה ביקורתית כלפי רשתות חברתיות",
        "שיפור השיח המשפחתי וטיפוח דימוי עצמי חיובי"
      ],
      icon: Users
    },
    {
      title: "לא על הרעב לבדו: על הקשר בין רגש, אוכל וגוף",
      subtitle: "הבנת האכילה הרגשית",
      audience: "קהל רחב ואנשי מקצוע בתחום הטיפול",
      description: "במציאות דינמית וגדושת רגשות, האוכל הופך לעיתים קרובות למקור של נחמה, אך במקביל גם לזירה של קונפליקטים פנימיים. מערכת היחסים עם האוכל ועם הגוף עלולה להפוך למורכבת, למאבק מתמיד בין צרכים רגשיים לגיטימיים לבין נורמות חברתיות.",
      topics: [
        "הקשר העמוק והמשולש שבין רגש, אוכל וגוף",
        "הכרה באכילה הרגשית כמענה לצורך עמוק",
        "התבוננות עדינה ונטולת שיפוטיות",
        "גילוי הסיפורים והצרכים מאחורי דפוסי האכילה"
      ],
      icon: Heart
    },
    {
      title: "מארג הקשר: עיצוב ההתפתחות הרגשית בגיל הרך",
      subtitle: "תיאוריית ההתקשרות ומעשיות יומיומית",
      audience: "צוותי חינוך, גננות, מטפלות ומשפחות",
      description: "מערכת היחסים הראשונית בין ילדים לדמויות המטפלות המרכזיות בחייהם מהווה את אבן הפינה להתפתחותם הרגשית. כל אינטראקציה, בין אם שגרתית ובין אם מכוננת, תורמת לעיצוב תחושת הביטחון, הערך העצמי והחוסן הנפשי.",
      topics: [
        "בחינת דפוסים בין-דוריים והשפעתם על עיצוב הקשר",
        "העמקת ההבנה במניעים הרגשיים של התנהגויות ילדים",
        "ניתוח אינטראקציות יומיומיות ככלי לביסוס מערכת יחסים תומכת",
        "כלים לטיפוח סביבה המאפשרת צמיחה ומימוש פוטנציאל"
      ],
      icon: Brain
    },
    {
      title: "שקר החן והבל היופי: מפגשים על דימוי גוף, בחירה וחמלה עצמית",
      subtitle: "סדרת הרצאות למבוגרות",
      audience: "נשים מבוגרות",
      description: "סדרת הרצאות הבוחנת את התחושה המתמדת של חוסר שביעות רצון מהמראה החיצוני, חוויה המוכרת לנשים רבות. היא מתחילה במבט חטוף במראה שהופך לביקורת נוקבת, וממשיכה בהשוואה בלתי פוסקת לאידיאלים של יופי.",
      topics: [
        "ניתוח 'מיתוס היופי' כמנגנון כלכלי ותרבותי",
        "המתח בין הרצון למרוד לבין הפחד להישאר מחוץ למעגל החברתי",
        "גישה של גמישות, חמלה ובחירה מודעת",
        "השבת תחושת הסובייקטיביות והשליטה"
      ],
      icon: Target,
      special: "סדרה של 2 מפגשים, כל מפגש 2 שעות אקדמיות"
    }
  ];

  return (
    <div className="py-20 px-6 bg-stone-100/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">הרצאות וסדנאות</h1>
          <p className="text-xl text-orange-600 mb-6">לצוותי חינוך וטיפול, להורים, למתבגרים ולקהל הרחב</p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            הרצאות וסדנאות הבוחנות את השזירה העדינה בין חוויות אישיות, התפתחות רגשית, תפיסת העצמי וביטוייהם בגוף. המפגשים משלבים ידע תיאורטי וכלים מעשיים.
          </p>
        </div>

        <div className="grid gap-8 mb-16">
          {lectures.map((lecture, index) => (
            <Card key={index} className="bg-white shadow-lg border-stone-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-teal-100 to-orange-100 rounded-full p-3">
                    <lecture.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {lecture.title}
                    </CardTitle>
                    <p className="text-lg text-orange-600 font-medium mb-2">
                      {lecture.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 bg-gray-100 inline-block px-3 py-1 rounded-full">
                      קהל יעד: {lecture.audience}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {lecture.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">נושאי ההרצאה המרכזיים:</h4>
                  <ul className="space-y-2">
                    {lecture.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {lecture.special && (
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-orange-800 font-medium">{lecture.special}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-orange-50 p-8 rounded-2xl mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">מתכונות הפעילות</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-teal-600" />
                <h3 className="text-xl font-bold text-gray-900">הרצאות</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                ניתן לקיים כמפגש חד-פעמי או כסדרת מפגשים מובנית. המפגשים משלבים ידע מקצועי, דוגמאות אקטואליות וקטעי מדיה, ומעודדים שיח פתוח והעלאת שאלות.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">סדנאות</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                סדרה של 4 עד 6 מפגשים המאפשרת תהליך מעמיק וחווייתי. הסדנאות כוללות תרגילים מעשיים, דיונים קבוצתיים ותהליכי התבוננות אישיים.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">התאמה אישית</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            ניתן להתאים את התכנים לצרכים הייחודיים שלכם, לקבוצות שונות ולקיים את הפעילות במגוון מתכונות. התכנים מתאימים גם ליועצות חינוכיות, לצוותי חינוך והדרכה, ועוברים התאמה ייעודית עבורם.
          </p>
          <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg">
              <WhatsappIcon className="w-5 h-5 ml-2" />
              לקביעת הרצאה או סדנה
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}