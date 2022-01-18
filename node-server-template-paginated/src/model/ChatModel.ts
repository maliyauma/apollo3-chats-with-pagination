import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const Schema = mongoose.Schema;
const ChatSchema = new Schema(
  {
    id: {
      type: String,
      auto: true,
    },
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  //add this for auto createdAt and updatedat fields
  { timestamps: true }
);

ChatSchema.plugin(aggregatePaginate);
export const ChatModel = mongoose.model("Test", ChatSchema);
