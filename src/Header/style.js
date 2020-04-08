import styled from 'styled-components'
import { } from 'gsap'

export const MenuWrapper = styled.nav `
@import url('https://fonts.googleapis.com/css?family=Teko&display=swap');
    padding: 20px 50px;
    background:#222;
    display: flex;
    flex: 1;
    justify-content: space-between;
    font-family: 'Teko', sans-serif;
    align-self: stretch;
    
    

`

   
export const Link = styled.ul ` 
   
    .active{
        color:#7519c1;
    }
   

a{ text-decoration: none;
    color: #666;
    margin-right: 30px;
    transition: color 1s; 
    font-size: 20px; 



    &:hover{
        color: #7519c1;
}
    button{
        background : #1fa1f2;
        border: none;
        padding:10px 20px;
        border-radius: 6px;
        transition: background 1s;
        font-size:20px;

        &:hover{
            background: #7519c1;
        }
    }
    }
`
export const MenuBrand = styled.h1 `
    color: #ccc;
    font-size: 25px;

    
`
