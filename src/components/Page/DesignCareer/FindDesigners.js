import React, { useState, useEffect} from 'react';
import { getDocs, collection, query } from 'firebase/firestore';
import { Link } from "react-router-dom";
import { db } from '../../../firebase';

export default function FindDesigners() {
    const [postFound, setPostFound] = useState([]);

    useEffect(() => {
        const gettingData = async () => {
            const q = query(collection(db, "JobPosts"));
            const querySnapshot = await getDocs(q);

            let textArray = [];
            querySnapshot.forEach((doc) => {
                textArray.push({ id: doc.id, ...doc.data() });
            });

            setPostFound(textArray);
        }
        gettingData()
      }, []);

  return (
    <div>
        {postFound.map((item) => {
                return (
                    <div key={item.id} class="card" style={{width: '18rem' }}>
                        <img src={item.photo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{item.user}</h5>
                                <p class="card-text">{item.title}</p>
                                <Link to={`/view/${item.id}`}>
                                    <button className='btn btn-primary'>
                                        View
                                    </button>
                                </Link>
                            </div>
                    </div>
                )
            })}
    </div>
  )
}
