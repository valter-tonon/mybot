import 'react-toastify/dist/ReactToastify.css'
import { createGlobalStyle } from 'styled-components'
import  fundo  from '../assets/back.jpg'


export default createGlobalStyle ` 
@import url('https://fonts.googleapis.com/css?family=Teko&display=swap');

*{
   
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body{
    background: #010A13 url(${fundo}) no-repeat center top;
    background-attachment: fixed;
    position:absolute;
    height:100vh;
    width: 100%;
    -webkit-font-smoothing: antialiased;

}
body, input, button{
    font-family: 'Teko', sans-serif;
    }
#root{
   
    

}
button{
    cursor: pointer;
}

`