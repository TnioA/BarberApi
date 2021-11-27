"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("./Controller/UserController"));
const BarberController_1 = __importDefault(require("./Controller/BarberController"));
const AppointmentController_1 = __importDefault(require("./Controller/AppointmentController"));
const AuthExtension_1 = __importDefault(require("./Extension/AuthExtension"));
const router = (0, express_1.Router)();
router.post('/api/checktoken', AuthExtension_1.default.ValidateToken, UserController_1.default.CheckToken);
router.post('/api/signin', UserController_1.default.SignIn);
router.post('/api/signup', UserController_1.default.SignUp);
router.post('/api/logout', AuthExtension_1.default.ValidateToken, UserController_1.default.Logout);
router.get('/api/getbarbers', BarberController_1.default.GetBarber);
router.get('/api/getbarber', BarberController_1.default.GetBarbers);
router.post('/api/favoriteBarber', AuthExtension_1.default.ValidateToken, BarberController_1.default.FavoriteBarber);
router.post('/api/setappointment', AuthExtension_1.default.ValidateToken, AppointmentController_1.default.SetAppointment);
router.get('/api/getappointments', AppointmentController_1.default.GetAppointments);
exports.default = router;
