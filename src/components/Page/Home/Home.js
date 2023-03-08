import React, {useState} from 'react';
import './Home.css';
import img1 from '../../images/homePage.png';
import img2 from '../../images/philippe_starck.jpg';
import img3 from '../../images/Hadley_Albert.jpg';
import img4 from '../../images/DavidHicks.jpg';
import img5 from '../../images/BillyBaldwin.jpg';
import img6 from '../../images/photo1.jpg';
import img7 from '../../images/photo2.jpg';
import img8 from '../../images/photo3.jpg';
import img9 from '../../images/photo4.jpg';
import img10 from '../../images/photo5.jpg';
import img11 from '../../images/furniture.jpg';
import img12 from '../../images/styles-colors.jpg';
import img13 from '../../images/communication.jpg';
import { Link } from 'react-router-dom';


export default function Home(props) {
  const id1 = 'essential';
  const id2 = 'standard';
  const id3 = 'premium';

  return (
    <div className='container'>
      <div className='home-image'>
        <img src={img1} width="1600" height="424" className='image' />
        <div class="top-left">Now is the time to start!</div>
        <div class="text">Learn everything you need to turn your desire to design into your life's career</div>
      </div>
      <div class="card-group" id='learn-free'>
        <div class="card">
          <img src={img11} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">The history of furniture</h5>
            <p class="card-text">Learn the origin of furniture and its importance in interior design.</p>
            <Link to='/furniture'>
              <button className='btn btn-primary'>Learn here</button>
            </Link>
          </div>
        </div>
        <div class="card">
          <img src={img12} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Styles and colors</h5>
            <p class="card-text">Discover the meaning of each color and its use in defining style.</p>
            <Link to='/styles-colors'>
              <button className='btn btn-primary'>Learn here</button>
            </Link>
          </div>
        </div>
        <div class="card">
          <img src={img13} class="card-img-top" alt="..." />
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
              <p class="card-text">Philippe Starck is a famous French industrial and interior designer, architect, and creator. From utensils to factories, apartments to hotels, most of Starck’s designs have grown to have a cult following. The hotels that he has designed have defined the modern global cityscape. He was first recognized in 1982 when he designed the apartment belonging to French President Francois Mitterrand. His most famous creations are the Ghost chair, Ero|S| chair, Bubble Club Sofa and Armchair, and La Bohème stool. His most revered interior works remain The Peninsula Hong Kong in Hong Kong, Café Costes in Paris, and fashion lounges all over France.</p>
              <Link to={{ pathname: "https://fr.wikipedia.org/wiki/Philippe_Starck"}}>See full information</Link>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mb-sm-0">
          <div class="card" id='card2' style={{width: "345px"}}>
            <img src={img3} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">Albert Hadley, one of the top designers in New York was part of Parish-Hadley, an interior design firm run by Dorothy “Sister” Parish (1910-1994) and Hadley (1920-2012). This Manhattan-based design firm has held out its position as one of the USA’s blue-chip design organizations for many decades. Albert Hadley was known for his knack for wedding glamour and functionality, a trait not many designers can boast of. Fondly known as the “Dean of American Decorators”, Hadley had an impressive client list -Astor, Mellon, Getty, and Rockefeller are a few to name. Even so, he believed “Names are not really the point”, he said in an interview with New York Magazine in 2004. “It’s what you can achieve for the simplest person. Glamour is only part of it, not the essence. Design is about discipline and reality”.</p>
              <Link to={{ pathname: "https://en.wikipedia.org/wiki/Albert_Hadley"}}>See full information</Link>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mb-sm-0">
          <div class="card" id='card3' style={{width: "342px"}}>
            <img src={img4} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">David Nightingale Hicks began his career drawing cereal boxes for the advertising agency J. Walter Thompson. He was born in Essex, England in 1929 and graduated from the Central College of Art. He rose to popularity when a magazine article about the makeover he designed for his mother’s house in London went, in what could be termed as, viral. That was the true start of his career as a decorator and interior designer. Hicks was perhaps best known for being a firm critic of designs reminiscent of stuffy old English homes. He was more interested in mixing colors, patterns, and shapes of furniture and decor to produce a luxe decor that would leave inhabitants awe-struck. His design for the Helena Rubenstein combined purple tweed walls laden with upholstered seats and magenta colors that set the interior.</p>
              <Link to={{ pathname: "https://en.wikipedia.org/wiki/David_Hicks"}}>See full information</Link>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mb-sm-0">
          <div class="card" id='card4' style={{width: "285px"}}>
            <img src={img5} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">Billy Baldwin was perhaps the only interior designer who hated the term. He preferred to be known as a ‘decorator’ even though his contribution and approach to design a home qualified him way above the title even he preferred. As far away from being a maximalist, Billy Baldwin was not exactly a minimalist either. Quality and comfort were Baldwin’s guiding principles. He believed in building up from the “good bones” of a space.The architecture was almost the primary factor in his projects, much more important to him than decoration. “Scale and proportion give everlasting satisfaction that cannot be achieved by only icing the cake”.</p>
              <Link to={{ pathname: "https://en.wikipedia.org/wiki/Billy_Baldwin_(decorator)"}}>See full information</Link>
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
