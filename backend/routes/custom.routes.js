import { Router } from "express";
import { monthXprice, categoryPie, genderXcategory, deliveryVsReturnStatus, getSummaryMetrics } from "../controller/custom.controller.js"

const router = Router();

router.post('/monthxprice', monthXprice)
router.post('/categoryPie', categoryPie)
router.post('/genderxcategory', genderXcategory)
router.post('/deliver', deliveryVsReturnStatus)
router.get('/getSummaryMetrics', getSummaryMetrics)

export default router;