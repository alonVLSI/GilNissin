import React from 'react';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif mb-4">טיפול אישי</h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center mb-12">
          <div className="lg:col-span-3 space-y-6 text-lg text-light leading-relaxed">
            <p>
              הפנייה לטיפול אישי מגיעה לעיתים קרובות מתחושת פער בין החוויה הפנימית לבין היכולת לבטא אותה. היא נובעת גם מבדידות, או מקושי לחלוק את מה שעל הלב. המחשבה על חשיפה בפני אדם זר יכולה להיות מאתגרת, וזה טבעי לחלוטין. תחילת הדרך לא תמיד פשוטה, אך היא צעד משמעותי של קירבה לעצמך.
            </p>
            <p>
              אני לא יכולה להבטיח כי יהיה קל, אך אני מבטיחה מרחב בטוח ולא שיפוטי, בו נוכל להתבונן כיצד תהליכים רגשיים באים לידי ביטוי בחיי היום-יום, במערכות-היחסים, בדימוי העצמי ובתפיסת הגוף.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/cecc328e1_.jpg"
              alt="יונק הדבש"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        <div className="bg-light-gray p-10 rounded-lg mb-12">
          <h3 className="text-2xl font-serif text-center mb-8">תחומי הטיפול:</h3>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {topics.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal mt-1 ml-3 flex-shrink-0" />
                <span className="text-light text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-lg text-light leading-relaxed space-y-6 text-center">
            <p className="text-xl font-serif">
              הטיפול מתקיים במתכונת של מפגש שבועי בן 50 דקות.
            </p>
            <p>
              משך התהליך מותאם אישית, ונע בין טיפול ממוקד וקצר-מועד לבין תהליך דינמי ארוך-טווח.
            </p>
            <p>
              אם הגישה הזו מדברת אליך, אני מזמינה אותך ליצור קשר. נוכל לתאם שיחת היכרות, ולבדוק יחד אם נכון לך להתחיל תהליך משותף.
            </p>
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
    </div>
  );
}