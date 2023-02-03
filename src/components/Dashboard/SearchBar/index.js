import styled from 'styled-components';
import { IoSearchCircle } from 'react-icons/io5';
import Input from '../../Forms/Input';
import { useState, useEffect } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  function handleChange(e) {
    e.preventDefault();
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Display>
      <InputBar name="search" value={search.name} onChange={handleChange}></InputBar>
      <IoSearchCircle cursor="pointer" />
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
const InputBar = styled.input`
  width: 100%;
  height: 6vh;
  border-width: 2px;
  border-style: solid;
  border-color: black;
`;
