import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Gap, TodoList } from "../../components";
import { getDataList } from "../../config/redux/action";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { getDataResult } = useSelector((state) => state.dataReducer);
  console.log(getDataResult, "data API from reducer");

  const [status, setStatus] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    dispatch(getDataList());
  }, [dispatch]);

  //open modal after list clicked
  const openModal = (id) => {
    // setStatus(!status);
    // console.log(status);
    setSelected(id);
  };

  return (
    <div className="home-page-wrapper">
      {getDataResult !== false
        ? getDataResult.map((todo) => {
            return (
              <>
                <TodoList
                  color={selected === todo.id ? "green" : "yellow"}
                  title={todo.title}
                  onClick={() => openModal(todo.id)}
                  key={todo.id}
                />
                <Gap height={10} />
              </>
            );
          })
        : null}
    </div>
  );
};

export default Home;
