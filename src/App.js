import './App.css';
import About from './components/About';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ImageSection from './components/ImageSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <ImageSection/>
      <About/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
