const UserService = require("../service/userService")

const userService = new UserService();

const create = async (req,res)=>{
    try {
        const response = await userService.create({
            email:req.body.email,
            password:req.body.password
        });
        return res.status(201).json({
            data: response,
            success:true,
            message:"Successfully created a user.",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Something went wrong in controller layer",
            err:error
        });
    }
}

const destroy = async (req,res)=>{
    try {
        const response = await userService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message:"Successfully deleted a user.",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Something went wrong in controller layer",
            err:error
        });
    }
};

const signIn = async (req,res)=>{
    try {
        const response = await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            data: response,
            success:true,
            message:"Successfully signed-in a user.",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Something went wrong in controller layer",
            err:error
        });
    }
}

const getUser = async (req,res)=>{
    try {
        const response = await userService.getUser(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message:"Successfully fetched a user.",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Something went wrong in controller layer",
            err:error
        });
    }
};

module.exports={
    create,
    destroy,
    getUser,
    signIn
}