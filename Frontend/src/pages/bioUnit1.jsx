import React, { useState, useEffect } from 'react';
import QUnitText from "../components/qUnitText";
import Navbar from '../components/Navbar';
import apiServices from '../services/apiServices'; // Assuming you have an apiServices module to handle requests

/* BioUnit1 component 
  -displaying a set of questions for Unit 1 dynamically by fetching from the backend.
*/
function BioUnit1() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchQuestions = () => {
      setLoading(true);
      apiServices.get(`/questions?unit_id=1`) // Fetch questions for unit 1
        .then(response => {
          setQuestions(response.data.questions); // Assuming the response contains a 'questions' array
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar />
      <br/><br/><br/>
      {questions.map((q) => (
        <div key={q.question_no}>
          <QUnitText question={`${q.question_no}. ${q.question_text}`} UnitNo={q.unit_no} QuestionNo={q.question_no} QuestionID={q.question_id} />
          <br/>
        </div>
      ))}
    </>
  );
}

export default BioUnit1;
