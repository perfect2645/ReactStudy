import React from "react";
import Meals from "./components/Meals/Meals";
import FilterMeals from "./components/filter/FilterMeals";
import Cart from "./components/cart/Cart";
import CartContext from "./store/CartContext";

const MEALS_DATA = [
  {
    id: 1,
    title: "汉堡包",
    desc: "百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！",
    price: 12,
    img: "/img/meals/1.png",
  },
  {
    id: 2,
    title: "双层吉士汉堡",
    desc: "百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！",
    price: 20,
    img: "/img/meals/2.png",
  },
  {
    id: 3,
    title: "巨无霸",
    desc: "两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！",
    price: 24,
    img: "/img/meals/3.png",
  },
  {
    id: 4,
    title: "麦辣鸡腿汉堡",
    desc: "金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！",
    price: 21,
    img: "/img/meals/4.png",
  },
  {
    id: 5,
    title: "板烧鸡腿堡",
    desc: "原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！",
    price: 22,
    img: "/img/meals/5.png",
  },
  {
    id: 6,
    title: "麦香鸡",
    desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
    price: 14,
    img: "/img/meals/6.png",
  },
  {
    id: 7,
    title: "吉士汉堡包",
    desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
    price: 12,
    img: "/img/meals/7.png",
  },
];

const App = () => {
  const [meals, setMeals] = React.useState(MEALS_DATA);
  const [cartData, setCartData] = React.useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const addItem = (meal) => {
    setCartData((prevData) => {
      const cartCopy = { ...prevData };
      const existingItem = cartCopy.items.find((item) => item.id === meal.id);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        meal.amount = 1;
        cartCopy.items.push(meal);
      }
      cartCopy.totalAmount += 1;
      cartCopy.totalPrice += meal.price;

      return cartCopy;
    });
  };

  const removeItem = (id) => {
    setCartData((prevData) => {
      const cartCopy = { ...prevData };

      const existingItem = cartCopy.items.find((item) => item.id === id);
      if (!existingItem) {
        console.warn("Item not found in cart");
        return;
      }

      existingItem.amount -= 1;
      if (existingItem.amount === 0) {
        cartCopy.items.splice(cartCopy.items.indexOf(existingItem), 1);
      }
      cartCopy.totalAmount -= 1;
      cartCopy.totalPrice -= existingItem.price;
      return cartCopy;
    });
  };

  const clearCart = () => {
    const cartCopy = { ...cartData };
    cartCopy.items.forEach((element) => {
      element.amount = 0;
    });

    setCartData({
      items: [],
      totalAmount: 0,
      totalPrice: 0,
    });
  };

  const onFilter = (keyword) => {
    if (!keyword) {
      setMeals(MEALS_DATA);
      return;
    }
    const filteredMeals = MEALS_DATA.filter((meal) =>
      meal.title.includes(keyword)
    );
    setMeals(filteredMeals);
  };

  return (
    <>
      <FilterMeals onFilter={onFilter} />
      <CartContext.Provider
        value={{ ...cartData, addItem, removeItem, clearCart }}
      >
        <Meals meals={meals}></Meals>
        <Cart></Cart>
      </CartContext.Provider>
    </>
  );
};

export default App;
