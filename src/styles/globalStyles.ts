import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

:root {
    --primary-color: #778899;
    --error-color: #f85032;
    --text-color: #0d0d0d;
    --transition: all ease-in-out 0.3s;
}
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html, body, #root {
    height: 100%;
}
*, *:before, *:after {
    box-sizing: border-box;
}
input:not([type='checkbox']), button {
    border-radius: 0.5rem;
    width: 100%;
}
input:not([type='checkbox']), textarea {
    border: 2px solid rgba(0, 0, 0, 0.1);
    padding: 1em;
    color: var(--text-color);
    transition: var(--transition);
}
input:not([type='checkbox']):focus, textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}
button {
    appearance: none;
    border: 1px solid var(--primary-color);
    color: #fff;
    background-color: var(--primary-color);
    text-transform: uppercase;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    padding: 1em;
    box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
}
button.secondary {
    color: var(--primary-color);
    background-color: #fff;
    border-color: #fff;
}
button:hover, button:focus {
    box-shadow: 1px 6px 8px rgba(0, 0, 0, 0.1);
}
`