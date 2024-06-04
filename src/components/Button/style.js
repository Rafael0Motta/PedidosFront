import styled from "styled-components";

export const Button = styled.button`
  margin: 35px auto 30px;
  display: block;
  width: 342px;
  height: 68px;
  background-color: #d93856;
  border: none;
  color: #fff;
  outline: none;
  font-size: 17px;
  font-weight: 500;
  line-height: 2.5px;
  cursor: pointer;

  &:hover {
    background-color: #b21a36;
  }

  ${(props) =>
    props.isBack &&
    `
  background-color: #2c2c31;
`}

  ${(props) =>
    props.seeRequest &&
    `
    margin: 0 auto 20px; 
  background-color: #2c2c31;
`}
`;
