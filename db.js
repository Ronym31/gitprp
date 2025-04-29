const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ronitmonga5:Prplab@cluster0.tznasuo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/secf', {})

.then((res)=> console.log("connected to db"))
.catch((err)=> console.log("Error occoured " + err));