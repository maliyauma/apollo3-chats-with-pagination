import './card-form.css'
import React, { useState } from "react";
import { useAddChatMutation, RegularChatFragmentDoc } from './../generated/graphql';

 interface ChatFormProps {
    
  }

 const ChatForm: React.FC<ChatFormProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

;
  

  const [textBack]=useAddChatMutation()

  const [input, setInput] = useState( {title:"test",desc:"node"} )

  const handleChange = (evt:any) => {
  const value = evt.target.value;
    setInput({
      ...input,
   [evt.target.id]: value
      });
    };

  const handleSubmit = (e:any) => {
  e.preventDefault();
  
   textBack(
      {
        variables:{input},
        
        update(cache, { data }) {
        const item=data?.addChat?.chat
      
          cache.modify({
            fields: {
              items(existingItem = []) {
                const newItem = cache.writeFragment({
                  data:item,
                  fragment:RegularChatFragmentDoc
                });
                return [...existingItem, newItem];
              },
              pagChats(existingItem = []) {
                const newItem = cache.writeFragment({
                  data:item,
                  fragment:RegularChatFragmentDoc
                });
                console.log("new item get pag   ",newItem,existingItem)
                return{__typename: 'PagedChatResponse', 
                chats:[...existingItem.chats, newItem], pagopt:existingItem.pagopt};
              }
            }
          });
        }

      }).then(e=>{
         console.log("saving item ========== ",e)
      }).catch(e=>{
        console.log("error saving item ========== ",e)
     })
      

  };
  return (
    <div className="container">
      <form className="theform">
       <div className="inputgroup">
         <input
            className= "theinput"
            id="title"
            placeholder="type.."
            onChange={handleChange}
            value={input.title}
          />
          <input
            className= "theinput"
            id="desc"
            placeholder="type.."
            onChange={handleChange}
            value={input.desc}
          />
         <button className="formbutton" onClick={handleSubmit}>
          send
        </button>
        </div>
       </form>
    </div>
  );
};

export default ChatForm
