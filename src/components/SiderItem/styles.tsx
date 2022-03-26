import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;
export const StatusRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  background-color: #fbce5d15;
  margin-top: 8px;
  padding: 10px 12px;
  border-radius: 10px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafbfd;
  border-radius: 10px;
  padding: 18px 16px 0 18px;
`;

export const SpacedRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: white;
  margin: 0 16px;
  margin-bottom: 18px;
  border-radius: 8px;
  box-shadow: 0px 5px 10px #60617029;
  ul {
    list-style: inside;
    margin: 8px 37px;
    li {
      color: #696f81;
    }
  }
`;
