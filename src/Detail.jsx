import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  //   const state = useSelector((state) => {
  //     return state.watched;
  //   });
  //   const uniqueState = Array.from(new Set(state));
  const { id } = useParams();
  useEffect(() => {
    let a = JSON.parse(localStorage.getItem("watched"));
    console.log(a);
    if (!a.includes(id)) {
      a.push(id);
    }
    localStorage.setItem("watched", JSON.stringify(a));

    // localStorage.setItem("watched", JSON.stringify(uniqueState));
  }, []);

  return <div> 디테일페이지</div>;
};

export default Detail;
