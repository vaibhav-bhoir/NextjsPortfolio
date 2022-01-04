import nodemailer from 'nodemailer';

export default async (req, res) => {

  const {name, email, message} = req.body;

  const transpoter = nodemailer.createTransport({
    host : 'gmail',
    post : 587,
    secure : false,
    auth : {
      user : process.env.user,
      pass : process.env.pass
    }
  })

  try {
    const emailRes = await transpoter.sendMail({
      from: email,
      to: 'techguytech100@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>`,
    })

    console.log('Message Sent', emailRes.messageId);

  } catch (error) {
    console.log(error);
    
  }

  res.status(200).json(req.body);
}
