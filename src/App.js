import React from "react";
import AtlasSdk from "@atlas/sdk";

import ThemeProvider from "@cobalt/react-theme-provider";
import ViewportProvider from "@cobalt/react-viewport-provider";
import PortalProvider from "@cobalt/react-portal-provider";

import Main from "./components/Main";

export default function App() {
  return (
    <ThemeProvider loader={() => AtlasSdk.theme.getConfig()}>
      <ViewportProvider>
        <PortalProvider>
          <Main />
        </PortalProvider>
      </ViewportProvider>
    </ThemeProvider>
  );
}
