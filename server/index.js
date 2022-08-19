//Importing dependencies
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Client } from "redis-om";
import {ideaSchema} from "./schema/idea.schema.js"
import {userSchema} from "./schema/user.schema.js"
//Making Instances
const app = express();
const client = new Client();
dotenv.config();

//MiddleWares
app.use(express.json()); // For JSON data
app.use(cors("*")); // For incoming request

//Connection to redis
const connectDb = async () => {
  try {
    const res = await client.open(process.env.REDIS_URL);
    if (res) {
      console.log("Redis Connected✅");
    }
  } catch (error) {
    console.log(error);
  }
};
connectDb();

// Initiallizing schema
const ideaRepository = client.fetchRepository(ideaSchema);
await ideaRepository.dropIndex();
await ideaRepository.createIndex();

const userRepository = client.fetchRepository(userSchema);
await userRepository.dropIndex();
await userRepository.createIndex();

//Api Endpoint
app.get("/api/", (req, res) => {
  res.json({ msg: "Success✅" });
});

//Getting all idea
app.get("/api/idea", async (req, res) => {
  try {
    const allIdea = await ideaRepository.search().returnAll();
    res.status(201).send(allIdea);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Posting idea
app.post("/api/idea", async (req, res) => {
  try {
    const idea = ideaRepository.createEntity(req.body);
    idea.id = await ideaRepository.save(idea);
    res.status(201).send(idea);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

//Getting specific user ideas
app.get("/api/idea/:user_id", async (req, res) => {
  try {
    let userId = req.params.user_id;
    const userIdea = await ideaRepository.search().where("user_id").eq(userId).return.all();
    res.status(201).send(userIdea);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//Deleting specific idea
app.delete("/api/idea/:id", async (req, res) => {
  try {
    await ideaRepository.remove(req.params.id);
    res.status(201).send("Deleted");
  } catch (error) {
    res.status(400).send(error);
  }
});


//Posting the user api
app.post("/api/user", async (req, res) => {
  try {
    const user = userRepository.createEntity(req.body);
    user.id = await userRepository.save(user);
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

//Getting all user
app.get("/api/user", async (req, res) => {
  try {
    const allUser = await userRepository.search().returnAll();
    res.status(201).send(allUser);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//Searching api endpoint
app.get("/api/search/:srh", async (req, res) => {
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
      return res.status(404).send({ msg: "Search not found" });
    }
    res.status(201).send(srhResult);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Listening to the port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`The server is listening on the port ${PORT}`);
});
