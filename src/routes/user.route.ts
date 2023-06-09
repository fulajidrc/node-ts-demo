import express from "express";
import { StripeController, UserController } from "../controllers";

const userRoute = express.Router();

userRoute.get('/create-customer', StripeController.crateCustomer);
userRoute.get('/create-payment-method', StripeController.addPaymentMethod);
userRoute.get('/one-time-payment', StripeController.oneTimePayment);
userRoute.get('/create-plan', StripeController.createPlan);
userRoute.get('/subscribe', StripeController.subscribePlan);
userRoute.post('/webhook', StripeController.webhook);

userRoute.post('/', UserController.create);
userRoute.get('/', UserController.getAll);
userRoute.get('/:id', UserController.getOne);
userRoute.put('/:id', UserController.update);
userRoute.delete('/:id', UserController.delete);

export default userRoute;