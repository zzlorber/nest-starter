import * as mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export const HelloSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4() },
  text: String
});
