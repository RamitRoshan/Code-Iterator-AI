# 🛠️ Code Iterator AI

A lightweight **AI-powered code suggestion tool** designed to assist **game developers** in improving their code directly inside an editor.  
Inspired by tools like **Cursor AI**, this project demonstrates how an AI assistant can suggest and apply code improvements based on user prompts.

---

## 🚀 Features

- ✏️ **Select and input code**: Paste any piece of game development code.
- 🧠 **Prompt-driven improvements**: Tell the assistant what you want ("optimize", "add comments", etc.).
- 🛠️ **Get AI-like suggestions**: View modified code and explanations.
- 🔄 **Integrate changes**: Apply the improved code directly into the editor with one click.
- 🖥️ **See final output**: Updated code is shown for easy copying or further editing.

---

## ⚙️ Technologies Used

| Technology | Purpose |
|:-----------|:--------|
| **HTML** | Structure of the web app |
| **CSS** | Basic styling for layout and design |
| **JavaScript** | Main logic for code suggestion and integration |
| **Mock AI (custom function)** | Simulated AI suggestions (without real AI models or external APIs) |

---

## 📦 How It Works

1. **Paste your code** into the editor (e.g., a game function you want to improve).
2. **Write a prompt** describing what you want, like:
   - `"Optimize this function"`
   - `"Add comments to explain the code"`
3. **Click "Get AI Suggestion"**:
   - The tool uses a **mock AI function** (`mockAISuggestion`) to simulate an improvement.
4. **Review the suggested code and explanation**.
5. **Click "Integrate Code"** to replace your original code with the improved version.

---

## 🧪 About the Mock AI (`mockAISuggestion`)

In this proof of concept:

- No external AI APIs (like OpenAI) are used.
- **`mockAISuggestion`** is a simple simulation that:
  - Detects keywords like "optimize" or "comment" from the user's prompt.
  - Returns a pre-defined style of code improvement and explanation.
- This simulates how a real AI tool would behave once properly integrated with a real model.

> **Note**: In a production version, this function would be replaced with real AI integrations such as OpenAI’s GPT-4 or similar LLMs.

---

## 📈 Future Improvements

- ✅ Replace `mockAISuggestion` with real AI model integration (e.g., OpenAI API).
- ✅ Better UI/UX for smooth developer experience.
- ✅ Support for multiple programming languages.
- ✅ Inline code suggestions and diff-viewing.

---

## 📸 Demo Screenshot


![image](https://github.com/user-attachments/assets/328827c4-deff-4acc-a2eb-ef433d7eaf3f)
> ![image](https://github.com/user-attachments/assets/f585c87d-6a64-467d-831a-894bb3981c7d)



---

## 🏗️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/code-iterator-ai.git

---

##  📬 Made ❤️ by Ramit Roshan
