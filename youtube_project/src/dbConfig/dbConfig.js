import mongoose from "mongoose";

export async function connect() {
    if (mongoose.connections[0].readyState) {
        console.log('Already connected to MongoDB');
        return;
    }
    console.log('Attempting to connect to MongoDB...');
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

