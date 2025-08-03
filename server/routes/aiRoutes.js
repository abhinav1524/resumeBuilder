const express = require("express");
const router = express.Router();
const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

router.post("/fill-resume", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await cohere.chat({
      model: "command-r",
      message: `You are a resume builder AI. Based on the following user input, return **only** structured JSON with the following fields:
- name
- email
- phone
- address
- skills (an object with categories, e.g. {"Technical skills": [...],, "Soft Skills": [...]})
- experience (array of { role, company, duration, description })
- education (array of { degree, university, year })
- certificates (array of { title, issuer,duration  })
- projects (array of { title, description, techStack})

User Input: ${prompt}
Return **only the JSON** in valid format. No text or markdown.`,
      temperature: 0.5,
    });

    let aiText = response.text;

    // Remove markdown code block syntax if present
    if (aiText.startsWith("```")) {
      aiText = aiText.replace(/```json|```/g, "").trim();
    }

    let jsonData;

    try {
      jsonData = JSON.parse(aiText);

      // Validate and extract necessary fields
      const finalResume = {
        name: jsonData.name || "",
        email: jsonData.email || "",
        phone: jsonData.phone || "",
        address:jsonData.address||"",
        skills: jsonData.skills || [],
        experience: jsonData.experience || [],
        education: jsonData.education || [],
        certificates: jsonData.certificates || [],
        projects: jsonData.projects || [],
      };

      res.json(finalResume);
    } catch (err) {
      // AI response isn't valid JSON
      return res.status(200).json({
        message: "Response is not valid JSON. Here's the raw output:",
        output: response.text,
      });
    }
  } catch (error) {
    console.error("Cohere error:", error.message);
    res.status(500).json({ error: "Failed to fetch from Cohere" });
  }
});


module.exports = router;
