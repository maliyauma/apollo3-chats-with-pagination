import { ChatModel } from "./../model/ChatModel";

export const ChatResolver = {
  Query: {
   
    chats: async () => {
      const chats = await ChatModel.find({});
      const fiexdarr=[]
      chats?.map((item)=>{
         const newobj={
           //@ts-ignore 
           id:item._id,title:item.title,desc:item.desc
         }
      //@ts-ignore 
       fiexdarr.push(newobj)
       })
      console.log("holt output ======", fiexdarr);
      return fiexdarr;
    },
    pagChats:async(parent, {limit=3,page=0}, context, info)=>{
      //@ts-ignore
      const myAggregate = ChatModel.aggregate();
      const options = {
        page: page,
        limit: limit,
      };
      let chats=[]
      let pagopt={}
       //@ts-ignore
      await ChatModel.aggregatePaginate(myAggregate, options)
      .then((results)=>{
        // console.log("results in then ======== ",results);
        const{ docs, totalDocs, limit,  page, totalPages ,pagingCounter,
          hasPrevPage, hasNextPage, prevPage,  nextPage}=results
       chats=docs
        
        pagopt={  totalDocs,limit,page,totalPages,pagingCounter,
          hasPrevPage,hasNextPage,prevPage,nextPage
        }
      })
      .catch(function (err) {
        console.log("agregaed resultsresults ======== ",err);
      });
      // console.log("person returned is ======= ",persons)
  
      const fiexdarr=[]
      chats?.map((item)=>{
         const newobj={
           //@ts-ignore 
           id:item._id,title:item.title,desc:item.desc
         }
      //@ts-ignore 
       fiexdarr.push(newobj)
       })
       console.log("+++++++++++query page ===  ",page,"fixedarray+++++++++++++",fiexdarr);
       const listy={
         chats:fiexdarr,
         pagopt
      }
      return listy
      },
    
  },
  Mutation: {
    //shape of params (parent,args, context, info)
    addChat: async (parent, { input}, context, info) => {
      let chat = {};
      let error = {};
      try {
        const newChat = await new ChatModel({
          title:input.title,
          desc:input.desc,
        });
        chat = await newChat.save();
        console.log("item  ==== ", chat);
      } catch (e) {
        console.log("addTest error response =====", e.message);
        error = e;
      }
      //@ts-ignore
      const item={ id:chat._id, desc:chat.desc,title:chat.title }
      return {
        chat:item,
        error: {
          //@ts-ignore
          message: error.message,
        },
      };
    },

    //update by id
       updateChat: async (parent, { input,id}, context, info) => {
         console.log("props in update resolver  ",input,id)
       let error = {};
        const updatedChat= await ChatModel.findByIdAndUpdate(
          {_id:id},
          { title:input.title,desc:input.desc}, 
          {new: true}
        )
        .catch(e=>{
          console.log("is delete error ======",e)
          error=e
         })
         console.log("updated chat is   ",updatedChat)
         const item={
           id:updatedChat._id,
           desc:updatedChat.desc,
           title:updatedChat.title
         }
        return {
          chat: item,
          error: {
            //@ts-ignore
            message: error.message,
          },
        };
      },

      deleteChat: async (parent, { input,id}, context, info) => {
        let error = {};
        await ChatModel.findByIdAndDelete(
           {_id:id},
         )
         .catch(e=>{
           console.log("is delete error ======",e)
           error=e
           return false
          })
         return true
       },
  },
};
