import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  padding: 17px;
`;
PageContainer.displayName = 'PageContainer';

export const FormulaireContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid gey;
  box-shadow: 0px 10px shadow;
  border-radius: 8px;
  width: 100%;
  padding: 28px;
  box-sizing: border-box;
  background-color: white;
  margin-top: 16px;
`;
FormulaireContainer.displayName = 'FormulaireContainer';

export const InputForm = styled.input`
border: 1px solid;
  color: black;
  width: 100%;
  padding: 9px;
  font-style: normal;
  line-height: 17px;
  box-sizing: border-box;
  border-radius: 6px;
  height: 100%;
  &:focus {
    border: blue;
    // outline: none;
  }

  font-style: normal;
  font-weight: 500;  
  font-size: 16px;
`;
InputForm.displayName = 'InputForm';

export const ErrorSpan = styled.span`
  color: red;

`;
ErrorSpan.displayName = 'ErrorSpan';

export const Textarea = styled.textarea`
border: 1px solid;
  color: black;
  width: 100%;
  padding: 9px;
  font-style: normal;
  line-height: 17px;
  box-sizing: border-box;
  border-radius: 6px;
  height: 100px;
  &:focus {
    border: blue;
    // outline: none;
  }

  // font-family: 'Calibri;
  font-style: normal;
  font-weight: 500;  
  font-size: 16px;
`;
Textarea.displayName = 'Textarea';

export const Select = styled.select`
  border: 1px solid;
  color: grey;
  width: 100%;
  padding: 9px;
  font-style: normal;
  line-height: 17px;
  box-sizing: border-box;
  border-radius: 6px;
  height: 100%;
  &:focus {
    border: blue;
    // outline: none;
  }
`;
Select.displayName = 'Select';

export const ButtonForm = styled.button`
  width: 99%;
  background-color: #d9e8e7;
  border-radius: 6px;
  padding 15px;
  height: 35px;
  //display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 9px;
  margin-right: 9px;
  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
  
`;
ButtonForm.displayName = 'ButtonForm';