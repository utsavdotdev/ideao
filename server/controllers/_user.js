import { userRepository } from "../schema/user.schema.js";

//Getting all user
export const getAlluser = async (req, res) => {
  try {
    const allUser = await userRepository.search().returnAll();
    res.status(201).send(allUser);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

//Posting User
export const postUser = async (req, res) => {
  try {
    const { user_gid } = req.body;
    const isUser = await userRepository
      .search()
      .where("user_gid")
      .eq(user_gid)
      .return.all();
    if (isUser.length === 0) {
      const user = await userRepository.createEntity(req.body);
      user.id = await userRepository.save(user);
      res.status(201).send({ msg: "SignUp",token:user_gid });
    }
    res.status(202).send({ msg: "LogIn",token:user_gid});
  } catch (error) {
    res.status(404).send(error);
  }
};

export const getUser = async (req,res) =>{
  try {
    const token = req.params.token;
    const user = await userRepository.search().where("user_gid").eq(token).return.all();
    res.status(200).send(user)
    
  } catch (error) {
    res.status(400).send(error)
  }
}
