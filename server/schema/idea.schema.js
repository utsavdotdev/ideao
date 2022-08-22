import { Entity, Schema } from "redis-om";
import client from "../redis/redis.js";
class Idea extends Entity {
  toJSON() {
    return {
      id: this.entityId,
      idea_title: this.idea_title,
      idea_des: this.idea_des,
      idea_doc: this.idea_doc,
      idea_tag: this.idea_tag,
      user_id: this.user_id,
      idea_postedBy: this.idea_postedBy,
      idea_userImg:this.idea_userImg,
    };
  }
}

const ideaSchema = new Schema(
  Idea,
  {
    idea_title: {
      type: "text",
    },
    idea_des: {
      type: "text",
    },
    idea_doc: {
      type: "text",
    },
    user_id: {
      type: "string",
    },
    idea_userImg: {
      type: "string",
    },
    idea_postedBy: {
      type: "string",
    },
    idea_tag: { type: "string[]" },
  },
  {
    dataStructure: "JSON",
  }
);

export const ideaRepository = client.fetchRepository(ideaSchema);
await ideaRepository.dropIndex();
await ideaRepository.createIndex();
