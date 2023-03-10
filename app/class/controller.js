import ClassModel from "./index.js";
// import ProfessorModel from "../professor/index.js";

const controller = {
  index() {
    return ClassModel.find({}).populate("professor");
  },
  show(id) {
    return ClassModel.findById(id);
  },
  updateClassBuilding(id, newBuilding) {
    return ClassModel.findByIdAndUpdate(id, { building: newBuilding });
  },
};

export default controller;
