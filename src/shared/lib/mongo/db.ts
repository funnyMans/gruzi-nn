import mongoose from 'mongoose';
import config from '@/shared/lib/config';

const MONGODB_URI = config.mongodb.uri;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}
declare global {
  var mongoose: any;
}
/**
 * Cached connection for MongoDB.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
