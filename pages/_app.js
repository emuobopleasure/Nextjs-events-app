import Layout from "@/components/layout/layout";
import { NotificationContextProvider } from "@/store/notification-context";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name="description" content="Find a lot of great events that allow you to evolve..." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  )
}
