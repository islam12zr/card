import React from 'react'
import {useState} from 'react';
import "./App.css"

const App = () => {

 const [profile, setProfile] = useState(
 {

  fullName:"islem geufrechi",
  imgSrc:" https://images.bfmtv.com/bplO8NTPZg7UPyxaMxxzJ36gmuE=/3x2:723x407/640x0/images/-187013.jpg",
  profession:"FUll Stack Javascript Developer",

 }


 );
  const [show, setShow] = useState(false);
  return (
    <div>


<div>
<button onClick={()=>setShow(!show)} className='button'>click here to show the card profile</button>



{show?<div className='card'>
   <h1>{profile.fullName}</h1>
   <img src={profile.imgSrc}/>
   <h4>{profile.profession}</h4>
   <button >click here</button>
   </div>:null}
  
<div>


</div>


   </div>


    </div>
  )
}

export default App