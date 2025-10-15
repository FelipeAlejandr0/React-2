import { Paper, Group, Image, Title, Text } from '@mantine/core';
import Button from './Button.jsx';
import styles from './Itemanime.module.css'; 

function Itemanime({ anime, onEdit, onDelete }) {
  return (
    <Paper withBorder p="xs" mb="sm">
      <Group>
        <Image src={anime.imagen} radius="md" w={100} h={120} fit="cover" />
        <div className={styles.itemContainer}>
          <Title order={3}>{anime.titulo}</Title>
          <Text>Estado: {anime.Estado}</Text>
          <Group mt="sm">
            <Button color="blue" onClick={() => onEdit(anime)}>Editar</Button>
            <Button color="red" onClick={() => onDelete(anime.id)}>Eliminar</Button>
          </Group>
        </div>

      </Group>
    </Paper>
  );
}

export default Itemanime;