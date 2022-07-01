import styles from "./App.module.scss";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Feature from "./components/feature/Feature";
import Reviews from "./components/reviews/Reviews";
import CallToAction from "./components/callToAction/CallToAction";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className={styles.app}>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Feature />
        <Reviews />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
