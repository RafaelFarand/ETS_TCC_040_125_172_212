import express from "express";
import cors from "cors";
import MahasiswaRoute from "./routes/route.js"; // ubah sesuai penamaan yang konsisten

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(MahasiswaRoute); // menggunakan router mahasiswa

app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`);
});
