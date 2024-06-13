import React, { useState } from "react";

const AutoComplete = ({ options, value, onChange, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInputValue(e.target.value);
    const filtered = options.filter(option =>
      option.label.toLowerCase().includes(inputValue)
    );
    setFilteredOptions(filtered);
    onChange(e);
    setIsOpen(true);
  };

  const handleOptionClick = (option) => {
    setInputValue(option.label);
    onChange({ target: { value: option.value } });
    setFilteredOptions([]);
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => (
      <span
        key={index}
        style={part.toLowerCase() === highlight.toLowerCase() ? { color: 'green' } : {}}
      >
        {part}
      </span>
    ));
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        className="autocomplete-input"
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul className="autocomplete-dropdown">
          {filteredOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="autocomplete-dropdown-item"
            >
              {getHighlightedText(option.label, inputValue)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;