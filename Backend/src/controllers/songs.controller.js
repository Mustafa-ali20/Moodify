const songModel = require("../models/song.model");
const id3 = require("node-id3");
const storageService = require("../services/storage.service");

async function uploadSong(req, res) {
  const songBuffer = req.file.buffer;
  const { mood, title: bodyTitle } = req.body;

  const tags = id3.read(songBuffer);
  const title =
    tags.title || bodyTitle || req.file.originalname.replace(".mp3", "");

  const posterImageBuffer = tags.image?.imageBuffer || tags.image?.imageData;

  const [songFile, posterFile] = await Promise.all([
    storageService.uploadFile({
      buffer: songBuffer,
      filename: title + ".mp3",
      folder: "/moodify/songs",
    }),
    posterImageBuffer
      ? storageService.uploadFile({
          buffer: posterImageBuffer,
          filename: title + ".jpeg",
          folder: "/moodify/posters",
        })
      : Promise.resolve({
          url: "https://ik.imagekit.io/mxmnzkbib/moodify/posters/default-poster.jpg",
        }),
  ]);

  const song = await songModel.create({
    title,
    url: songFile.url,
    posterUrl: posterFile.url,
    mood,
  });

  res.status(201).json({
    message: "song created successfully",
    song,
  });
}

async function getSong(req, res) {
  const { mood } = req.query;

  const song = await songModel.findOne({
    mood: { $regex: new RegExp(`^${mood}$`, "i") }, // "i" = case insensitive
  });

  res.status(200).json({
    message: "song fetched successfully.",
    song,
  });
}

module.exports = { uploadSong, getSong };
