import  request  from "supertest"
import { app } from "./app"



test('GET /',async()=>{
    const res = await request(app).get('/ping')
    expect(res.status).toBe(200)
    expect(res.text).toBe('pong')
})
