import React, { useState } from "react";
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
import { Link } from "react-router";
import classes from "./Authentication.module.css";
import api from "../services/api.js";

export default function Authentication() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/auth/login", formData);
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Iniciar sesión
      </Title>

      <Text className={classes.subtitle}>
        ¿No tiene una cuenta? <Link to={"/signup"}>Registrarse</Link>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
        <TextInput name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required radius="md" />
        <PasswordInput name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required mt="md" radius="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="No cerrar sesión" />
          <Anchor component="button" size="sm">
            ¿No puede acceder a su cuenta?
          </Anchor>
        </Group>
        <Button type="submit" fullWidth mt="xl" radius="md">
          Iniciar sesión
        </Button>
        </form>
      </Paper>
    </Container>
  );
}
