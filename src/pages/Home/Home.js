import React, { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

/* IMAGE */
import HomeImage from "../../assets/homeImage.png";

/* COMPONENTS */
import H1 from "../../components/Title/index";
import InputLabel from "../../components/InputLabel/index";
import Button from "../../components/Button/index";

/* Style */
import { Image, Input } from "./style";

function Home() {
  const inputRefName = useRef();
  const inputRefOrder = useRef();

  async function addOrder() {
    const data = await axios.post("https://pedidosback.up.railway.app/order", {
      order: inputRefOrder.current.value,
      clientName: inputRefName.current.value,
    });
    console.log(data);

    if (data.status === 201) {
      window.alert("Successfully added order | Ordem adicionada com sucesso");
    } else {
      window.alert("Error");
    }
  }

  return (
    <>
      <Image src={HomeImage} alt="Home Image" />
      <H1>Faça seu pedido!</H1>

      <InputLabel>Pedido</InputLabel>
      <Input
        placeholder="1 Coca-Cola, 1-X Salada"
        type="text"
        ref={inputRefOrder}
      />

      <InputLabel>Nome do Cliente</InputLabel>
      <Input placeholder="Steve Jobs" type="text" ref={inputRefName} />
      <Button onClick={addOrder}>Novo Pedido</Button>
      <Link to={"/orders"}>
        <Button seeRequest={true}>Ver pedidos</Button>
      </Link>
    </>
  );
}

export default Home;
