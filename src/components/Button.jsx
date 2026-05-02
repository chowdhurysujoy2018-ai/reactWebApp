import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Button = ({buttonText, className}) => {
  return (
    <button className={className}>{buttonText} <FontAwesomeIcon icon={faArrowRight} /></button>
  )
}

export default Button