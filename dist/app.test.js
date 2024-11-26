"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("./app");
test('GET /', async () => {
    const res = await (0, supertest_1.default)(app_1.app).get('/ping');
    expect(res.status).toBe(200);
    expect(res.text).toBe('pong');
});
