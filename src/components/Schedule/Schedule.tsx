import { days } from "../../FakeDateBase/days";
import classes from "./Schedule.module.scss";
import ScheduleDay from "./ScheduleDay/ScheduleDay";
const Schedule = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className={classes["divider-horizontal"]}></div>
      <div className={classes["today"]}>Сегодня</div>
      <main className={classes["schedule"]}>
        {days.map((day) => (
          <>
            <ScheduleDay day={day} />
            <div className={classes["divider"]}></div>
          </>
        ))}
      </main>
    </div>
  );
};

export default Schedule;
