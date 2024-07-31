import { Badge, Button, Card, Group, Text, Image } from '@mantine/core';

interface Book {
  title: string;
  author: string;
  price: number;
  cover: string;
  category: string;
}

interface BookCardProps {
  book: Book;
  onAddToCart: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onAddToCart }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={book.cover}
          height={160}
          alt={book.title}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{book.title}</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {book.author}
      </Text>

      <Text size="sm" mt="sm">
        Price: ${book.price}
      </Text>

      <Button
        variant='light'
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={onAddToCart}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default BookCard;
