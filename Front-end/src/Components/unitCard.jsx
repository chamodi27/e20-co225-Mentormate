import React from 'react';
import Card from 'react-bootstrap/Card';
import './unitcard.css'; // Import the custom CSS file

function unitCard({ imageSrc, text, link }) {
    
    const handleClick = () => {
        history.push(link);
    };
    return (
        <Card className="card-custom" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <Card.Img variant="top" src={imageSrc} className="card-image"/>
            <Card.Body className="card-body-custom text-center">
                <Card.Text className='card-text'>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default unitCard;