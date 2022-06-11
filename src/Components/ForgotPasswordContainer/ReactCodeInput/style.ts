import styled from 'styled-components'
import ReactCodeInput from 'react-code-input'


export const All = styled.div`
    margin-top: 8%;
	height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
	display:grid;
	place-items: center;
	gap: 0;
	margin: 0;
	background-color:transparent;
	border-radius: 10px;
	margin-top: 10px;
	img.svg-image {
		transform: scale(1);
		width: 50%;
	}
	p{
		font-weight: 500;
		color: ${({ theme }) => theme.colors.text_apoio};
		margin-bottom: 10px;
	}
`;

export const CodeInputStyled = styled(ReactCodeInput)`
    height: 100%;
    width: 100%;
    font-size: 2rem;
    padding: 0.5rem;

    input{
        background-color: rgba(158, 158, 158, 0.3);
        padding: 10px;
        width: 100px;
        height: 100px;
        text-align: center;
        font-size: 30px;
        border-radius: 0.8rem;
        margin: 0 0.5rem 2rem;
        outline: none;
        border: none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
    }
    input[type=number] {
      	-moz-appearance: textfield;
    }
`;