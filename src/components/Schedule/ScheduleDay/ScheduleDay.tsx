import React from "react";
import classes from "./ScheduleDay.module.scss";
import { Group, Users } from "lucide-react";
import { Idays } from "../../../FakeDateBase/days";

interface IScheduleDay {
  day: Idays;
}

const ScheduleDay = ({ day }: IScheduleDay) => {
  return (
    <div className={classes["schedule__day"]}>
      <div className={classes["day__date"]}>{day.number}</div>
      <div className={classes["day__time"]}>
        {day.timeLessons} {day.week}
      </div>

      <div className={classes["lessons"]}>
        {day.lessons.map((lesson) => (
          <div className={classes["item"]}>
            <div className={classes["item__type"]}>
              <h4 className={classes["item__type-text"]}>{lesson.type}</h4>
              <h5 className={classes["item__type-time"]}>{lesson.time}</h5>
            </div>
            <h5 className={classes["item__subgroup"]}>{lesson.subgroup}</h5>
            <h5 className={classes["item__name"]}>{lesson.name}</h5>
            <h6 className={classes["item__place"]}>
              {lesson.place} {lesson.office}
            </h6>

            <div className={classes["item__groups"]}>
              {lesson.groups?.length !== 0 &&
                lesson.groups?.map((group) => (
                  <div className={classes["group"]}>
                    <Users size={17} />
                    {group}
                  </div>
                ))}

              {lesson.dates?.length !== 0 &&
                lesson.dates?.map((date) => (
                  <div className={classes["group"]}>{date}</div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleDay;
