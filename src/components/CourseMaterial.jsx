import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CourseMaterial = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  return (
    <div className = "coursematerial-window">
      <h2>Course Materials</h2>

      {/* Core Books */}
      <div className="dropdown-section">
        <div className="dropdown-header" onClick={() => toggleDropdown('core')}>
          Core Books {openDropdown === 'core' ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openDropdown === 'core' && (
          <ul className="dropdown-list">
            <li>Core Book 1: Introduction to AI</li>
            <li>Core Book 2: Machine Learning Basics</li>
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
            <li>Reference Book 1: Deep Learning by Goodfellow</li>
            <li>Reference Book 2: Pattern Recognition and ML</li>
            <li>Reference Book 3: Artificial Intelligence – A Modern Approach</li>
            <li>Reference Book 4: Python Machine Learning</li>
            <li>Reference Book 5: Data Mining Concepts</li>
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
              <li key={index}>Research Article {index + 1}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
    
  );
};

export default CourseMaterial;
