"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleStrategy = void 0;
const passport_google_id_token_1 = __importDefault(require("passport-google-id-token"));
const user_1 = __importDefault(require("../services/user"));
//const LocalStrategy = passportLocal.Strategy
exports.googleStrategy = new passport_google_id_token_1.default({
    clientId: process.env.GOOGLE_CLIENT_ID,
}, (parsedToken, googleID, done) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('parsed token', parsedToken);
    const user = yield user_1.default.findOneOrCreate(parsedToken.payload);
    //done method always accpets two parameters, error and data to be passed
    done(null, user);
}));
//# sourceMappingURL=passport.js.map