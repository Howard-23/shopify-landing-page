import {
  Navbar,
  Hero,
  Features,
  Products,
  Pricing,
  Testimonials,
  FAQ,
  CTA,
  Footer,
} from "@/components/sections";
import { CartDrawer } from "@/components/cart/cart-drawer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <CartDrawer />
    </main>
  );
}
