import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../lib/firebase-config';
import { AnimatedTitle } from './AnimatedTitle';

export const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      const snapshot = await getDocs(collection(db, 'noticias'));
      const lista = snapshot.docs.map(doc => doc.data());
      setNoticias(lista);
    };
    fetchNoticias();
  }, []);

  return (
    <section className="min-h-screen bg-purple-700 p-8">
      <div className="relative mb-8 mt-36 flex flex-col gap-5 px-6">
        <AnimatedTitle
          title='Notícias ONG'
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {noticias.map((noticia, index) => (
          <div key={index} className="bg-white rounded shadow-md overflow-hidden">
            <img
              src={noticia.imagemUrl}
              alt={noticia.titulo}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-purple-700 font-circular-web">
                {noticia.titulo}
              </h2>

              <div dangerouslySetInnerHTML={{ __html: noticia.conteudo }} />
              <p className="text-sm text-gray-500 mb-2">
                Publicado em: {noticia.criadoEm?.toDate().toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
