import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../lib/firebase-config';
import { AnimatedTitle } from '../components/AnimatedTitle';

export const Transparencia = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      const snapshot = await getDocs(collection(db, 'transparencia'));
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDados(lista);
    };
    fetchDados();
  }, []);

  return (
    <section className="min-h-screen bg-purple-700 p-8">
      <div className="relative mb-8 mt-36 flex flex-col gap-5 px-6">
        <AnimatedTitle title="Transparência" />
        <p className="text-white text-lg max-w-3xl mx-auto text-center">
          Acompanhe abaixo os arquivos com informações financeiras, prestações de contas e documentos da ONG.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {dados.map((item) => (
          <div key={item.id} className="bg-white rounded shadow-md overflow-hidden p-4">
            <h2 className="text-xl font-bold text-purple-700 font-circular-web mb-2">{item.nome}</h2>

            {/* Verifica se é PDF */}
            {item.url.endsWith('.pdf') ? (
              <iframe
                src={item.url}
                title={item.nome}
                width="100%"
                height="400px"
                className="rounded border"
              ></iframe>
            ) : (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Visualizar documento
              </a>
            )}

            <p className="text-sm text-gray-500 mt-2">
              Enviado em:{' '}
              {item.enviadoEm?.seconds
                ? new Date(item.enviadoEm.seconds * 1000).toLocaleDateString('pt-BR')
                : 'Data não disponível'}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
