import { Catigories, PizzaBlock, SortPopup } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { useCallback, useEffect } from "react";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "alphabet" },
  ],
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Catigories
          onClickItem={(name) => console.log(name)}
          items={categoryNames}
          onClickItem={onSelectCategory}
        />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
