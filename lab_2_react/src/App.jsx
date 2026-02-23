import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;