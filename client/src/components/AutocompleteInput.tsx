import { useState, useEffect } from 'react';
import { searchQueries } from '../data/searchQueries';
import { useFormAddDelete } from '../hooks';
import { SetStateAction, Dispatch } from 'react';
import '../assets/styles/form.css';
import '../assets/styles/autocompleteInput.css';

interface Props {
  listItems: Item[];
  setListItems: Dispatch<SetStateAction<Item[]>>;
}

export interface Item {
  name: string;
  id: number;
}

const AutocompleteInput = ({ listItems, setListItems }: Props) => {
  const [input, setInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const { handleSubmit: addIngredient } = useFormAddDelete(input, listItems, setListItems);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value: string = e.currentTarget.value;
    setInput(value);

    if (value) {
      const filteredSearch: string[] = searchQueries.filter((keyword) => keyword.toLowerCase().includes(value.toLowerCase()));
      setSuggestions(filteredSearch);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (keyword: string) => {
    setInput(keyword);
    setSuggestions([]);
  };

  // maybe change this
  const handleOutsideClick = (event: any) => {
    if (event.target.id !== 'auto-input-box') {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='auto-main-container'>
      <div className='auto-input-container'>
        <input type='text' id='auto-input-box' onChange={handleChange} value={input} />
        {suggestions.length > 0 && (
          <div
            className='autocomplete-suggestions'
            style={{
              border: '1px solid #ccc',
              borderTop: 'none',
              position: 'absolute',
              zIndex: 999,
              maxHeight: '150px',
              overflowY: 'auto',
              backgroundColor: '#fff',
              width: '300px',
            }}
          >
            {suggestions.map((phrase, index) => (
              <div
                key={index}
                className='suggestion'
                onClick={() => handleSuggestionClick(phrase)}
                style={{
                  padding: '10px',
                  cursor: 'pointer',
                }}
              >
                {phrase}
              </div>
            ))}
          </div>
        )}
      </div>
      <button className='auto-button' onClick={addIngredient}>
        Add Item
      </button>
    </div>
  );
};

export default AutocompleteInput;
