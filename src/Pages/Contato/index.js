import React,{useState, useEffect} from 'react'
import * as Yup from 'yup'
import {toast} from 'react-toastify'
import {Form, Input, Textarea } from '@rocketseat/unform'
import { TweenMax }from 'gsap'
//import {User} from '@styled-icons/boxicons-regular/User'

//import { FaUserAlt } from 'react-icons/fa';

import * as S from './style'

const schema = Yup.object().shape({
    name:Yup.string()
        .required('Seu nome é importante!'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é importante!'),
    message: Yup.string()
        .required('Sua mensagem precisa ser preenchida.')
    
})
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


const Contato= () =>{

    useEffect(()=>{
        TweenMax.from(".wrapper",1,{
            opacity: 0
        })
    },[])
       
    const initialState = {
        email: '',
        name: '',
        message: ''

    }
    const [fields, setFields]= useState(initialState)

    const handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...fields })
        }).then(() => toast.info('E-mail enviado com sucesso!')).catch(error => alert(error))
        //e.preventDefault()
        setFields(initialState)

      };
  
      const handleChange = e => setFields({...fields, [e.currentTarget.name]: e.currentTarget.value });
   return(

    <>
    <S.ContatoWrapper>
        <div className = "wrapper">
        <h1>Fale Conosco</h1>
       <Form schema={schema} onSubmit={handleSubmit}>
        <Input  className="mainInput" type='name' name="name" onChange={handleChange} placeholder='  Digite seu nome'/>
        <Input className='mail' type='email' name="email" onChange={handleChange} placeholder = ' digite seu email'/>
        <Textarea className="message" name="message" onChange={handleChange} placeholder='Deixe sua mensagem aqui'></Textarea>
        <button  type='submit'>Enviar</button>
        </Form>
        </div>
    </S.ContatoWrapper>
   
    </>
    )
    }

export default Contato