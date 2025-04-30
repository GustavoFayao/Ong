import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../../lib/firebase-config';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { uploadImage } from '../../lib/cloudinary';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { uploadPDF } from '../../lib/uploadcare';

export const PainelAdmin = () => {
  const navigate = useNavigate();
  const [arquivo, setArquivo] = useState(null);
  const [arquivosTransparencia, setArquivoTransparencia] = useState([]);
  const [form, setForm] = useState({
    titulo: '',
    conteudo: '',
    imagem: null,
  });
  const [voluntarios, setVoluntarios] = useState([]);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = '';
      if (form.imagem) {
        const imageData = await uploadImage(form.imagem);
        imageUrl = imageData.secure_url;
      }

      await addDoc(collection(db, 'noticias'), {
        titulo: form.titulo,
        conteudo: form.conteudo,
        imagemUrl: imageUrl,
        criadoEm: new Date(),
      });

      alert('Notícia publicada!');
      setForm({ titulo: '', conteudo: '', imagem: null });
      fetchNoticias();
    } catch (error) {
      console.error("Erro ao publicar notícia:", error);
    }
  };

  const handleUploadArquivo = async (e) => {
    e.preventDefault();
    if (!arquivo) return alert('Selecione um arquivo');

    try {
      const result = await uploadPDF(arquivo);
      const fileUrl = result.cdnUrl;

      await addDoc(collection(db, 'transparencia'), {
        nome: arquivo.name,
        url: fileUrl,
        enviadoEm: new Date(),
      });

      alert('Arquivo enviado com sucesso');
      setArquivo(null);
      fetchArquivos();
    } catch (err) {
      console.error('Erro ao enviar com Uploadcare', err);
      alert('Erro ao enviar arquivo');
    }
  };

  const handleDeleteArquivo = async (id) => {
    const confirm = window.confirm('Tem certeza que deseja excluir este arquivo?');
    if (!confirm) return;
    try {
      await deleteDoc(doc(db, 'transparencia', id));
      fetchArquivos();
    } catch (error) {
      console.error('Erro ao excluir arquivo:', error);
      alert('Erro ao excluir');
    }
  };

  const handleDeleteNoticia = async (id) => {
    const confirm = window.confirm('Tem certeza que deseja excluir esta notícia?');
    if (!confirm) return;
    try {
      await deleteDoc(doc(db, 'noticias', id));
      fetchNoticias();
    } catch (error) {
      console.error('Erro ao excluir notícia:', error);
      alert('Erro ao excluir');
    }
  };

  const fetchArquivos = async () => {
    const snapshot = await getDocs(collection(db, 'transparencia'));
    const lista = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setArquivoTransparencia(lista);
  };

  const fetchNoticias = async () => {
    const snapshot = await getDocs(collection(db, 'noticias'));
    const lista = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setNoticias(lista);
  };

  useEffect(() => {
    fetchArquivos();
    fetchNoticias();
  }, []);

  useEffect(() => {
    const fetchVoluntarios = async () => {
      const snapshot = await getDocs(collection(db, 'voluntarios'));
      const lista = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setVoluntarios(lista);
    };
    fetchVoluntarios();
  }, []);

  return (
    <section className="min-h-screen bg-purple-500">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-white mb-6 text-center pt-10">
          Painel do Administrador
        </h1>

        {/* Formulário de Nova Notícia */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-12">
          <h2 className="text-2xl font-semibold mb-4">Publicar Notícia</h2>
          <input
            type="text"
            placeholder="Título"
            value={form.titulo}
            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          />
          <ReactQuill
            theme="snow"
            value={form.conteudo}
            onChange={(value) => setForm({ ...form, conteudo: value })}
            className="mb-4 bg-white"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setForm({ ...form, imagem: e.target.files[0] })}
            className="w-full p-2 mb-4"
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Publicar Notícia
          </button>
        </form>

        {/* Lista de Notícias */}
        <div className="bg-white p-6 rounded-lg shadow mb-12">
          <h2 className="text-2xl font-bold mb-4">Notícias Publicadas</h2>
          <ul className="space-y-4">
            {noticias.map((noticia) => (
              <li key={noticia.id} className="border p-4 rounded">
                <h3 className="font-bold text-lg">{noticia.titulo}</h3>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-500">
                    {noticia.criadoEm?.seconds ? new Date(noticia.criadoEm.seconds * 1000).toLocaleDateString() : 'Sem data'}
                  </span>
                  <button
                    onClick={() => handleDeleteNoticia(noticia.id)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Lista de Voluntários */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Painel de Voluntários</h2>
          <div className="grid grid-cols-1 gap-4">
            {voluntarios.map((voluntario) => (
              <div key={voluntario.id} className="p-4 border rounded shadow">
                <h3 className="text-xl font-semibold">{voluntario.nome}</h3>
                <p><strong>Email:</strong> {voluntario.email}</p>
                <p><strong>Habilidades:</strong> {voluntario.habilidades}</p>
                <p><strong>Status:</strong> {voluntario.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transparência */}
        <div className="bg-white p-6 rounded-lg shadow mt-12">
          <h2 className="text-2xl font-bold mb-4">Transparência</h2>
          <form onSubmit={handleUploadArquivo} className="mb-4">
            <input
              type="file"
              accept=".pdf,.doc,.png,.jpg,.jpeg"
              onChange={(e) => setArquivo(e.target.files[0])}
              className="mb-2"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Enviar Arquivo
            </button>
          </form>

          <ul className="list-disc list-inside space-y-2">
            {arquivosTransparencia.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {item.nome}
                </a>
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-gray-500">
                    {item.enviadoEm?.seconds ? new Date(item.enviadoEm.seconds * 1000).toLocaleDateString() : 'Data não disponível'}
                  </span>
                  <button
                    onClick={() => handleDeleteArquivo(item.id)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
