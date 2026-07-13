import About, { type ProfileImage } from "./About/About";
import Career from "./Career/Career";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Links from "./Links/Links";
import Research from "./Research/Research";
import Wave from "./Wave/wave";

interface AppProps {
  profileImage: ProfileImage;
}

function App({ profileImage }: AppProps) {
  return (
    <ErrorBoundary>
      <Hero />
      <Wave bgColor="bg-gray-900" waveRGB="203,213,225" />
      <About profileImage={profileImage} />
      <Wave bgColor="bg-slate-300" waveRGB="17,24,39" />
      <Career />
      <Wave bgColor="bg-gray-900" waveRGB="203,213,225" />
      <Research />
      <Wave bgColor="bg-slate-300" waveRGB="17,24,39" />
      <Links />
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
