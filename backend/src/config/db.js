const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://rodrigo:rodrigo@cluster0-xtzks.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});