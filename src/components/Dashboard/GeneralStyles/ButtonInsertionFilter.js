import styled from 'styled-components';
export const ButtonInsertionFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  border-radius: 40px;
  background-color: #333333;
  width: 30vw;
  padding: 2vh 3vw;
  color: #ffffff;
  font-size: 15px;
  margin-top: 40px;
  cursor: pointer;

  &:hover {
    opacity: 60%;
    background-color: #f1df38;
    color: #333333;
  }

  @media (max-width: 600px) {
    width: 250px;
  }
`;
