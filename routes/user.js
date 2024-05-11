import express from 'express';
import { deleteUser, getAllUsers, getUserDetails, register, specialFunk, updateUser } from '../controllers/user.js';

const router = express.Router();

router.get('/all', getAllUsers);


router.post('/new', register);

router.get("/userid/special", specialFunk)

// router.get("/userid/:id", getUserDetails)

// router.put("/userid/:id", updateUser)

// router.delete("/userid/:id", deleteUser)
 
//same
router
    .route("/userid/:id")
    .get(getUserDetails)
    .put(updateUser)
    .delete(deleteUser)

export default router;
