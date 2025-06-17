// Definindo que vai ser visisvel para o cliente 
"use client"

// Imports

// Importando o useState da biblioteca react
import { useState } from 'react';
// Importando o styles do addTaskModal
import styles from './addTaskModal.module.scss';

// exportando de forma padrão a função AddTaskModal
export default function AddTaskModal({ onClose, onAddTask }) {
  //criei uma variavel contasnte que tem dois parametros o title que vai armazenar o title de inicio e o setTitle que vai atualizar o valor que está dentro do title, e essa regrinha serve para todos os outros abaixo  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('work');
  const [startDate, setStartDate] = useState('');
  const [dueDate, setDueDate] = useState('');

  // criei uma arrowfunction constante chamada handleSubmit
  // que define oque vai acontecer quando o botão "Add" for clicado
  const handleSubmit = () => {
    // title.trim checa se o resultado está vazio 
    // se o title estiver vazio então a função sera encerrada 
    if (!title.trim()) return;
    // se ele passou pela checagem, então vai ser adicionado as tarefas 
    onAddTask({ title, category, startDate, dueDate });
    // e fecha a aba após a tarefa ser adicionada 
    onClose();

    // em resumo se o titulos estiver vazio a função encerra.
    // mas caso n esteja, ele pega todos os dados entrega pra função que vai salvar essas informações para criar a task nova, e depois fecha a janela quando estiver tudo pronto  
  };

  return (
    // Modal = a janela que sobrepõe o conteúdo principal da página, que no caso é a janela de criação de tasks, ela toma o foco da tela e impede que a pessoa clique em outras coisa até ela fechar ou tomar uma ação.
    // essa div vai ser responsavel por modificar a tela quando a aba de criação de tasks aparecer 
    <div className={styles.modalBackdrop}>

      {/* Essa é a div principal do modal, é o quadradinho que vai aparecer com os campos */}
      <div className={styles.modal}>
        
        {/* Título do modal */}
        <h3 className={styles.modalTitle}>
            Add a new task ✨
        </h3>

        {/* Campo que serve para definir o nome da tarefa */}
        <label>
          Title:
          <input 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          placeholder="e.g. Finish report" />
        </label>

        <label>
          Category:
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="work">🗂 Work</option>
            <option value="personal"> 🌷 Personal</option>
            <option value="hobby"> 📚 Hobby</option>
            <option value="travel">🧳 Travel</option>
            <option value="study"> 📖 Study</option>
            <option value="culture"> 🎭 Culture </option>
          </select>
        </label>

        <label>
          Start Date:
          <input 
          type="date" 
          value={startDate} 
          onChange={e => setStartDate(e.target.value)} />
        </label>

        <label>
          Due Date:
          <input 
          type="date" 
          value={dueDate} 
          onChange={e => setDueDate(e.target.value)} />
        </label>

        <div className={styles.actions}>
          <button onClick={handleSubmit}>
              ➕ Add
          </button>

          <button onClick={onClose}>
              ❌ Cancel
          </button>

        </div>
      </div>
    </div>
  );
}
