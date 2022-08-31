# Introducing Ideao - A web portal of exploring ideas

Ideao is a web platform of exploring, sharing the creativeness in the form of idea. It allows to search the idea which helps you to make awesome things.

# Overview video
[![Watch the video](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1wjuowg3295futrs5b0j.png)](https://youtu.be/vR9zqIvoJWY)


## How it works
At first, Ideao communicated with the api for retrieving the idea and user data, posting them to the backend server, Searching idea and delete the idea according to the user.
### How the data is stored:
The ideao's data is stored in JSON format based upon RediJSON. The overall mapping of data is configured by Redis Om Node js package.

At first connection need to be established in redis cloud by:
```js
import { Client } from "redis-om";
const client = new Client();
const con = await client.open(process.env.REDIS_URL);
if(con){
  console.log("Redis connected");
}
export default client
```
```client``` is the instance of Redis Client used for connection. ```REDIS_URL``` is the connection endpoint url provided by redis.
#### Schema of Idea

```js
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
```

#### Schema of user

```js
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
```

All of functionality of api which makes Ideao are as follow:
- [Idea's api](https://github.com/utsavbhattarai007/ideao/blob/master/server/controllers/_idea.js)
- [User's api](https://github.com/utsavbhattarai007/ideao/blob/master/server/controllers/_user.js)
- [Stat's api](https://github.com/utsavbhattarai007/ideao/blob/master/server/controllers/_stat.js)

### How the data is accessed:

All the Json data is managed by Redis om. Frontend makes request through different ```/api``` routes to accessed the data like: 
```js
//Routes
app.use("/api/idea", Idea);
app.use("/api/user", User);
app.use("/api/stat", Stat);
```
Some example of requesting api are:
```js
//Geting all Idea
const res = await axios.get(`${url}/api/idea`);
```
```js
//Posting the idea
const res = await axios.post(
      `${url}/api/idea`,
      {
        idea_title: idea_title,
        idea_des: idea_des,
        idea_doc: moment().format("ll"),
        user_id: user[0]?.user_gid,
        idea_userImg: user[0]?.user_pic,
        idea_postedBy: user[0]?.user_name,
        idea_tag: finalTag,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
```
Package like:
- axios (used for creating Http request)
- moment (used date and time)

Note: ```url``` is the backend server url where backend is hosted

### Prerequisites
- Node - v16.13.0
- npm - v8.4.1
- yarn -v1.22.18

### Local installation

```
# Move to local branch
git checkout local
```

Go to `/server` folder (`cd ./server`) and then:

```
# copy file and set proper data inside
cp .env.example .env

# install dependencies
yarn install

# Run server
yarn server
```

Go to `/client` folder (`cd ./client`) and then:

```
# copy file and set proper data inside
cp .env.example .env

# install dependencies
yarn install

# run development mode
yarn dev
```

Locally,Ideao runs in:
- Server ```localhost:3001```
- Frontend ```127.0.0.1:5173``` 


## Deployment
This web app is deployed at:
-  Netlify (Frontend)
-  Heroku (For backend)

## More Information about Redis Stack

Here some resources to help you quickly get started using Redis Stack. If you still have questions, feel free to ask them in the [Redis Discord](https://discord.gg/redis) or on [Twitter](https://twitter.com/redisinc).

### Getting Started

1. Sign up for a [free Redis Cloud account using this link](https://redis.info/try-free-dev-to) and use the [Redis Stack database in the cloud](https://developer.redis.com/create/rediscloud).
1. Based on the language/framework you want to use, you will find the following client libraries:
    - [Redis OM .NET (C#)](https://github.com/redis/redis-om-dotnet)
        - Watch this [getting started video](https://www.youtube.com/watch?v=ZHPXKrJCYNA)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-dotnet/)
    - [Redis OM Node (JS)](https://github.com/redis/redis-om-node)
        - Watch this [getting started video](https://www.youtube.com/watch?v=KUfufrwpBkM)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-node/)
    - [Redis OM Python](https://github.com/redis/redis-om-python)
        - Watch this [getting started video](https://www.youtube.com/watch?v=PPT1FElAS84)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-python/)
    - [Redis OM Spring (Java)](https://github.com/redis/redis-om-spring)
        - Watch this [getting started video](https://www.youtube.com/watch?v=YhQX8pHy3hk)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-spring/)

The above videos and guides should be enough to get you started in your desired language/framework. From there you can expand and develop your app. Use the resources below to help guide you further:

1. [Developer Hub](https://redis.info/devhub) - The main developer page for Redis, where you can find information on building using Redis with sample projects, guides, and tutorials.
1. [Redis Stack getting started page](https://redis.io/docs/stack/) - Lists all the Redis Stack features. From there you can find relevant docs and tutorials for all the capabilities of Redis Stack.
1. [Redis Rediscover](https://redis.com/rediscover/) - Provides use-cases for Redis as well as real-world examples and educational material
1. [RedisInsight - Desktop GUI tool](https://redis.info/redisinsight) - Use this to connect to Redis to visually see the data. It also has a CLI inside it that lets you send Redis CLI commands. It also has a profiler so you can see commands that are run on your Redis instance in real-time
1. Youtube Videos
    - [Official Redis Youtube channel](https://redis.info/youtube)
    - [Redis Stack videos](https://www.youtube.com/watch?v=LaiQFZ5bXaM&list=PL83Wfqi-zYZFIQyTMUU6X7rPW2kVV-Ppb) - Help you get started modeling data, using Redis OM, and exploring Redis Stack
    - [Redis Stack Real-Time Stock App](https://www.youtube.com/watch?v=mUNFvyrsl8Q) from Ahmad Bazzi
    - [Build a Fullstack Next.js app](https://www.youtube.com/watch?v=DOIWQddRD5M) with Fireship.io
    - [Microservices with Redis Course](https://www.youtube.com/watch?v=Cy9fAvsXGZA) by Scalable Scripts on freeCodeCamp
