import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
  hoverColor: string;
}

export const Container = styled.button<ContainerProps>`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  border-style: none;
  border-radius: 10px;
  color: #fff;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
