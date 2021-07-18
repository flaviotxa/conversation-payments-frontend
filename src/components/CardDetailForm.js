import React, { useState } from "react";

import Flex from "@cobalt/react-flex";
import Card from "@cobalt/react-card";
import Input from "@cobalt/react-input";
import Label from "@cobalt/react-label";
import Toggle from "@cobalt/react-toggle";

import { useTheme } from "@cobalt/react-theme-provider";

export default function CardDetailForm({ setActive }) {
  const [toggleActive, setToggleActive] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Flex alignY="center" paddingY="2" alignX="space-between">
        <Card>
          <Flex
            alignY="center"
            paddingX="10"
            paddingY="5"
            alignX="space-between"
          >
            <Flex
              theme={theme}
              alignY="center"
              gap="2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log("updateAppPath({ path: card.url });");
              }}
            >
              <Flex
                theme={theme}
                alignY="center"
                alignX="space-between"
                gap="6"
              >
                <Flex direction="column">
                  <Label htmlFor="api-key">API Key</Label>
                  <Input readOnly={toggleActive} id="api-key" />
                </Flex>

                <Flex direction="column">
                  <Label htmlFor="api-secret">API Secret</Label>
                  <Input readOnly={toggleActive} id="api-secret" />
                </Flex>

                <Flex direction="column">
                  <Label htmlFor="success-url">Success URL</Label>
                  <Input readOnly={toggleActive} id="success-url" />
                </Flex>

                <Flex direction="column">
                  <Label htmlFor="cancel-url">Cancel URL</Label>
                  <Input readOnly={toggleActive} id="cancel-url" />
                </Flex>

                <Flex direction="column">
                  <Label htmlFor="template-message">Template Message</Label>
                  <Input readOnly={toggleActive} id="template-message" />
                </Flex>

                <Flex gap="2" alignY="center">
                  <Toggle
                    id="toggle"
                    active={toggleActive}
                    onChange={() => {
                      setToggleActive(!toggleActive);
                      setActive(!toggleActive);
                    }}
                  />
                  <Label htmlFor="toggle">
                    {toggleActive ? "Deactivate" : "Activate"}
                  </Label>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </>
  );
}
