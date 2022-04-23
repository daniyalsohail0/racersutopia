import './App.css';
import Countdown from './components/Countdown';
import Faqs from './components/Faqs';
import Features from './components/Features';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import SecReady from './components/SecReady';
import SocialFooter from './components/SocialFooter';
import VideoSec from './components/VideoSec';
import Welcome from './components/Welcome';
import FeaturesNew from './components/Features/FeaturesNew';
import Crew from './components/Crew/Crew';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecReady />
      <Welcome />
      <Countdown />
      <FeaturesNew />
      <VideoSec />
      <Crew />
      <Partners />
      <SocialFooter />
      <Footer />
    </div>
  );
}

export default App;
