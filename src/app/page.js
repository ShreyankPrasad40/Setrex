import styles from "./page.module.css";
import Particles from "../components/Particles";
import Partners from "../components/Partners";
import Supported from "../components/Supported";
import Integrations from "../components/Integrations";
import CreateWithEase from "../components/CreateWithEase";
import ProductShowcase from "../components/ProductShowcase";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Blog from "../components/Blog";
import FinalCTA from "../components/FinalCTA";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";





export default function Home() {
  return (
    <div className={styles.page}>
      
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={250}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Introducing Money management website
          </div>
          <h1>Turn your big idea into<br/>a stunning website</h1>
          <p>
            Fintech is its potential to promote financial inclusion. In many parts of the world,<br/>millions of people lack access to traditional banking services.
          </p>
          <div className={styles.actions}>
            <a href="#" className={styles.getStartedBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
              Get Started Now
            </a>
            <a href="#" className={styles.pricingBtn}>
              See Pricing
            </a>
          </div>
        </div>
      </main>
      <Partners />
      <FadeUp><Supported /></FadeUp>
      <FadeUp><CreateWithEase /></FadeUp>
      <ProductShowcase />
      <FadeUp><Integrations /></FadeUp>
      <FadeUp><Testimonials /></FadeUp>
      <FadeUp><Pricing /></FadeUp>
      <FadeUp><FAQ /></FadeUp>
      <FadeUp><Blog /></FadeUp>
      <FadeUp><FinalCTA /></FadeUp>
      <Footer />

    </div>
  );
}
