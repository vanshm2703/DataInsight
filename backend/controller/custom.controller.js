// bar graph
import dotenv from "dotenv";
dotenv.config();
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_KEY });

const monthXprice = async (req, res) => {
  try {
    const { msg } = req.body; // Extract JSON data
// extracr
    if (!msg || !Array.isArray(msg)) {
      return res.status(400).json({
        success: false,
        message: "Invalid JSON format. Ensure 'msg' is an array of objects.",
      });
    }

    // Convert JSON to a properly formatted string for LLM
    const formattedJson = JSON.stringify(msg, null, 2);

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `You are a data analyst expert. I need you to analyze the following JSON data and generate **brief, data-driven insights** based on the relationship between **purchase_date** and **price**.
                    - Identify **trends** in purchase amounts over time.
                    - Highlight **peak spending periods** or noticeable **drops**.
                    - Detect any **seasonal patterns** or significant fluctuations in pricing.
                    - Provide insights on **high-value vs low-value purchase trends**.

                    ### **STRICT RESPONSE GUIDELINES:**  
                    ✅ **Return output strictly in HTML format** for easy rendering.  
                    ❌ **Do NOT include any JavaScript, charts, or CSS styling.**  
                    ❌ **Do NOT add any generic explanations or disclaimers.**  

                    Here is the JSON data:
                    \n\`\`\`json\n${formattedJson}\n\`\`\`

                    The output should be structured using only **HTML elements (e.g., <h2>, <p>, <ul>, <li>)** and contain **only the insights** related to the given data.
                    `,
        },
      ],
      model: "llama3-8b-8192",
      temperature: 0.7,
      max_tokens: 1024,
    });

    return res.status(200).json({
      success: true,
      response:
        completion.choices[0]?.message?.content || "No response generated",
    });
  } catch (error) {
    console.error("Error during AI chat generation:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// pie chart
const categoryPie = async (req, res) => {
    try {
        const { msg } = req.body; // Extract JSON data
    
        if (!msg || !Array.isArray(msg)) {
          return res.status(400).json({
            success: false,
            message: "Invalid JSON format. Ensure 'msg' is an array of objects.",
          });
        }
    
        // Convert JSON to a properly formatted string for LLM
        const formattedJson = JSON.stringify(msg, null, 2);

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `You are a data analyst expert. I need you to analyze the following JSON data and generate **brief, data-driven insights** based on the **category** attribute.
                    - Identify **top categories** with the highest purchase frequency.
                    - Highlight **least purchased categories**.
                    - Provide percentage distribution of categories.
                    - Detect any notable **patterns or trends** in category preferences.

                    ### **STRICT RESPONSE GUIDELINES:**  
                    ✅ **Return output strictly in HTML format** for easy rendering.  
                    ❌ **Do NOT include any JavaScript, charts, or CSS styling.**  
                    ❌ **Do NOT add any generic explanations or disclaimers.**  

                    Here is the JSON data:
                    \n\`\`\`json\n${formattedJson}\n\`\`\`

                    The output should be structured using only **HTML elements (e.g., <h2>, <p>, <ul>, <li>)** and contain **only the insights** related to the given data.
                    `,
        },
      ],
      model: "llama3-8b-8192",
      temperature: 0.7,
      max_tokens: 1024,
    });

    return res.status(200).json({
      success: true,
      response:
        completion.choices[0]?.message?.content || "No response generated",
    });
  } catch (error) {
    console.error("Error during AI chat generation : ", error);
  }
};

// multiline graph
const genderXcategory = async (req, res) => {
  try {
    const { msg } = req.body;
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `You are a data analyst expert. I need you to take the following json data and generate data points to create a multi-line chart.
                              where x-axis will have gender and the y-axis will have category attribute. Where there will be 2 lines drawn for male and female, give data points for this.
                              The data should be taken from the json provided below 
                              Description: ${msg}`,
        },
      ],
      model: "llama3-8b-8192",
      temperature: 0.7,
      max_tokens: 1024,
    });

    return res.status(200).json({
      success: true,
      response:
        completion.choices[0]?.message?.content || "No response generated",
    });
  } catch (error) {
    console.error("Error during AI chat generation : ", error);
  }
};

export { monthXprice, categoryPie, genderXcategory };
