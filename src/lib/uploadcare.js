import { UploadClient } from '@uploadcare/upload-client';

const PUBLIC_KEY = "c547d4e4ee46ccea37fd";

// Função para carregar o widget visual (caso queira abrir com um botão)
export const loadUploadcare = () =>
  new Promise((resolve) => {
    if (typeof window === "undefined") return;
    if (window.uploadcare) return resolve();

    const script = document.createElement("script");
    script.src = "https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js";
    script.onload = () => {
      window.UPLOADCARE_PUBLIC_KEY = PUBLIC_KEY;
      resolve();
    };
    document.body.appendChild(script);
  });

// Abre o seletor de arquivos (visual)
export const openUploadcareDialog = async (onComplete) => {
  await loadUploadcare();

  const input = document.createElement("input");
  input.type = "hidden";
  input.setAttribute("role", "uploadcare-uploader");
  input.setAttribute("data-public-key", PUBLIC_KEY);
  input.setAttribute("data-multiple", "false");

  document.body.appendChild(input);

  const widget = window.uploadcare.Widget(input);
  widget.onUploadComplete(onComplete);
  widget.openDialog();
};

// Upload direto (sem diálogo, estilo Cloudinary)
export const uploadPDF = async (file) => {
  const client = new UploadClient({ publicKey: PUBLIC_KEY });
  try {
    const result = await client.uploadFile(file, {
      contentType: file.type,
    });
    return result; // result.cdnUrl = link do arquivo
  } catch (err) {
    console.error('Erro ao enviar PDF:', err);
    throw err;
  }
};
