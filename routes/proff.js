import express from "express";
import { setAvailability, cancelAppointments, updateAvailability } from "../controllers/proff.js";
import { authMiddleware } from "../middleware/auth.js"; 
import { profMiddleware } from "../middleware/auth.js"; 
const router = express.Router();


router.post("/availability", authMiddleware,profMiddleware, setAvailability);


// Route to cancel appointments between professor and student - Only accessible to professors
router.patch("/cancel-appointments/:studentId", authMiddleware, profMiddleware, cancelAppointments);

router.patch("/availability/:slotId", authMiddleware, profMiddleware, updateAvailability);

export default router;
