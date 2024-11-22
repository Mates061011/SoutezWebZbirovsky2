import mongoose, { Document, Schema, Types } from 'mongoose';

interface IUser {
  username: string;
  password: string;
}

// Explicitly define the type of _id as ObjectId
interface IUserDocument extends IUser, Document {
  _id: Types.ObjectId; // MongoDB's ObjectId
}

const UserSchema = new Schema<IUserDocument>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model<IUserDocument>('User', UserSchema);

export default User;
