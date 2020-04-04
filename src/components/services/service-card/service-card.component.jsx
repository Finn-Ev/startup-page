import React from 'react'
import "./service-card.styles.scss"
import { Card } from 'react-bootstrap'

const ServiceCard = ({name}) => {
    return (
        <Card >
            <Card.Img variant="top" src="https://via.placeholder.com/200/" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                 </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ServiceCard