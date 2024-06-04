import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
/* IMAGE */
import ordersImage from "../../assets/ordersImage.png";
import Trash from "../../assets/trash.svg";

/* COMPONENTS */
import { H1 } from "../../components/Title/style";
import { Button as BackButton } from "../../components/Button/style";

/* STYLE */
import { Image, OrderLI, OrderUL, ClientName, Order, Button } from "./style";

function Orders() {
  const [orderAdded, setOrderAdded] = useState([]);

  useEffect(() => {
    async function getOrders() {
      const { data } = await axios.get(
        "https://pedidosback.up.railway.app/orders"
      );
      setOrderAdded(data);
    }
    getOrders();
  }, []);

  async function deleteOrder(id) {
    await axios.delete(`https://pedidosback.up.railway.app/order/${id}`);

    const newOrders = orderAdded.filter((item) => item.id !== id);
    setOrderAdded(newOrders);
  }

  return (
    <>
      <Image src={ordersImage} alt="Order Image" />
      <H1>Pedidos</H1>
      <OrderUL>
        {orderAdded.map((item) => (
          <OrderLI key={item.id}>
            <div className="contentText">
              <ClientName>{item.order}</ClientName>
              <Order>{item.clientName}</Order>
            </div>
            <Button>
              <Image
                buttonImage={true}
                src={Trash}
                onClick={() => deleteOrder(item.id)}
              />
            </Button>
          </OrderLI>
        ))}
      </OrderUL>
      <Link to={"/"}>
        <BackButton isBack={true}>Voltar</BackButton>
      </Link>
    </>
  );
}

export default Orders;
