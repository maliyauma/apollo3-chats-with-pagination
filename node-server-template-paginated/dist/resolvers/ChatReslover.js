"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatResolver = void 0;
const ChatModel_1 = require("./../model/ChatModel");
exports.ChatResolver = {
    Query: {
        chats: async () => {
            const chats = await ChatModel_1.ChatModel.find({});
            const fiexdarr = [];
            chats === null || chats === void 0 ? void 0 : chats.map((item) => {
                const newobj = {
                    id: item._id, title: item.title, desc: item.desc
                };
                fiexdarr.push(newobj);
            });
            console.log("holt output ======", fiexdarr);
            return fiexdarr;
        },
        pagChats: async (parent, { limit = 3, page = 0 }, context, info) => {
            const myAggregate = ChatModel_1.ChatModel.aggregate();
            const options = {
                page: page,
                limit: limit,
            };
            let chats = [];
            let pagopt = {};
            await ChatModel_1.ChatModel.aggregatePaginate(myAggregate, options)
                .then((results) => {
                const { docs, totalDocs, limit, page, totalPages, pagingCounter, hasPrevPage, hasNextPage, prevPage, nextPage } = results;
                chats = docs;
                pagopt = { totalDocs, limit, page, totalPages, pagingCounter,
                    hasPrevPage, hasNextPage, prevPage, nextPage
                };
            })
                .catch(function (err) {
                console.log("agregaed resultsresults ======== ", err);
            });
            const fiexdarr = [];
            chats === null || chats === void 0 ? void 0 : chats.map((item) => {
                const newobj = {
                    id: item._id, title: item.title, desc: item.desc
                };
                fiexdarr.push(newobj);
            });
            console.log("+++++++++++query page ===  ", page, "fixedarray+++++++++++++", fiexdarr);
            const listy = {
                chats: fiexdarr,
                pagopt
            };
            return listy;
        },
    },
    Mutation: {
        addChat: async (parent, { input }, context, info) => {
            let chat = {};
            let error = {};
            try {
                const newChat = await new ChatModel_1.ChatModel({
                    title: input.title,
                    desc: input.desc,
                });
                chat = await newChat.save();
                console.log("item  ==== ", chat);
            }
            catch (e) {
                console.log("addTest error response =====", e.message);
                error = e;
            }
            const item = { id: chat._id, desc: chat.desc, title: chat.title };
            return {
                chat: item,
                error: {
                    message: error.message,
                },
            };
        },
        updateChat: async (parent, { input, id }, context, info) => {
            console.log("props in update resolver  ", input, id);
            let error = {};
            const updatedChat = await ChatModel_1.ChatModel.findByIdAndUpdate({ _id: id }, { title: input.title, desc: input.desc }, { new: true })
                .catch(e => {
                console.log("is delete error ======", e);
                error = e;
            });
            console.log("updated chat is   ", updatedChat);
            const item = {
                id: updatedChat._id,
                desc: updatedChat.desc,
                title: updatedChat.title
            };
            return {
                chat: item,
                error: {
                    message: error.message,
                },
            };
        },
        deleteChat: async (parent, { input, id }, context, info) => {
            let error = {};
            await ChatModel_1.ChatModel.findByIdAndDelete({ _id: id })
                .catch(e => {
                console.log("is delete error ======", e);
                error = e;
                return false;
            });
            return true;
        },
    },
};
//# sourceMappingURL=ChatReslover.js.map