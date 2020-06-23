const Clarifai = require('clarifai');


const app = new Clarifai.App({
    apiKey: '1e1a0d5e58d84e3e82440352c1c29161'
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
//Clarifai.FACE_DETECT_MODEL
const handleApiCall = (req, res) => {
    app.models
      .predict('a403429f2ddf4b49b307e318f00e528b', req.body.input)
        .then(data => {
            res.json(data);
        })
        .catch(err => res.status(400).json('unable to work with api'))
}





module.exports ={
    imageHandler,
    handleApiCall
}