import styled from 'styled-components';

export default function NavigationButton({ active, children }) {
  return <Button active={active}>{children}</Button>;
}

const Button = styled.button`
  width: 100%;
  height: 100px;
  border: none;
  background-color: #f1df38;
  cursor: pointer;
 margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${(props) => (props.active ? 'background-color: #DDCF4F;' : '')}

  &:hover {
    opacity: 90%;
  }

  & > *:not(:last-child) {
    margin-bottom: 4px;
  }

  & > *:first-child {
    font-size: 28px;
    color: #333333;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    padding: 1vh 3.6vw;
    span {
      font-size: 9px;
    }
    & > *:first-child {
    font-size: 20px;
    color: #333333;
  }

  @media (max-width: 300px) {
    width: 100%;
    height: 100%;
    padding: 1vh 2.3vw;
    span {
      font-size: 8px;
    }
    & > *:first-child {
    font-size: 20px;
    color: #333333;
  }
 
  }
`;
