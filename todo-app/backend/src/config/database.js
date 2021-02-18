const mongoose = require('mongoose')
// mongoose.Promise = global.Promise


module.exports = mongoose.connect('mongodb+srv://rpg:rpg@cluster0.0ddez.mongodb.net/cursoReact?retryWrites=true&w=majority',{ 
  useNewUrlParser: true,
  useUnifiedTopology: true,

}, () => {
  try {
    console.log("Mongo conectado")
  } catch (error) {
    console.log(`Error: ${error}`)
  }
})