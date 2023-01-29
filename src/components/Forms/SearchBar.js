import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { IoSearchCircle } from 'react-icons/io5';

export default function SearchBar() {
  return (
    <Display>
      <InputBar></InputBar>
      <IoSearchCircle />
    </Display>
  );
}

const Display = styled.div`
  width: 72vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 7vh;

`;
const InputBar = styled.div`
  width: 100%;
  height: 6vh;
  border-width: 2px;
  border-style: solid;
  border-color: black;
`;
