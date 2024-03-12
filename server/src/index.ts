import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import routes from "./routes"
import dotenv from "dotenv"

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL!)
  .then(() => {
    console.log("Mongo - Tudo nos trinks! 👍")
  })
  .catch((error) => {
    console.log("Mongo - Deu ruim! 💥")
    console.log(error)
  })

const app = express()

app.use(express.json())

app.use(cors({ origin: process.env.WEB_URL! }))

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.WEB_URL as string)
  res.header("Access-Control-Allow-Origin")
  next()
})

app.use(routes)

app.listen(8000, () => {
  console.log("Servidor rodando! 🚀")
})
