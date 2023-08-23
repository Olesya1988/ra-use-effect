import { useEffect, useState } from "react";
import { List } from "./components/List";
import { Details } from "./components/Details";
import { Loading } from "./components/Loading";
import "./App.css";

interface Item {
  id: string;
  name: string;
}

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [activeID, setActiveID] = useState("");
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const url =
    "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

  const getAllItems = async () => {
    const response = await fetch(url, {
      method: "GET",
    });

    const result = await response.json();

    setItems((prev) => [...prev, ...result]);
    setLoading(false);
  };

  const loadData = () => {
    setLoading(true);
    getAllItems();
  };

  useEffect(loadData, []);

  const getActiveItem = async () => {
    const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${activeID}.json`;
    const response = await fetch(url, {
      method: "GET",
    });

    const result = await response.json();

    setInfo(result);
    setLoading(false);
  };

  const loadItem = () => {
    if (!activeID) {
      return;
    }
    setLoading(true);
    getActiveItem();
  };

  useEffect(loadItem, [activeID]);

  const onCheckItem = (e: any) => {
    const target = e.target.id;
    setActiveID(target);
    let arrOfItems = Array.from(document.querySelectorAll(".list-item"));
    arrOfItems.forEach((el) => el.classList.remove("active"));
    document.getElementById(target)?.classList.add("active");
  };

  return (
    <div className="contaiter">
      {loading && !items.length && <Loading />}
      {items.length && <List items={items} onClick={onCheckItem} />}
      {activeID && loading && <Loading />}
      {!loading && info && <Details info={info} />}
    </div>
  );
}
