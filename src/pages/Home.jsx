
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../components/utils';
import { Button } from '../components/ui/button';
import WhatsappIcon from '../components/WhatsappIcon';
import LogoImage from "../images/Logo.png";


const ServiceCard = ({ title, description, link }) => (
  <div className="bg-white p-6 border border-gray-200 hover-lift transition-all duration-300">
    <div className="text-right">
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <img 
          src={LogoImage}
          alt="לוגו"
          className="w-16 h-16 object-cover rounded-full"
        />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <Link to={link}>
        <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 text-sm">
          למידע נוסף
        </Button>
      </Link>
    </div>
  </div>
);

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* Hero Section */}
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

      {/* Image and Poem Section - NOW AT TOP */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-12">
            {/* Poem - Right column */}
			<div className="text-right text-lg text-gray-700 leading-relaxed flex">
			<div className="bg-rose-50 p-6 border-r-4 border-primary w-full flex flex-col justify-center">
				<p className="text-lg italic text-gray-700 leading-relaxed mb-3 text-justify">
				"כשהמילה תהפוך לגוף<br />
				והגוף יפתח את פיו<br />
				ויאמר את המילה שממנה<br />
				נוצר<br />
				אחבק את הגוף הזה<br />
				ואלין אותו לצדי."
				</p>
				<p className="text-sm text-gray-500 font-medium text-left">
				חזי לסקלי, "שיעור עברית הֵא"
				</p>
			</div>
			</div>

            {/* Image - Left column */}
            <div className="flex">
              <img
                src= {LogoImage}
                alt="מעין מים עם יד טובלת במים"
                className="w-full shadow-md rounded-none h-auto lg:h-full lg:object-cover"
              />
            </div>
          </div>
            <div className="flex gap-4">
				<a href={createPageUrl("About")}>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3">
                  עוד עליי
                </Button>
              </a>
			  <br/>
            </div>
			 <div className="space-y-6">
                <p className="text-justify">
                  האם קרה לכם פעם שהרגשתם את הגוף מנסה לספר לכם משהו? האם חשתם שהכתפיים
                  תפוסות, עייפות לא מוסברת, או מערכת יחסים מורכבת עם אוכל?
                </p>
                <p className="text-justify">
                  הגוף שלנו מדבר אותנו. הוא נושא את סיפור חיינו, ובדרכו הייחודית,
                  הלא-מילולית, הוא מבטא את מה שלפעמים קשה להגיד במילים. מתח נפשי מתמשך
                  יכול להתבטא בכיווץ שרירים, חוויות עבר עלולות להדהד בכאבים פיזיים,
                  ורגשות שלא קיבלו מקום עשויים להתגלם בהפרעות שינה או בתשישות.
                </p>
                <p className="text-justify">
                  באופן דומה, מערכת-היחסים שלנו עם אוכל ועם הגוף שלנו משמשת לעיתים קרובות
                  מראה של קונפליקטים פנימיים עמוקים יותר.
                </p>
                <p className="text-justify">
                  אני מאמינה שהמסרים האלה מן הגוף אינם סימפטומים שיש "לתקן", או להעלים,
                  אלא הם הזמנה להקשבה לעצמנו.
                </p>
              </div>
          {/* Text Section - NOW AFTER IMAGE */}
          <div className="text-right space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-justify">
              כפסיכותרפיסטית בגישה פסיכודינמית, אני מאמינה שהגוף מבטא את הנפש
              בשפתו הייחודית, והנפש, בתורה, פוגשת את הגוף ומתקשרת דרכו.
            </p>
            <p className="text-justify">
              אני מקדישה קשב רב לשיח פנימי זה, מתוך הבנה שהגוף אינו כלי קיבול פסיבי, אלא שותף
              פעיל הנושא זיכרונות, חוויות ותחושות.
            </p>
            <p className="text-justify">
              הקשבה מעמיקה זו מאפשרת לכל חלקי העצמי לקבל מקום והכרה, תוך טיפוח
              חמלה ורגישות.
            </p>
            <p className="text-justify">
              דרכי הטיפולית נשענת על ידע וניסיון רב-תחומי, מהם אני
              שואבת כלים להתבוננות בביטויים המורכבים של הדיאלוג בין עולמנו
              הפנימי לגופנו.
            </p>
            <p className="text-justify">
              הגישה הפסיכודינמית מהווה עבורי עוגן, המאפשר לחבר את כלל הרכיבים
              ולחקור בעדינות את המשמעויות העמוקות, ולעיתים הלא-מודעות, הטמונות
              בסיפורים שהגוף מספר.
            </p>


          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-right mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              תחומי הטיפול שלי
            </h2>
			<h3 className="sr-only">תחומי טיפול: טיפול אישי, טיפול מונחה הורים, קליניקה פרטית, הרצאות</h3>


            <p className="text-lg text-gray-700 max-w-3xl leading-relaxed text-justify">
גישתי הטיפולית מבוססת על ידע וניסיון ממגוון עולמות תוכן, אשר מספקים לי את הכלים לבחון את הביטויים המורכבים של יחסי הגומלין בין הנפש והגוף.            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="טיפול אישי"
              description="מפגש אישי להתמודדות עם פערים בין העולם הפנימי והחיצוני, דימוי עצמי וגוף והתנהגויות אכילה."
              link={createPageUrl("IndividualTherapy")}
            />
            <ServiceCard
              title="טיפול מונחה הורים וטיפול דיאדי"
              description="ליווי הורים בהבנת עולם ילדיהם וחיזוק הקשר המשפחתי דרך משחק ויצירה."
              link={createPageUrl("ParentGuidance")}
            />
            <ServiceCard
              title="קליניקה שהיא מרחב"
              description="מרחב בטוח בו ניתן להניח את המגננות, הציפיות והרעש שמציף, ופשוט להיות."
              link={createPageUrl("Clinic")}
            />
            <ServiceCard
              title="הרצאות וסדנאות"
              description="מפגשים לצוותי חינוך וטיפול, הורים, מתבגרים והקהל הרחב על הקשר בין גוף לנפש."
              link={createPageUrl("Lectures")}
            />
          </div>
        </div>
		<br/>
	<div className="bg-sky-50 p-10 text-right mb-12">
           <p className="text-xl md:text-2xl leading-relaxed text-gray-800 max-w-3xl mb-8 text-justify">
            אם הדברים מהדהדים בך, אני מזמינה אותך לתהליך אישי של הקשבה לא שיפוטית, מכילה ותומכת, בו מתקיים מפגש עם עצמך המאפשר לחוות חיוניות, שלמות, ונוכחות נעימה ושקטה יותר בחיים ובתוך גופך.
          </p>
          <p className="text-lg text-gray-700 text-justify">
            אני מקבלת לטיפול פרטני בקליניקה שלי במזכרת בתיה, ובמקביל מטפלת בילדים, נוער והוריהם במרכז "נתיבים להורות ומשפחה".
          </p>
        </div>
        
		<div className="flex gap-4">
              <a href="https://wa.me/972544276648" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3">
                  <WhatsappIcon className="w-4 h-4 mr-2" />
                  יצירת קשר
                </Button>
              </a>
        </div>
      </section>
    </>
  );
}
