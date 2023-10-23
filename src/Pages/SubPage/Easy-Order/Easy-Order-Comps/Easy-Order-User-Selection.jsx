import React from "react";
import { useEasyOrderStore } from "../../../../state-store/easyOrderStore";

export default function EasyOrderUserSelection() {
    // const eventData = useEasyOrderStore((state) => state.event);
    const { event } = useEasyOrderStore((state) => ({ event: state.event }));

  console.log("eventData", event);
  
  return (
    <>
      <h1>User Selection Goes here</h1>
      <h2>Event: {event}</h2>
    </>
  );
}
