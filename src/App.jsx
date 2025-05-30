
import React, { useState } from 'react';
import './App.css';
import { FaComments, FaBook, FaUser, FaRobot, FaClipboardList } from 'react-icons/fa';
import CourseMaterial from './components/CourseMaterial';
import StudyGuide from './components/StudyGuide';
import Chat from './components/Chat';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Sidebar = ({ currentTab, setCurrentTab }) => {
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);

  return (
    <div className="sidebar">
      <div className="app-title">
        <div className="bot-icon">
          <FaRobot size={20} />
        </div>
        StudyBot
      </div>

      <div className={`tab ${currentTab === 'Chat' ? 'active' : ''}`} onClick={() => setCurrentTab('Chat')}>
        <FaComments style={{ marginRight: '8px' }} /> Chat
      </div>

      <div className={`tab ${currentTab === 'Course Materials' ? 'active' : ''}`} onClick={() => setCurrentTab('Course Materials')}>
  <FaBook style={{ marginRight: '8px' }} /> Course Materials
</div>


      <div className={`tab ${currentTab === 'Study Guides' ? 'active' : ''}`} onClick={() => setCurrentTab('Study Guides')}>
        <FaClipboardList style={{ marginRight: '8px' }} /> Study Guides
      </div>

      <div className={`tab ${currentTab === 'Account' ? 'active' : ''}`} onClick={() => setCurrentTab('Account')}>
        <FaUser style={{ marginRight: '8px' }} /> Account
      </div>
    </div>
  );
};



function App() {
  const [currentTab, setCurrentTab] = useState('Chat');

  return (
    <div className="app">
      {/* Toast container at the root level so it's always available */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="main-content">
        {currentTab === 'Chat' && <Chat />}
        {currentTab === 'Course Materials' && <CourseMaterial/>}
        {currentTab === 'Account' && <div className="placeholder">Name: Maham<br />Email: maham@example.com</div>}
        {currentTab === 'Study Guides' && <StudyGuide/>}
      </div>
    </div>
  );
}

export default App;
