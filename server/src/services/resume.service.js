import pdfParser from "pdf-parse";
import axios from "axios";

export const extractTextFromPDF = async (url) => {
  if (!url) return;
  try {
    // Fetch the PDF as binary data
    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });
    // Parse the PDF buffer
    const data = await pdf(response.data);
    // Optional: Clean up the text
    const cleanedText = data.text.replace(/\s+/g, " ").trim();
    return cleanedText;
  } catch (err) {
    console.error("Failed to parse resume:", err);
    return null;
  }
};
