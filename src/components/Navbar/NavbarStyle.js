import styled from "styled-components";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo_Img = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;
