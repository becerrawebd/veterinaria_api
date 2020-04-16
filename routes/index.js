const express = require('express');
const pacienteController = require('../controllers/pacienteController');

const router = express.Router();


module.exports = function(){

    router.get('/pacientes',
        pacienteController.obtenerPacientes
    )

    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    )

    router.post('/pacientes', 
        pacienteController.nuevoPaciente
    )

    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    )

    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    )
    

    return router;
}