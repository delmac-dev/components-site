import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import Wrapper from "../components/Wrapper";

const FormCalender = () => {
  const [date, setDate] = useState(new Date());


  return (
    <Wrapper title={"Calender Shadcn UI"} bgcolor={"bg-neutral-50"}>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    </Wrapper>
  )
}

export default FormCalender;