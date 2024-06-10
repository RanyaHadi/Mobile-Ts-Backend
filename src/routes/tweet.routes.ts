import { Router } from "express"; 
import { createTweetController, deleteTweetController, getTweetController, updateTweetController } from "../controllers/tweet.controller";

const tweetRouter = Router();

// Define route paths

tweetRouter.get("/:tweetId", getTweetController)
// tweetRouter.get("/", getAllTweetController)
tweetRouter.post("/", createTweetController)
tweetRouter.delete("/:tweetId", deleteTweetController)
tweetRouter.put("/", updateTweetController)

export default tweetRouter