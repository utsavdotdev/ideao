import { Client } from "redis-om";
const client = new Client();
export const connectDb = async () => {
  try {
    const res = await client.open(process.env.REDIS_URL);
    if (res) {
      console.log("Redis Connected✅");
    }
  } catch (error) {
    console.log("erro in db", error);
  }
};

