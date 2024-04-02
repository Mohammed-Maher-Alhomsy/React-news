import { useEffect, useState } from "react";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLocation, useNavigate } from "react-router-dom";
import { formattedDate } from "@/util/formattedDate";

const DatePicker = () => {
  const [date, setDate] = useState<Date>();

  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const selectDateHandler = (date: Date | undefined) => {
    if (date) {
      const newDate = formattedDate(date);
      params.set("date", newDate);
      navigate({ search: params.toString() });
    }
  };

  useEffect(() => {
    const dateParams = params.get("date");

    if (dateParams) {
      const date = new Date(dateParams);
      setDate(date);
    }
  }, [search]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={selectDateHandler}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
