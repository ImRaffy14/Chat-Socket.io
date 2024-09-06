import React, { useState, useEffect } from 'react';
import { useSocket } from '../Context/SocketContext'
import _ from 'lodash';



function Chats() {
    const socket = useSocket();
    const [message, setMessage] = useState('');
    const [recieve, setRecieve] = useState([]);
    const [userId, setUserId] = useState('');
    const [isTyping, setIsTyping] = useState(false)

    //Socket Connection From Context
    
    useEffect(() => {

      if (!socket) return;
  
      socket.on('connect', () => {
        setUserId(socket.id);
      });
  
  
      const handleMessage = (response) => {
        setRecieve((prevRecieve) => [...prevRecieve, response]);
      };
  
      const handleTyping = (response) => {
        setIsTyping(response.typing);
      };
  
      //Handles recieve typing
      socket.on('receive-typing', handleTyping);
  
      socket.on('recieveMessage', handleMessage);
  
      return () => {
        socket.off('recieveMessage', handleMessage);
        socket.off('recieve-typing', handleTyping)
      };
  
    }, [socket]);
  
  
  
    //Handle isTyping
    useEffect(() => {
      if (!socket) return;
      
      const debouncedEmitTyping = _.debounce(() => {
        if (message.length) {
          socket.emit('handle-typing', { typing: true });
        } else {
          socket.emit('handle-typing', { typing: false });
        }
      }, 300); 
  
      debouncedEmitTyping();
  
      return () => {
        debouncedEmitTyping.cancel();
      };
    }, [message]);
  
  
  
    // SEND FUNCTION
    const handleSubmit = (message) => {
      socket.emit("sendMessage", { message, sender: userId });
      setMessage('')
    };
  
    return (
      <>
        <div className="h-screen w-full bg-gray-400">
          <div className="max-w-screen-xl mx-auto flex flex-col h-full justify-center items-center">
            <div className="mt-[100px] bg-gray-800 p-10 rounded-3xl">
              <div className="w-full">
                {recieve.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === userId ? 'justify-end' : 'justify-start'} my-4`}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        msg.sender === userId ? 'bg-blue-500 text-white' : 'bg-gray-300'
                      }`}
                    >
                      <div>{msg.sender}</div>
                      <div>{msg.time}</div>
                      <div>{msg.message}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {isTyping && <div> <h1 className="text-white">Typing.....</h1> </div>}
  
              <input
                className="input input-bordered mx-2 w-[300px] mt-5"
                placeholder="Message here..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              <button className="btn" onClick={() => handleSubmit(message)}>Send</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Chats
