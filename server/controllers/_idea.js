import { ideaRepository } from "../schema/idea.schema.js";

//Getting all idea
export const getAllIdea = async (req, res) => {
  try {
    const allIdea = await ideaRepository.search().returnAll();
    res.status(200).send(allIdea);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// Posting idea
export const postIdea = async (req, res) => {
  try {
    const idea = ideaRepository.createEntity(req.body);
    idea.id = await ideaRepository.save(idea);
    res.status(201).send({ msg: "Posted✅" });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

//Getting specific user ideas
export const getMyIdea = async (req, res) => {
  try {
    let userId = req.params.user_id;
    const userIdea = await ideaRepository
      .search()
      .where("user_id")
      .eq(userId)
      .return.all();
    if (userIdea.length != 0) {
      res.status(201).send(userIdea);
    } else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

//Deleting specific idea
export const deleteIdea = async (req, res) => {
  try {
    await ideaRepository.remove(req.params.idea_id);
    res.status(201).send("Deleted");
  } catch (error) {
    res.status(400).send(error);
  }
};

//Search the idea
export const searchIdea = async (req, res) => {
  try {
    const search = req.params.srh;
    let srhResult = await ideaRepository
      .search()
      .where("idea_title")
      .matches(search)
      .or("idea_tag")
      .contains(search)
      .or("idea_des")
      .match(search)
      .or("idea_doc")
      .match(search)
      .return.all();
    if (srhResult.length == 0) {
      return res.status(204).send();
    }
    res.status(200).send(srhResult);
  } catch (error) {
    res.status(400).send(error);
  }
};
