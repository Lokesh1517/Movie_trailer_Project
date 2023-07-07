import React,{useEffect , useState} from 'react'
import './Navbar.css';
function Navbar() {
  const [show,handleShow] = useState(false);
  useEffect(() => { 
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100 ){
        handleShow(true);
      }else{
        handleShow(false);
      }
    });

  },[]);
  return (
    <div className={`Nav ${show && "nav_black"}` }>
        <img className='Nav-logo' src ="https://i.pinimg.com/originals/05/07/80/0507804c1b0c0dd4d0bc90a6c166f363.png" alt="netflix logo"/>
    </div>
  )
}

export default Navbar
