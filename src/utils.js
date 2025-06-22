export function createPageUrl(pageName) {
  const pageMap = {
    'Home': '/',
    'About': '/about',
    'IndividualTherapy': '/individual-therapy',
    'CouplesTherapy': '/couples-therapy',
    'FamilyTherapy': '/family-therapy',
    'Contact': '/contact'
  };
  
  return pageMap[pageName] || '/';
}