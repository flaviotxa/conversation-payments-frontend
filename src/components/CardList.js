import React from "react";
import styled from "styled-components";

import Flex from "@cobalt/react-flex";
import Table, { Body } from "@cobalt/react-table";

import CardItem from "./CardItem";

const CardBox = styled.div`
  padding-top: 1.5rem;
`;

export default function CardList() {
  return (
    <>
      <CardBox>
        <Table>
          <Body>
            <Flex direction="column" paddingX="6" gap="6">
              <CardItem provider="stripe" />
              <CardItem provider="multibanco" />
              <CardItem provider="2checkout" />
              <CardItem provider="paypal" />
              <CardItem provider="wepay" />
            </Flex>
          </Body>
        </Table>
      </CardBox>
    </>
  );
}
