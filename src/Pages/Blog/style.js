import styled from 'styled-components'
import fundo from '../../assets/diary.jpg'

export const Div = styled.section`

    display:flex;
   align-items: top;
   width: 100%;
   img{
       max-width: 300px;
        height: 300px;

    
   }

    h1,h2,h3,p{
        color:#cccccc;
        text-align: center;
        margin-left: 100px;
        text-shadow: 1px 1px #666;

        
    }
    h1{
        font-size:80px;

    }
    h2{
        font-size: 40px;
    }
    h3{
        font-size: 20px;
    }
    p{
        font-size:18px;
    }
`
export const Posts = styled.aside `
    background: #1fa1f2;
    width: 100%;
    height: 200px;
    border-top: rgba(0,0,0,0.9);
    
     div{ 
          max-width:70rem;
        max-height: 5rem;
        justify-content: center;
        margin-left: 20px;
        margin-top: 30px;
     }
    
    img{
        height: 8rem;
        width: 8rem;
        border-radius: 50%;
        justify-content: center;

    }
    .title{
        margin-top: -80px;
        margin-left: 180px;
        color: #eee;
    }
`
export const Wrapper = styled.body `
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
    margin: 0;
    padding: 10rem;
    outline:0;
    box-sizing : border-box;
    background-color: transparent;
    background-image: linear-gradient(90deg ,#7159c1,transparent,#8A2BE2), url(${fundo});
    background-size: stretch;
    align-items: center;
    font-family: 'Raleway', sans-serif;

    
    
`
export const Section = styled.div `
    margin-top: 100px;
`
