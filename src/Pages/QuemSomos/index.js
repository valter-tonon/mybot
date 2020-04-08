import React, {useEffect} from  'react'
import  { Section, Cards } from './styles'
import{ Instagram }from '@styled-icons/boxicons-logos/Instagram'
import {Facebook} from '@styled-icons/boxicons-logos/Facebook'
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import perfil from '../../assets/images/perfil.jpg'
import { TweenMax } from 'gsap'


const QuemSomos = ()=>{
    useEffect(()=>{
        TweenMax.from(".wrapper",1,{
            opacity: 0
        })
    },[])
    return(
    <Section>
	<div className="wrapper">
		<div >
			<div className="header">
				<h1>Quem Somos</h1>
                <p>Somos dois aficcionados pelo mercado financeiro e por tecnologia. Nos conhecemos no início de 2019 e começamos uma parceiria
                de estudos. Além de nos aprofundarmos em técnicas variadas de trading, usamos da tecnologia a nosso favor usando estratégias 
                com robôs.<br/> Assim nasceu a mybot Robôs de investimento. </p>

			</div>
            <Cards>
				<div>
					<img src="assets/img/team01.jpg"/>
					<h4>Augusto Simoni</h4>
					<h5>Trader </h5>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<p>
						<a href="#"><Instagram/></a>
						<a href="index.html#"><Facebook/></a>
                        <a href="index.html#"><Linkedin/></a>
                        <a href="index.html#"><Whatsapp/></a>

					</p>
				</div>
                <div>
					<img src={perfil} />
					<h4>Valter L. Tonon</h4>
					<h5>Desenvolvedor e Trader</h5>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<p>
						<a href="index.html#"><Instagram/></a>
						<a href="index.html#"><Facebook/></a>
                        <a href="index.html#"><Linkedin/></a>
                        <a href="index.html#"><Whatsapp/></a>

					</p>
				</div>
                </Cards>

			    </div>
		    </div>
        
    
    </Section>
    )
}

export default QuemSomos