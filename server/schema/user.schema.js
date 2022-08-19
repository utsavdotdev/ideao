import {Entity, Schema} from "redis-om";
class User extends Entity {
    toJSON() {
        return {
            id: this.entityId,
            user_name: this.user_name,
            user_email: this.user_email,
            user_doc: this.user_doc,
            user_pic: this.user_pic,
        }
    }
}

export const userSchema = new Schema(User, {
    user_name: {
        type: 'string',
    },
    user_email: {
        type: 'string'
    },
    user_doc:{
        type: 'string'
    },
    user_pic:{
        type:'string'
    }
}, {
    dataStructure: 'JSON'
});
