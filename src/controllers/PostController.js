const Post = require("../models/Post");
const path = require("path");
const sharp = require("sharp");
const fs = require("fs");



module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort("-createdAt");

        return res.json(posts);
    },

    async store(req, res){
        
        console.log(req.body);
        
        const { author, place, description, hashtags} = req.body;
        const { filename: image } = req.file;

        const [name] = image.split(".");
        const newFileName = `${name}.jpg`;

        await sharp(req.file.path)
        .resize(500)
        .jpeg({ quality : 70 })
        .toFile(
            path.resolve(req.file.destination, "resized", newFileName)
        )

        fs.unlink(req.file.path, console.log);

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image : newFileName,
        });

        req.io.emit("post",post);

        return res.json(post);
    }
}