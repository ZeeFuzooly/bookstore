// import type { NextApiRequest, NextApiResponse } from 'next';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { totalPrice } = req.body;

//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items: [
//           {
//             price_data: {
//               currency: 'usd',
//               product_data: {
//                 name: 'Order Total',
//               },
//               unit_amount: totalPrice * 100, 
//             },
//             quantity: 1,
//           },
//         ],
//         mode: 'payment',
//         success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
//         cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
//       });

//       res.status(200).json({ id: session.id });
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
