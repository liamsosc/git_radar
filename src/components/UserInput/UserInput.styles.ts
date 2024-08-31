import styled from 'styled-components';
import { Input, Button } from 'antd';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, transparent, #dce1e6);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  border-radius: 25px;
  border: 2px solid #40a9ff;
  padding: 10px 20px;
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 25px;
  background: linear-gradient(135deg, #40a9ff, #1890ff);
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #1890ff, #40a9ff);
    opacity: 0.9;
  }
`;
