import { Center, Image, Container } from "@mantine/core";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import CarouselBanner from "./components/CarouselBanner.jsx";
import CarouselCard from "./components/CarouselCard.jsx";
import { SecondaryButton } from "./components/SecondaryButton.jsx";

function App() {
  return (
    <>
      <Header />
      <Image
        src="img/banners/32477_0626_BestBooksSoFar_June2025.jpg"
        style={{ padding: "0.188rem 0rem" }}
      />
      <CarouselBanner />
      <Container size="xl">
        <div>
          <h2>Novedades</h2>
        </div>
        <CarouselCard />
        <Center>
          <SecondaryButton />
        </Center>
        <Footer />
      </Container>
    </>
  );
}

export default App;
