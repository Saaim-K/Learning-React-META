import './App.css';
import { db } from './firebase-config'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';


function App() {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users")//from what collection you want data from?
  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data);
    };
    getUsers()
  }, [])


  return (
    <>


    </>
  );
}

export default App;
