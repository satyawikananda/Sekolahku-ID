import express from "express"
import dotenv from "dotenv"
import { Sekolah } from "./data/index"
import cors from "cors"

dotenv.config()
const app: express.Application = express()
const port: string = process.env.SERVER_PORT
app.use(cors())

app.get("/", (req, res): void => {
    res.json({
        msg: "Hello world"
    })
})

app.get("/api/wilayah", (req, res): void => {
    res.setHeader("Cache-Control", "public,max-age=3600,s-maxage=30");
    setImmediate(():void => {
        try{
            Sekolah.wilayah()
             .then((data: any):void => {
                 res.send(data)
             })
        }catch(err){
            res.status(400).send("Something went wrong")
        }
    })
})

app.listen(port, ():void => {
    console.log(`Server listen on port: ${port}`)
})