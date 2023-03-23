import { useState } from 'react';

const AddPromptModal = ({ isVisible, onClose, onSubmit }) => {
  const [newPrompt, setNewPrompt] = useState('');

  const handleSubmit = () => {
    onSubmit(newPrompt);
    setNewPrompt('');
    onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <h3>Add New Prompt</h3>
      <input
        type="text"
        value={newPrompt}
        onChange={(e) => setNewPrompt(e.target.value)}
        placeholder="Enter new prompt"
      />
      <button onClick={handleSubmit}>Add Prompt</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AddPromptModal;
