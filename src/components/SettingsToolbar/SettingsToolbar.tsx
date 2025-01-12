import { useState } from "react";
import classes from "./SettingsToolbar.module.scss";
import {
  Calendar as Calendarr,
  ChevronLeft,
  ChevronRight,
  Filter,
  GitCompare,
  LayoutGrid,
  PanelsTopLeft,
  Search,
  Settings,
  SquareMenu,
} from "lucide-react";
import { filteringOptions, IOption } from "./constants/filteringOptions";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const SettingsToolbar = () => {
  const [activeFilterTools, setActiveFilterTools] = useState<boolean>(false);
  const [activeFilterTool, setActiveFilterTool] = useState<boolean>(false);
  return (
    <section className={classes["toolbar"]}>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className={classes["toolbar__left"]}>
          <div className={classes["calendar"]}>
            <div className={classes["calendar__button"]}>
              <Calendarr size={20} />
              <div className={classes["calendar__button-text"]}>
                Январь 2025
              </div>
              <ChevronLeft size={20} />
              <ChevronRight size={20} />
            </div>
            {/* <div className={classes["calendar__dropdown"]} style={{}}>
          <Calendar onChange={handleChange} value={value} />
        </div> */}
          </div>

          <div className={classes["filter"]}>
            <button
              className={`${classes["filter__button"]} ${
                activeFilterTools ? classes["filter__button_active"] : ""
              } `}
              onClick={() => setActiveFilterTools((prev) => !prev)}
            >
              <Filter size={18} />
              <div className={classes["filter__button-text"]}>Фильтр</div>
            </button>
          </div>
        </div>

        <div className={classes["toolbar__right"]}>
          <button className={classes["compare__button"]}>
            <GitCompare size={20} />
            <div className={classes["compare__button-text"]}>Сравнить</div>
          </button>

          <div className={classes["search__button"]}>
            <Search size={20} />
          </div>

          <div className={classes["settings__button"]}>
            <Settings size={20} />
          </div>

          <div className={classes["view-selector"]}>
            <LayoutGrid
              className={classes["view-selector__button"]}
              size={20}
            />
            <SquareMenu
              className={classes["view-selector__button"]}
              size={20}
            />
            <PanelsTopLeft
              className={classes["view-selector__button"]}
              size={20}
            />
            <Calendarr className={classes["view-selector__button"]} size={20} />
          </div>
        </div>
      </main>

      {/* <div className={classes["filter-options"]}>
        {activeFilterTools &&
          filteringOptions.map((option: string) => (
            <button className={classes["filter-options__button"]}>
              <div className={classes["filter-options__button-text"]}>
                {option}
              </div>
            </button>
          ))}
      </div> */}
      {/* {activeFilterTools && <FilterOptions />} */}
      <div className={classes["filter-options"]}>
        {activeFilterTools &&
          filteringOptions.map((option: IOption) => (
            <div style={{ position: "relative" }}>
              <button
                className={classes["filter-options__button"]}
                onClick={() => setActiveFilterTool((prev) => !prev)}
              >
                <div className={classes["filter-options__button-text"]}>
                  {option.title}
                </div>
              </button>

              {activeFilterTool && option.dropMenu}
            </div>
          ))}
      </div>
    </section>
  );
};

export default SettingsToolbar;
