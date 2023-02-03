import styled from 'styled-components';

export const Login = styled.div`
  width: 55vw;
  padding: 10px;
  margin: 0 auto;
  border-radius: 50px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12vh;
  h1 {
    margin-top: 10px;
    font-family: Sacramento;
    font-size: 40px;
  }

  h2 {
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 90%;
    height: 70%;
  }
`;

export const Wrapper = styled.div`
  width: 95%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 600px) {
    width: 90%;
    height: 70%;
    padding: 15vh 1vw;
  }
`;
