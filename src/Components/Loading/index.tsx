import { CircularProgress } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import Logo from '../../Assets/Logos/icon-comp.png'

const LoadingBox = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            max-height: 20vh;
            object-fit: contain;
        }
    }
`;

export const Loading = () => {
    return (
        <LoadingBox>
            <div>
                <img src={Logo}/>
                <CircularProgress
                    size={20}
                    thickness={5}
                    style={{
                        color: '#fff',
                        marginTop: '20px'
                    }}
                />
            </div>

        </LoadingBox>
    )
}
