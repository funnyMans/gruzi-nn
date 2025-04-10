import dbConnect from '@/shared/lib/mongo/db';
import Shipment from '@/shared/lib/mongo/models/Shipment';
import { NextRequest, NextResponse } from 'next/server';

async function handler(req: NextRequest) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const shipments = await Shipment.find({});
        return NextResponse.json(
          { success: true, data: shipments },
          { status: 200 }
        );
      } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 400 });
      }
      break;
    case 'POST':
      try {
        const shipment = await Shipment.create(req.body);
        return NextResponse.json(
          { success: true, data: shipment },
          { status: 201 }
        );
      } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 400 });
      }
      break;
    default:
      return NextResponse.json({ success: false }, { status: 400 });
      break;
  }
}

export { handler as GET, handler as POST };
