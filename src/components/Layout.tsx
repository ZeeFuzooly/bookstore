import "@mantine/core/styles.css";
import {
  MantineProvider,
  Container,
  Flex,
  Text,
  Anchor,
  ColorSchemeScript,
  Button,
  Box,
} from "@mantine/core";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/router";

export const metadata = {
  title: "My Book Store",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // Function to handle cart icon click
  const handleCartClick = () => {
    router.push("/cart");
  };

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Container fluid style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Box style={{ flex: "1 0 auto" }}>
              <Flex
                align="center"
                justify="space-between"
                style={{
                  width: "100%",
                  maxWidth: "1200px",
                  margin: "0 auto",
                  borderBottom: "1px solid #eaeaea",
                  marginBottom: "1rem",
                  padding: "0 1rem",
                }}
              >
                <Text size="xl">RefHub Book Store</Text>
                <Flex align="center">
                  <Anchor href="/" mr="md">
                    Home
                  </Anchor>
                  <Anchor href="/about" mr="md">
                    About
                  </Anchor>
                  <Anchor href="/contact">Contact</Anchor>
                  <Button
                    variant="outline"
                    onClick={handleCartClick}
                    style={{ border: "none", background: "transparent" }}
                  >
                    <FaShoppingCart size={24} />
                  </Button>
                </Flex>
              </Flex>
              {children}
            </Box>
            <Box component="footer" style={{ flexShrink: 0, padding: "1rem 0", borderTop: "1px solid #eaeaea" }}>
              <Container>
                <Flex align="center" justify="center">
                  <Text>&copy; 2024 RefHub Book Store - All Rights Reserved.</Text>
                </Flex>
              </Container>
            </Box>
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
