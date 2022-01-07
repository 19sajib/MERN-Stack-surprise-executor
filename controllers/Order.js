const Order = require('../models/Order.js')
const mailjet = require ('node-mailjet')
.connect('', '')

const orderSave = async (req, res) => {
    const { metadata, items, cartTotal } = req.body;
    //console.log(metadata, items, cartTotal);

    try {
        const orderNow = new Order({
         metadata: metadata, orderAmount: cartTotal, orderItems: items
        });
        const orderSaveNow = await orderNow.save()

        const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "sahadatahmed.16100041@rpsu.edu.bd",
        "Name": "Sahadat"
      },
      "To": [
        {
          "Email": orderSaveNow.metadata.shipEmail,
          "Name": orderSaveNow.metadata.shipName
        }
      ],
      "Subject": "Chomkedin - Order Confirmation",
      "TextPart": "Order Confirmation",
      "HTMLPart": `We have recieved your Surprise order. You will be notified once your Surprise is executed.`,
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })

        res.status(200).json({message: "Your order placed successfully."});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went worng.'})
    }
}

const orderView = async (req, res) => {
    
    try {
        const total = await Order.countDocuments();
        const orderList =await Order.find({ orderStatus: false });
        res.json({data:{ orderList, total} })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went'})
    }
}

const orderCompleted = async (req, res) => {
    const { id } = req.body;
    console.log(id);
    try {
        const statusUpdate = await Order.findByIdAndUpdate( id , {orderStatus: true}, { new: true})
        const orderList =await Order.find({ orderStatus: false });

const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "sahadatahmed.16100041@rpsu.edu.bd",
        "Name": "Sahadat"
      },
      "To": [
        {
          "Email": statusUpdate.metadata.shipEmail,
          "Name": statusUpdate.metadata.shipName
        }
      ],
      "Subject": "Chomkedin - Surprise Executed",
      "TextPart": "Surprise Executed",
      "HTMLPart": `Your Surprise plan is executed. Thank you for choosing us. Do contact again for further more service.`,
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })

  res.json({ orderList })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went'})
    }
}

module.exports = { orderSave, orderView, orderCompleted }