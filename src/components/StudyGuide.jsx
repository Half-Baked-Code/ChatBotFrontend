// import React, { useState } from 'react';
// import { FiMoreVertical } from 'react-icons/fi';
// import ReactMarkdown from 'react-markdown';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const StudyGuide = () => {
//   const [openMenuId, setOpenMenuId] = useState(null);
//   const [selectedDocument, setSelectedDocument] = useState('');
//   const [activeNote, setActiveNote] = useState(null); // for modal
//   const [notes, setNotes] = useState([
//     {
//       id: 1,
//       title: "Clarifying the Purpose of Educational Assessments",
//       date: "2025-05-26",
//       path: "C:/Users/Maham Jafri/Documents/Office Tasks/studybot/pdfs/research/Clarifying the purposes of educational assessment.pdf",
//       content: ""
//     },
//     {
//       id: 2,
//       title: "Does Washback Exist?",
//       date: "2025-05-20",
//       path: "C:/Users/Maham Jafri/Documents/Office Tasks/studybot/pdfs/research/Does Washback Exists.pdf",
//       content: ""
//     }
//   ]);

//   const toggleMenu = (id) => {
//     setOpenMenuId(openMenuId === id ? null : id);
//   };

//   const handleDocumentChange = (event) => {
//     setSelectedDocument(event.target.value);
//   };

//   const sendToApi = async (endpoint) => {
//     const selectedNoteIndex = notes.findIndex(note => note.title === selectedDocument);
//     if (selectedNoteIndex === -1 || !notes[selectedNoteIndex].path) {
//       toast.warning("Please select a valid document.");
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/${endpoint}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ document_path: notes[selectedNoteIndex].path })
//       });

//       const data = await response.json();
//       const updatedNotes = [...notes];
//       updatedNotes[selectedNoteIndex].content = data.result || data.reply || 'No content returned.';
//       setNotes(updatedNotes);
//       toast.success("Note generated! Click on the note to view it.");
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to fetch response.");
//     }
//   };

//   const openNoteModal = (note) => {
//     setActiveNote(note);
//   };

//   const closeModal = () => {
//     setActiveNote(null);
//   };

//   return (
//     <div className="studyguide-window">
//       {/* Toast Container for notifications */}
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         pauseOnHover
//         theme="colored"
//       />

//       <h2 className="studyguide-title">Study Guide</h2>
//       <p className="studyguide-subtitle">Welcome to your personalized study guide!</p>

//       {/* Document Selector */}
//       <div className="document-select-container">
//         <label htmlFor="document-select" className="document-select-label">Select a document:</label>
//         <select
//           id="document-select"
//           className="document-select-dropdown"
//           value={selectedDocument}
//           onChange={handleDocumentChange}
//         >
//           <option value="">-- Choose a document --</option>
//           {notes.map((note) => (
//             <option key={note.id} value={note.title}>
//               {note.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Buttons */}
//       <div className="button-grid">
//         <button className="custom-button">Add a Note</button>
//         <button className="custom-button" onClick={() => sendToApi('study-guide')}>Study Guide</button>
//         <button className="custom-button" onClick={() => sendToApi('faq')}>FAQ</button>
//         <button className="custom-button" onClick={() => sendToApi('mind-map')}>Mind Map</button>
//       </div>

//       {/* Notes List */}
//       <div className="notes-section">
//         <h3 className="notes-title">Your Notes</h3>
//         <ul className="notes-list">
//           {notes.map(note => (
//             <li key={note.id} className="note-item" onClick={() => openNoteModal(note)}>
//               <div className="note-main">
//                 <div>
//                   <div className="note-title">{note.title}</div>
//                   <div className="note-date">Created on {note.date}</div>
//                 </div>
//                 <div className="menu-wrapper" onClick={e => e.stopPropagation()}>
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

//       {/* Modal for displaying note content */}
//       {activeNote && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={e => e.stopPropagation()}>
//             <h3>{activeNote.title}</h3>
//             <p><strong>Created on:</strong> {activeNote.date}</p>
//             <hr />
//             <p><strong>Generated Note:</strong></p>
//             <div className="markdown-content">
//               <ReactMarkdown>
//                 {activeNote.content || "No content yet. Generate it with a button above."}
//               </ReactMarkdown>
//             </div>
//             <button onClick={closeModal} className="modal-close-button">Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudyGuide;


import React, { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudyGuide = () => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState('');
  const [activeNote, setActiveNote] = useState(null); // for modal
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Clarifying the Purpose of Educational Assessments",
      date: "2025-05-26",
      path: "C:/Users/Maham Jafri/Documents/Office Tasks/studybot/pdfs/research/Clarifying the purposes of educational assessment.pdf",
      content: ""
    },
    {
      id: 2,
      title: "Does Washback Exist?",
      date: "2025-05-20",
      path: "C:/Users/Maham Jafri/Documents/Office Tasks/studybot/pdfs/research/Does Washback Exists.pdf",
      content: ""
    }
  ]);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleDocumentChange = (event) => {
    setSelectedDocument(event.target.value);
  };

  const sendToApi = async (endpoint) => {
    const selectedNoteIndex = notes.findIndex(note => note.title === selectedDocument);
    if (selectedNoteIndex === -1 || !notes[selectedNoteIndex].path) {
      toast.warning("Please select a valid document.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ document_path: notes[selectedNoteIndex].path })
      });

      const data = await response.json();
      const updatedNotes = [...notes];
      updatedNotes[selectedNoteIndex].content = data.result || data.reply || 'No content returned.';
      setNotes(updatedNotes);
      toast.success("Note generated! Click on the note to view it.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch response.");
    }
  };

  const openNoteModal = (note) => {
    setActiveNote(note);
  };

  const closeModal = () => {
    setActiveNote(null);
  };

  return (
    <div className="studyguide-window">
       {/* Toast Container for notifications */}
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <h2 className="studyguide-title">Study Guide</h2>
      <p className="studyguide-subtitle">Welcome to your personalized study guide!</p>

      {/* Document Selector */}
      <div className="document-select-container">
        <label htmlFor="document-select" className="document-select-label">Select a document:</label>
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

      {/* Buttons */}
      <div className="button-grid">
        <button className="custom-button">Add a Note</button>
        <button className="custom-button" onClick={() => sendToApi('study-guide')}>Study Guide</button>
        <button className="custom-button" onClick={() => sendToApi('faq')}>FAQ</button>
        <button className="custom-button" onClick={() => sendToApi('briefing-doc')}>Briefing Doc</button>
      </div>

      {/* Notes List */}
      <div className="notes-section">
        <h3 className="notes-title">Your Notes</h3>
        <ul className="notes-list">
          {notes.map(note => (
            <li key={note.id} className="note-item" onClick={() => openNoteModal(note)}>
              <div className="note-main">
                <div>
                  <div className="note-title">{note.title}</div>
                  <div className="note-date">Created on {note.date}</div>
                </div>
                <div className="menu-wrapper" onClick={e => e.stopPropagation()}>
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
{activeNote && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <h3>{activeNote.title}</h3>
      <p><strong>Created on:</strong> {activeNote.date}</p>
      <hr />
      <p><strong>Generated Note:</strong></p>
      
      <div className="markdown-content">
        <ReactMarkdown>
          {activeNote.content || "No content yet. Generate it with a button above."}
        </ReactMarkdown>
      </div>

      <button onClick={closeModal} className="modal-close-button">Close</button>
    </div>
  </div>
)}
    </div>
  );
};

export default StudyGuide;
