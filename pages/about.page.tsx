import { Menu, About, Footer } from "./sections";
import PopUp from "./components/PopUp";
import { Layout } from "./Layout";

export default function Index() {
  return (
    <Layout>
      <PopUp />
      <Menu show />

      <About />

      <Footer />
    </Layout>
  );
}
