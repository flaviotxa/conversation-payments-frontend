import React from "react";

import Flex from "@cobalt/react-flex";
import { Heading } from "@cobalt/react-typography";
import Divider from "@cobalt/react-divider";
import Tab from "@cobalt/react-tab";
import CardList from "./CardList";

export default function Main() {
  const tabs = [
    {
      key: "list",
      name: "Providers",
      active: true,
    },
  ];
  return (
    <>
      <Flex padding="6">
        <Heading level="1">Conversation Payments</Heading>
      </Flex>
      <Flex paddingX="6" gap="4">
        {tabs.map((tab) => (
          <Tab
            onClick={() => {
              console.log("changeTab({ key: tab.key });");
            }}
            key={tab.key}
            active={tab.active}
          >
            {tab.name}
          </Tab>
        ))}
      </Flex>
      <Divider />

      <CardList />
    </>
  );
}
