"use client";
import { Button, Calendar, InputOtp } from "@heroui/react";
import React from "react";
export default function Home() {
  const [value, setValue] = React.useState<string>(""); 
  // style lại từng thẻ div trong 1 componet
  return (
    <div>
    <div>Cuong</div>
    <Button className="bg-red-500 border shadow-xl border-pink-500 m-1" color="primary">Cuong</Button>

    <Calendar classNames={{
      title: "text-red-500 uppercase text-2xl font-bold",
      gridHeaderRow: "gap-1 text-green-500",
    }} color="secondary" aria-label="Date (No Selection)" />
    <InputOtp color="success" length={4} value={value} onValueChange={setValue} />  
    </div>
  );
}
