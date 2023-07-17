import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";

export const metadata = {
  title: "Crypt Wallet",
  description: "A Cool Crypto Waller",
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
