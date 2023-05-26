import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, message } = req.body;

    if (!name || typeof name !== 'string') throw Error('name required');
    if (!email || typeof email !== 'string') throw Error('email required');
    if (!message || typeof message !== 'string')
      throw Error('message required');

    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true,
    });

    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          reject(error);
        } else {
          resolve(success);
        }
      });
    });

    const mailData = {
      from: {
        name: name,
        address: email,
      },
      replyTo: email,
      to: 'leesavage09@gmail.com',
      subject: `* Portfolio website *`,
      text: message,
      html: `${message}`,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
    });

    res.status(200).json({ status: 'OK' });
  } catch (e: any) {
    res.status(500).json({ error: e.message || e });
  }
};

export default handle;
