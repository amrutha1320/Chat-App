const mongoose = require('mongoose');


const url = `mongodb+srv://ammuu1320:ammuu1320@cluster0.dnwqqi3.mongodb.net/`
mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))