import client from '@/shared/providers/paypal/clientPaypal';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

async function handler(req: NextApiRequest) {
  if (req.method != 'POST')
    return NextResponse.json(
      { success: false, message: 'Not Found' },
      { status: 404 }
    );

  if (!req.body.order_price || !req.body.user_id)
    return NextResponse.json(
      {
        success: false,
        message: 'Please Provide order_price And User ID',
      },
      { status: 400 }
    );

  try {
    // const exampleController = new ExampleController(client);
    // const response = exampleController.getExampleType(body);
    // console.log('Success! Result:', response.result);
    // console.log('Status Code:', response.statusCode);
    return NextResponse.json({ success: true, data: {} }, { status: 201 });
  } catch (err) {
    //   ...

    // Your Custom Code for doing something with order
    // Usually Store an order in the database like MongoDB

    //   ...

    console.log('Err at Create Order: ', err);
    return NextResponse.json(
      { success: false, message: 'Could Not Found the user' },
      { status: 500 }
    );
  }
}

export { handler as GET, handler as POST };
