import styled from "styled-components";

export const WrapNumCart = styled.div`
  cursor: pointer;
  position: absolute;
  top: -13px;
  right: -15px;
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white1};
  border-radius: 50%;
  text-align: center;
`;
