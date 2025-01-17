import { AppContainer } from "../global";
import { FC } from "react";
import { CalendarForm } from "./calendar-form";

export const Calendar: FC = () => {
  return (
    <div>
      <AppContainer className="">
        <CalendarForm />
      </AppContainer>
    </div>
  );
};
