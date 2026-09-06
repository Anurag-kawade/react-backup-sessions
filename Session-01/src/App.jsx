import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      } catch (error) {
        console.log("Failed to fetch the products", error);
      }
    }

    getData();
  }, []);

  return (
    <div className="all-cards">
      {data.map((item) => (
        <Card key={item.id} elem={item} />
      ))}
    </div>
  );
};

export default App;