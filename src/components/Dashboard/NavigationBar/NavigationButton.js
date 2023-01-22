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
    height: 80px;
  }
`;
