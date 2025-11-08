
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import WhatsappIcon from "../components/WhatsappIcon";
import { ChevronDown } from "lucide-react";

// רכיב כרטיסיה אחת
const LectureCard = ({ lecture, isOpen, onClick }) => (
  <div className="border border-gray-200">
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-6 flex justify-between items-center hover:bg-gray-50 transition"
    >
      <h3 className="text-xl font-semibold text-right flex-1 mr-4">
        {lecture.title}
      </h3>
      <ChevronDown
        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </div>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="p-2 bg-gray-50 border-t border-gray-200">
            {/* Grid for description and image */}
            <div className={`grid ${lecture.image ? 'lg:grid-cols-2' : ''} gap-8 items-stretch mb-8`}>
              {/* Text Card - Only Description */}
              <div className="flex flex-col justify-start bg-white p-2 text-right h-full">
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line text-justify">{lecture.description}</p>
              </div>

              {/* Image */}
              {lecture.image && (
                <div className="flex items-stretch">
                  <img
                    src={lecture.image}
                    alt={lecture.title}
                    className={`w-full shadow-md ${
                      lecture.title.includes("בשוליי הטקסט-גוף") 
                        ? "max-h-[400px] object-cover" 
                        : "h-full object-cover"
                    }`}
                  />
                </div>
              )}
            </div>

            {/* Topics and Audience - Below the grid */}
            <div className="space-y-4 text-right max-w-3xl">
              <div>
                <h4 className="text-xl font-semibold mb-3">מה בהרצאה?</h4>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 text-justify">
                  {lecture.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
              <p className="text-lg text-gray-600 pt-2 text-justify">
                <strong className="text-gray-800">קהל יעד:</strong> {lecture.audience}
              </p>
            </div>

            {/* Contact button below everything */}
            <div className="text-center pt-8">
              <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium px-8 py-3">
                  <WhatsappIcon className="w-4 h-4 mr-2" />
                  לתיאום
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function LecturesPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const lectures = [
    {
      title: "מבעד למצלמה: על דימוי גוף וביטחון עצמי בעידן הדיגיטלי",
      description:
  "בעידן בו הרשתות החברתיות מציבות סטנדרט של שלמות, בני נוער מתמודדים עם אתגרים מורכבים בכל הנוגע לדימוי הגוף והערך העצמי. הרצאה זו מזמינה הורים ונוער להתבונן פנימה אל עולם הרגשות והמחשבות, ולהבין את ההשפעות הסביבתיות המעצבות אותנו.\nההרצאה חושפת את הקשר העמוק בין דימוי גוף לחוסן נפשי, מערכות יחסים בריאות והגשמה אישית.",
      audience: "הורים, בני ובנות נוער, יועצות וצוותי חינוך",
      topics: [
        "הבנה מעמיקה של האופן שבו השפה מעצבת ביטחון עצמי",
        "הקניית כלים מעשיים לחיזוק החוסן הנפשי מול אידיאל יופי לא מציאותי",
        "פיתוח חשיבה ביקורתית כלפי המסרים הסמויים ברשתות החברתיות"
      ],
      image:
         "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/8e3cafb5e_.jpg"
    },
    {
      title: "על אש קטנה: על מערכות-היחסים הנרקמות בין אוכל, זיכרון ורגש",
      description:
        "האוכל הוא הרבה יותר מאשר הזנה לגוף. הוא נושא זיכרונות, רגשות ומשמעויות עמוקות. הרצאה זו בוחנת את הקשרים המורכבים שנרקמים בין אוכל לבין עולמנו הרגשי, ואת האופן שבו זיכרונות מילדות ומערכות יחסים משפיעים על הרגלי האכילה שלנו.",
      audience: "הורים, צוותי חינוך וטיפול, מתבגרים והקהל הרחב",
      topics: [
        "הקשר בין זיכרונות ילדות לתפיסת האוכל",
        "איך רגשות משפיעים על הרגלי אכילה",
        "זיהוי דפוסי אכילה רגשית וטיפול בהם",
        "יצירת יחס בריא ומכבד לגוף ולאוכל"
      ],
      image:
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/4270037bc_.jpg"
    },
    {
      title: "בראי היחסים: על הקשר שבין יחסים ראשוניים והתהוות העצמי",
      description:
        "היחסים הראשונים שאנו יוצרים בחיינו מעצבים את האופן שבו אנו רואים את עצמנו ואת העולם. הרצאה זו בוחנת את ההשפעה העמוקה של קשרי הילדות על התפתחות העצמי, ומציעה הבנה מעמיקה של האופן שבו ניתן לטפח קשרים בריאים ותומכים לאורך החיים.",
      audience: "הורים, צוותי חינוך וטיפול, והקהל הרחב",
      topics: [
        "הבנת הקשר בין יחסי הורה-ילד להתפתחות העצמי",
        "זיהוי דפוסי יחסים שחוזרים על עצמם ושינוי שלהם",
        "בניית ביטחון עצמי ויכולת לקשר בריא",
        "כלים לחיזוק הקשר ההורי והמשפחתי"
      ],
          image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/2263c57fe_.jpg",
    },
    {
      title: "בשוליי הטקסט-גוף: מבט חדש על השיח החברתי ודימוי הגוף הנשי",
      description:
        "השיח החברתי על הגוף הנשי משפיע באופן עמוק על האופן שבו נשים תופסות את עצמן. הרצאה זו בוחנת את המסרים התרבותיים והחברתיים שמעצבים את דימוי הגוף הנשי, ומציעה כלים לפיתוח מבט ביקורתי ובריא יותר על הגוף והעצמי.",
      audience: "נשים, צוותי חינוך וטיפול, והקהל הרחב",
      topics: [
        "ניתוח השפעות המדיה והשיח החברתי על דימוי הגוף",
        "זיהוי וערעור על סטריאוטיפים גופניים",
        "בניית ביקורת פמיניסטית על תפיסות יופי",
        "טיפוח אהבה עצמית וקבלה של הגוף הנשי"
      ],
          image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/6116a2385_.jpg",

    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-right mb-16">
          <h1 className="text-5xl font-bold mb-4">הרצאות וסדנאות</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-12">
          <div className="bg-yellow-50 flex flex-col justify-between h-full pt-1 pb-3 px-8">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed text-justify flex-1 flex flex-col justify-between">
              <p>
                אני מציעה הרצאות וסדנאות המיועדות לצוותי חינוך וטיפול, הורים, מתבגרים והקהל הרחב. המפגשים בוחנים את הקשר המורכב בין חוויות אישיות, התפתחות רגשית, תפיסת העצמי וביטוייהם בגוף, תוך שילוב ידע תיאורטי וכלים מעשיים.
              </p>
              <p>
                ניתן לבחור באחד מהנושאים הבאים או להתאים תוכן ייעודי עבורכם. לחיצה על כל נושא תציג הסבר מפורט.
              </p>
            </div>
          </div>
          
          <div>
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/820d611fe_.jpg"
              alt="ציפורים בשמיים"
              className="w-full h-full object-cover shadow-md"
            />
          </div>
        </div>

        {/* רשימת כרטיסיות */}
        <div className="space-y-4 max-w-4xl mx-auto mb-16 ">
          {lectures.map((lecture, index) => (
            <LectureCard
              key={index}
              lecture={lecture}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
