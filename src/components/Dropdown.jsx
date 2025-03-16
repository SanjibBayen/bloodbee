import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ username, profileColor, profileRoute }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <li className="nav-item dropdown" ref={dropdownRef}>
      <button 
        className={`nav-link dropdown-toggle btn btn-link text-${profileColor || 'white'}`} 
        onClick={toggleDropdown} 
        aria-expanded={isOpen}
      >
        <i className="fas fa-user mx-1"></i> {username}
      </button>
      
      <ul className={`dropdown-menu dropdown-menu-end ${isOpen ? 'show' : ''}`}>
        <li>
          <Link className="dropdown-item" to={profileRoute}>My Account</Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/">Log Out</Link>
        </li>
      </ul>
    </li>
  );
};

export default Dropdown;
