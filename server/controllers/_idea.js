import { Client } from "redis-om";
import { connectDb } from "../redis/redis.js";
import { ideaSchema } from "../schema/idea.schema.js";
const client = new Client();

const createIdeaIndex = async () => {
  await connectDb();
  const ideaRepository = client.fetchRepository(ideaSchema);
  await ideaRepository.dropIndex();
  await ideaRepository.createIndex();
};

export const getAllIdea = async (req, res) => {
  try {
    await createIdeaIndex();
    const allIdea = await ideaRepository.search().returnAll();
    res.status(201).send(allIdea);
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
};

export const postIdea = async (req, res) => {
  try {
    await createIdeaIndex();
    const idea = ideaRepository.createEntity(req.body);
    idea.id = await ideaRepository.save(idea);
    res.status(201).send(idea);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};
export const getMyIdea = async (req, res) => {
  try {
  } catch (error) {}
};
