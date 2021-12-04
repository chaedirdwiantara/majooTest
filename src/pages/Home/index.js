import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Gap, TodoList } from "../../components";
import { getDataList } from "../../config/redux/action";
import { updateStatusData } from "../../config/redux/action/updateData";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { getDataResult } = useSelector((state) => state.dataReducer);

  const [status, setStatus] = useState(false);
  const [selected, setSelected] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(getDataList());
  }, [dispatch]);

  //open modal after list clicked
  const openModal = (id, description) => {
    setSelected(id);
    setStatus(true);
    setDescription(description);
  };

  //set modal status
  const toggle = () => {
    setStatus(!status);
  };

  //update Description
  const upDateDesc = () => {
    dispatch(updateStatusData(selected));
  };

  //update Status Data,
  const done = () => {
    dispatch(updateStatusData(selected));
  };

  //Delete data
  const deleteData = () => {
    dispatch(updateStatusData(selected));
  };

  return (
    <>
      <div className="home-page-wrapper">
        {getDataResult !== false
          ? getDataResult.map((todo) => {
              return (
                <>
                  <TodoList
                    color={selected === todo.id ? "green" : "yellow"}
                    title={todo.title}
                    onClick={() => openModal(todo.id, todo.title)}
                    key={todo.id}
                  />
                  <Gap height={10} />
                </>
              );
            })
          : null}
      </div>

      <div style={{ margin: 50, backgroundColor: "gray" }}>
        <Modal funk={true} isOpen={status} toggle={toggle}>
          <ModalBody>{description}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={upDateDesc}>
              Update
            </Button>{" "}
            <Button color="primary" onClick={done}>
              Done
            </Button>{" "}
            <Button color="primary" onClick={deleteData}>
              Delete
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default Home;
