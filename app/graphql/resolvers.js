import classController from "../class/controller.js";

const resolvers = {
  Query: {
    // indexClasses: async() => {}
    async indexClasses() {
      return await classController.index();
    },
  },
};

export default resolvers;
