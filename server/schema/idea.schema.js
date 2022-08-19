import {Entity, Schema} from "redis-om";
class Idea extends Entity {
    toJSON() {
        return {
            id: this.entityId,
            idea_title: this.idea_title,
            idea_des: this.idea_des,
            idea_doc: this.idea_doc,
            idea_tag: this.idea_tag,
            user_id: this.user_id,
        }
    }
}

export const ideaSchema = new Schema(Idea, {
    idea_title: {
        type: 'text',
    },
    idea_des: {
        type: 'text'
    },
    idea_doc:{
        type: 'text'
    },
    user_id:{
        type: 'string'
    },
    idea_tag:{type: 'string[]'
}
}, {
    dataStructure: 'JSON'
});
