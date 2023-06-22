import React, {useState, useEffect} from 'react';
import '../Page/Home/Home.css';
import img1 from '../images/homePage.png';
import img2 from '../images/philippe_starck.jpg';
import img3 from '../images/Hadley_Albert.jpg';
import img4 from '../images/DavidHicks.jpg';
import img5 from '../images/BillyBaldwin.jpg';
import img6 from '../images/photo1.jpg';
import img7 from '../images/photo2.jpg';
import img8 from '../images/photo3.jpg';
import img9 from '../images/photo4.jpg';
import img10 from '../images/photo5.jpg';
import { Link } from 'react-router-dom';
import { addDoc, collection, doc, serverTimestamp, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../../firebase';
import './AdminHome.css';



export default function AdminHome(props) {
  const id1 = 'essential';
  const id2 = 'standard';
  const id3 = 'premium';
  const [id, setId] = useState("");
  const [text, setText] = useState("");
  const [databaseText1, setDatabaseText1] = useState([]);
  const [databaseText2, setDatabaseText2] = useState([]);
  const [databaseText3, setDatabaseText3] = useState([]);
  const [databaseText4, setDatabaseText4] = useState([]);

  useEffect(() => {
    const gettingData = async () => {
      const docRef1 = doc(db, "HomePage", 'Document_1');
      const snapshot1 = await getDoc(docRef1);
      setDatabaseText1(snapshot1.data());
      setText(databaseText1.text);
      const docRef2 = doc(db, "HomePage", 'Document_2');
      const snapshot2 = await getDoc(docRef2);
      setDatabaseText2(snapshot2.data());
      setText(databaseText2.text);
      const docRef3 = doc(db, "HomePage", 'Document_3');
      const snapshot3 = await getDoc(docRef3);
      setDatabaseText3(snapshot3.data());
      setText(databaseText3.text);
      const docRef4 = doc(db, "HomePage", 'Document_4');
      const snapshot4 = await getDoc(docRef4);
      setDatabaseText4(snapshot4.data());
      setText(databaseText4.text);
    }
    gettingData()
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setId(event.target.id)
    if (id == "Document_1") {
      setDatabaseText1(event.target.value);
      setText(databaseText1);
      console.log(text)
    } else if (id == "Document_2") {
      setDatabaseText2(event.target.value);
      setText(databaseText2);
    } else if (id == "Document_3") {
      setDatabaseText3(event.target.value);
      setText(databaseText3);
    } else if (id == "Document_4") {
      setDatabaseText4(event.target.value);
      setText(databaseText4);
    }
  }

  const saveChanges = async (event) => {
    event.preventDefault();
    const docRef = doc(db, "HomePage", id);
    await updateDoc(docRef, {
      text: text,
      createdAt: serverTimestamp(),
    });
  }

  return (
    <div className='container'>
      <div className='home-image'>
        <img src={img1} width="1600" height="424" className='image' />
        <div class="top-left">Now is the time to start!</div>
        <div class="text">Learn everything you need to turn your desire to design into your life's career</div>
        <Link to='/find/designers'>
          <button class="btn-search">Looking for a designer</button>
        </Link>
        <Link to='/post/job'>
          <button class="btn-job">Post your design skills</button>
        </Link>
      </div>
      <div class="card-group" id='learn-free'>
        <div class="card">
          <img src="https://images-prod.anothermag.com/900/azure/another-prod/350/4/354967.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">The history of furniture</h5>
            <p class="card-text">Learn the origin of furniture and its importance in interior design.</p>
            <Link to='/furniture'>
              <button className='btn btn-primary'>Learn here</button>
            </Link>
          </div>
        </div>
        <div class="card">
          <img src="https://www.kilz.com/blog/wp-content/uploads//2020/04/Calming-and-Energizing-Paint-Colors-_header_trends_2020.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Styles and colors</h5>
            <p class="card-text">Discover the meaning of each color and its use in defining style.</p>
            <Link to='/styles-colors'>
              <button className='btn btn-primary'>Learn here</button>
            </Link>
          </div>
        </div>
        <div class="card">
          <img src="https://resources.workable.com/wp-content/uploads/2020/10/Effective-workplace-communication-01.png" style={{height: "282px"}} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Communication techniques</h5>
            <p class="card-text">Understand the customer's preferences from the first conversation.</p>
            <Link to='/communication'>
              <button className='btn btn-primary'>Learn here</button>
            </Link>
          </div>
        </div>
      </div>
      <div class="alert alert-secondary" id='famous-designers' role="alert">
        Find your way inspired by the most famous interior designers
      </div>
      <div class="row">
        <div class="col-sm-2">
          <div class="card" id='card1' style={{width: "18rem"}}>
            <img src={img2} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">
                <textarea
                  style={{width: "250px"}}
                  rows='20'
                  type='text'
                  id='Document_1'
                  value={databaseText1.text}
                  onChange={event => handleChange(event)}
                >{databaseText1.text}</textarea>
              </p>
              <button onClick={saveChanges}>Save changes</button>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mb-sm-0">
          <div class="card" id='card2' style={{width: "345px"}}>
            <img src={img3} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">
                <textarea
                  style={{width: "310px"}}
                  rows='20' 
                  type='text'
                  id='Document_2'
                  value={databaseText2.text}
                  onChange={event => handleChange(event)}
                >{databaseText2.text}</textarea>
              </p>
              <button onClick={saveChanges}>Save changes</button>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mb-sm-0">
          <div class="card" id='card3' style={{width: "342px"}}>
            <img src={img4} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">
                <textarea
                  style={{width: "310px"}} 
                  rows='20'
                  type='text'
                  id='Document_3'
                  value={databaseText3.text}
                  onChange={event => handleChange(event)}
                >{databaseText3.text}</textarea>
              </p>
              <button onClick={saveChanges}>Save changes</button>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mb-sm-0">
          <div class="card" id='card4' style={{width: "285px"}}>
            <img src={img5} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">
              <textarea
                style={{width: "250px"}} 
                rows='20'
                type='text'
                id='Document_4'
                value={databaseText4.text}
                onChange={event => handleChange(event)}
              >{databaseText4.text}</textarea>
              </p>
              <button onClick={saveChanges}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <hr className='hr2'/>
      <div class="alert alert-secondary" id='price-message' role="alert">
        Choose the most suitable learning option for you
      </div>
      <div className='row'>
        <div class="card text-center mb-3" id='price1' style={{width: "25rem"}}>
          <div class="card-body">
            <h5 class="card-title" style={{color: "#70397d"}}>ESSENTIEL</h5>
            <p class="card-text">The possibility of having access to certain sections in the course, technical or three-dimensional design using modern technologies.</p>
            <p className='price'>500€</p>
            <Link to={`/learning-options/${id1}`}>
              <button class="btn btn-primary" onClick={() =>{
                props.setId("ESSENTIAL");
              }}>Register</button>
            </Link>
          </div>
        </div>
        <div class="card text-center mb-3" id='price2' style={{width: "25rem"}}>
          <div class="card-body">
            <h5 class="card-title" style={{color: "#70397d"}}>STANDARD</h5>
            <p class="card-text">Full course to acquire all the necessary knowledge to start a career as an interior designer.</p>
            <p className='price'>1100€</p>
            <Link to={`/learning-options/${id2}`}>
              <button class="btn btn-primary" onClick={() =>{
                props.setId("STANDARD");
              }}>Register</button>
            </Link>
          </div>
        </div>
        <div class="card text-center mb-3" id='price3' style={{width: "25rem"}}>
          <div class="card-body">
            <h5 class="card-title" style={{color: "#70397d"}}>PREMIUM</h5>
            <p class="card-text">Full course with all the necessary materials and ensuring the help of a specialist to obtain a job in the field.</p>
            <p className='price'>1900€</p>
            <Link to={`/learning-options/${id3}`}>
              <button class="btn btn-primary" onClick={() =>{
                props.setId("PREMIUM");
              }}>Register</button>
            </Link> 
          </div>
        </div>
      </div>
      <div className='text-div'>
        <p id='portfolio'>Browse the portfolio of our students and see the high quality of DesireToDesign school services that you can benefit from.</p>
      </div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img6} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img7} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img8} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img9} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img10} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <hr className='hr3' />
      <div className='down-space'>
        DesireToDesign school
      </div>
    </div>
  )
}