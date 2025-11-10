import Layout from "@/containers/Layout";
import CleanLayout from "@/containers/CleanLayout"; // Fixed import path
import "@/styles/globals.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Provider } from "react-redux";
import store from "../store";
import { hotjar } from "react-hotjar";
import { GoogleAnalytics } from "nextjs-google-analytics";
import mixpanel from "mixpanel-browser";
import { Crisp } from "crisp-sdk-web";
import TagManager from "react-gtm-module";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    } else {
      console.log = () => {};
      if (process.env.NEXT_PUBLIC_HOTJAR_ID)
        hotjar.initialize(process.env.NEXT_PUBLIC_HOTJAR_ID, 1);
      if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN)
        mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, { debug: false });
      if (process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID)
        Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID);
      if (process.env.NEXT_PUBLIC_GTM_ID)
        TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
    }
  }, []);

  // Use CleanLayout for test pages, regular Layout for others
  const getLayout = () => {
    if (router.pathname === "/test-home") {
      return CleanLayout;
    }
    return Layout;
  };

  const PageLayout = getLayout();

  return (
    <ThemeProvider>
      <Provider store={store}>
        <PageLayout>
          <GoogleAnalytics trackPageViews />
          <Component {...pageProps} />
        </PageLayout>
      </Provider>
    </ThemeProvider>
  );
}
