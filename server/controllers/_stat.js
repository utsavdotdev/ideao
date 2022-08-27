import { ideaRepository } from "../schema/idea.schema.js";
import { userRepository } from "../schema/user.schema.js";

//Website stat api
export const stat = async (req, res) => {
  try {
    const Idea = await ideaRepository.search().returnAll();
    const User = await userRepository.search().returnAll();
    res.status(200).send({ idea: Idea.length, user: User.length });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const topIdean = async (req, res) => {
  try {
    const Idea = await ideaRepository.search().returnAll();

    const userId = Idea.map((id) => id["user_id"]);
    var tmp = {},
      tops = [];
    // Create object with count of occurances of each array element
    userId.forEach(function (item) {
      tmp[item] = tmp[item] ? tmp[item] + 1 : 1;
    });

    // Create an array of the sorted object properties
    tops = Object.keys(tmp).sort(function (a, b) {
      return tmp[a] - tmp[b];
    });
    const top3 = tops.slice(-3).reverse();
    let topUser = [];
    for (let i = 0; i < top3.length; i++) {
      const user = await userRepository
        .search()
        .where("user_gid")
        .eq(top3[i])
        .return.all();
      topUser.push(user);
    }
    res.status(200).send(topUser)
  } catch (error) {
    console.log(error);
  }
};
