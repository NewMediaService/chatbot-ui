export default async function handler(req, res) {
  const { messages } = req.body;

  const completion = await fetch(
    \`\${process.env.OPENAI_API_BASE}/openai/deployments/\${process.env.OPENAI_API_DEPLOYMENT_NAME}/chat/completions?api-version=\${process.env.OPENAI_API_VERSION}\`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.OPENAI_API_KEY,
      },
      body: JSON.stringify({
        messages,
        temperature: 0.7,
      }),
    }
  );

  const data = await completion.json();
  res.status(200).json(data.choices[0].message);
}
