import { google } from "googleapis";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "post" });
  }
  const body = req.body;
  console.log(body, req.query);
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
      range: "A1:H1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.name,
            body.phone,
            body.email,
            body.interest,
            body.business,
            body.address,
            body.salary,
            body.description,
          ],
        ],
      },
    });

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
