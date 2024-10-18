import express from "express";
import { 
    createUser,
    loginUser,
    logoutCurrentUser,
    getAllUsers,
    getCurrentUserProfile,
    updateCurrentUserProfile,
    deleteUserById,
    getUserById,
    updateUserById
} from "../controllers/userController.js";

const router = express.Router()

import { authenticate, authorisedAdmin } from "../middlewares/authMiddleware.js";

router.
    route('/')
    .post(createUser)
    .get(authenticate, authorisedAdmin, getAllUsers);

router.post('/auth', loginUser)
router.post('/logout', logoutCurrentUser)

router
    .route('/profile')
    .get(authenticate, getCurrentUserProfile)
    .put(authenticate, updateCurrentUserProfile)

// admin 
router
    .route('/:id')
    .delete(authenticate, authorisedAdmin, deleteUserById)
    .get(authenticate, authorisedAdmin, getUserById)
    .put(authenticate, authorisedAdmin, updateUserById)

export default router;