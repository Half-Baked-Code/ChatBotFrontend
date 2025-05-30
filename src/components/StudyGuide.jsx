// import React, { useState } from 'react';
// import { FiMoreVertical } from 'react-icons/fi'; // 3 dots icon

// const StudyGuide = () => {
//   const [openMenuId, setOpenMenuId] = useState(null);
//   const [selectedDocument, setSelectedDocument] = useState('');

//   const notes = [
//     { id: 1, title: "Reliability in Assessment", date: "2025-05-26" },
//     { id: 2, title: "Marking Schemes Summary", date: "2025-05-20" },
//   ];

//   const toggleMenu = (id) => {
//     setOpenMenuId(openMenuId === id ? null : id);
//   };

//   const handleDocumentChange = (event) => {
//     setSelectedDocument(event.target.value);
//   };

//   return (
//     <div className="studyguide-window">
//       <h2 className="studyguide-title">Study Guide</h2>
//       <p className="studyguide-subtitle">Welcome to your personalized study guide!</p>

//       <div className="document-select-container">
//   <label htmlFor="document-select" className="document-select-label">
//     Select a document:
//   </label>
//   <select
//     id="document-select"
//     className="document-select-dropdown"
//     value={selectedDocument}
//     onChange={handleDocumentChange}
//   >
//     <option value="">-- Choose a document --</option>
//     {notes.map((note) => (
//       <option key={note.id} value={note.title}>
//         {note.title}
//       </option>
//     ))}
//   </select>
// </div>

//       {/* Button Grid */}
//       <div className="button-grid">
//         <button className="custom-button">Add a Note</button>
//         <button className="custom-button">Study Guide</button>
//         <button className="custom-button">FAQ</button>
//         <button className="custom-button">Briefing Doc</button>
//       </div>

//       {/* Notes List */}
//       <div className="notes-section">
//         <h3 className="notes-title">Your Notes</h3>
//         <ul className="notes-list">
//           {notes.map(note => (
//             <li key={note.id} className="note-item">
//               <div className="note-main">
//                 <div>
//                   <div className="note-title">{note.title}</div>
//                   <div className="note-date">Created on {note.date}</div>
//                 </div>
//                 <div className="menu-wrapper">
//                   <button className="menu-button" onClick={() => toggleMenu(note.id)}>
//                     <FiMoreVertical />
//                   </button>
//                   {openMenuId === note.id && (
//                     <ul className="dropdown-menu">
//                       <li>Edit</li>
//                       <li>Rename</li>
//                       <li>Delete</li>
//                     </ul>
//                   )}
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default StudyGuide;


import React, { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi'; // 3 dots icon

const StudyGuide = () => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(''); // will hold the selected document title

  const notes = [
    { id: 1, title: "Reliability in Assessment", date: "2025-05-26", content: "This is the content of Reliability in Assessment." },
    { id: 2, title: "Marking Schemes Summary", date: "2025-05-20", content: "Summary of marking schemes content here." },
  ];

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleDocumentChange = (event) => {
    setSelectedDocument(event.target.value);
  };

  // Find selected note object for preview
  const selectedNote = notes.find(note => note.title === selectedDocument);

  return (
    <div className="studyguide-window">
      <h2 className="studyguide-title">Study Guide</h2>
      <p className="studyguide-subtitle">Welcome to your personalized study guide!</p>

      <div className="document-select-container">
        <label htmlFor="document-select" className="document-select-label">
          Select a document:
        </label>
        <select
          id="document-select"
          className="document-select-dropdown"
          value={selectedDocument}
          onChange={handleDocumentChange}
        >
          <option value="">-- Choose a document --</option>
          {notes.map((note) => (
            <option key={note.id} value={note.title}>
              {note.title}
            </option>
          ))}
        </select>
      </div>

      {/* Display preview of selected document */}
      {selectedNote && (
        <div className="document-preview" style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h3>Preview: {selectedNote.title}</h3>
          <p>{selectedNote.content}</p>
          <small>Created on: {selectedNote.date}</small>
        </div>
      )}

      {/* Button Grid */}
      <div className="button-grid">
        <button className="custom-button">Add a Note</button>
        <button className="custom-button">Study Guide</button>
        <button className="custom-button">FAQ</button>
        <button className="custom-button">Briefing Doc</button>
      </div>

      {/* Notes List */}
      <div className="notes-section">
        <h3 className="notes-title">Your Notes</h3>
        <ul className="notes-list">
          {notes.map(note => (
            <li key={note.id} className="note-item">
              <div className="note-main">
                <div>
                  <div className="note-title">{note.title}</div>
                  <div className="note-date">Created on {note.date}</div>
                </div>
                <div className="menu-wrapper">
                  <button className="menu-button" onClick={() => toggleMenu(note.id)}>
                    <FiMoreVertical />
                  </button>
                  {openMenuId === note.id && (
                    <ul className="dropdown-menu">
                      <li>Edit</li>
                      <li>Rename</li>
                      <li>Delete</li>
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudyGuide;
