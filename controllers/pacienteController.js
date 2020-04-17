const Paciente = require("../models/Paciente");
const mongoose = require("mongoose");

exports.nuevoPaciente = async (req, res, next) => {
  const paciente = new Paciente(req.body);
  try {
    await paciente.save();
    res.json({
      mensaje: "El cliente se agrego correctamente",
    });
  } catch (error) {
    next(error);
  }
};

exports.obtenerPacientes = async (req,res,next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    next(error);
  }
}

exports.obtenerPaciente = async (req,res,next) => {
  try {
    if(mongoose.Types.ObjectId.isValid(req.params.id)){
      const paciente = await Paciente.findById(req.params.id);
      res.json(paciente);
    }else{
      res.json({ error: "Paciente inexistente"});
    }
  } catch (error) {
    next(error);
  }
}

exports.eliminarPaciente = async (req,res,next) => {
  try {
    if(mongoose.Types.ObjectId.isValid(req.params.id)){
      await Paciente.findByIdAndDelete(req.params.id);
      res.json({
        mensaje: "Paciente eliminado correctamente"
      });
    }else{
      res.json({ error: "Paciente inexistente"});
    }
  } catch (error) {
    next(error);
  }
}

exports.actualizarPaciente = async (req,res,next) => {
  try {
    if(mongoose.Types.ObjectId.isValid(req.params.id)){
      const paciente = await Paciente.findByIdAndUpdate(req.params.id,req.body,{new:true});
      res.json(paciente);
    }else{
      res.json({ error: "Paciente inexistente"});
    }
    
  } catch (error) {
    next(error);
  }
}