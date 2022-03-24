import { Skeleton } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    section{
        margin-top: -50px;
        margin-bottom: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 350px 350px 350px 350px;
    }
`;

export default function Skeletons() {
    const fake_array = Array.from({ length: 8 });
    
    return (
        <Container>
            <Skeleton
                variant="text"
                animation="wave"
                width="400px"
                height="50px"
            />
            <section>
                {fake_array.map((j, i) => 
                    <Skeleton
                        key={i}
                        width={'95%'}
                        height={'500px'}
                        animation="wave"
                    />
                )}
            </section>
        </Container>
    )
}
