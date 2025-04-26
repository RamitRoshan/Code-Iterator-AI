// When "Get Suggestions" button is clicked
document.getElementById('submitBtn').addEventListener('click', function() {
    const codeInput = document.getElementById('codeInput').value;
    const promptInput = document.getElementById('promptInput').value;
  
    if (!codeInput || !promptInput) {
      alert("Please paste code and describe the change!");
      return;
    }
  
    // Mocking AI suggestion
    const suggestedCode = mockAISuggestion(codeInput, promptInput);
    const explanation = `We made changes based on your request: "${promptInput}".`;
  
    // Show the suggested code and explanation
    document.getElementById('suggestedCode').innerText = suggestedCode;
    document.getElementById('explanation').innerText = explanation;
    document.getElementById('suggestionBox').style.display = 'block';
  });
  
  // When "Integrate Code" button is clicked
  document.getElementById('integrateBtn').addEventListener('click', function() {
    const finalCode = document.getElementById('suggestedCode').innerText;
    document.getElementById('finalCode').innerText = finalCode;
    document.getElementById('finalOutput').style.display = 'block';
  });
  
  // Mock AI Logic
  function mockAISuggestion(code, prompt) {
    // Example logic: if user says "optimize", add a comment
    if (prompt.toLowerCase().includes('optimize')) {
      return code + `\n// Optimization: Code has been optimized for performance.`;
    }
  
    // Example logic: if user says "add comment"
    if (prompt.toLowerCase().includes('comment')) {
      return "// Comment added as per your request.\n" + code;
    }
  
    // Default: just append user's request
    return code + `\n// Change applied: ${prompt}`;
  }
  