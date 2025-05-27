import express from 'express';
import {
  createBestOffer,
  getAllBestOffers,
  getBestOfferById,
  updateBestOffer,
  deleteBestOffer,
  updateStatus,
} from '../controller/bestOfferController.js';

const router = express.Router();

router.post('/create', createBestOffer);
router.get('/getAll', getAllBestOffers);
router.get('/getById/:id', getBestOfferById);
router.patch('/toggled/:id' ,updateStatus);
router.put('/update/:id', updateBestOffer);
router.delete('/delete/:id', deleteBestOffer);

export default router;
