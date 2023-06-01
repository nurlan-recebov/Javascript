import React from "react";
import Slider from "react-slick";
import { useGetCategoryQuery } from "../Redux/CreateApi/api";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Flex from "../Components/FlexStyled";

export const Category = () => {
  const { data, isLoading, error } = useGetCategoryQuery();

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Flex >
      {data &&
        data.map((card) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
               {card.id}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
    </Flex>
  );
};
