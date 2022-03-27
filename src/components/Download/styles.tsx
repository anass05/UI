import styled from 'styled-components';

interface Props {
  isSider?: boolean;
}
export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - ${({ isSider }) => (isSider ? 0 : 32)}px);
  background-color: ${({ isSider }) => (isSider ? '#FAFBFD' : 'white')};
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
  border: 1px dashed #e7ecf5;
  margin-bottom: 14px;
  margin-left: ${({ isSider }) => !isSider && 16}px;
  margin-right: ${({ isSider }) => !isSider && 16}px;
  margin-top: ${({ isSider }) => isSider && 22}px;
`;
