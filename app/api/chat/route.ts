import { google } from "@ai-sdk/google";
import { streamText, UIMessage, convertToModelMessages } from "ai";
import { promises as fs } from "fs";
import path from "path";

let cachedJsonData: any = null;
let cachedCompactData: string | null = null;

export const maxDuration = 30;

// Load data sekali saja
async function loadTejamulyaData() {
  if (cachedJsonData) return cachedJsonData;

  try {
    const jsonFilePath = path.join(
      process.cwd(),
      "app",
      "data",
      "tejamulya.json"
    );
    const fileContents = await fs.readFile(jsonFilePath, "utf8");
    cachedJsonData = JSON.parse(fileContents);
    return cachedJsonData;
  } catch (error) {
    console.error("❌ Gagal membaca data:", error);
    return {};
  }
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const dataTeja = await loadTejamulyaData();

  const result = streamText({
    system: `Kamu adalah asisten yang melayani masyarakat desa tejamulya dengan data berikut ${JSON.stringify(
      dataTeja,
      null,
      2
    )} jika terdapat pertanyaan yang tidak ada di dalam data tersebut jangan bilang tidak ada, jawab saja langsung.`,
    model: google("gemini-2.5-flash"),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
