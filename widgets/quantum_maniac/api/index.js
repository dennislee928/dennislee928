import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (index.html, embed.html)
app.use(express.static(__dirname));

// Default Route - Serve the main 3D widget page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Embed Page Route
app.get("/embed", (req, res) => {
  res.sendFile(path.join(__dirname, "embed.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

export default app;
