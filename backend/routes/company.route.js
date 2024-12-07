import express from "express";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import isAuthenticted from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";


const router = express.Router();

router.route("/register").post(isAuthenticted,registerCompany);
router.route("/get").get(isAuthenticted,getCompany);
router.route("/get/:id").get(isAuthenticted,getCompanyById);
router.route("/update/:id").put(isAuthenticted,singleUpload,updateCompany);

export default router;