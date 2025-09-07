import {
  ActionIcon,
  Anchor,
  Button,
  Checkbox,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import {
  IconAt,
  IconBrandInstagram,
  IconBrandX,
  IconBrandFacebook,
  IconPhone,
  IconMail,
  IconListDetails,
} from "@tabler/icons-react";
import logo from "../assets/images/logo/logo.svg";
import brand from "../assets/images/logo/sc-logo.png";
import { footerData } from "../utils/footer-data";

export default function Footer() {
  const icon = <IconAt size={16} />;

  const sections = footerData.map((section) => (
    <Grid.Col span={3} key={section.title}>
      <Text size="lg" fw={700}>
        {section.title}
      </Text>
      {section.links.map((link) => (
        <Stack key={link.label} spacing="xs">
          <Anchor src={link.label} href={link.link}>
            <Text size="sm">{link.label}</Text>
          </Anchor>
        </Stack>
      ))}
    </Grid.Col>
  ));

  return (
    <>
      <Grid>
        <Grid.Col span={3}>
          <Image src={logo} fit="contain" w="auto" h={156} />
          <Image src={brand} fit="contain" w="auto" h={38} />
        </Grid.Col>
        {sections}
        <Grid.Col span={3}>
          <Stack spacing="xs">
            <Text size="lg" fw={700}>
              Suscríbete a nuestro newsletter
            </Text>
            <Text>
              Entérate de las últimas novedades y recibe descuentos exclusivos
            </Text>
            <TextInput
              leftSection={icon}
              placeholder="Correo electrónico"
            ></TextInput>
            <Anchor>
              <Checkbox label="Acepto la política de tratamiento de datos" />
            </Anchor>
            <Button fullWidth>Suscribirme</Button>
          </Stack>
        </Grid.Col>
      </Grid>
      <Text c="dimmed" size="sm">
        © 2025 Séptimo Círculo. Todos los derechos reservados.
      </Text>
      <Group justify="flex-end" wrap="nowrap">
        <ActionIcon>
          <IconBrandInstagram size={16} />
        </ActionIcon>
        <ActionIcon>
          <IconBrandX size={16} />
        </ActionIcon>
        <ActionIcon>
          <IconBrandFacebook size={16} />
        </ActionIcon>
      </Group>
    </>
  );
}
