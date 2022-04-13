const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/products', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

    .then(() => console.log('established connection to database'))
    .catch( err => console.log('Something went wrong when connecting to database', err))