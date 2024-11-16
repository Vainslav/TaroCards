import React, { useEffect, useState } from 'react';

function TeamGetter(){
  const [teams, setTeams] = useState([]); // Состояние для хранения списка команд
  const [selectedTeam, setSelectedTeam] = useState(''); // Состояние для хранения выбранной команды
  const [responseData, setResponseData] = useState(null); // Состояние для хранения ответа от сервера

  useEffect(() => {
    // Заменяем динамическую загрузку на статические тестовые данные
    const fetchTeams = () => {
      const testTeams = [
        { id: 1, name: 'Alpha' },
        { id: 2, name: 'Beta' },
        { id: 3, name: 'Gamma' },
      ];
      setTeams(testTeams); // Устанавливаем тестовые команды в состояние
    };

    fetchTeams();
  }, []);
//   useEffect(() => {
//     const fetchTeams = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/teams'); // URL для получения списка команд
//         if (!response.ok) {
//           throw new Error('Ошибка при загрузке команд');
//         }
//         const data = await response.json();
//         setTeams(data); // Устанавливаем полученные команды в состояние
//       } catch (error) {
//         console.error('Ошибка:', error);
//       }
//     };

//     fetchTeams();
//   }, []);

  // Обработка отправки выбранной команды
  const handleSubmit = async () => {
    if (!selectedTeam) {
      alert('Пожалуйста, выберите команду!');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/team/${selectedTeam}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Ошибка при получении данных');
      }

      const data = await response.json();
      setResponseData(data); // Устанавливаем ответ от сервера в состояние
      console.log('Ответ от сервера:', data); // Выводим ответ в консоль
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div>
      <h1>Выберите команду</h1>
      <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
        <option value="" disabled>Выберите команду</option>
        {teams.map((team) => (
          <option key={team.id} value={team.name}>
            {team.name}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Отправить</button>

      {responseData && (
        <div>
          <h2>Ответ от сервера:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TeamGetter;