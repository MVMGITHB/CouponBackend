import express from 'express';
import { createCoupon, getAllCoupon, getSingleCoupon, updateCoupon ,deleteCoupon,updateStatus,getCouponByCategorySlug } from '../controller/couponController.js';

const router= express.Router();
router.post('/create' ,createCoupon);
router.put('/update/:id' ,updateCoupon);
router.patch('/toggled/:id' ,updateStatus);
router.get('/getAllCoupon' ,getAllCoupon);
router.get('/getSingleCoupon/:id', getSingleCoupon);
router.get('/getCouponByCategorySlug/:slug', getCouponByCategorySlug);
router.delete('/delete/:id', deleteCoupon);


export default router;