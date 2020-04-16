const Paciente = require("../models/Paciente");

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
    const paciente = await Paciente.findById(req.params.id);
    res.json(paciente);
  } catch (error) {
    next(error);
  }
}

exports.eliminarPaciente = async (req,res,next) => {
  try {
    await Paciente.findByIdAndDelete(req.params.id);
    res.json({
      mensaje: "Paciente eliminado correctamente"
    });
  } catch (error) {
    next(error);
  }
}

exports.actualizarPaciente = async (req,res,next) => {
  try {
    const paciente = await Paciente.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(paciente);
  } catch (error) {
    next(error);
  }
}