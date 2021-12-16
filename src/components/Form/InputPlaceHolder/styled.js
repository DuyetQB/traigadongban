import styled from "styled-components";

export const InputPlaceHolder = styled.textarea`
  width: 100%;
  padding: 0.5em 0.5em;
  margin: 10px 0px;
  border: 2px solid ${({ theme }) => theme.colors.grey1};
  resize: none;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.blue2};
  }
`;

export const Text = styled.span`
  padding: 0.5em;
  margin: 20px 0px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
export const Error = styled.span`
  padding: 2em;
  color: ${({ theme }) => theme.colors.red};
`;
