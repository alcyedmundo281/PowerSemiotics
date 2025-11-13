import React, { useState } from 'react';

interface QuizProps {
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      {questions.map((q, i) => (
        <div key={i}>
          <p className="font-semibold">{i + 1}. {q.question}</p>
          <div className="mt-2 space-y-2">
            {q.options.map((option, j) => (
              <label key={j} className="flex items-center">
                <input
                  type="radio"
                  name={`question-${i}`}
                  value={option}
                  onChange={() => handleAnswerChange(i, option)}
                  disabled={submitted}
                  className="mr-2"
                />
                <span
                  className={
                    submitted
                      ? option === q.correctAnswer
                        ? 'text-green-600'
                        : answers[i] === option
                        ? 'text-red-600'
                        : ''
                      : ''
                  }
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        disabled={submitted}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md disabled:bg-slate-400"
      >
        Revisar respuestas
      </button>
      {submitted && (
        <div className="mt-4">
          <p className="font-semibold">Resultados:</p>
          <ul className="list-disc list-inside">
            {questions.map((q, i) => (
              <li
                key={i}
                className={answers[i] === q.correctAnswer ? 'text-green-600' : 'text-red-600'}
              >
                Pregunta {i + 1}: {answers[i] === q.correctAnswer ? 'Correcta' : 'Incorrecta'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;