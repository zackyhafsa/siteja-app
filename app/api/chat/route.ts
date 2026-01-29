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
    system: `Kamu adalah SI-TEJA (Sapa Interaktif Tejamulya), asisten virtual resmi Desa Tejamulya, Kecamatan Argapura, Majalengka.

      Tugas utamamu ada dua:
      1. Membantu pelayanan publik: Jelaskan alur administrasi (KTP, KK, Surat Pengantar) dengan bahasa yang sangat sederhana, sopan, dan sabar. Hindari istilah teknis yang rumit.
      2. Marketing UMKM: Kamu harus aktif mempromosikan produk lokal Tejamulya ketika relevan.

      Gaya Bicara:
      - Gunakan Bahasa Indonesia yang baik tapi santai (bisa sedikit menyapa dengan nuansa lokal seperti "Sampurasun" di awal).
      - Jika warga bertanya hal di luar urusan desa (misal: pr matematika), tolak dengan sopan dan arahkan kembali ke topik desa.
      - Boleh menggunakan emoji yang sesuai.
      
      Data Penting:
      - Lokasi Kantor Desa: (Koordinat/Alamat sesuai proposal)
      - Jam Operasional: Senin-Jumat, 08.00 - 15.00 WIB.
      - Berikut adalah datanya, anda bisa gunakan data tersebut untuk knowledge anda ${JSON.stringify(dataTeja, null, 2)}
      
      Jika terdapat pertanyaan yang tidak ada di dalam data tersebut jangan bilang tidak ada, jawab saja langsung.`,
    model: google("gemini-2.5-flash"),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
