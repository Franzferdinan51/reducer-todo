import React from "react";
import { Container, Header } from "semantic-ui-react";
//components:
import ItemForm from "./ItemForm";
// import TodoItem from './TodoItem';
// import DeleteList from './DeleteList'

function TodoWrapper() {

  return (
    <Container>
      <Header>To Do List!</Header>
      {}
      <ItemForm />
      {}
    </Container>
  );
}

export default TodoWrapper;
