import { ChevronDown, Search } from "lucide-react";
import classes from "./Header.module.scss";
import { useState } from "react";
const Header = () => {
  const [active, setActive] = useState<string>("schedule");
  const [acviteDrop, setActiveDrop] = useState<boolean>(false);
  const [activeTitle, setActiveTitle] = useState<string>("Расписание занятий");

  const handleClick = (title: string) => {
    setActiveDrop((prev) => !prev);
    setActiveTitle(title);
  };
  return (
    <header className={classes.header}>
      <section className={classes["header-first"]}>
        <div className={classes.header__logo}>
          Капи
          <br />
          Пара
        </div>

        <div className={classes.header__divider}></div>
        <div className={classes["dropdown"]}>
          <button
            className={classes["dropdown__button"]}
            onClick={() => setActiveDrop((prev) => !prev)}
          >
            <div className={classes["dropdown__button-text"]}>
              {activeTitle}
            </div>

            <ChevronDown color="white" size={23} />
          </button>

          <article
            className={`${classes["dropdown__options"]} ${
              acviteDrop ? classes["dropdown_active"] : ""
            }`}
          >
            <div
              className={classes["dropdown__item"]}
              onClick={() => handleClick("Расписание занятий")}
            >
              <h4 className={classes["dropdown__item-title"]}>
                Расписание занятий
              </h4>
              <h5 className={classes["dropdown__item-description"]}>
                Расписание групп и преподавателей
              </h5>
            </div>
            <div
              className={classes["dropdown__item"]}
              onClick={() => handleClick("Занятость аудитории")}
            >
              <h4 className={classes["dropdown__item-title"]}>
                Занятость аудитории
              </h4>
              <h5 className={classes["dropdown__item-description"]}>
                Забронируйте или проверьте заннятость нужной аудитории
              </h5>
            </div>
          </article>
        </div>
      </section>
      <section className={classes["header-second"]}>
        <div className={classes["buttons-select"]}>
          <button
            className={`${classes["button-select"]} ${classes["schedule"]} ${
              active === "schedule" ? classes["button_active"] : ""
            }`}
            onClick={() => setActive("schedule")}
          >
            Расписание занятий
          </button>
          <button
            className={`${classes["button-select"]} ${classes["exams"]} ${
              active === "exams" ? classes["button_active"] : ""
            }`}
            onClick={() => setActive("exams")}
          >
            Экзамены
          </button>
        </div>
      </section>
      <section className={classes["header-third"]}>
        <div className={classes["search-form"]}>
          <Search color="white" size={17} />
          <input className={classes["search-form__input"]} type="number" />
        </div>

        <div className={classes["week"]}>
          <div className={classes["week-text"]}>Четная неделя</div>
        </div>
      </section>
    </header>
  );
};

export default Header;
