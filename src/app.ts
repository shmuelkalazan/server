
import express from"express"
import "dotenv/config"
const port = process.env.PORT || 11223
const app = express()

app.listen(port , ()=> {
    console.log("server run on port " +port)
})

