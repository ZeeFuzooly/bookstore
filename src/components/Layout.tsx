import "@mantine/core/styles.css"; 

import {
  ColorSchemeScript,
  MantineProvider,
  AppShell,
} from "@mantine/core";

export const metadata = {
  title: "My Book Store",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AppShell>
            {children}</AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
