import React from "react";

const TodoList = ({ color, title, ...rest }) => {
  return (
    <div
      style={{
        // flex: 1,
        backgroundColor: color,
        width: 300,
        height: 25,
        borderRadius: 12,
        textAlign: "center",
      }}
      {...rest}
    >
      {title}
    </div>
  );
};

export default TodoList;

const styles = StyleSheet;
