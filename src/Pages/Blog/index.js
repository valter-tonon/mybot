import React from 'react'
import logo from '../../assets/Fundologo.png'
import {Div,Wrapper,Section} from './style'
import PostItem from '../../components/PostItem'




const Blog = () =>{
    return(
    <Wrapper>
    <Div>
    <img src={logo} alt='logo'/>
    <div>
    <h1>Blog</h1>
    <h2>Gostamos de compartilhar nossas experiências de mercado, tecnologias, viagens e muito mais...</h2>
    </div>
    </Div>
    <Section>
    <PostItem className='post'/>
    <PostItem className='post'/>
    <PostItem className='post'/>
    </Section>
    </Wrapper>
    )
}

    
   


export default Blog