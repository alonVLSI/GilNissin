export function createPageUrl(pageName) {
  const pageMap = {
    Home: '/',
    About: '/about',
    IndividualTherapy: '/individual-therapy',
    ParentGuidance: '/parent-guidance',
    BodyMindTherapy: '/body-mind-therapy',
    Clinic: '/clinic',
    Lectures: '/lectures',
    Contact: '/contact'
  };
  return pageMap[pageName] || '/';
}
