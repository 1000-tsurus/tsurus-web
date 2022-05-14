import { Skeleton } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    section{
        margin-top: 30px;
        margin-bottom: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 300px 300px 300px 300px;
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
                style={{
                    transform: 'none',
                    borderRadius: '5px'
                }}
            />
            <section>
                {fake_array.map((j, i) => 
                    <Skeleton
                        key={i}
                        width={'95%'}
                        height={'250px'}
                        animation="wave"
                        style={{
                            transform: 'none',
                            borderRadius: '15px'
                        }}
                    />
                )}
            </section>
        </Container>
    )
}
