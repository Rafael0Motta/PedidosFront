import React from "react";

/* IMAGE */
import HomeImage from "../../assets/homeImage.png";

/* COMPONENTS */
import H1 from "../../components/Title/index";
import InputLabel from "../../components/InputLabel/index";
import Button from "../../components/Button/index";

/* Style */
import { Image, Input } from "./style";

function Home() {
  return (
    <>
      <Image src={HomeImage} alt="Home Image" />
      <H1>Faça seu pedido!</H1>

      <InputLabel>Pedido</InputLabel>
      <Input placeholder="1 Coca-Cola, 1-X Salada" type="text" />

      <InputLabel>Nome do Cliente</InputLabel>
      <Input placeholder="Steve Jobs" type="text" />

      <Button>Novo Pedido</Button>
    </>
  );
}

export default Home;
