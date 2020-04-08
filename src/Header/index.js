import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import TweenMax from 'gsap'


import * as S from './style'


const Header = ()=>{
    const marca = document.getElementsByClassName('brand')
   
    useEffect(()=>{
        TweenMax.from(marca,2,{
            opacity: 0,
            scale:.9,
            delay:1,
        })
    })



    return(
    <S.MenuWrapper>
        <S.MenuBrand className='brand' to = '/' >
            <h1>Mybot</h1>
        </S.MenuBrand>
        <S.Link >
            <Link activeClassName="active" to= '/'>início</Link>
            <Link activeClassName="active" to= '/quemsomos'>quem somos</Link>
            <Link activeClassName="active"><a href ='https://mybot-blog.netlify.com/' target="blank">blog</a></Link>
            <Link activeClassName="active" to = '/contato'><button>contato</button></Link>
        </S.Link>

       
     </S.MenuWrapper>
     


)}

export default Header