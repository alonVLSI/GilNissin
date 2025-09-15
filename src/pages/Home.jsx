import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../components/utils';
import { Button } from '../components/ui/button';
import { Heart, Users, Brain, BookOpen, Sparkles } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, link }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="text-center">
      <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gray-50">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-2xl font-bold font-serif mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <Link to={link}>
        <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-2 rounded-full">
          למידע נוסף
        </Button>
      </Link>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      {/* Hero Section with Quote */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100 opacity-30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  פסיכותרפיה חדשנית
                </div>
                <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-gray-900">
                  גיל בֶּרדוגו נסים
                </h1>
                <h2 className="text-2xl md:text-3xl text-primary font-bold">
                  פסיכותרפיה משלבת גוף נפש
                </h2>
                
                {/* Quote with creative styling */}
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border-r-8 border-secondary">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple rounded-full"></div>
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

                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  פסיכותרפיה המשלבת גוף-נפש רואה את האדם כישות שלמה בה הגוף והנפש מנהלים דיאלוג מתמיד ומשפיעים זה על זה.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to={createPageUrl("contact")}>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-full text-lg hover-lift">
                    יצירת קשר
                  </Button>
                </Link>
                <Link to={createPageUrl("about")}>
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-full text-lg">
                    קראו עוד
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative">
                {/* Increased inset for visually "enlarging" the logo's background effect */}
                <div className="absolute -inset-12 bg-gradient-to-r from-primary via-secondary to-purple rounded-3xl blur-lg opacity-30"></div>
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/234770a02_.jpg"
                  alt="מעין מים עם יד טובלת במים"
                  // Removed shadow-2xl class from the image itself
                  className="relative rounded-3xl w-full hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Text with Creative Layout */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-8">
              הגוף שלנו מדבר אותנו
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-primary mb-4">השאלה הראשונה</h3>
              <p className="text-gray-700 leading-relaxed">
                האם קרה לכם פעם שהרגשתם את הגוף מנסה לספר לכם משהו? האם חשתם שהכתפיים תפוסות, עייפות לא מוסברת, או מערכת יחסים מורכבת עם אוכל?
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-secondary mb-4">הבנה עמוקה</h3>
              <p className="text-gray-700 leading-relaxed">
                הגוף שלנו נושא את סיפור חיינו, ובדרכו הייחודית, הלא-מילולית, הוא מבטא את מה שלפעמים קשה להגיד במילים.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple/10 to-purple/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-purple mb-4">הזמנה להקשבה</h3>
              <p className="text-gray-700 leading-relaxed">
                אני מאמינה שהמסרים האלה מן הגוף אינם סימפטומים שיש "לתקן", אלא הם הזמנה להקשבה לעצמנו.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview with Clean Cards */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">תחומי הטיפול שלי</h2>
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
