import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesTicker from '@/components/ServicesTicker';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import LeadForm from '@/components/LeadForm';
import VendorPartner from '@/components/VendorPartner';
import Insights from '@/components/Insights';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ServicesTicker />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <About />
      <LeadForm />
      <VendorPartner />
      <Insights />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
