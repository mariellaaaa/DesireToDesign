import React, { useEffect, useState } from 'react';
import { getDoc, doc, getDocs, collection, where, setDoc, updateDoc, serverTimestamp, query } from 'firebase/firestore';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { db } from '../../../firebase';
import { useUserAuth } from '../../../context/UserAuthContext';

export default function ViewPost() {

  const [viewDesigner, setViewDesigner] = useState([]);
  const { user } = useUserAuth();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
    useEffect(() => {
        id && gettingPasteId();
    }, [id]);

    const gettingPasteId = async () => {
      const docRef = doc(db, "JobPosts", id);
      const snapshot = await getDoc(docRef);
      setViewDesigner(snapshot.data());
  }

    const handleSelect = async () => {
        
        const q = query(collection(db, "Users"), where("email", "==", viewDesigner.user));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUserData(doc.data());
        })

        const combinedId = 
            user.uid > userData.uid 
                ? user.uid + userData.uid 
                : userData.uid + user.uid;

        try {
            const res = await getDoc(doc(db, "Chats", combinedId));

            if(!res.exists()) {
                await setDoc(doc(db,"Chats", combinedId), { messages: [] });

                await updateDoc(doc(db, "UserChats", user.uid), {
                    [combinedId+".userInfo"]: {
                        uid: userData.uid,
                        email: userData.email,
                    },
                    [combinedId+".date"]: serverTimestamp()
                });

                await updateDoc(doc(db, "UserChats", userData.uid), {
                    [combinedId+".userInfo"]: {
                        uid: user.uid,
                        email: user.email,
                    },
                    [combinedId+".date"]: serverTimestamp()
                });
            }
        } catch (err) {}
        setUserData(null);
        navigate("/private-chat");
    }

  return (
    <div>
      <div class="card text-center" id='designer'>
        <div class="card-header">
          Interior Designer
        </div>
        <div class="card-body">
          <h5 class="card-title">{viewDesigner.name}</h5>
          <p class="card-text">Email: {viewDesigner.user}</p>
          <p class="card-text">{viewDesigner.title}</p>
          <p class="card-text">from {viewDesigner.price} Є</p>
          <p class="card-text">{viewDesigner.text}</p>
        </div>
        <div class="card-footer text-body-secondary">
            <button className='btn btn-primary' onClick={handleSelect}>
              Send a message
            </button>
        </div>
      </div>
    </div>
  )
}

