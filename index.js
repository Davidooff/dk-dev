const express = require('express')
const checkBody = require('./routes/check-body')
const configDb = require('./config/config-db')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken');
const jwtConfig = require('./config/jwt-config')
const { response } = require('express')
const port = 3000



let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.post('/', cors(corsOptions), (req, res) => {
    if(checkBody.checkUserFrom(req.body)){
        req.body.processed = false;
        let user = new configDb.CallMeUser(req.body);
        user.save();
        res.statusCode = 200;
    } else 
        res.statusCode = 500;
    res.send()
})

app.post('/login', cors(corsOptions), (req, res) =>{
    console.log(req.body);
    if(req.body.login == jwtConfig.login && req.body.password == jwtConfig.password){
        let jwtBearerToken = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60) * 3,// 3h
            data: jwtConfig.authSecret
          }, jwtConfig.jwtSecret);
          res.status(200).json({
            exp: Math.floor(Date.now() / 1000) + (60 * 60) * 3,// 3h
            idToken: jwtBearerToken
          });
    }
});

app.post('/get-db-data', (req, res) => {
    jwt.verify(req.body.token, jwtConfig.jwtSecret, async function(err, decoded) {
        if(!err){
            let users = await configDb.CallMeUser.getArrayOfUsersByDate(req.body.startFrom, req.body.quantity)
            res.send(users)
        } else{
            res.send("Error to read token")
        }
    });
});

app.post('/get-customer-data', (req, res) => {
    jwt.verify(req.body.token, jwtConfig.jwtSecret, async function(err, decoded) {
        if(!err){
            let customer = await configDb.CallMeUser.findById(req.body._id);
            console.log(customer);
            res.send(customer)
        } else{
            res.send("Error to read token")
        }
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })