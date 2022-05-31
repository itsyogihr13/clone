import { useState } from "react";
import { Data } from "./data";
// import "./data";

export const Home = () => {
  const [data, SetData] = useState(Data);
  console.log(data);

  function handlesort(e) {
    if (e.target.value === "low") {
      // getdata.sort((first, second) => first.username - second.username);
      data.sort((a, b) => {
        if (a.Price > b.Price) return 1;
        else return -1;
      });
      SetData([...data]);
    } else if (e.target.value === "high") {
      data.sort((a, b) => {
        if (a.Price > b.Price) return -1;
        else return 1;
      });
      SetData([...data]);
    }
  }

  function handleprice(e) {}

  <p>Sort according to name</p>;

  function handlebyname(e) {
    data.sort((a, b) => {
      if (a.brand > b.brand) {
        return -1;
      }
    });
    SetData([...data]);
  }

  function handlebynameasc(e) {
    // console.log("here");
    data.sort((a, b) => {
      if (a.brand < b.brand) {
        return -1;
      }
    });
    SetData([...data]);
  }

  // function handleimg() {}

  return (
    <div>
      <select name="" id="" onClick={handlesort}>
        <option value="">---sort</option>
        <option value="high">high</option>
        <option value="low">low</option>
      </select>

      <button onClick={handlebyname}>sort by desc</button>

      <button onClick={handlebynameasc}>sort by asc</button>

      <a
        href="https://i.pinimg.com/originals/3b/9c/37/3b9c37df4d23edb68bcbc9fe5638d8cb.jpg"
        target="_blank"
      >
        <button>checkOut </button>
      </a>
      <button value={"low"} onClick={handlesort}>
        low
      </button>
      <button value={"high"} onClick={handlesort}>
        high
      </button>

      {data.map((el) => (
        <div id="main">
          <img src={el.img_src} alt="" srcset="" onClick={handleimg} />
          <p>{el.Price} </p>
          <p>{el.brand} </p>
        </div>
      ))}

      {data.map((el) => (
        <div>
          <img src={el.img_src} alt="" />
        </div>
      ))}
    </div>
  );
};
