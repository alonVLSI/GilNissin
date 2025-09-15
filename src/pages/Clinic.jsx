import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function Clinic() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif mb-4">קליניקה שהיא מרחב</h1>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
           <div className="space-y-6 text-lg text-light leading-relaxed">
            <p className="text-xl font-serif">
              הקליניקה היא יותר מאשר חדר. היא מרחב בו ניתן להניח לרגע את המגננות, את הציפיות ואת הרעש שמציף, ופשוט להיות.
            </p>
            <p>
              אני מאמינה שתהליך טיפולי מתחיל ביצירת קשר בטוח, מכיל, ולא שיפוטי.
            </p>
            <p className="font-semibold">
              גמישות, הקשבה והתאמה אישית.
            </p>
            <p>
              <strong>מיקום:</strong> מזכרת בתיה
            </p>
          </div>
          
          <div>
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/685460385c43172cc453b6ea/b9f683f40_.jpg"
              alt="קליניקה"
              className="rounded-lg w-full"
            />
          </div>
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