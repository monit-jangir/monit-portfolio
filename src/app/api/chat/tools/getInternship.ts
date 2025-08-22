import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Availability**: Open to immediate opportunities
- 🌍 **Location**: Preferably **Jaipur** or anywhere in **India**
- 🧑‍💻 **Focus**: Data Science, AI/ML, and Agentic AI projects
- 🛠️ **Stack**: Python, LangChain, Streamlit, Power BI, LLMs
- ✅ **What I bring**: A builder's mindset focused on AI and modern tech. I love creating intelligent, automated solutions and have the practical skills to bring innovative ideas to life.
- 🔥 I move fast, learn faster for big challenges

📬 **Contact me** via:
- Email: monit.j@outlook.com
- LinkedIn: [linkedin.com/in/monitkjangir](https://linkedin.com/in/monitkjangir)
- GitHub: [github.com/monit-jangir](https://github.com/monit-jangir)

Let's build something amazing together ✌️
    `;
  },
});