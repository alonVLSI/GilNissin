import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '../components/ui/button';
import { Heart, Users, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import WhatsappIcon from '../components/WhatsappIcon';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-orange-50 py-12 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  גיל ברדוגו נסים
                </h1>
                <p className="text-2xl text-orange-600 font-medium">
                  פסיכותרפיה המשלבת גוף ונפש
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  אני מזמינה אותך למסע ריפוי והתפתחות אישית, בו נשלב שיחה עם הקשבה עמוקה לגוף. יחד, ניצור מרחב בטוח לחיבור מחודש לעצמך, לחיזוק החוסן הנפשי ולצמיחה.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/972521234567" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3 w-full sm:w-auto">
                    <WhatsappIcon className="w-5 h-5 ml-2" />
                    לשליחת הודעה
                  </Button>
                </a>
                <Link to={createPageUrl("About")}>
                  <Button size="lg" variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50 text-lg px-8 py-3 w-full sm:w-auto">
                    קראו עליי עוד
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-orange-400 to-purple-500 rounded-3xl blur opacity-25"></div>
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="אישה בתנוחת יוגה המייצגת שילוב גוף ונפש"
                  className="relative rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">תחומי הטיפול שלי</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אני מציעה מרחב טיפולי למגוון אתגרים והתמודדויות, תוך התאמת הגישה הנכונה ביותר עבורכם.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Heart} 
              title="טיפול אישי" 
              description="מפגש אחד על אחד להתמודדות עם אתגרים אישיים, חרדה, דיכאון וצמיחה אישית."
              link={createPageUrl("IndividualTherapy")}
            />
             <ServiceCard 
              icon={Users} 
              title="טיפול זוגי" 
              description="שיפור התקשורת, פתרון קונפליקטים וחיזוק הקשר והאינטימיות במערכת היחסים."
              link={createPageUrl("CouplesTherapy")}
            />
             <ServiceCard 
              icon={Brain} 
              title="טיפול משפחתי" 
              description="עבודה מערכתית עם כל בני המשפחה לשיפור היחסים והתמודדות עם אתגרים משותפים."
              link={createPageUrl("FamilyTherapy")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const ServiceCard = ({ icon: Icon, title, description, link }) => (
  <Card className="text-center border-stone-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-teal-200">
    <CardHeader>
      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal-100 to-orange-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-teal-600" />
      </div>
      <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link to={link}>
        <Button variant="link" className="text-teal-600 font-semibold hover:text-teal-700">
          למידע נוסף
        </Button>
      </Link>
    </CardContent>
  </Card>
);
