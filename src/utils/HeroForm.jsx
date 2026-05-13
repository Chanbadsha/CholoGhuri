"use client";
import { Magnifier } from "@gravity-ui/icons";

import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import DatePicker from "react-datepicker";
import { useState } from "react";

const HeroForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  const [date, setDate] = useState("");
  return (
    <div>
      <Form
        className="flex items-center justify-center  lg:gap-4 w-full max-w-5xl mx-auto 
  bg-white/10 backdrop-blur-2xl border border-white/20 
  shadow-2xl rounded-full px-4 sm:px-8 py-3 sm:py-5
  hover:bg-white/15 transition-all duration-300"
        onSubmit={onSubmit}
      >
        {/* Where */}
        <TextField className="flex-1" name="Location" type="text">
          <Label className="text-sky-300 text-xs font-medium ml-2 text-left mb-1">
            Where
          </Label>
          <Input
            className="ring-0 bg-transparent shadow-none placeholder:text-white/40 text-white text-sm"
            placeholder="Search destinations"
          />
        </TextField>

        {/* When */}
        <TextField name="date" type="date" className="flex-1">
          <Label className="text-sky-300 text-xs font-medium ml-2 text-left mb-1">
            When
          </Label>

          <DatePicker
            selected={date}
            onChange={(d) => setDate(d)}
            placeholderText="Add dates"
            className="w-full bg-transparent text-white placeholder:text-white/40 text-sm outline-none"
          />
        </TextField>

        {/* Who */}
        <TextField name="guest" type="text" className="flex-1 hidden lg:flex">
          <Label className="text-sky-300 text-xs font-medium ml-2 text-left mb-1">
            Who
          </Label>
          <Input
            className="ring-0 bg-transparent shadow-none placeholder:text-white/40 text-white text-sm"
            placeholder="Add guests"
          />
        </TextField>

        {/* Button */}
        <Button
          type="submit"
          className="h-12 w-12 rounded-full bg-sky-500 hover:bg-sky-400 
    shadow-lg shadow-sky-500/30 flex items-center justify-center
    transition-all duration-300 hover:scale-105 active:scale-95"
          variant="secondary"
        >
          <Magnifier className="w-4 h-4 text-white" />
        </Button>
      </Form>
    </div>
  );
};

export default HeroForm;
