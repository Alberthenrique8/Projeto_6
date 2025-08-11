import { useEffect, useState } from "react";
import { ExportRestaurante, Restaurante } from "../cards";
import { Container, List } from "./styles";

type Props = {
  title: string;
  background: "gray" | "black";
};

const FoodList = ({ background, title }: Props) => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((data) => setRestaurantes(data));
  }, []);

  return (
    <Container>
      <h2>{title}</h2>
      <List>
        {restaurantes.map((r) => (
          <ExportRestaurante key={r.id} restaurante={r} />
        ))}
      </List>
    </Container>
  );
};

export default FoodList;
