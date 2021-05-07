const express = require('express');

const app = express();
const PORT = 4000;

const timelogCtrl = require("./controllers/timelog_controller");

//this is the top level middleware
// this will translate incoming data from req.body from Json to Js
app.use(express.json());


app.get('/api/time', timelogCtrl.getTime)
app.post('/api/time', timelogCtrl.addTime)
app.delete('/api/time/:id',timelogCtrl.deleteTime)
app.put('/api/time/:id', timelogCtrl.editTime)
// server is listening to incoming requests 
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});