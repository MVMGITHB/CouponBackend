import express from 'express';
import {
  createDealOnFire,
  getAllDealsOnFire,
  getDealOnFireById,
  updateDealOnFire,
  deleteDealOnFire,
  updateStatus,
} from '../controller/dealOnFireController.js';

const router = express.Router();

router.post('/create', createDealOnFire);
router.get('/getAll', getAllDealsOnFire);
router.get('/getOne/:id', getDealOnFireById);
router.patch('/toggled/:id' ,updateStatus);
router.put('/update/:id', updateDealOnFire);
router.delete('/delete/:id', deleteDealOnFire);

export default router;
