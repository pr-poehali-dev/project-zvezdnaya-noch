import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LetterSection from "@/components/LetterSection";
import ContractSection from "@/components/ContractSection";
import ConsentSection from "@/components/ConsentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LetterSection />
      <ContractSection />
      <ConsentSection />
      <Footer />
    </main>
  );
};

export default Index;
