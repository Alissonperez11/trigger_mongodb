const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://admin:lhwiNpuHRWVaPbQy@cluster0.ansfv.mongodb.net/militares?retryWrites=true&w=majority'

// Conexión a la base de datos
const conexionBD = async () => {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
    .then(()=>{
      console.log('Conexión correcta a la base de datos')
    })
    .catch(err =>{
      console.error(err)
    })
}

module.exports = { conexionBD }