import styled from 'styled-components'
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'


export const DivWrapper = styled.section `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;

    .slider{
        width: 100vw;
        height: 100vh;
        position:relative;
        
    }

    .slider__item{
        position: absolute;
        width: 100%;
        height: 100%;
        left: -100vw;
        display:flex;
        justify-content:center;
        align-items:center;
        background-size: cover;
        background-position: center center;
    }

    .slider__item:nth-child(1){
        background-image: url(${img1});
        
        }
    .slider__item:nth-child(2){
        background-image: url(${img2});
        
        }
    .slider__item:nth-child(3){
        background-image: url(${img3});
        
        }
    .slider__text{
        font-size:3rem;
        text-align: center;
        color: #eee;
        text-shadow: 2px 2px #666;

    }
    .slider__text p:first-child{
        font-size:6rem;
    }
    .slider__text p{
        line-height: 5rem;
    }

`
export const Arrows = styled.div `
    position: absolute;
    z-index: 999;
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .slider__arrows--left, .slider__arrows--right{
        color: #eee;
        text-shadow: 1px 1px #666;
        font-size: 4rem;
        padding: 0 2rem;
        transition: color 2s , transform 1s;


        &:hover{
            color: #7159c1;
            transform: translateX(-5px);
        }
    }
`