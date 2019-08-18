import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

let posts;

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  posts = db.collection('posts');
});

const router = express.Router();

router.get('/posts', (req, res) => {
  posts.find({}, function (error, posts) {
        assert.equal(null, error);
        res.send(posts);
    })
});

router.get('/author/:author/posts', (req, res) => {
    posts.find({ author: ObjectID(req.params.author) })
        .then(authorPosts => res.send(authorPosts))
        .catch(error => {
            console.error(error);
            res.status(404).send('Bad Request, cannot find post by author.');
        });
});

export default router;
