const { conexionBD } = require('./db')
const { triggerEdad } = require('./triggers/trigger_edad')

// Datos del nuevo soldado
const nuevoSoldado = {
  soldado_id: 1,
  rango_id: 1,
  batallon_id: 1,
  soldado_cedula: '1316256352',
  soldado_nombre: 'Juan',
  soldado_apellido: 'Robles',
  soldado_fechanacimiento: new Date(2010, 7, 14),
  soldado_fechaenlistacion: new Date(2022, 1, 20),
  soldado_tatuaje: false,
  soldado_aceptacion: false
}

// Insertar datos
const insertar = async () => {

  // Conexión a la base de datos
  await conexionBD()

  // Pasa por el trigger
  triggerEdad(nuevoSoldado)

}

insertar()