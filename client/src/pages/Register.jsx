import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./Register.module.css";

export default function Register() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
       Registrarse
      </Title>

      <Text className={classes.subtitle}>
        ¿No tiene una cuenta? <Anchor>Registrarse</Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <TextInput placeholder="Correo electrónico" required radius="md" />
        <PasswordInput placeholder="Contraseña" required mt="md" radius="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="No cerrar sesión" />
          <Anchor component="button" size="sm">
            ¿No puede acceder a su cuenta?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" radius="md">
          Iniciar sesión
        </Button>
      </Paper>
    </Container>
  );
}
