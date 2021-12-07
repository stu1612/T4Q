import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.navBg}
  }
  &::-webkit-scrollbar-track {
    background-color: #fff

  }
}

body {
  font-family: "Poppins", sans-serif;
  background: ${({ theme }) => theme.primaryBg};
  transition: background 0.5s ease-out;
  overflow-anchor: none;
}

h3 {
  font-family: "Play", sans-serif;
  font-size: clamp(2rem, 2vw, 4rem);
  line-height:1;
}
h2 {
  line-height:1;
  font-size: clamp(1.6rem, 1.8vw, 3.8rem);
}
p {
  font-size: clamp(0.8rem, 1.2vw, 2rem);
  line-height:1.5;
}
small {
  font-size: clamp(0.4rem, 1vw, 0.8rem);
  color:#949494;

}



/* h1 {
  font-size: calc(1.775rem + 1.5vw);
  font-weight: 900;
}

h2 {
  font-size: calc(1.325rem + 0.9vw);
}

strong {
  font-weight: 800;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Merriweather", serif;
} */
`;
