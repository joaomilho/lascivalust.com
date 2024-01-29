import { Menu, Gallery, Footer } from "./sections";

import { Layout } from "./Layout";

export default function Index() {
  return (
    <Layout>
      <Menu show />

      <Gallery />

      <Footer />
    </Layout>
  );
}
