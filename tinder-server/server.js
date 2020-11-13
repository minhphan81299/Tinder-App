import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'
//App config
const app = express();
const connection_url = "mongodb+srv://admin:1234@cluster0.42n2r.mongodb.net/tinderdb?retryWrites=true&w=majority"
//define port our app will listen
const port = process.env.PORT || 8001


//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//API endpoint
app.get('/', (req, res) => {
    res.send('hellosss')
})
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })

})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})
//Listener

app.listen(port, () => console.log(`listening on localhost: ${port}`));