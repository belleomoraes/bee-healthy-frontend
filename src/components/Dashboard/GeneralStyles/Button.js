import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 30px;
  background-color: #333333;
  width: 100%;
  padding: 2vh 4vw;
  color: #ffffff;
  font-size: 15px;
  margin-bottom: 5vh;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 150px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  }
`;
