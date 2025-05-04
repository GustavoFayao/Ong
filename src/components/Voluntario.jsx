import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebase-config';
import { AnimatedTitle } from './AnimatedTitle';

export default function Voluntario() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    habilidades: '',
    tipoVoluntariado: '',
    outroTipo: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tipoFinal = form.tipoVoluntariado === 'Outro' ? form.outroTipo : form.tipoVoluntariado;
    try {
      await addDoc(collection(db, 'voluntarios'), {
        nome: form.nome,
        telefone: form.telefone,
        email: form.email,
        motivacao: form.motivacao,
        melhoras: form.melhoras,
        tipoVoluntariado: tipoFinal,
        data: new Date(),
      });
      setEnviado(true);
      setForm({
        nome: '',
        telefone: '',
        email: '',
        Motivação: '',
        Melhoras:'',
        tipoVoluntariado: '',
        outroTipo: '',
      });
    } catch (error) {
      console.error('Erro ao enviar:', error);
    }
  };

  if (enviado) {
    return (
      <section className="min-h-screen bg-purple-700 p-8 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-green-600 mb-2">Obrigado pelo seu interesse!</h2>
          <p>Entraremos em contato após a aprovação.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-purple-700 pb-24 pt-36 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedTitle title="Seja Voluntário(a)" containerClass="!text-blue-50" />

        <p className="text-blue-50 font-circular-web text-lg md:text-xl mt-8">
          Junte-se a nós na missão de apoiar mulheres em situação de vulnerabilidade.
        </p>

        <p className="text-blue-50 font-circular-web text-lg md:text-xl mt-4">
          Nossa Organização da Sociedade Civil atua diretamente no acolhimento, orientação e fortalecimento de vítimas de violência.
        </p>

        <p className="text-blue-50 font-circular-web text-lg md:text-xl mt-4">
          Estamos em busca de pessoas comprometidas e dispostas a fazer a diferença.
        </p>

        <p className="text-blue-50 font-circular-web text-lg md:text-xl mt-8 font-semibold">
          Ao se inscrever como voluntário(a), você poderá colaborar em diversas áreas, como:
        </p>

        <ul className="text-blue-50 font-circular-web text-lg mt-4 text-left list-disc list-inside mx-auto max-w-xl">
          <li>Apoio psicológico e social</li>
          <li>Atividades de acolhimento</li>
          <li>Campanhas de conscientização</li>
          <li>Eventos educativos</li>
          <li>Apoio administrativo</li>
        </ul>

        <p className="text-blue-50 font-circular-web text-lg md:text-xl mt-8">
          Sua participação é essencial para construir um futuro mais justo e seguro para todas.
        </p>

        <p className="text-blue-50 font-circular-web text-base italic mt-4">
          Obs: Nenhum dado será exposto.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mt-8 mx-auto bg-white p-6 rounded shadow-md space-y-4 font-circular-web"
      >
        <input
          type="text"
          placeholder="Nome completo"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="tel"
          placeholder="Telefone (WhatsApp)"
          value={form.telefone}
          onChange={(e) => setForm({ ...form, telefone: e.target.value })}
          required
          className="w-full p-3 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full p-3 border rounded"
        />

        <input
          type="tel"
          placeholder="Qual sua motivação para participar como voluntário(a)?"
          value={form.motivacao}
          onChange={(e) => setForm({ ...form, motivacao: e.target.value })}
          required
          className="w-full p-3 border rounded"
        />

        <input
          type="tel"
          placeholder="Teria alguma sugestão para implementar no formulario?"
          value={form.melhoras}
          onChange={(e) => setForm({ ...form, melhoras: e.target.value })}
          required
          className="w-full p-3 border rounded"
        />

        <label className="block text-left font-semibold mt-4">Qual tipo de voluntariado você pretende atuar?</label>
        {['Sem preferência', 'Projeto "Você Pode"', 'Mídias sociais', 'Financeiro', 'Apoio psicológico', 'Outro'].map((opcao) => (
          <label key={opcao} className="block text-left">
            <input
              type="radio"
              name="tipoVoluntariado"
              value={opcao}
              checked={form.tipoVoluntariado === opcao}
              onChange={(e) => setForm({ ...form, tipoVoluntariado: e.target.value })}
              className="mr-2"
              required
            />
            {opcao}
          </label>
        ))}

        {form.tipoVoluntariado === 'Outro' && (
          <input
            type="text"
            placeholder="Digite outro tipo de voluntariado"
            value={form.outroTipo}
            onChange={(e) => setForm({ ...form, outroTipo: e.target.value })}
            className="w-full p-2 border rounded"
          />
        )}
        
            
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition-colors"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
