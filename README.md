# Plant Pal – Chrome Extension for AI Environmental Awareness

Plant Pal is a Chrome extension that raises awareness about the environmental impact of generative AI queries. As AI becomes part of everyday life, most users don’t realize the compute, water, and energy consumption behind each model response. Plant Pal makes this invisible cost visible—without discouraging the use of AI.

---

## 🌱 What It Does
Plant Pal detects when a user submits a query to ChatGPT and calculates its estimated environmental impact.  
The extension popup displays fun, relatable progress bars showing cumulative impact toward:
- 1 bottle of water  
- 1 hour of a lightbulb  
- 1 electric kettle brought to a boil  

Each ChatGPT query nudges the bars forward, helping users contextualize AI’s real-world footprint.

---

## 🛠 How We Built It
- Designed UI/UX, icons, and flow in **Figma**
- Bootstrapped a **React** app and restructured it for Chrome extension architecture
- Used the **Chrome Extensions API** + JavaScript to:
  - Monitor ChatGPT activity
  - Detect when a query is submitted
  - Increment counters and update the popup in real time

---
## 🌍 What’s Next
- More accurate environmental metrics based on:
  - Model type  
  - Query length  
  - Estimated compute load  
- Rotating “unfun facts” about AI’s environmental impact  
- More visualization options and impact breakdowns

---

## 📖 Sources
- Water/compute research: https://arxiv.org/pdf/2304.03271  
- CO₂ emissions estimates: https://piktochart.com/blog/carbon-footprint-of-chatgpt/

---
