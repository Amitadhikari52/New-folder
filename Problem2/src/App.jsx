import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  const fetchRandomUser = async() => {
    try{
      const response = await axios.get('http://localhost:5001/api/user/random');
      console.log('Fetched user: ' , response.data);
      return response.data;
    }catch(error){
      console.log('error fetching data', error);
      return null;
    }
  };

  const addRecord = async() => {
    const user = await fetchRandomUser();
    if(user) {
      setUsers(prevUsers => [...prevUsers, user]);
    }else{
      console.log("No users returned to add")
    }
  }

  const deleteRecord = (index) => {
      setUsers(prevUsers => prevUsers.filter((_, i) => i !== index));
  }
  
  return (
    <div>
      <h2>Random Users</h2>
      <button onClick={addRecord}>Add Record</button>
     <ul>
          {
          users.length > 0 ? (
            users.map((user, index) => (
            <li key={index}>
              <div>

              {user.name || 'Unknown name'}
              <button onClick={() => deleteRecord(index)}>Delete</button>
              </div>
            </li>                                                              
          ))
        ) : ( 
          <p>No users added yet..</p>
        )}                          
          </ul>                      
                                        
    </div>
  )
}

export default App
