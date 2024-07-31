import { MantineProvider } from '@mantine/core';
import { MantineThemeProvider } from '@mantine/styles';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      <MantineThemeProvider>
        {children}
      </MantineThemeProvider>
    </MantineProvider>
  );
}
