import Automation from './components/Automation';
import ContactForm from './components/ContactForm';
import EvolvingSection from './components/EvolvingSection';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import ScrollSection from './components/ScrollSection';


function App() {

  return (
    <>
    <Navbar />
    <div className='automotive bg-black'>
      <Automation />
      {/* <EvolvingSection /> */}
      <ScrollSection />
      
    </div>
    {/* <Hero /> */}
    <ContactForm />
    <Footer />
    </>
  )
}

export default App
