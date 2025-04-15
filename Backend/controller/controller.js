import Mahasiswa from "../model/ModelMahasiswa.js";

export const getMahasiswa = async (req, res) => {
  try {
    const response = await Mahasiswa.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Terjadi kesalahan saat mengambil data mahasiswa" });
  }
};

export const getMahasiswaById = async (req, res) => {
  try {
    const response = await Mahasiswa.findOne({
      where: { id: req.params.id },
    });
    if (!response) return res.status(404).json({ msg: "Mahasiswa tidak ditemukan" });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Terjadi kesalahan saat mengambil data mahasiswa" });
  }
};

export const createMahasiswa = async (req, res) => {
  try {
    await Mahasiswa.create(req.body);
    res.status(201).json({ msg: "Mahasiswa berhasil ditambahkan" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Gagal menambahkan mahasiswa" });
  }
};

export const updateMahasiswa = async (req, res) => {
  try {
    await Mahasiswa.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Data mahasiswa berhasil diperbarui" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Gagal memperbarui data mahasiswa" });
  }
};

export const deleteMahasiswa = async (req, res) => {
  try {
    await Mahasiswa.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Data mahasiswa berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Gagal menghapus data mahasiswa" });
  }
};
