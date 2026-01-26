import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js';
//import fileUpload from 'express-fileupload';

//App Config
const app = express();
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();

// middlewares
app.use(cors())
// Only parse JSON for requests that are not multipart (file uploads).
// This prevents body-parser from attempting to parse multipart/form-data bodies
// (which would cause a SyntaxError when it sees the upload boundary text).
app.use((req, res, next) => {
	const contentType = (req.headers['content-type'] || '').toLowerCase();
	// debug: log product upload requests' content-type to help trace why JSON parsing may run
	if (req.path && req.path.startsWith('/api/product') && contentType) {
		console.log('[debug] incoming', req.method, req.path, 'Content-Type:', contentType);
	}
	if (contentType.includes('multipart/form-data')) {
		// let multer or other multipart middleware handle this route
		return next();
	}
	// apply express.json() only when not multipart
	express.json()(req, res, (err) => {
		if (err) return next(err);
		next();
	});
});

app.use(express.urlencoded({ extended: true }))
//app.use(fileUpload());

//Api endpoints 
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);

app.get('/', (req, res) => res.status(200).send('API Working!'))


//Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))