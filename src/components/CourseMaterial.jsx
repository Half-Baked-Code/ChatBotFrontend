import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaFilePdf } from 'react-icons/fa';

const CourseMaterial = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  return (
    <div className="coursematerial-window">
      <h2>Course Materials</h2>

      {/* Core Books */}
      <div className="dropdown-section">
        <div className="dropdown-header" onClick={() => toggleDropdown('core')}>
          Core Books {openDropdown === 'core' ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openDropdown === 'core' && (
       <ul className="dropdown-list">
       <li>
          <a href="/pdfs/corebks/Cecil Reynolds, Ronald Livingston, Victor Willson - Measurement and Assessment in Education-Pearson (2008).pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
          <FaFilePdf style={{ marginRight: '8px', color: 'red' }} />
          Core Book 1: Cecil Reynolds, Ronald Livingston, Victor Willson - Measurement and Assessment in Education-Pearson (2008)
          </a>
       </li>
       <li>
          <a href="/pdfs/corebks/M. David Miller, Robert L. Linn, Norman E. Gronlund - Measurement and assessment in teaching-Pearson Education (2009).pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
          <FaFilePdf style={{ marginRight: '8px', color: 'red' }} />
           Core Book 2: M. David Miller, Robert L. Linn, Norman E. Gronlund - Measurement and assessment in teaching-Pearson Education (2009)
          </a>
        </li>
       </ul>
        )}
      </div>

      {/* Reference Books */}
      <div className="dropdown-section">
        <div className="dropdown-header" onClick={() => toggleDropdown('reference')}>
          Reference Books {openDropdown === 'reference' ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openDropdown === 'reference' && (
          <ul className="dropdown-list">
            <li>
              <a href="pdfs/refbks/Classroom Assessment for Student Learning_ Doing It Right - Using It Well by Jan Chappuis.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
              <FaFilePdf style={{ marginRight: '8px', color: 'red' }} />Reference Book 1: Classroom Assessment for Student Learning_ Doing It Right - Using It Well by Jan Chappuis
              </a>
            </li>
            <li>
              <a href="/pdfs/refbks/Clay and Root (2001) Is this a trick question - A short guide to writing effective test questions.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
              <FaFilePdf style={{ marginRight: '8px', color: 'red' }} />Reference Book 2: Clay and Root (2001) Is this a trick question - A short guide to writing effective test questions
              </a>
            </li>
            <li>
              <a href="/pdfs/refbks/Scoring Rubrics in the Classroom_ Using Performance Criteria for Assessing and Improving Student Performance by Judith A. Arter.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
              <FaFilePdf style={{ marginRight: '8px', color: 'red' }} />Reference Book 3: Scoring Rubrics in the Classroom_ Using Performance Criteria for Assessing and Improving Student Performance by Judith A. Arter
              </a>
            </li>
            <li>
              <a href="pdfs/refbks/Southeast Missouri State University (2005) Rubric examples.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
              <FaFilePdf style={{ marginRight: '8px', color: 'red' }} />Reference Book 4: Southeast Missouri State University (2005) Rubric examples
              </a>
            </li>
            <li>
              <a href="pdfs/refbks/Standards for Educational and Psychological Testing (2014).pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
              <FaFilePdf style={{ marginRight: '8px', color: 'red' }} />Reference Book 5: Standards for Educational and Psychological Testing (2014)
              </a>  
            </li>
          </ul>
        )}
      </div>

      {/* Research Articles */}
      <div className="dropdown-section">
        <div className="dropdown-header" onClick={() => toggleDropdown('articles')}>
          Research Articles {openDropdown === 'articles' ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openDropdown === 'articles' && (
          <ul className="dropdown-list">
            {[...Array(13)].map((_, index) => (
              <li key={index}>
                <FaFilePdf style={{ marginRight: '8px', color: 'red' }} />Research Article {index + 1}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CourseMaterial;
