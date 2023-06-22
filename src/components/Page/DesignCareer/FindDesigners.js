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
                    <div key={item.id} class="card" id="designers-card" style={{width: '20rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text">Email: {item.user}</p>
                            <p class="card-text">{item.title}</p>
                            <p class="card-text">{item.price} Є</p>
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
