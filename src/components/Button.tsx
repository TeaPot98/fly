/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick }: { children: any, onClick: (event: React.MouseEvent<HTMLButtonElement>) => void }) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  box-sizing: content-box;
  cursor: pointer;
  width: 120px;
  text-transform: uppercase;
  height: 60px;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.secondary.red};
  border-bottom-width: 4px;
  font-family: inherit;
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.theme.secondary.red};

  &&:active {
    border-bottom-width: 2px;
    margin-top: 2px;
  }
`;