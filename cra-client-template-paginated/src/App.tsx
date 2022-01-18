
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './App.css';
import Card from './components/Card';
import ChatForm from './components/ChatForm';
import { RegularChatFragment, usePagChatsQuery } from './generated/graphql';


interface ChatProps {
  m:RegularChatFragment
  }

function App() {
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const result=usePagChatsQuery({variables:{page:1,limit:3}})
const data=result.data?.pagChats?.chats
const pageopt=result.data?.pagChats?.pagopt
//@ts-ignore

const thepage=pageopt?.page
const nextPageAvail=pageopt?.nextPage
const nextpage=thepage?thepage+1:thepage

return (
    <div className="container">
     <h1>Chat</h1>

     <div className="main">

     {
    //@ts-ignore
     data?.map((item,index)=>{
       return(
         //@ts-ignore
         <Card  m={item} key={index}/>
       )
     })}
    <button onClick={()=>{
      if(nextPageAvail){
        result.fetchMore({
          variables:{page:nextpage,limit:3}
        })
        console.log("going to next page ==== ",nextpage)
      }else{
        console.log("no next page please")
      }
    }
      }>more</button>
     </div>
        <div className="footer">
        <ChatForm/>
        </div>
    </div>
  );
}

export default App;
