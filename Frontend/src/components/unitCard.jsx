import React from 'react';
import '@radix-ui/themes/styles.css';
import { Box, Card, Inset, Text, Strong } from '@radix-ui/themes';


function UnitCard({ imageSrc, text, link }) {
    const handleClick = () => {
        if (window.history) {
            window.history.pushState(null, '', link);
        }
    };

    return (
        <Box maxWidth="240px" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <Card size="2">
            <Inset clip="padding-box" side="top" pb="current" >
            <img className='card-custom1'
                src={imageSrc}
                alt="Bold typography"
                style={{
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: 140,
                backgroundColor: 'var(--gray-5)',
                }}
            />
            </Inset>
            <Text as="p" size="3" className='text-center card-body-custom1 card-text1'>
            <Strong>{text}</Strong>
            </Text>
        </Card>
        </Box>
    );
}

export default UnitCard;

