"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_aggregate_paginate_v2_1 = __importDefault(require("mongoose-aggregate-paginate-v2"));
const Schema = mongoose_1.default.Schema;
const ChatSchema = new Schema({
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
}, { timestamps: true });
ChatSchema.plugin(mongoose_aggregate_paginate_v2_1.default);
exports.ChatModel = mongoose_1.default.model("Test", ChatSchema);
//# sourceMappingURL=ChatModel.js.map