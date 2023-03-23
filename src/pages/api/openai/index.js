const PromptSelector = ({ selectedPrompt, onSelect, predefinedPrompts }) => {
    return (
      <div>
        <label htmlFor="promptSelector">Pre-defined Prompts:</label>
        <select
          id="promptSelector"
          value={selectedPrompt}
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value="">Select a prompt...</option>
          {predefinedPrompts.map((prompt, index) => (
            <option key={index} value={prompt}>
              {prompt}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default PromptSelector;
  