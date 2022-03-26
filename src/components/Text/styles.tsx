import styled from 'styled-components';

export const P = styled.span<{
  weight: number;
  size: number;
  textColor: string;
  height: number;
  marginTop: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  textWidth?: number;
}>`
  font-style: normal;
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size}px;
  line-height: ${({ height }) => height}px;
  color: ${({ textColor }) => textColor};
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  margin-right: ${({ marginRight }) => marginRight || 0}px;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
  margin-left: ${({ marginLeft }) => marginLeft || 0}px;
  width: ${({ textWidth }) => `${textWidth}px` || 'auto'};
`;
