import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    height: 100vh;
    background-color: #EFEFEF;
`;

export const Label = styled.label`
  font-size: 40px;
  font-weight: 600;
  color: #676767;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 500px;
  padding: 20px;
  border-radius: 5px;
`;

export const upperPart = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const lowerPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const recordsArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const record = styled.div`
  margin-top: 10px;
  padding-left: 9px;
  padding-bottom: 5px;
  box-shadow: 1px 2px 2px -2px gray;
  display: flex;
`;

export const recordText = styled.div`
  flex: 15;
`;

export const recordButtons = styled.div`
  display: flex;
  gap: 10px;
`;



