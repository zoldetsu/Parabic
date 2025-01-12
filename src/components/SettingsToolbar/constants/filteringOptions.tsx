import Weekday from "../sortedMenus/Weekday/Weekday";

export type IOption = {
  title: string;
  dropMenu: JSX.Element;
};
export const filteringOptions = [
  { title: "Тип занятия", dropMenu: <Weekday /> },
  // "Тип занятия",
  // "Предподаватели",
  // "Здания",
  // "Подгруппы",
  // "Аудитория",
  // "Время",
];
