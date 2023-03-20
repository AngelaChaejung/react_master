import "./App.css";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

function App() {
  const state = useSelector((state) => {
    return state.cart;
  });

  return (
    <div>
      갖다 써보자
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>count</th>
            </tr>
          </thead>
          <tbody>
            {state.map((a) => (
              <tr ket={a.id}>
                <td>{a.id + 1}</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

:{}'\



'