import { useState } from 'react';
import initialData from './data.json';
import AnimeList from './Componentes/Animelist.jsx';
import Anime from './Componentes/Anime.jsx'; 
import { Container, Title } from '@mantine/core';

function App() {
  const [animes, setAnimes] = useState(initialData);
  const [editingAnime, setEditingAnime] = useState(null);

  // CREATE
  const handleAdd = (newAnime) => {
    const newAnimesList = [];
    for (let i = 0; i < animes.length; i++){
    newAnimesList.push(animes[i]);
    }
    newAnimesList.push({ ...newAnime, id: Date.now()});
    setAnimes(newAnimesList);
    setEditingAnime(null);
  };

  // DELETE
  const handleDelete = (id) => {
    const newAnimesList = [];
    for (let i = 0; i < animes.length; i++) {
      if (animes[i].id !== id) {
        newAnimesList.push(animes[i]);
      }
    }
    setAnimes(newAnimesList);
  };
  
  const handleEdit = (anime) => {
    setEditingAnime(anime);
  };

  // UPDATE
  const handleUpdate = (updatedAnime) => {
    const newAnimesList = [];
    for (let i = 0; i < animes.length; i++) {
      if (animes[i].id === updatedAnime.id) {
        newAnimesList.push(updatedAnime);
      } else {
        newAnimesList.push(animes[i]);
      }
    }
    setAnimes(newAnimesList);
    setEditingAnime(null);
  };
  
  return (
    <Container> 
      <Title order={1} align="center" >Mi Biblioteca de Anime</Title>
      <Anime
        onSubmit={editingAnime ? handleUpdate : handleAdd}  // handleuptate es para actualizar el anime existente , hadleadd es para agregar un nuevo anime
        initialData={editingAnime} 
      />
      
      <AnimeList
        animes={animes}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Container>
  );
}
export default App;