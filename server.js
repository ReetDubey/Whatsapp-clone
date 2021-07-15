//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

//app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher ({
    appId: "1235017",
    key: "5ec294247410c0bc4969",
    secret:"780568942fb699a5fb56",
    cluster:"ap2",
    encrypted: true,
});

//middleware
app.use(express.json());
app.use(cors());


//DB config
const connection_url='mongodb+srv://reet:ofcSQCaxqJR9BsZ4@cluster0.l7kjy.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiesTopology: true
})

const db = mongoose.connection

db.once('open',()=> {
    console.log("DB Connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change',(change) => {
        console.log("A change occured",change);

        if(change.operationType ==='insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages','inserted', 
            {
                name: messageDetails.name,
                message: messageDetails.message
            });
        } else {
            console.log("Error in trigger")
        }
    });
});




// API
app.get("/",(req,res)=>res.send('hello world'));

app.get("/messages/sync", (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

app.post("/messages/new", (req, res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

//listener
app.listen(port,() => console.log('Listening to port:',port))
