import styled from 'styled-components';

export const FormStyles = styled.div`
.auth {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.card {
    background: #fff;
    padding: 3rem;
    text-align: center;
    box-shadow: 2px 8px 12px rgba(0, 0, 0, 0.1);
    max-width: 450px;
    width: 90%;
    margin: 0 auto;
}
.inputWrapper {
    margin: 1rem auto;
    width: 100%;
}
.error {
    margin: 0;
    margin-top: 0.2em;
    font-size: 0.8em;
    color: var(--error-color);
    animation: 0.3s ease-in-out forwards fadeIn;
}
`