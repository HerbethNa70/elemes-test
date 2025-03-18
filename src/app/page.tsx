import Header from "../components/header";
import Hero from "../components/hero";
import Category from "../components/category";
import Trending from "../components/trending";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      <Header />
      <main className="container mx-auto px-6">
        <Hero />
        <Category />
        <Trending />
      </main>
      <Footer />
    </div>
  );
}
