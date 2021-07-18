import React, { useState } from "react";

import Flex from "@cobalt/react-flex";
import Card from "@cobalt/react-card";
import Image from "@cobalt/react-image";
import { ExpandableRow, Cell } from "@cobalt/react-table";
import Icon from "@cobalt/react-icon";
import Tag from "@cobalt/react-tag";

import CardDetailForm from "./CardDetailForm";

export default function CardItem({ provider }) {
  const [expand, setExpand] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <>
      <ExpandableRow
        expanded={expand}
        content={
          <Cell>
            <CardDetailForm setActive={setActive} />
          </Cell>
        }
        onClick={(event) => {
          event.preventDefault();
          setExpand(!expand);
        }}
      >
        <Cell>
          <Card>
            <Flex
              alignY="center"
              paddingX="6"
              paddingY="5"
              alignX="space-between"
            >
              <Flex>
                {provider === "stripe" && (
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
                    width={90}
                    alt="stripe logo"
                  />
                )}
                {provider === "multibanco" && (
                  <Image
                    src="data:image/png;base64,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"
                    width={90}
                    alt="multibanco logo"
                  />
                )}
                {provider === "wepay" && (
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzorAbqWxg6SW_srsFJImf4_7SnbgpXR1lhM-L2KFCq2rvMPOu-6W3QjFInCvl0GRwAw&usqp=CAU"
                    width={90}
                    alt="wepay logo"
                  />
                )}
                {provider === "2checkout" && (
                  <Image
                    src="https://logos-download.com/wp-content/uploads/2019/11/2CheckOut_Logo.png"
                    width={90}
                    alt="wepay logo"
                  />
                )}
                {provider === "paypal" && (
                  <Image
                    src="https://logosmarcas.net/wp-content/uploads/2020/04/PayPal-Logo.png"
                    width={90}
                    alt="paypal logo"
                  />
                )}
              </Flex>
              <Flex>
                {active ? (
                  <Tag color="light-green">Active</Tag>
                ) : (
                  <Tag color="light-grey">Inactive</Tag>
                )}
              </Flex>
              <Flex>
                {expand ? (
                  <Icon name="expand_less" />
                ) : (
                  <Icon name="expand_more" />
                )}
              </Flex>
            </Flex>
          </Card>
        </Cell>
      </ExpandableRow>
    </>
  );
}
