import React, {useState} from "react";
import FadeIn from 'react-fade-in';
import images from './images'
import Grid from "@material-ui/core/Grid"
import BackgroundSlideshow from 'react-background-slideshow'

import image1 from './Photos/overlay slide 1.jpg'
import image2 from './Photos/overlay slide 4.jpg'
import image3 from './Photos/overlay slide 3.jpg'
import image4 from './Photos/overlay slide 5.jpg'

import { db } from './firebase'



import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

/*
to deploy

cd to your project folder

firebase init
 
firebase deploy


 */



export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>  
        </Switch>
    </Router>
  );
}

function Landing() {
  return (
    <div className="App"> 
    <BackgroundSlideshow images={[ image1, image2, image3, image4 ]} animationDelay = {3000}/>
    <div className= "overlay">
      <div className = "landing-content">  
        <div className = "slide-right">
          <FadeIn delay = {1500} transitionDuration = {2000}>
            <h1 className = "name">
              Roberta P. Food Photography
            </h1>
          </FadeIn>
          <FadeIn delay = {2000} transitionDuration = {2000}>
            <h3>
              Food and Brand Photography
            </h3>
          </FadeIn> 
        </div>    
        <FadeIn delay = {2500} transitionDuration = {2000}>      
          <button className ="btn">
              <Link to = "/Home" style = {{color: "#3d2a66", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", textDecoration:"none"}}>ENTER</Link>
          </button>
        </FadeIn>   
        </div>
      </div>     
    </div> 
  );
}



function Home() {

  let { path, url } = useRouteMatch();

  return (
    <div className = "home-container">
      <div className = "header">
        <h1 className = "name-home">
              Roberta P. Photography
        </h1>
        <nav>
          <li>
            <Link to={`${url}/gallery`} className = "Home-nav">Gallery</Link>
          </li>
          <li>
            <Link to={`${url}/about`} className = "Home-nav">About</Link>
          </li>
          <li>
            <Link to={`${url}/work`} className = "Home-nav">Work with Me</Link>
          </li>
          
        </nav>
      </div>
    
     
      
      <Switch>
        <Route exact path={path}>
          <Gallery />
        </Route>
        <Route path={`${path}/gallery`}>
          <Gallery />
        </Route>
        <Route path={`${path}/about`}>
          <About />
        </Route>
        <Route path={`${path}/work`}>
          <Work />
        </Route>
      </Switch>
    
    
      
      <footer>
        <div className = "footer-wrapper">
          <div className = "single-footer">
            <h2>Links</h2>
            <a href = "https://www.instagram.com/bakedandshot/" target = "_blank" rel="noopener noreferrer"><p>Instagram</p></a>
            <a href = "https://www.facebook.com/Not-Just-Food-112232023947292" target = "_blank" rel="noopener noreferrer"><p>Facebook</p></a>
          </div>
        </div>
      </footer>     
    </div>
  );
}

function Gallery() {
  const [showPhoto, setShowPhoto] = useState(false)
  return(
      <div className = "grid-container">
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing = {2}
          >
          {images.map(({id, src, title, type}) => 
          <Grid item xs = "auto" key = {id}>
            <img src = {src} className = "item" title= {title}  md = "auto" alt = {title} onClick = {() => {setShowPhoto(true)}}/>
            
          </Grid>)
          }
        </Grid>
        
      </div>
  )
}

function Work(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false)
  
  const handleSubmit = (evt) => {
      evt.preventDefault();

      setLoader(true)
  
      db.collection('contacts').add({
        name: name,
        email: email,
        message: message
      }).then(() => {
        alert('Message submitted! 👌')
        setLoader(false)
      }).catch(error =>{
        alert(error.message)
      })

      setName('')
      setEmail('')
      setMessage('')
  }
  return(
    <div className = "form-body">
        <p className = "form-text-body">
        Are you looking for a collaboration?
        <br/><br/>
        If you are looking for someone which is passionate about food and photography you are in the perfect place!
        <br/><br/>
        I am available for:
        <br/><br/>
        -recipes development ;
        <br/><br/>
        -sponsored posts for social media;
        <br/><br/>
        -food photography for cookbooks, magazine or product brand;
        <br/><br/>
        or anything else you can benefit from don’t hesitate to contact me at robertafoodphotography@gmail.com
      </p>
      <div>
        <h2 className = "work-title">Let's do some business together</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            Your Message:
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </label>
          <div >
            <button type="submit" value="Submit" className = "btn" style = {{background: loader? "#ccc" : "white"}} > Submit </button>
          </div>
        </form>
      </div>
    

    </div>
  )
}



function About() {


  return ( 
    <div className = "about-container">
      
      <p className = "about-body">
        Hello! My name is Roberta.
        <br/><br/>
        I’ve been working in hospitality for over ten years, and my passion for food has been growing ever since I was a little girl running up and down the family hotel, snooping and searching for all the good culinary secrets!
        Like many others, 2020 brought me to a crossroads where I had to choose a new path. Photography has always been a favourite hobby of mine, and my camera and I have become a great team in recent years, so a journey into food photography was the natural choice for combining my passions! 
        <br/><br/>
        My experience and attention to detail from both hospitality and photography perspectives enables me to understand your needs from both sides of the camera, and deliver mouth-watering images for your brand.
        <br/><br/>
        So if you are a restauranteur, bar owner, brand manager, food blogger, cookbook or magazine publisher, or just someone who shares my love of stunning photographs of delicious culinary creations, you’ve come to the right place!
        </p>

        <img src = {require(`./Photos/aboutPhoto.jpg`)} className = "about-photo" alt = "That's me! =>"/>
     
    </div>
  );
}



