import { Client } from "redis-om";
const client = new Client();
const con = await client.open(process.env.REDIS_URL);
if(con){
  console.log("Redis connected");
}
export default client;
