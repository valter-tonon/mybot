import React, {useEffect} from 'react'
import postimg from '../../assets/images/3.jpg'
import {PostWrapper, Img, Texts} from './style'
import TweenMax from 'gsap'


const PostItem = ()=> {
    const post = document.getElementsByClassName('item')

 
useEffect(()=> {
    TweenMax.to
    (post, { duration: 10, ease: "back.out(5)", y: -100})
})
    
    return(
    <PostWrapper className = 'item'>
        <Img>
            <img src={postimg} alt='img Post' />
        </Img>
        <Texts>
            <h2>Tape-Reading: Técnica mais antiga do que você imagina</h2>
            <p><i>Postado em</i> 20 de março de 2019</p>
            <h3>Descubra os segredos e táticas deste tipo de leitura que está em foco nos últimos tempos.</h3>
            <button>Ir para post &#10095;</button>
        </Texts>
    </PostWrapper>
    )
}

export default PostItem