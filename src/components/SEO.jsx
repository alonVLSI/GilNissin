import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    // Page titles based on route
    const pageTitles = {
      '/': 'גיל ברדוגו נסים - פסיכותרפיה משלבת גוף-נפש',
      '/About': 'עליי - גיל ברדוגו נסים',
      '/IndividualTherapy': 'טיפול אישי - גיל ברדוגו נסים',
      '/ParentGuidance': 'טיפול מונחה הורים - גיל ברדוגו נסים',
      '/Clinic': 'הקליניקה - גיל ברדוגו נסים',
      '/lectures': 'הרצאות וסדנאות - גיל ברדוגו נסים',
      '/contact': 'צור קשר - גיל ברדוגו נסים'
    };

    const pageDescriptions = {
      '/': 'פסיכותרפיה המשלבת גוף-נפש רואה את האדם כישות שלמה בה הגוף והנפש מנהלים דיאלוג מתמיד ומשפיעים זה על זה. טיפול אישי, טיפול מונחה הורים והרצאות במזכרת בתיה.',
      '/About': 'גיל ברדוגו נסים - פסיכותרפיסטית בגישה פסיכודינמית, M.A בהתפתחות הילד והמשפחה. ניסיון רב בטיפול אישי, טיפול מונחה הורים ודימוי גוף.',
      '/IndividualTherapy': 'טיפול אישי בגישה פסיכודינמית. התמודדות עם דימוי עצמי, דיכאון, חרדה, מערכות יחסים והתנהגויות אכילה. קליניקה במזכרת בתיה.',
      '/ParentGuidance': 'טיפול מונחה הורים וטיפול דיאדי הורה-ילד. חיזוק הקשר המשפחתי והבנת עולם הילד. ליווי מקצועי עם M.A בהתפתחות הילד.',
      '/Clinic': 'קליניקה פרטית במזכרת בתיה. מרחב בטוח ומכיל לטיפול פסיכותרפי משלב גוף-נפש.',
      '/lectures': 'הרצאות וסדנאות על דימוי גוף, אכילה רגשית, יחסים ראשוניים והורות בעידן הדיגיטלי. מיועד להורים, צוותי חינוך ומתבגרים.',
      '/contact': 'יצירת קשר עם גיל ברדוגו נסים. קליניקה במזכרת בתיה. טלפון: 054-4276648'
    };

    // Update title
    const title = pageTitles[location.pathname] || 'גיל ברדוגו נסים';
    document.title = title;

    // Update or create meta description
    const description = pageDescriptions[location.pathname] || 'פסיכותרפיה המשלבת גוף-נפש רואה את האדם כישות שלמה בה הגוף והנפש מנהלים דיאלוג מתמיד ומשפיעים זה על זה.';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'פסיכותרפיה, טיפול אישי, טיפול מונחה הורים, דימוי גוף, דימוי עצמי, התנהגויות אכילה, גיל ברדוגו נסים, מזכרת בתיה, פסיכותרפיה פסיכודינמית, גוף נפש, טיפול דיאדי, הרצאות הורים';

    // Helper function to update or create meta tags
    const updateOrCreateMetaTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Open Graph tags for social media
    updateOrCreateMetaTag('og:title', 'גיל ברדוגו נסים');
    updateOrCreateMetaTag('og:description', 'פסיכותרפיה המשלבת גוף-נפש רואה את האדם כישות שלמה בה הגוף והנפש מנהלים דיאלוג מתמיד ומשפיעים זה על זה.');
    updateOrCreateMetaTag('og:type', 'website');
    updateOrCreateMetaTag('og:locale', 'he_IL');
    updateOrCreateMetaTag('og:site_name', 'גיל ברדוגו נסים');
    updateOrCreateMetaTag('og:image', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7413e4a01_WhatsAppImage2025-07-01at143149.jpeg');
    updateOrCreateMetaTag('og:image:width', '400');
    updateOrCreateMetaTag('og:image:height', '400');
    
    // Twitter Card tags
    const updateOrCreateMetaName = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateOrCreateMetaName('twitter:card', 'summary_large_image');
    updateOrCreateMetaName('twitter:title', 'גיל ברדוגו נסים');
    updateOrCreateMetaName('twitter:description', 'פסיכותרפיה המשלבת גוף-נפש רואה את האדם כישות שלמה בה הגוף והנפש מנהלים דיאלוג מתמיד ומשפיעים זה על זה.');
    updateOrCreateMetaName('twitter:image', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7413e4a01_WhatsAppImage2025-07-01at143149.jpeg');

    // Author meta tag
    updateOrCreateMetaName('author', 'גיל ברדוגו נסים');

    // Application name
    updateOrCreateMetaName('application-name', 'גיל ברדוגו נסים');
    updateOrCreateMetaName('apple-mobile-web-app-title', 'גיל ברדוגו נסים');

  }, [location.pathname]);

  return null;
}