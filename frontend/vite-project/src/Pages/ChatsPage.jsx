import { useState, useEffect } from 'react';
import axios from 'axios';

const ChatsPage = () => {
  // Initialize chats as an empty array
  const [chats, setChats] = useState([]);

  // Function to fetch chats
  const fetchChats = async () => {
    try {
      // Destructure the response to get the data
      const { data } = await axios.get('http://localhost:5000/api/chats');
      console.log(data);
      setChats(data); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  // Using useEffect to call fetchChats
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.length > 0 ? (
        chats.map((chat) => (
          <li key={chat.id}>{chat.chatName}</li>
        ))
      ) : (
        <p>No chats available</p>
      )}
    </div>
  );
};

export default ChatsPage;
