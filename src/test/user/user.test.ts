import "../db/db";
import User from "../../model/user";
import request from "supertest";
import app from "../../../server";

const payload = {
    username: "mart",
    email: "test@gmail.com",
    password: "123456",
};

beforeAll(async () => {
    await User.deleteMany();
})


describe("Controller user.ts", () => {
    it("sigun up", async () => {
        const res = await request(app).post("/api/test").send({ payload });
        expect(res.status).toBe(200);
    })
    it("find user", async () => {
        const res = await request(app).post("/api/get/test").send({ payload });
     
        expect(res.body.data.username).toBe(payload.username);
        expect(res.body.data).toHaveProperty("username");
        expect(res.body.data).toHaveProperty("email");
        expect(res.body.data).toHaveProperty("password");
    })


})