import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "mahasiswa"
const Mahasiswa = db.define(
  "mahasiswa", // nama tabel di database
  {
    nama: Sequelize.STRING,
    npm: Sequelize.STRING,
    jurusan: Sequelize.STRING,
    angkatan: Sequelize.INTEGER
  }
);

db.sync().then(() => console.log("Database synced (Mahasiswa)"));

export default Mahasiswa;
