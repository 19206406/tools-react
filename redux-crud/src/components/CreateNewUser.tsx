import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions";
import { useState } from "react";

const CreateNewUser = () => {
  const { addUser } = useUserActions();
  const [result, setResult] = useState<'ok' | 'ko' | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormEvent>) => {
    event.preventDefault();

    setResult(null);

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;

    if (!name || !email || !github) {
      return setResult('ko');
    }

    addUser({ name, email, github });
    setResult('ok');
    form.reset();
  };

  return (
    <Card style={{ marginTop: "16px" }}>
      <Title>Crear nuevo usuario</Title>
      <form onSubmit={handleSubmit} action="">
        <TextInput name="name" placeholder="Nombre" />
        <TextInput name="email" placeholder="Email" />
        <TextInput name="github" placeholder="Github" />
        <Button type="submit" style={{ marginTop: "16px" }}>
          Crear
        </Button>
        <span>
          {result === 'ok' && (<Badge color="green">Usuario creado correctamente</Badge> )}
          {result === 'ko' && (<Badge color="red">Error al crear el usuario</Badge> )}
        </span>
      </form>
    </Card>
  );
};

export default CreateNewUser;
