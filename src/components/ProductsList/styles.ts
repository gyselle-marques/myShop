import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 2rem;

  max-width: 1240px;
  height: 100%;
  margin: 4rem auto;
  padding: 0 2rem;

  & > * {
    flex: 1 300px;
  }
`;
