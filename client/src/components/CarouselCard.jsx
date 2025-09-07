import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Anchor,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { IconHeart, IconShoppingCartPlus } from "@tabler/icons-react";
import { books } from "../utils/img-banners.js";

export default function CarouselCard() {
  const card = books.map((image) => (
    <Carousel.Slide>
      <Card key={image} withborder>
        <Card.Section>
          <Flex justify="center">
            <Anchor>
              <Image src={image} h={252} w={180} />
            </Anchor>
          </Flex>
          <Flex justify="flex-end">
            <ActionIcon>
              <IconHeart size={16} />
            </ActionIcon>
          </Flex>
        </Card.Section>
        <Anchor>
          <Text>Título del libro</Text>
        </Anchor>
        <Text>Autor</Text>
        <Text>$00000</Text>
        <Button leftSection={<IconShoppingCartPlus size={16} />} fullWidth>
          Añadir al carrito
        </Button>
      </Card>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="20%"
      slideGap="lg"
      controlsOffset="md"
      controlSize={32}
      emblaOptions={{
        loop: true,
        dragFree: true,
        align: "start",
      }}
    >
      {card}
    </Carousel>
  );
}
