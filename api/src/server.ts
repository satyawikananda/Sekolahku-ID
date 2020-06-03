import express from "express"

const app: express.Application = express()
const port: number = 8000

app.get("/", (req, res): void => {
    res.json({
        msg: "Hello world"
    })
})

app.listen(port, () => {
    console.log(`Server listen on port: ${port}`)
})