const functions = require('@google-cloud/functions-framework');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const nodemailer = require('nodemailer')

const listId = '654215e7cb';
const apiKey = 'aad827d1f63e0373aa5ceecfeb9aba46-us10';

mailchimp.setConfig({
  apiKey: apiKey,
  server: 'us10'
});

functions.http('subscribe', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    const body = req.body
    const { email, lastName, firstName, hasArt, artLocation } = body;
  
    let result
    try {
      result = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          HAS_ART: hasArt,
          ART_LOC: artLocation
        }
      })
    } catch (err) {
      return res.status(500).json({
        statusCode: 500,
        body: {
          message: "Something went wrong",
          err: err
        }
      })
    }

    await sendMail(req.body)
  
    return res.status(200).json({
      statusCode: 200,
      body: {
        response: result
      }
    })
  }
});

async function sendMail(data) {
  const { email, firstName, lastName } = data;

  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    secure: true,
    port: 465,
    auth: {
      user: "hello@artmyspace.com.ng",
      pass: "Influence!1994",
    },
  });

  const mailOptions = {
    from: "hello@artmyspace.com.ng",
    to: "elijahkolawole1@gmail.com",
    subject: "Some subject",
    html: "<p>test</p>",
   };

   await transporter.sendMail(mailOptions, function(err, info) {
  }
}