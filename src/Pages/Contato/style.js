import styled from 'styled-components'
import mail from '../../assets/images/o-email.png'
import user from '../../assets/images/do-utilizador.png'
import message from '../../assets/images/bate-papo.png'

export const ContatoWrapper = styled.div ` 
@import "//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css";

    height: 100vh;
    background: linear-gradient(90deg ,#7159c1,#8A2BE2);
    
   
   form{ 
    
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    padding: 50px;
    max-width: 700px;
    background: none;
     

   }
    h1{
        text-align:center;
        color: #222;
    }
    
    input{
        
        padding: 10px;
        height: 50px;
        border: none; 
        font-size: 16px;
        border-radius:4px;
        margin-bottom: 20px;
        align-self: stretch;
        background: rgba(0,0,0,0.2);
        font-size:20px;
    

    }
    textarea{
        height: 150px;
        border: none;
        border-radius: 6px;
        padding: 5px;
        background: rgba(0,0,0,0.2);
        opacity: 1;
        font-size: 18px;
    }
    button{
        padding: 10px 20px;
        background: #1fa1f2;
        border: none;
        border-radius: 4px;
        margin-top: 10px;
        font-size: 20px;
        transition:background 1s;

        &:hover{
            background:#7159c1;
        }
    }
    .mail{
        background-image: url(${mail});
        background-size: 35px;
        background-repeat: no-repeat;
        background-position-x: 5px;
        background-position-y: 5px;
        padding-left: 50px;

    }
    .mainInput{
        background-image: url(${user});
        background-size: 35px;
        background-repeat: no-repeat;
        background-position-x: 5px;
        background-position-y: 5px;
        padding-left: 50px;

    }
    .message{
        background-image: url(${message});
        background-size: 35px;
        background-repeat: no-repeat;
        background-position-x: 5px;
        background-position-y: 5px;
        padding-left: 50px;

    }
    span{
        color: #f64c75;
        font-size: 20px;
    }
`
