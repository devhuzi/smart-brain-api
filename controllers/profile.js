const profileHandler = (req, res, db) => {
    const { id, email } = req.body;

    db.select('*').from('users', 'login').where({ email })
        .del() 
            
        //     {
        //     if (user.length) {

        //         db('users')
        //         .where('email', email)
        //         .del()
        //         .then(user => res.json(console.log('YOUR PROFILE IS DELETED')))
        //         .catch(err => res.status(400).res.json('something went wrong') )


        //         //res.json(user[0])
        //     } else {
        //         res.status(400).json('not found');
        //     }

        // }).catch(err => res.status(400).json('user not found'))

}

module.exports ={
    profileHandler
}