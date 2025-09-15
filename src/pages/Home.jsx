import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../components/utils';
import { Button } from '../components/ui/button';
import { Heart, Users, Brain, BookOpen, Sparkles } from 'lucide-react';

const ServiceCard = 
({ icon: Icon, title, description, link }) => 
( <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift transform transition-all duration-300 hover:scale-105 hover:shadow-xl"> 
<div className="text-center"> 
<div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gray-50"> 
<Icon className="w-8 h-8 text-primary" /> 
</div> <h3 className="text-2xl font-bold font-serif mb-4 text-gray-900">{title}</h3> 
<p className="text-gray-600 mb-6 leading-relaxed">{description}</p> <Link to={link}> 
<Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-2 rounded-full"> למידע נוסף </Button> 
</Link> 
</div> 
</div> 
);

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* Hero Section with Quote */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100 opacity-30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-gray-900">
                  גיל בֶּרדוגו נסים
                </h1>
                <h2 className="text-2xl md:text-3xl text-primary font-bold">
                  פסיכותרפיה משלבת גוף נפש
                </h2>

                {/* Quote with creative styling */}
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border-r-8 border-secondary">
                  <p className="font-serif text-xl italic text-gray-700 leading-relaxed mb-4">
                    "כשהמילה תהפוך לגוף<br/>
                    והגוף יפתח את פיו<br/>
                    ויאמר את המילה שממנה<br/>
                    נוצר<br/>
                    אחבק את הגוף הזה<br/>
                    ואלין אותו לצדי."
                  </p>
                  <p className="text-sm text-gray-500 font-semibold">
                    חזי לסקלי, "שיעור עברית הֵא"
                  </p>
                </div>

              </div>
            </div>
            {/* צד ימין – תמונה */}
            <div className="relative">
              <div className="absolute -inset-12 bg-gradient-to-r from-primary via-secondary to-purple rounded-3xl blur-lg opacity-30"></div>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/234770a02_.jpg"
                alt="מעין מים עם יד טובלת במים"
                className="relative rounded-3xl w-full hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Text Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
<p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
  <span className="font-bold text-2xl text-primary">
    פסיכותרפיה המשלבת גוף-נפש
  </span>{" "}
  רואה את האדם כישות שלמה בה הגוף והנפש מנהלים דיאלוג מתמיד ומשפיעים זה על זה.
  מתוך תפיסה זו צמחה דרכי המקצועית והאישית.
</p>
          <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
            כפסיכותרפיסטית בגישה פסיכודינמית, אני מאמינה שהגוף מבטא את הנפש
            בשפתו הייחודית, והנפש, בתורה, פוגשת את הגוף ומתקשרת דרכו. אני מקדישה
            קשב רב לשיח פנימי זה, מתוך הבנה שהגוף אינו כלי קיבול פסיבי, אלא שותף
            פעיל הנושא זיכרונות, חוויות ותחושות.
          </p>
              <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                הקשבה מעמיקה זו מאפשרת לכל חלקי העצמי לקבל מקום והכרה, תוך טיפוח
                חמלה ורגישות. דרכי הטיפולית נשענת על ידע וניסיון רב-תחומי, מהם אני
                שואבת כלים להתבוננות בביטויים המורכבים של הדיאלוג בין עולמנו
                הפנימי לגופנו.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                הגישה הפסיכודינמית מהווה עבורי עוגן, המאפשר לחבר את כלל הרכיבים
                ולחקור בעדינות את המשמעויות העמוקות, ולעיתים הלא-מודעות, הטמונות
                בסיפורים שהגוף מספר.
			</p>

          {showMore && (
            <>

              <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                האם קרה לכם פעם שהרגשתם את הגוף מנסה לספר לכם משהו? האם חשתם שהכתפיים
                תפוסות, עייפות לא מוסברת, או מערכת יחסים מורכבת עם אוכל?
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                הגוף שלנו מדבר אותנו. הוא נושא את סיפור חיינו, ובדרכו הייחודית,
                הלא-מילולית, הוא מבטא את מה שלפעמים קשה להגיד במילים. מתח נפשי מתמשך
                יכול להתבטא בכיווץ שרירים, חוויות עבר עלולות להדהד בכאבים פיזיים,
                ורגשות שלא קיבלו מקום עשויים להתגלם בהפרעות שינה או בתשישות.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                באופן דומה, מערכת-היחסים שלנו עם אוכל ועם הגוף שלנו משמשת לעיתים קרובות
                מראה של קונפליקטים פנימיים עמוקים יותר.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                אני מאמינה שהמסרים האלה מן הגוף אינם סימפטומים שיש "לתקן", או להעלים,
                אלא הם הזמנה להקשבה לעצמנו.
              </p>

              {/* יצירת קשר */}
              <div className="mt-8">
                <Link to={createPageUrl("contact")}>
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-full">
                    יצירת קשר
                  </Button>
                </Link>
              </div>
            </>
          )}

          {!showMore && (
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-full"
              onClick={() => setShowMore(true)}
            >
              קראו עוד
            </Button>
          )}
        </div>
      </section>
      {/* Services Overview with Clean Cards */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
              תחומי הטיפול שלי
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              דרכי הטיפולית נשענת על ידע וניסיון רב-תחומי, מהם אני שואבת כלים להתבוננות בביטויים המורכבים של הדיאלוג בין עולמנו הפנימי לגופנו.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Heart}
              title="טיפול אישי"
              description="מפגש אישי להתמודדות עם פערים בין העולם הפנימי והחיצוני, דימוי עצמי וגוף והתנהגויות אכילה."
              link={createPageUrl("individual-therapy")}
            />
            <ServiceCard
              icon={Users}
              title="טיפול מונחה הורים וטיפול דיאדי"
              description="ליווי הורים בהבנת עולם ילדיהם וחיזוק הקשר המשפחתי דרך משחק ויצירה."
              link={createPageUrl("parent-guidance")}
            />
            <ServiceCard
              icon={Brain}
              title="קליניקה שהיא מרחב"
              description="מרחב בטוח בו ניתן להניח את המגננות, הציפיות והרעש שמציף, ופשוט להיות."
              link={createPageUrl("clinic")}
            />
            <ServiceCard
              icon={BookOpen}
              title="הרצאות וסדנאות"
              description="מפגשים לצוותי חינוך וטיפול, הורים, מתבגרים והקהל הרחב על הקשר בין גוף לנפש."
              link={createPageUrl("lectures")}
            />
          </div>
        </div>
      </section>
    </>
  );
}
