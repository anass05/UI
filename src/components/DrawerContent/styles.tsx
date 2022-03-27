import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  width: 100%;
  background-color: white;
  padding-bottom: 11px;
  border-bottom: 1px solid #e7ecf5; ;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 70px;
`;

export const ActivityPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
  background-color: #f5f7fb;
  border-radius: 10px;
  padding: 16px;
`;

export const ActivityItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 22px;
  border-top: solid 1px #e7ecf5;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopupCircular = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #41d8b6;
`;
export const SpacedRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
