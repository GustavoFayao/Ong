import { AnimatedTitle } from './AnimatedTitle';

export const Contato = () => {
  return (
    <section className="min-h-screen bg-purple-700 pb-24 pt-36 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <AnimatedTitle title="Contato" containerClass="!text-blue-50 text-center" />

        <div className="mt-10 bg-white shadow-md rounded-lg p-6 md:p-10 font-circular-web text-lg md:text-xl space-y-6 text-left">
          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-2 text-purple-700">Nosso Endereço</h3>
            <p>R. Barão do Amazonas, 1065</p>
          </div>

          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-2 text-purple-700">Horário de Funcionamento</h3>
            <p>Segunda a sexta, das 11:00 às 17:00</p>
            <p className="text-sm italic">(Sujeito a mudanças em casos de eventos, feriados e disponibilidade da equipe)</p>
          </div>

          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-2 text-purple-700">Contato</h3>
            <p><strong>E-mail:</strong> <a href="mailto:casadamulherribeiraopreto@gmail.com" className="underline text-blue-700">casadamulherribeiraopreto@gmail.com</a></p>
            <p><strong>Instagram:</strong> <a href="https://instagram.com/casadamulher_rp" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">@casadamulher_rp</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};
