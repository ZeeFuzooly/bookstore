import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Title, Paper, Stack, Select } from '@mantine/core';
import { z } from 'zod';
import { zodResolver } from '@mantine/form';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const schema = z.object({
  customerName: z.string().min(1, 'Customer name is required'),
  houseNumber: z.string().min(1, 'House number is required'),
  street: z.string().min(1, 'Street is required'),
  city: z.string().min(1, 'City is required'),
  landmark: z.string().optional(),
  zipCode: z.string().min(1, 'Zip Code is required'),
  contactNumber: z.string().min(1, 'Contact number is required'),
  deliveryAddress: z.string().optional(),
  paymentMethod: z.string().min(1, 'Payment method is required'),
});

const CheckoutForm = ({ totalPrice }: { totalPrice: number }) => {
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      customerName: '',
      houseNumber: '',
      street: '',
      city: '',
      landmark: '',
      zipCode: '',
      contactNumber: '',
      deliveryAddress: '',
      paymentMethod: '',
    },
  });

  const router = useRouter();

  const handleSubmit = async (values: typeof form.values) => {
    if (values.paymentMethod === 'cardPayment') {
      try {
        const response = await fetch('/api/stripe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ totalPrice }),
        });

        if (!response.ok) {
          throw new Error(`Failed to create checkout session: ${response.statusText}`);
        }

        const session = await response.json();
        const stripe = await stripePromise;

        if (!stripe) {
          console.error('Stripe.js failed to load.');
          return;
        }

        const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

        if (error) {
          console.error('Error redirecting to Stripe Checkout:', error);
        }
      } catch (error) {
        console.error('Error in handleSubmit:', error);
      }
    } else {
      console.log('Payment method:', values.paymentMethod);
      console.log('Form values:', values);
      // Handle other payment methods or order confirmation
    }
  };

  const handleBack = () => {
    router.push('/cart');
  };

  return (
    <Box style={{ maxWidth: 500, margin: 'auto', padding: '1rem' }}>
      <Title order={2} style={{ textAlign: 'center' }}>Checkout</Title>

      <Paper shadow="xs" style={{ marginBottom: '1rem', padding: '1rem' }}>
        <Title order={3} style={{ textAlign: 'center' }}>Order Summary</Title>
        <br/>
        <Title order={4} style={{ textAlign: 'center' }}>Total Price: ${totalPrice.toFixed(2)}</Title>
      </Paper>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Customer Name"
            placeholder="Enter your name"
            {...form.getInputProps('customerName')}
          />
          <TextInput
            label="House Number"
            placeholder="Enter your house number"
            {...form.getInputProps('houseNumber')}
          />
          <TextInput
            label="Street"
            placeholder="Enter your street"
            {...form.getInputProps('street')}
          />
          <TextInput
            label="City"
            placeholder="Enter your city"
            {...form.getInputProps('city')}
          />
          <TextInput
            label="Landmark"
            placeholder="Enter a landmark (optional)"
            {...form.getInputProps('landmark')}
          />
          <TextInput
            label="Zip Code"
            placeholder="Enter your zip code"
            {...form.getInputProps('zipCode')}
          />
          <TextInput
            label="Contact Number"
            placeholder="Enter your contact number"
            {...form.getInputProps('contactNumber')}
          />
          <TextInput
            label="Additional Address Info"
            placeholder="Enter additional address info (optional)"
            {...form.getInputProps('deliveryAddress')}
          />
          <Select
            label="Payment Method"
            placeholder="Select a payment method"
            data={[
              { value: 'cardPayment', label: 'Card Payment' },
              { value: 'cashOnDelivery', label: 'Cash On Delivery' },
              { value: 'bankTransfer', label: 'Bank Transfer' },
            ]}
            {...form.getInputProps('paymentMethod')}
          />
          <Button type="submit" color="blue">
            Confirm Order
          </Button>
          <Button variant="outline" color="gray" onClick={handleBack}>
            Back to Cart
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default CheckoutForm;
