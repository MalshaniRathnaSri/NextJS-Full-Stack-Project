import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    address: string;
    password: string;
}

const userSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
