import "@mantine/core/styles.css";
import {
  MantineProvider,
  Container,
  Flex,
  Text,
  Anchor,
  ColorSchemeScript,
  Button,
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
          <Container fluid>
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
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
