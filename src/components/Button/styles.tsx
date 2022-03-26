import styled from 'styled-components';

const background = {
  normal: '#6135FB',
  outlined: '#ffffff',
  disabled: '#F5F7FB'
};
const borders = {
  normal: '#6135FB',
  outlined: '#6135FB',
  disabled: '#E7ECF5'
};

export const Row = styled.div<{
  marginTop: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  variant: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 15px;
  background-color: ${({ variant }) => background[variant]};
  border-radius: 10px;
  border: solid 1px ${({ variant }) => borders[variant]};
  height: 42px;
  cursor: pointer;
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  margin-right: ${({ marginRight }) => marginRight || 0}px;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
  margin-left: ${({ marginLeft }) => marginLeft || 0}px;
`;
