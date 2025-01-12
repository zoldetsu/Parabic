import { useState } from "react";
import { WeekdayConst } from "../../constants/WeekdayConsts";
import classes from "./Weekday.module.scss";

const Weekday = () => {
  const [arr, setArr] = useState<string[]>([]);

  const handleClick = (name: string) => {
    setArr((prevArr) => {
      if (!prevArr.includes(name)) {
        return [...prevArr, name]; // Добавляем элемент в массив
      } else {
        return prevArr.filter((item) => item !== name); // Убираем элемент из массива
      }
    });
  };

  console.log(arr);

  return (
    <div className={classes["weekday"]}>
      {WeekdayConst.map((item: string, index: number) => (
        <div
          className={classes["weekday__item"]}
          onClick={() => handleClick(item)}
          key={index}
        >
          <input
            type="checkbox"
            className={classes["weekday__item-checkbox"]}
            checked={arr.includes(item)}
          ></input>
          <div className={classes["weekday__item-text"]}>{item}</div>
        </div>
      ))}
      <button className={classes["weekday__button"]}>применить</button>
    </div>
  );
};

export default Weekday;
