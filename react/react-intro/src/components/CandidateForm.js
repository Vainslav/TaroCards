import React, { useState } from 'react';

function CandidateForm() {
  const [responses, setResponses] = useState(Array(6).fill('')); // Инициализация массива ответов

  const questions = [
    'Вы ведёте людей за собой?',
    'Вы креативный (или системный)?',
    'Вы часто спорите с коллегами чтобы отстоять свою точку зрения?',
    'Вы оптимист?',
    'Вы экстраверт?',
    'Вы упорны в решении трудностей?'
  ];

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await fetch('http://localhost:8080', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ responses }),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке данных');
      }

      alert('Данные успешно отправлены!');
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке данных.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Анкета кандидата</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <label>{question}</label>
          <div>
            <label>
              <input
                type="radio"
                value="Да"
                checked={responses[index] === 'Да'}
                onChange={() => handleChange(index, 'Да')}
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                value="Средне"
                checked={responses[index] === 'Средне'}
                onChange={() => handleChange(index, 'Средне')}
              />
              Средне
            </label>
            <label>
              <input
                type="radio"
                value="Нет"
                checked={responses[index] === 'Нет'}
                onChange={() => handleChange(index, 'Нет')}
              />
              Нет
            </label>
          </div>
        </div>
      ))}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default CandidateForm;