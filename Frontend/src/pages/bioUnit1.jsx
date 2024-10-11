//bioUnit1.jsx - for Unit 1 of Biology

import React from 'react'
import QUnitText from "../components/qUnitText"
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

/* BioUnit1 component 
  -displaying a set of questions for Unit1.
*/
function BioUnit1() {
  return (
    <>
    <Navbar/>
    <br/><br/>
    <br/>
        <QUnitText question="1. Mention Three methods that can be used based on biological knowledge for sustainable food production." UnitNo={1} QuestionNo={1}/>
        <br/>
        <QUnitText question= "2. What is adaptation?" UnitNo={1} QuestionNo={2}/>
        <br/>
        <QUnitText question="3. Specify the three main branches studied under Biology" UnitNo={1} QuestionNo={3}/>
        <br/>
        <QUnitText question="4. What are natural resources?" UnitNo={1} QuestionNo={4}/>
        <br/>
        <QUnitText question="5. Define irritability." UnitNo={1} QuestionNo={5}/>
        <br/>
        <QUnitText question="6. Adaptation is a characteristic feature of living organisms. Describe how ." UnitNo={1} QuestionNo={6}/>
        <br/>
        <QUnitText question="7. Adaptation is a characteristic feature of living organisms. Describe how ." UnitNo={1} QuestionNo={7}/>
        <br/>
        <QUnitText question="8. What is Sustainable Food Production?" UnitNo={1} QuestionNo={8}/>
        <br/>

    </>
  )
}

export default BioUnit1