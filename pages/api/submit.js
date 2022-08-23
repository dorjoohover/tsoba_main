import { google } from "googleapis";
export default async function handler(req, res) {
  require("dotenv").config();
  if (req.method !== "POST") {
    return res.status(405).send({ message: "post" });
  }
  const body = req.body;

  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     host: "smtp.gmail.com",
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: process.env.SMTP_USER,
  //       pass: process.env.SMTP_PASSWORD,
  //     },
  //     requireTLS: true,
  //     tls: {
  //       ciphers: "SSLv3",
  //     },
  //   });

  //   console.log(body);
  //   var maillist = ["altantsetseg.b@homey.mn", "bolormaa.ts@homey.mn"];
  //   const data = {
  //     from: body.email,
  //     to: maillist,
  //     subject: `Зээлийн хүсэлт ${body.name}`,
  //     html: `<h1>${body.name} Хүсэлт гаргаж байна</h1> <br>

  //         <p><strong>Нэр: </strong> ${body.name}</p><br>
  //         <p><strong>Утас: </strong> ${body.phone}</p><br>
  //         <p><strong>Платформ: </strong> ${body.platform}</p><br>
  //         <p><strong>Платформ утас: </strong> ${body.phonePlatform}</p><br>
  //         <p><strong>Хаяг: </strong> ${body.email}</p><br>
  //         <p><strong>Сонирхож буй хотхоны нэр: </strong> ${body.interest}</p><br>
  //         <p><strong>Ажлын нэр: </strong> ${body.business}</p><br>
  //         <p><strong>Оршин суугаа газар: </strong> ${body.address}</p><br>
  //         <p><strong>Цалин: </strong> ${body.salary}</p><br>
  //         <p><strong>Үйл ажиллагааны товч тайлбар: </strong> ${body.description}</p><br>

  //       `,
  //     text: `${body.name} Хүсэлт гаргаж байна \n

  //         <Нэр: </strong> ${body.name} \n
  //         <Утас: </strong> ${body.phone} \n
  //         <Утас: </strong> ${body.platform} \n
  //         <Утас: </strong> ${body.phonePlatform} \n
  //         <Хаяг: </strong> ${body.email} \n
  //         <Сонирхож буй хотхоны нэр: </strong> ${body.interest} \n
  //         <Ажлын нэр: </strong> ${body.business} \n
  //         <Оршин суугаа газар: </strong> ${body.address} \n
  //         <Цалин: </strong> ${body.salary} \n
  //         <Үйл ажиллагааны товч тайлбар: </strong> ${body.description} \n

  //       `,
  //   };
  //   transporter.sendMail(data, function (err, info) {
  //     if (err) console.log(err);
  //     else console.log(info);
  //   });

  const private_key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: private_key,
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:J1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.name,
            body.phone,
            body.phonePlatform,
            body.platform.toLowerCase(),
            body.email,
            body.interest,
            body.business,
            body.address,
            body.salary,
            body.description,
          ],
        ],
      },
    })

    return res.status(200).json({
      data: response.data,
    });
  } catch (e) {
    return res.status(500).send({
      message: e,
      sheet_id: process.env.GOOGLE_SHEET_ID,
      sheet_key: process.env.GOOGLE_PRIVATE_KEY,
      email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: private_key,
    });
  }
}
