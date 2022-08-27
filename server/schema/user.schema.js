import { Entity, Schema } from "redis-om";
import client from "../redis/redis.js"

class User extends Entity {
  toJSON() {
    return {
      id: this.entityId,
      user_gid:this.user_gid,
      user_name: this.user_name,
      user_email: this.user_email,
      user_doc: this.user_doc,
      user_pic: this.user_pic,
    };
  }
}

const userSchema = new Schema(
  User,
  {
    user_gid: {
      type: "string",
    },
    user_name: {
      type: "string",
    },
    user_email: {
      type: "string",
    },
    user_doc: {
      type: "string",
    },
    user_pic: {
      type: "string",
    },
  },
  {
    dataStructure: "JSON",
  }
);

export const userRepository = client.fetchRepository(userSchema);
await userRepository.dropIndex();
await userRepository.createIndex();
