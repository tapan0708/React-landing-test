import Header from "./Components/header/header";
import Hero from "./Components/Hero/Hero";
import Story from "./Components/Our-story/Story";
import ItemsContent from "./Components/Items/ItemsContent";
import Testimonials from "./Components/Testimonials/Testimonials";
import NewsEvents from "./Components/News-Events/NewsEvents";

function App() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Story />
      </section>
      <section>
        <ItemsContent />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <NewsEvents />
      </section>
    </>
  );
}

export default App;
