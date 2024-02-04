// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(
    "sk_test_51Mj6h1SEr7VMOboEHm74ZMKqkuhinX97rUMp3aUGaev7z1gsMACh9AnEFLednRG5MiGKLGZfYHrfiqiwwI7htRSx00sNBeAZOy"
);

exports.makePayment = async (req, res) => {

    const intent = await stripe.paymentIntents.create({
        amount: req.body.amount * 100,
        currency: "inr",
        metadata: {
            Company: "NETFLIX",
        },
        description: "Payment for Netflix",
    });

    res.json({ client_secret: intent.client_secret });
};

exports.sendKey = async (req, res) => {
    res.json({ apiKey: process.env.PUBLISHABLE_KEY});
};
