import {
  Header,
  Hero,
  Category,
  Products,
  Featured,
  About,
  Trusted,
  Specialization,
  Testimonials,
  Articles,
  Slider,
  Footer,
} from "./sections";

function App() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Hero />
      <Category />
      <Products />
      <About />
      <Featured />
      <Trusted />
      <Specialization />
      <Testimonials />
      <Articles />
      <Slider />
      <Footer />
    </main>
  );
}

export default App;
