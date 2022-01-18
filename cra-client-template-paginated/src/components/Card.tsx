import "./card.css";
import dayjs from "dayjs";

import { FaTrash,FaEdit,FaCheck } from "react-icons/fa";
import { useState } from 'react';
import { useUpdateChatMutation, useDeleteChatMutation,RegularChatFragment } from './../generated/graphql';


interface ChatProps {
m:RegularChatFragment
}
//@ts-ignore
const Card: React.FC<ChatProps> = ({ m }) => {

  const [deleteChat] = useDeleteChatMutation()
  const [editing, setEditing] = useState(false)  

  const [updateChat]=useUpdateChatMutation()
  const [input, setInput] = useState( {title:m.title,desc:m.desc} )

  const handleChange = (evt:any) => {
  const value = evt.target.value;
    setInput({
      ...input,
   [evt.target.id]: value
      });
    };

const startEditing=()=>{
setEditing(true)
}
const stopEditing=()=>{
console.log(input)
console.log(" update id at   ",m.id)
//@ts-ignore
updateChat({variables:{id:m.id,input}})
.then((e) => {
  setEditing(false)
  console.log("update chat response========= ", e)
})
.catch((e) => console.log("update chat error========= ", e));
}

  return (
    <div key={m.id} className="card">
      <div className="cardheader">
        <div className="cardheaderid"></div>

        <div className="cardheaderid">
        {editing?<div>
            <input
            className= "theinput"
            id="title"
            placeholder="type.."
            onChange={handleChange}
            //@ts-ignore
            value={input.title}
          />
            <input
            className= "theinput"
            id="desc"
            placeholder="type.."
            onChange={handleChange}
            //@ts-ignore
            value={input.desc}
          />
          
          </div>

          
          :<p>{m.desc} {m.title} </p>}
        </div>
        <div className="cardheaderuser">by: {} </div>
      </div>
      <div className="cardmiddle">
        <div className="cardmiddlestart">
          <FaTrash
            onClick={() => {
              deleteChat({
                variables: {Id:m.id},
                update: (cache, { data }) => {
                  //remove deletedchats from cache
                  const normalizedId = cache.identify({
                    id: m.id,
                    __typename: "Chat",
                  });
                  cache.evict({ id: normalizedId });
                  cache.gc();
                },
              })
                .then((e) => console.log("delete chat response========= ", e))
                .catch((e) => console.log("delete chat error========= ", e));
            }}
          />
       
        </div>

        <div className="cardmiddlecenter">
      
        </div>

        <div className="cardmiddleend">
          {editing?
          <FaCheck onClick={()=>stopEditing()}/>
          :
          <FaEdit onClick={()=>startEditing()}/>
          }</div>
      </div>
    </div>
  );
};

export default Card;
