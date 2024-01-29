import { Menu, About, Footer } from "./sections";

import { Layout } from "./Layout";

export default function Index() {
  return (
    <Layout>
      <Menu show />

      <About />

      <Footer />
    </Layout>
  );
}
