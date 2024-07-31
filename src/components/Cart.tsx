import { useCartStore } from '../stores/cartstore';
import { Table, Button, NumberInput, Text, Flex, Space, Title, Box, Center } from '@mantine/core';
import { useRouter } from 'next/router';

interface Book {
  title: string;
  author: string;
  price: number;
  cover: string;
}

interface CartItem {
  book: Book;
  quantity: number; 
}

const Cart = () => {
  const items = useCartStore((state) => state.items as CartItem[]);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const router = useRouter();

  const handleQuantityChange = (book: Book, value: number | null) => {
    if (value !== null) {
      updateQuantity(book, value as number); 
    }
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const handleBack = () => {
    router.push('/');
  };

  const totalPrice = items.reduce((total, item) => total + item.book.price * item.quantity, 0);

  return (
    <Center>
      <Box style={{ maxWidth: 1000, width: '100%', padding: '1rem' }}>
        <Title order={2} mt="md" mb="md">Your Shopping Cart</Title>
        <Table striped highlightOnHover>
          <thead>
            <tr>
              <Table.Th>Title</Table.Th>
              <Table.Th>Author</Table.Th>
              <Table.Th>Quantity</Table.Th>
              <Table.Th>Price</Table.Th>
              <Table.Th>Total</Table.Th>
              <Table.Th>Actions</Table.Th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <Table.Td>{item.book.title}</Table.Td>
                <Table.Td>{item.book.author}</Table.Td>
                <Table.Td>
                  <NumberInput
                    value={item.quantity} 
                    onChange={(value) => handleQuantityChange(item.book, value as number)}
                    min={1}
                    size="xs"
                  />
                </Table.Td>
                <Table.Td>${item.book.price.toFixed(2)}</Table.Td>
                <Table.Td>${(item.book.price * item.quantity).toFixed(2)}</Table.Td> 
                <Table.Td>
                  <Button 
                    variant="outline" 
                    color="red" 
                    size="xs" 
                    onClick={() => removeFromCart(item.book)}
                  >
                    Remove
                  </Button>
                </Table.Td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Flex justify="space-between" align="center" mt="lg">
          <Button variant="outline" onClick={handleBack}>Back to Home</Button>
          <Text size="lg" >Total: ${totalPrice.toFixed(2)}</Text>
          <Button onClick={handleCheckout}>Proceed to Checkout</Button>
        </Flex>
        <Space h="xl" />
      </Box>
    </Center>
  );
};

export default Cart;
