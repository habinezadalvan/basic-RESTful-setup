import { Router } from 'express';
import products from '../../controllers/products/products';
import auth from '../../middlewares/auth';
import upload from '../../middlewares/multer';


const router = Router();


router.get('/', auth, products.fetchProducts);
router.post('/product', auth, upload.array('product', 5), products.createProduct);
router.get('/product/:id', auth, products.fetchProduct);
router.put('/product/:id', auth, products.updateProduct);
router.delete('/product/:id', auth, products.deleteProduct);


export default router;
