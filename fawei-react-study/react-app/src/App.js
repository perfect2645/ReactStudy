import { useState } from "react";
import Cart from "./components/Cart/Cart";
import FilterMeals from "./components/FilterMeals/FilterMeals";
import Meals from "./components/meals/Meals";
import CartContext from "./store/cart-context";

const MEALS_DATA = [
  {
    id: "1",
    title: "汉堡包",
    desc: "百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！",
    price: 12,
    img: "/img/meals/1.png",
  },
  {
    id: "2",
    title: "双层吉士汉堡",
    desc: "百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！",
    price: 20,
    img: "/img/meals/2.png",
  },
  {
    id: "3",
    title: "巨无霸",
    desc: "两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！",
    price: 24,
    img: "/img/meals/3.png",
  },
  {
    id: "4",
    title: "麦辣鸡腿汉堡",
    desc: "金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！",
    price: 21,
    img: "/img/meals/4.png",
  },
  {
    id: "5",
    title: "板烧鸡腿堡",
    desc: "原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！",
    price: 22,
    img: "/img/meals/5.png",
  },
  {
    id: "6",
    title: "麦香鸡",
    desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
    price: 14,
    img: "/img/meals/6.png",
  },
  {
    id: "7",
    title: "吉士汉堡包",
    desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
    price: 12,
    img: "/img/meals/7.png",
  },
];

const App = () => {
  const [mealsData, setMealsData] = useState(MEALS_DATA);

  const [cartData, setcartData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const addItem = (meal) => {
    const newCartData = { ...cartData };

    if (newCartData.items.indexOf(meal) === -1) {
      newCartData.items.push(meal);
      meal.amount = 1;
    } else {
      meal.amount += 1;
    }
    newCartData.totalAmount += 1;
    newCartData.totalPrice += meal.price;

    setcartData(newCartData);
  };

  const removeItem = (meal) => {
    const newCartData = { ...cartData };

    if (newCartData.items.indexOf(meal) === -1) {
      return;
    } else {
      meal.amount -= 1;
    }

    if (meal.amount <= 0) {
      newCartData.items.splice(newCartData.items.indexOf(meal), 1);
    }

    newCartData.totalAmount -= 1;
    newCartData.totalPrice -= meal.price;

    setcartData(newCartData);
  };

  const clearItems = () => {
    const newCartData = { ...cartData };
    newCartData.items.forEach((item) => delete item.amount);
    newCartData.items = [];
    newCartData.totalAmount = 0;
    newCartData.totalPrice = 0;

    setcartData(newCartData);
  };

  const filterMealsHandler = (keyWord) => {
    const filteredMealsData = MEALS_DATA.filter(
      (item) => item.title.indexOf(keyWord) !== -1
    );

    setMealsData(filteredMealsData);
  };

  return (
    <CartContext.Provider
      value={{ ...cartData, addItem, removeItem, clearItems }}
    >
      <div>
        <FilterMeals onFilter={filterMealsHandler}></FilterMeals>
        <Meals mealsData={mealsData}></Meals>
        <Cart></Cart>
      </div>
    </CartContext.Provider>
  );
};

export default App;
