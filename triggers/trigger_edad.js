const { Soldado } = require('../esquemas')

const fechaActual = new Date();
const SEGUNDOS = 60
const MINUTOS = 60
const HORAS = 24
const ANIOS = 365.25

const triggerEdad = (soldado) => {

  // Desestructuración del objeto enviado
  const { soldado_fechanacimiento } = soldado

  try {

    // Verificar fecha
    const esFecha = soldado_fechanacimiento instanceof Date
    if(!esFecha){
      throw 'El valor ingresado no es una fecha'
    }

    // Verificar edad actual
    const obtenerSegundos = (soldado_fechanacimiento.getTime() - fechaActual.getTime()) / 1000
    const obtenerAnios = (obtenerSegundos / (SEGUNDOS * MINUTOS * HORAS)) / ANIOS
    const edad = Math.abs(Math.round(obtenerAnios))

    if(edad < 17){
      throw `La edad del soldado es de ${edad} años \n` +
      'No se insertó el registro'
    } else {

      // Crear el soldado a partir del Schema
      const insertarSoldado = new Soldado(soldado)

      // Se inserta el soldado a la base de datos
      insertarSoldado.save()

      console.log('Se insertó el registro correctamente')
    }

  } catch (error) {
    console.error(error)
  }
}

module.exports = { triggerEdad }