import { DrawerProvider } from "../components/DrawerContext";
import Hero from "../components/Hero";
import About from "./About";
import Faq from "./Faq";
import Footer from "./Footer";
import InstagramFollow from "./InstagramFollow";
import Pricing from "./Pricing";
import Projects from "./Projects";
import ScheduleSession from "./ScheduleSession";
import Services from "./Services";
import Stripe from "./Strip";
import Testimonials from "./Testimonials";
import WorkingProcess from "./WorkingProcess";

function App() {
  return (
    <DrawerProvider>
      <Hero />
      <Stripe/>
      <Services/>
      <About/>
      <WorkingProcess/>
       <Stripe/>
      <Projects/>
      <Pricing/>
      <Testimonials/>
      <ScheduleSession/>
      <Faq/>
       <Stripe/>
      <InstagramFollow/>
       <Stripe/>
      <Footer/>
    </DrawerProvider>
  );
}

export default App;
