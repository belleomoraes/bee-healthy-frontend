import styled from 'styled-components';
export default function WithoutExam() {
  return <Empty>Você não tem exame cadastrado</Empty>;
}

export const Empty = styled.div`
  margin-top: 45px;
  font-size: 20px;
  font-style: italic;
`;
