const {ObjectId} = require("mongodb");
module.exports = function(app, commentsRepository) {
    app.post('/comments/:song_id', function (req, res){
        let comment = {
            author: req.session.user,
            text: req.body.comment,
            song_id: ObjectId(req.params.song_id)
        }
        if (comment.text === null || typeof (comment.text) == "undefined" || comment.text.trim().length == 0)
            res.send("Comentario no válido");
        else {
            commentsRepository.insertComment(comment, function (commentId){
                if (commentId == null){
                    res.send("Error al insertar comentario");
                } else {
                    res.redirect("/songs/" + comment.song_id);
                }
            });
        }
    });
};