import { Client } from "redis-om";

const client = new Client();

export const connectDb = async () => {
      try {
        await client.open(process.env.REDIS_URL);
        console.log("Redis Connected");
      } catch (error) {
        console.log(error);
      }
    };