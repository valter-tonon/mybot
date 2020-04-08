import React, { useEffect }   from 'react'
import { Corpo } from './style'
import {TweenMax} from 'gsap'


const Section= () =>{
    const item = document.getElementsByClassName('myHeader')

  

    useEffect(()=>{
        TweenMax.from(item,2,{
          
            opacity:0,
            x:500,
            delay:3,
        })
    },[])

 
  
  
        return (
            
           <Corpo >
           <h1 className='myHeader'>Um novo conceito em negociações automatizadas</h1> </Corpo>
            
            )
        }
        
   
export default Section