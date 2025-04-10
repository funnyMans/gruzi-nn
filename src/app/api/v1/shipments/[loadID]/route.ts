// pages/api/items/[id].js

import dbConnect from '@/shared/lib/mongo/db';
import Shipment from '@/shared/lib/mongo/models/Shipment';
import { NextRequest, NextResponse } from 'next/server';

async function handler(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { method } = req;
  const { id } = params;

  await dbConnect();
  const newShipment = await Shipment.create(req.body);

  switch (method) {
    case 'PUT':
      try {
        const shipment = await Shipment.findByIdAndUpdate(id, newShipment, {
          new: true,
          runValidators: true,
        });
        if (!shipment) {
          return NextResponse.json({ success: false }, { status: 400 });
        }
        return NextResponse.json(
          { success: true, data: shipment },
          { status: 200 }
        );
      } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 400 });
      }
      break;

    case 'DELETE':
      try {
        const deletedItem = await Shipment.deleteOne({ _id: id });
        if (!deletedItem) {
          return NextResponse.json({ success: false }, { status: 400 });
        }
        return NextResponse.json({ success: true, data: {} }, { status: 200 });
      } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 400 });
      }
      break;

    default:
      return NextResponse.json({ success: false }, { status: 400 });

      break;
  }
}

export { handler as PUT, handler as DELETE };
