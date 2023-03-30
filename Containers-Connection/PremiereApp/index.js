const MongoClient = require('mongodb').MongoClient;

const bodyParser = require('body-parser'); 
const express = require('express') // Include ExpressJS

const mongoose = require('mongoose');



mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mongodb:27017/histo', {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});


const histo =new MongoClient('mongodb://mongodb:27017/dbhisto', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));


app.post('/index', async (req, res) => {
  const data = req.body;
  console.log(data)
 
  try {
    await histo.connect();
    console.log('Connected to MongoDB server');
    
    const collection = histo.db("dbhisto").collection("histo");
    collection.insertOne(data, (err, result) => {
      if (err) throw err;
      console.log("Data inserted!");
      
      task.close();
    });
    res.send('Data inserted!');
    // Your MongoDB operations go here
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
  
});
const port = 5057
app.listen(port, () => console.log(`This app is listening on port ${port}`));