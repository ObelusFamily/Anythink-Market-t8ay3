var mongoose = require("mongoose");
var isProduction = process.env.NODE_ENV === "production";

if (!process.env.MONGODB_URI) {
    console.warn("Missing MONGODB_URI in env, please add it to your .env file");
  }
  
  mongoose.connect(process.env.MONGODB_URI);
  if (isProduction) {
  } else {
    mongoose.set("debug", true);
  }
  
  require("../models/User");
  require("../models/Item");
  require("../models/Comment");
  require("../config/passport");

var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");
var User = mongoose.model("User");
async function seedAllEntities(){
    for(let i = 1; i < 101; i++){
        let fakeUser = {
            username: `userfake${i}`,
            email: `user_${i}@fake.faky`,
            bio: `User ${i} is ${i%2 ? 'not' : ''} important`
        }
        let fakeItem = {
            slug: `faky-book-${i}`,
            title: `Faky book ${i}`,
            description: `A bunch of papers wrapped by binding (#${1})`,
        }
        let fakeComment = {
            body: `book (#${1}) is so ${i%2 ? 'wonderful' : 'disappointing'}`,
        }
        let user = new User(fakeUser);
        let userCreated = await user.save()
        let item = new Item(fakeItem);
        item.seller = userCreated;
        let itemCreated = await item.save();
        let comment = new Comment(fakeComment);
        comment.seller = userCreated;
        comment.item = itemCreated;
        await comment.save();
    }
}
seedAllEntities().then(()=>{
    process.exit();
})