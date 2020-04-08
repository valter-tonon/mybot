import styled from 'styled-components'

export const PostWrapper = styled.div `
    background: #eee;
    padding:0;
    display:flex;
    flex-direction: row;
    max-width:50rem;
    max-height: 25rem;
    margin: 30px auto 20px;
    
`
export const Img= styled.div `
    
    width: 50%;
    img{
        width:25rem;
        height:100%;
    }
    

`
export const Texts = styled.div `
    flex: 1;
    width:50%;
    height:100%;
    background: #eeee;
    align-items: center;
    padding: 24px;
    
    h1,h2,h3{
        color: #222;

    }
    p{
        color:#555;
        font-size: 12px;
    }
    h3{
        margin-top: 20px;
    }
    button{
        margin-top: 15px;
        padding: 10px 30px;
        font-size: 18px;
        background: none;
        border:1px solid #555;
        border-radius: 4px;


    }

`