import { useState, useEffect } from 'react';
import './index.css';

const allOptions = [
  'One',
  'Two',
  'Three',
];

function App() {
  const [activeOptions, setActiveOptions] = useState([]);

  useEffect(() => {
    console.log(`Active Options changed to: ${activeOptions.join(', ')}`);
  }, [activeOptions]);

  function handleSelect(optionName) {
    const newOptions = activeOptions.slice();
    newOptions.push(optionName);
    setActiveOptions(newOptions);
  }

  function handleDeselect() {
    const newOptions = [];
    setActiveOptions(newOptions);
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h2 className="font-bold text-2xl mb-2">All Options</h2>

        <ul className="block">
          {allOptions.map((optionName, offset) => (
            <li
              key={offset}
              onMouseEnter={() => handleSelect(optionName)}
              onMouseLeave={handleDeselect}
            >
              {optionName}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-2xl mb-2">Active Options</h2>

        <ul>
          {allOptions.map((optionName, offset) => (
            (activeOptions.indexOf(optionName) >= 0
              ? (
                <li
                  key={offset}
                  className="text-amber-500"
                >
                  {optionName}
                </li>
              )
              : (
                <li key={offset}>{optionName}</li>
              )
            )
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
