import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    // Path to the "public/cards" folder
    const directoryPath = path.join(process.cwd(), "public/cards");

    // Read all files in the "public/cards" folder
    const files = fs.readdirSync(directoryPath);

    // Filter only image files (by extension)
    const images = files.filter((file) =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    // Return the paths as URLs (for the public folder)
    const imagePaths = images.map((file) => `/cards/${file}`);
    res.status(200).json(imagePaths); // Respond with the array of image paths
  } catch (error) {
    console.error("Error reading directory:", error);
    res.status(500).json({ error: "Failed to load images" });
  }
}
