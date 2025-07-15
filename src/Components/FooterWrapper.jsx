// FooterWrapper.jsx
import { useLocation } from 'react-router-dom';
import { Footer } from '../Components/Footer';
export const FooterWrapper = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null; // Hide App.jsx footer on home page
  }

  return <Footer />;
};
