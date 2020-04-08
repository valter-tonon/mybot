import styled from 'styled-components'
import fundo from '../../assets/images/4683.jpg'

export const Section = styled.section ` 
    background: #f2f2f2 url(${fundo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center ;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    img{
        border-radius: 50%;
        width: 100px;
        filter: grayscale(100)
    }
    h1,h2,h3,h4,p{
        color: #222;
    }

.header{

    padding: 20px 150px;
    margin-bottom: 30px;
    h1{
        font-size: 30px;
    }

    p{
        font-size: 20px;
        margin-top: 20px;
    }
}
`
export const Cards= styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;

    div{
        padding: 20px;
    }
   svg{
       width: 40px;
       color: #7159c1;
       margin-right: 15px;
       margin-top: 20px;
       transition: color 1s;

       &:hover{
           color: #1fa1f2;
       }
   }
`