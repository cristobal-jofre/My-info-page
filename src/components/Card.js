// Este componente es una sola tarjeta que se va a reutilizar 
import React from 'react'
import PropTypes from 'prop-types'
import './cards.css'

// Los props son los datos que recibe cada tarjeta 
function Card({ title, imgSource, text, url }) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imgSource} alt="" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title"> {title} </h4>
                <p className="card-text text-secondary">
                    {
                        text ? text : 'Consectetur ut occaecat minim nostrud aliquip ea elit. Enim nulla aliquip excepteur sit eu in. Id ad occaecat ad aliqua non in quis veniam enim velit. Laboris laborum nisi cupidatat enim anim dolor qui sit ea tempor quis quis laboris consequat. Dolor labore laboris ex amet ullamco labore ipsum Lorem aute velit voluptate veniam enim.'
                    }
                </p>
                <a href={url} className="btn btn-outline-secondary" target="_blank" >
                    Ir al sitio web
                </a>
            </div>
        </div>
    )
}

// prop-types, nos permite validar los campos de cada componente
Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imgSource: PropTypes.string
}
export default Card
