import React,{useEffect} from 'react'
import * as S from './style'
import { TweenMax } from 'gsap'


const Secao = () =>{
    const item = document.querySelector('.item')

   useEffect(()=>{
    TweenMax.from(item,2,{
        opacity: 0,
        x: 500
    })

   }) 
    return( <S.H1 className= 'item' >Um novo conceito em negociações automatizadas</S.H1>)
}
   


export default Secao
