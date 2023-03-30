const express = require('express') 
const bodyParser = require('body-parser'); 
const app = express()
const request = require('request');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/calculatrice.html');
});


app.post('/index', (req, res) => {
 
  let formData=req.body;
  console.log()
  console.log(formData);
  request.post('http://back:5057/index', { form: formData }, (err, response, body) => {
    if (err) {
      console.error(err);
      res.send('Error submitting form');
    } else {
      console.log("ok")
      console.log(body)

    //  res.send((request.);
    }
});
});

const port = 3005
app.listen(port, () => console.log(`This app is listening on port ${port}`));