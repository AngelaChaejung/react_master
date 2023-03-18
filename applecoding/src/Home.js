import axios from "axios";
import "./App.css";
import styled from "styled-components";
import { createContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Router from "./shared/Router";

export const Context1 = createContext();

function TabContent({ tab, shoes }) {
  const [fade, setFade] = useState("");
  useEffect(() => {
    const a = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [tab]);
  return <div className={"start " + fade}>{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}</div>;
}

function Home() {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tab, setTab] = useState(0);
  const [fade, setFade] = useState("");
  useEffect(() => {
    const a = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [shoes]);

  return (
    <div>
      <Router />
      <button
        onClick={() => {
          setIsLoading(true);
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((data) => {
              console.log(shoes);
              let copy = [...shoes, ...data.data];
              setShoes(copy);
              console.log(shoes);
              setIsLoading(false);
            })

            .catch(() => {
              console.log("통신실패");
            });
        }}
      >
        리스트보기
        {isLoading && <div>로딩중..</div>}
      </button>
      <div className={"liststart" + fade}>
        {shoes.map((s, i) => {
          return (
            <div>
              {s.title}:{s.price}
              <br /> {s.content} <hr />
            </div>
          );
        })}
      </div>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventkey="link0" onClick={() => setTab(0)}>
            button0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => setTab(1)}>
            button1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => setTab(2)}>
            button2
          </Nav.Link>
        </Nav.Item>
      </Nav>{" "}
      <TabContent tab={tab} shoes={shoes} />
      <Context1.Provider value={{ shoes }}></Context1.Provider>
    </div>
  );
}

export default Home;

const Popup = styled.div`
  background-color: yellowgreen;
  width: 400px;
  height: 100px;
  text-align: center;
  padding: 30px;
  font-size: 30px;
`;
