import React, { useEffect, useState } from 'react';
import SpiderChart from './SpiderChart';

function TeamGetter(){
  const [teams, setTeams] = useState([]); 
  const [selectedTeam, setSelectedTeam] = useState(''); 
  const [responseData, setResponseData] = useState(null); 
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://localhost:8080/teams'); 
        if (!response.ok) {
          throw new Error('Ошибка при загрузке команд');
        }
        const data = await response.json();

        setTeams(data.content.map(({ name, stage }) => ({ name, stage })));
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };

    fetchTeams();
  }, []);
  const handleSubmit = async () => {
    if (!selectedTeam) {
      alert('Пожалуйста, выберите команду!');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/teams/search/findByName?name=${selectedTeam}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Ошибка при получении данных');
      }

      const data = await response.json();
      setResponseData(data); 
      console.log('Ответ от сервера:', data); 
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  const sampleData = [80, 60, 90, 70, 50, 85, 65, 75]; 
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
        <h2>Ответ от сервера:</h2>
          <SpiderChart data={sampleData} />
    </div>
  );
};

export default TeamGetter;