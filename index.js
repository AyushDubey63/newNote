import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { userRouter } from './routes/user.js'
import { notesRouter } from './routes/notes.js'

dotenv.config()

const server = express()
const port = process.env.PORT
const URL= process.env.MONGO_URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
server.use(cors())
server.use(bodyParser.json({ extended:true, limit: '500mb' }));
server.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));
server.use(express.json());
server.use('/users', userRouter)
server.use('/notes',notesRouter)

mongoose.connect(URL).then(() => {
  console.log("Database connected")
}).catch((err) => {
  console.log(err)
})

server.get("/", (req, res) => {
server.use(express.static(path.resolve(__dirname, "client", "build")));
res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
server.listen(port, () => {
  console.log("server connected")
})