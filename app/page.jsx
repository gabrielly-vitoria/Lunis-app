// Definindo que essa página vai ser visivel para o cliente
"use client"

// Imports

// Importando o TodoList 
import TodoList from '@/features/todo/components/TodoList/TodoList';

// exportando de forma padrão a função Home
export default function Home() {
  return (
    <main>
      <TodoList/>
    </main>
  );
}
