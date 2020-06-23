const Clarifai = require('clarifai');


const app = new Clarifai.App({
    apiKey: '4e31499dec074771b05bb18009e51dee'
  });



const imageHandler = (req, res, db) => {
    const { id } = req.body;

    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0])
        }).catch(err => res.status(400).json(err))

}

const handleApiCall = (req, res) => {
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
        .then(data => {
            res.json(data);
            console.log("this is working data is here :", data);
        })
        .catch(err => res.status(400).json('unable to work with api'))
}





module.exports ={
    imageHandler,
    handleApiCall
}