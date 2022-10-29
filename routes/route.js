const express =require("express")
const userController = require("../controllers/User")
const router = express.Router()

module.exports = () => {
    router.use(function(req, res, next){
        console.log("Hello from Users Router")
        next();
    });

    router.get("/users", userController.getAllUsers);
    router.get("/users/:id", userController.getOneUserById)
    router.put("/users/:id", userController.updateOneUser);
    router.delete("/users/:id", userController.deleteOneUser);

    return router;
}
