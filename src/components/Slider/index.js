import React, { useEffect }  from 'react'
import * as S from './style'
import {TweenMax,TimelineMax} from 'gsap'


const Slider =()=> { 
       const sliderItems = document.getElementsByClassName('slider__item')
       // const btnNext= document.getElementsByClassName('slider__arrows--left')
       // const btnPrev = document.getElementsByClassName('slider__arrows--right')
        //const texts = document.getElementsByClassName('p')
useEffect(()=>{
    
    const Slider ={
        currentItem : 0,
        init:()=>{
            Slider.in(Slider.currentItem)
        },
        in: (index) =>{
        const sliderItems = document.getElementsByClassName('slider__item')
           const item = sliderItems[index]
           const texts = document.getElementsByClassName('p')
           const timeline = new TimelineMax() 
            
            TweenMax.set(item,{scale: .9})
            timeline
                .to(item, 1, {left:0, delay: 2})
                .to(item, 1, {scale:1})
                .from(texts, 1, {y:300, autoAlpha: 0, ease:'back',stagger:0.5 },0.2) 
                
        },
        out:(index, nextIndex) => {
            const sliderItems = document.getElementsByClassName('slider__item')
            const item = sliderItems[index]
           const texts = document.getElementsByClassName('p')
            const timeline = new TimelineMax()
            
            timeline
               .to(texts, 1,{y:300, autoAlpha: 0, ease:'back',stagger:'-0.2'}, '-0.5')
               .to(item, 1,{scale: .9})
               .to(item, 1,{left: '100vw'})
               .call(Slider.in, [nextIndex],this, '-=1.5')
               .set(texts,{clearProps: 'all'})
            
                
        },
        next: ()=>{
            const next = Slider.currentItem !== sliderItems.lenght -1 ? Slider.currentItem + 1 : 0
            Slider.out(Slider.currentItem, next)
            Slider.currentItem = next
        },
        prev: ()=>{
            const prev = Slider.currentItem > 0 ? Slider.currentItem - 1 : sliderItems.lenght - 1
            Slider.out(Slider.currentItem, prev)
            Slider.currentItem = prev
        },
    } 
  // btnNext.addEventListener('click',Slider.next)
  // btnPrev.addEventListener('click',Slider.prev)
  Slider.init()

})
      
        
    
      
        
        
    return (
        <S.DivWrapper className = 'slider'>
            <div className='slider__item'>
                <div className="slider__text">
                    <p className='p' >Tenha Liberdade</p>
                    <p className='p'>Aproveite sua vida enquanto os robôs trabalham para você</p>
                </div>
            </div>
            <div className='slider__item'>
                <div className="slider__text">
                    <p className='p' >Tenha Liberdade</p>
                    <p className='p'>Aproveite sua vida enquanto os robôs trabalham para você</p>
                </div>
            </div>
            <div className='slider__item'>
                <div className="slider__text">
                    <p className='p'>Tenha Liberdade</p>
                    <p className='p'>Aproveite sua vida enquanto os robôs trabalham para você</p>
                </div>
            </div>
            <S.Arrows>
                <div className='slider__arrows--left' /*onClick = {()=>Slider.next(btnNext)}*/>&#10094;</div>
                <div className='slider__arrows--right' /*onClick = {()=>Slider.prev(btnPrev)}*/>&#10095;</div>
            </S.Arrows>
        </S.DivWrapper>
    )
    }

export default Slider