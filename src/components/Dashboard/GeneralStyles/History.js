import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4vh 2vw;
`;

export const DateFilter = styled.div`
  width: 40vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 3.2vh;
  background-color: #f1df38;

  @media (max-width: 600px) {
    width: 200px;
  }
 
`;
export const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;

  h3 {
    font-size: 2.3vh;
    margin: 4vh;
  }
`;

export const DisplayIon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-between;
`;

export const Card = styled.div`
  width: 40vw;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  padding: 2vh 3vw;
  font-size: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 20px;

  h1 {
    font-weight: bold;
    font-size: 20px !important;
    margin-bottom: 3vh;
  }

  h2 {
    font-size: 14px !important;
  }

  @media (max-width: 600px) {
    width: 230px;
  }
`;
