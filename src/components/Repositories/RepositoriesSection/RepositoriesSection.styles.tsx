import styled from "styled-components";

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
