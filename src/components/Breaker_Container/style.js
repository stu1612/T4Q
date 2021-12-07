import styled from "styled-components";

export const Container = styled.div`
  height: 5rem;
  width: 100vw;
  position: relative;
  transform: translate(0, -50%);
`;

export const Breaker = styled.div`
  height: 50%;
  width: 50vw;
  position: absolute;
  background: #181818;
  left: ${(props) => props.left || "50%"};
  top: ${(props) => props.top || "50%"};
`;
