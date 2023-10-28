import React from "react";
import Accordion from "../components/Accordion";
import ButtonsPage from "./ButtonsPage";

function AccordionPage() {
  const items = [
    {
      label: "can i use react on a project",
      content:
        "yes1 you can use react on a project, yes you can use react on a project ",
    },
    {
      label: "can i use react on a project",
      content:
        "yes2 you can use react on a project, yes you can use react on a project ",
    },
    {
      label: "can i use react on a project",
      content:
        "yes3 you can use react on a project, yes you can use react on a project ",
    },
  ];
  return (
    <>
      <ButtonsPage />
      <Accordion items={items} />
    </>
  );
}

export default AccordionPage;
