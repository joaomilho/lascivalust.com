import { Menu, Footer, Preferences } from "./sections";
import PopUp from "./components/PopUp";
import { Layout } from "./Layout";

export default function Index() {
  return (
    <Layout>
      <PopUp />
      <Menu show />

      <h1 style={{ padding: `80px 40px 40px 40px` }}>Preferences</h1>
      <Preferences />

      <Footer />
    </Layout>
  );
}
