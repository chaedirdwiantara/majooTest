import React, { useEffect, useState } from "react";
import { Button, TodoList } from "../../components";
import "./home.scss";

const Home = () => {
  const [status, setStatus] = useState(false);

  //open modal after list clicked
  const openModal = () => {
    setStatus(!status);
    console.log(status);
  };

  return (
    <div className="home-page-wrapper">
      <TodoList color="red" title="harus" onClick={openModal} />
      <div className="content-wrapper">yo wassap</div>
    </div>
  );
};

export default Home;
