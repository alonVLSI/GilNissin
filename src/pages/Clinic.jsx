
import React from "react";
import { Button } from "../components/ui/button";
import WhatsappIcon from "../components/WhatsappIcon";

const Clinic = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      {/* כותרת */}
      <div className="text-right mb-16">
        <h1 className="text-5xl font-bold mb-4">
          קליניקה שהיא מרחב
        </h1>
      </div>

      {/* טקסט ותמונה זה לצד זה */}
      <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-12">
        {/* טקסט */}
        <div className="flex flex-col justify-center bg-rose-50 p-8 text-right">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
            <p className="text-xl">
              הקליניקה היא יותר מאשר חדר. היא מרחב בו ניתן להניח לרגע את המגננות,
              את הציפיות ואת הרעש שמציף, ופשוט להיות.
            </p>
            <p>
              אני מאמינה שתהליך טיפולי מתחיל ביצירת קשר בטוח, מכיל, ולא שיפוטי.
            </p>
            <p className="font-semibold text-gray-900">
              גמישות, הקשבה והתאמה אישית.
            </p>
            <p>
              <strong>מיקום:</strong> מזכרת בתיה
            </p>
          </div>
        </div>

        {/* תמונה */}
        <div className="flex items-stretch">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/0ba430967_.jpg"
            alt="קליניקה"
            className="w-full h-full object-cover shadow-md"
          />
        </div>
      </div>

      <div className="text-center">
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
  );
};

export default Clinic;
