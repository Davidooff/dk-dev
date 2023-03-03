const express = require('express')
const db = require('./config/db')
const checkBody = require('./routes/check-body')
const cors = require('cors')
const app = express()
const port = 3000

let corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.post('/', cors(corsOptions), (req, res) => {
    if(checkBody.checkUserFrom(req.body)){
        req.body.processed = false;
        let user = new db.CallMeUser(req.body)
        user.save()
    }
    console.log(req.body);
    res.statusCode = 200;
    res.send()
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })