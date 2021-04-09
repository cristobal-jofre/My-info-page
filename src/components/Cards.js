// Este componente es un conjunto de tarjetas

import React from 'react'
import Card from './Card'

import imgLinkedIn from '../assets/linkedin.png'
import imgGitHub from '../assets/github.png'
import imgGmail from '../assets/gmail.png'

const cards = [
    {
        id: 1,
        title: 'LinkedIn',
        image: imgLinkedIn,
        url: 'https://www.linkedin.com/in/cristóbal-ignacio-jofré-álvarez/',
        text: 'Aquí puedes encontrar mi CV e información profesional'
    },
    {
        id: 2,
        title: 'GitHub',
        image: imgGitHub,
        url: 'https://github.com/Cristobal-Jofre',
        text: 'Ingresa para ver mi portafolio'
    },
    {
        id: 3,
        title: 'Correo',
        image: imgGmail,
        text: 'Comunícate conmigo al correo cristobal.jofre@outlook.es'
    },
]
function Cards() {
    return (
        <div class="container d-flex justify-content-center align-items-center h-100 ">
            <div className="row">
                {
                    cards.map((card) => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imgSource={card.image} url={card.url} text={card.text} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards