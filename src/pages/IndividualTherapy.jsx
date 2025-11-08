
import React from 'react';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../components/utils';
import WhatsappIcon from '../components/WhatsappIcon';

export default function IndividualTherapy() {
  const topics = [
    "התמודדות עם פערים בין העולם הפנימי והחיצוני",
    "קשיים במערכות יחסים, תחושות בדידות וריחוק חברתי",
    "התמודדות עם משברים, דיכאון וחרדה",
    "דימוי עצמי, דימוי גוף והתנהגויות אכילה",
    "גיבוש תחושת משמעות ונוכחות בחיים"
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-right mb-16">
          <h1 className="text-5xl font-bold mb-4">טיפול אישי</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-2">
  <div className="bg-pink-50 flex flex-col justify-between h-full pt-1 pb-3 px-8">
    <div className="space-y-10 text-lg text-gray-700 leading-relaxed text-justify flex-1 flex flex-col justify-between">
      <p>
                הפנייה לטיפול אישי מגיעה לעיתים קרובות מתחושת פער בין החוויה הפנימית לבין היכולת לבטא אותה.
                היא נובעת גם מבדידות, או מקושי לחלוק את מה שעל הלב. 
              </p>
              <p>
                המחשבה על חשיפה בפני אדם זר יכולה להיות מאתגרת, וזה טבעי לחלוטין. תחילת הדרך לא תמיד פשוטה, אך היא צעד משמעותי של קירבה לעצמך.
              </p>
              <p>
                אני לא יכולה להבטיח כי יהיה קל, אך אני מבטיחה מרחב בטוח ולא שיפוטי, בו נוכל להתבונן כיצד
                תהליכים רגשיים באים לידי ביטוי בחיי היום-יום, במערכות-היחסים, בדימוי העצמי ובתפיסת הגוף.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/bf79c3289_.jpg"
              alt="ציפור עם פרחים סגולים"
              className="w-full h-full object-cover shadow-md"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-10 mb-12 text-right">
          <h3 className="text-3xl mb-8">תחומי הטיפול:</h3>
          <ul className="space-y-4 max-w-2xl">
            {topics.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-secondary mt-1 ml-3 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-lg text-gray-700 leading-relaxed space-y-6 text-center">
            <p className="text-xl text-justify">
              הטיפול מתקיים במתכונת של מפגש שבועי בן 50 דקות.
            </p>
            <p className="text-justify">
              משך התהליך מותאם אישית, ונע בין טיפול ממוקד וקצר-מועד לבין תהליך דינמי ארוך-טווח.
            </p>
            <p className="text-justify">
              אם הגישה הזו מדברת אליך, אני מזמינה אותך ליצור קשר. נוכל לתאם שיחת היכרות, ולבדוק יחד אם נכון לך להתחיל תהליך משותף.
            </p>
        <div className="text-center mt-16">
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
    </div>
  );
}
