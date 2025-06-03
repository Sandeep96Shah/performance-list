import React, { useState, useEffect, useRef } from "react";
import Card from "../card";
import "./styles.css";

const API = "https://dummyjson.com/recipes/search?limit=10";

const List = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const lastItemRef = useRef(null);

  const getList = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API}&page=${page}`);
      if (!response.ok) {
        alert(`Http Error with status: ${response.status}`);
        return;
      }
      const data = await response.json();
      setList((prevList) => [...prevList, ...data?.recipes]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (page) getList();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }

    return () => {
      if (lastItemRef.current) observer.unobserve(lastItemRef.current);
    };
  }, [loading]);

  return (
    <>
      {list.length ? (
        <div className="list-container">
          {list.map(({ image, id, instructions }, index) => (
            <Card
              key={id}
              image={image}
              instructions={instructions.join(" ")}
              isLCP={index === 0}
            />
          ))}
          <p ref={lastItemRef}></p>
        </div>
      ) : (
        <div className="loading-container">
          <p className="loading">{loading ? "Loading..." : null}</p>
        </div>
      )}
    </>
  );
};

export default List;
