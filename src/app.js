import express, { Router } from "express"
import mongodb from "./config/db.js"
import { connect } from "mongoose"
//import vivosrouter from "./routers/mortosrouter.js"
//import enterrorouter from "./routers/enterrorouter.js"

const app = express()
app.use(express.json())

connectdb()
app.use("/vivos",vivosrouter )
app.use("/mortos")
app.use("/enterro")

app.listen(3000, () => console.log("servidor rodando"))