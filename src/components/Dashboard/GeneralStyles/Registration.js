import styled from 'styled-components';
export const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 60% !important;
  display: flex;

`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4vh 2vw;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 50px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > div {
    width: calc(50% - 20px);
    margin: 0 10px 0 0;
  }

  @media (max-width: 600px) {
    > div {
      width: 100%;
      padding-left: 0px !important;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  > div {
    width: 100%;
  }
`;

export const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2vh 2vh;
  font-size: 5vh;
  > h1 {
    font-size: 4vh !important;
  }
`;
