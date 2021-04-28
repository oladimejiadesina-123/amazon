const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IfTAFJwlsmsYmoVwC9S0tW5LOnuCLwpeZzmv02B1ypQF1yBEzFXsVJIxhnNRFv6pb6CvSmwHPjJYjFc8oubuO1w005nqcYtSu")

// API


// APP config
const app = express()


// middleware

app.use(express.json())
app.use(cors({origin: true}))

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"))
app.post("/payment/create", async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received boom!!! for this amount >>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// listen Command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/challenge-c48aa/us-central1/api.