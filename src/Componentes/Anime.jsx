import { useState, useEffect } from 'react';
import { TextInput, Textarea, Group, Button } from '@mantine/core';

const animeVacio = { id: null, titulo:'', Estado:'', imagen:'' };

function Anime({ onSubmit, initialData }) {
  const [formData, setFormData] = useState(animeVacio);
  useEffect(() => {
    setFormData(initialData || animeVacio);
  }, [initialData]);

  const handleInputChange = (field, value) => {
    setFormData(currentData => ({ ...currentData, [field]: value })); // ...currenData es para mantener los demas campos del formulario sin que se borren
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    if (!initialData) {
    setFormData(animeVacio);
  }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Título" requiredvalue={formData.titulo}
        onChange={(e) => handleInputChange('titulo', e.target.value)} // handleinputChange es una funcion que actualiza el estado del formulario
        mb="sm"
      />
      <Textarea
        label="Estado"requiredvalue={formData.estado}
        onChange={(e) => handleInputChange('Estado', e.target.value)}
        mb="sm"
      />
      <TextInput
        label="URL de la Imagen" required type="url"
        value={formData.imagen}
        onChange={(e) => handleInputChange('imagen', e.target.value)}
        mb="sm"
      />
      <Group justify="flex-end">
        <Button type="submit">
          {formData.id ? "Guardar Cambios" : "Agregar Anime"}
        </Button>
      </Group>
    </form>
  );
}

export default Anime;