import "./App.css";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { changeAge, changeName } from "./store/userSlice";
import { addCount } from "./store";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  console.log(state);

  return (
    <div>
      갖다 써보자 이름:{state.user.name} 나이:{state.user.age}
      <Button onClick={() => dispatch(changeName())}>+</Button>
      <Button onClick={() => dispatch(changeAge(1))}>나이추가</Button>{" "}
      <Button onClick={() => dispatch(changeAge(10))}>10나이추가</Button>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>count</th>
              <td>add count</td>
            </tr>
          </thead>
          <tbody>
            {state.cart.map((a, i) => (
              <tr ket={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
                <td>
                  <Button onClick={() => dispatch(addCount(a.id))}>+</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default App;
