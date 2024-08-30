import styled from "styled-components";

export const ProfileCard = styled.div`
  background: '#fff';
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: auto;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 28px;
  text-align: center;
`;

export const Bio = styled.p`
  margin: 10px 0;
  font-size: 16px;
  text-align: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
  font-family: cursive;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const InfoIcon = styled.div`
  margin-right: 8px;
`;

export const ProfileLink = styled.a`
  color: '#007bff';
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;