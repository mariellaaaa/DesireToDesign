import React, { useState } from 'react';
import './DesignCareer.css';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../../../firebase';
import { useUserAuth } from '../../../context/UserAuthContext';

export default function PostJob() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [success, setSuccess] = useState(false);
    const [displayMessage, setDisplayMessage] = useState("");

    const pasteRef = collection(db, "JobPosts");
    let { user } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (text === "" || title === "" || name === "") return;

        await addDoc(pasteRef, {
            title: title,
            price: price,
            text: text,
            createdAt: serverTimestamp(),
            name: name,
            user: user.email
        });

        setText("");
        setTitle("");
        setPrice("");
        setName("");
        setDisplayMessage(`Your Paste has successfully created!`);
        setSuccess(true);
    };

  return (
    <div>
        <div>
            <p>Post my interior design's services</p>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Designer's name</span>
            <input 
                type="text" 
                class="form-control" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Post Title</span>
            <input 
                type="text" 
                class="form-control" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Price</span>
            <input 
                type="text" 
                class="form-control" 
                value={price}
                onChange={(e) => setPrice(e.target.value)} 
            />
            <span class="input-group-text">€</span>
        </div>
        <div class="input-group">
            <span class="input-group-text">Add more details about your skills</span>
            <textarea 
                class="form-control" 
                aria-label="With textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
            >
            </textarea>
        </div>
        <button onClick={handleSubmit} class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Post it</button>
        {success && (
            <div className="alert alert-success" role="alert">
                {displayMessage}
            </div>
        )}
    </div>
  )
}
