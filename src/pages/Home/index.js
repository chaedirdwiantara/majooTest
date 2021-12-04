import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TodoList } from "../../components";
import { getDataList } from "../../config/redux/action";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    dispatch(getDataList());
  }, []);

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
