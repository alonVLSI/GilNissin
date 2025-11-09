export function createPageUrl(pageName) {
  const pageMap = {
    Home: '/',
    About: '/About',
    IndividualTherapy: '/IndividualTherapy',
    ParentGuidance: '/ParentGuidance',
    Clinic: '/Clinic',
    Lectures: '/lectures',
    Contact: '/contact',
  };
  return pageMap[pageName] || '/';
}