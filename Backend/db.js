import mongoose from 'mongoose';


const URI = process.env.MongoDBURI;


if (!URI) {
  console.error('MongoDBURI is not defined in .env file');
  process.exit(1); 
}


mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  tls: true,
  tlsAllowInvalidCertificates: true,
  serverSelectionTimeoutMS: 15000, 
  socketTimeoutMS: 45000, 
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1); 
});

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});