// import { useContext } from 'react'
// import { ChatContext } from '../../context/chatContext'
// interface user {
//     _id: string;
// }
// export const PotentialChats = () => {
   
//     const userId = localStorage.getItem('userId') || '';
//     const user: user = { _id: userId };
//     const { potentialChats, createChat } = useContext(ChatContext);


//     return (

//         <div className='all-users'>
//             {potentialChats && potentialChats.map((u, index) => {
//                 return (
//                     <div className='single-user' key={index} onClick={() => createChat(user._id, u._id)}>
//                         {u.name}
//                         <span className='user-online'></span>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
