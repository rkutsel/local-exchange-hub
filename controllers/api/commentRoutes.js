const router = require("express").Router();
const { Comment } = require("../../models");
const isAuth = require("../../utils/isauth");

router.post('/:id', isAuth, async (req, res) => {
  try {
    console.log(req.params.id, req.session.user_id);
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      offer_id: req.params.id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', isAuth, async (req, res) => {
    try {
      console.log(req.params.id, req.session.user_id);
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      console.log(commentData);
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put('/:id', isAuth, async (req, res) => {
    try {
      console.log(req.params.id, req.session.user_id);
      const commentData = await Comment.update(req.body, { 
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      console.log(commentData);
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;