import { Router } from "express";
import { monthXprice, categoryPie, genderXcategory } from "../controller/custom.controller.js"

const router = Router();

router.post('/monthxprice', monthXprice)
router.post('/categoryPie', categoryPie)
router.post('/genderxcategory', genderXcategory)


export default router;