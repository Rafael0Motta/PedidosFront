import styled from "styled-components";

export const Image = styled.img`
  display: block;
  margin: 40px auto 0;

  ${(props) => props.buttonImage &&`
  margin: 39px 0 34px;
  `}
`;

export const OrderUL = styled.ul`
  list-style: none;
`;

export const OrderLI = styled.li`
  background: #474747;
  border-radius: 14px;
  width: 342px;
  height: 101px;
  padding: 15px;
  margin: 35px auto;
  display: flex;
  gap: 88px;
  align-items: center;
  justify-content: space-between;
`;

export const ClientName = styled.p`
  margin-bottom: 29px;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
`;

export const Order = styled.p`
  font-weight: 700;
  color: #fff;
  font-size: 18px;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;
