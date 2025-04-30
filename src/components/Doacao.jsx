import React from 'react';
import { AnimatedTitle } from './AnimatedTitle';

export const Doacao = () => {
  return (
    <section className="min-h-screen bg-purple-700 pb-24 pt-36 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedTitle title="Faça uma Doação" containerClass="!text-blue-50" />

        <p className="text-blue-50 font-circular-web text-lg md:text-xl mt-8">
          Sua contribuição faz toda a diferença para fortalecer nosso trabalho em prol das mulheres.
        </p>
        <p className="text-blue-50 font-circular-web text-lg md:text-xl mt-4">
          Através da sua doação, conseguimos manter projetos de acolhimento, assistência e defesa dos direitos das mulheres.
        </p>

        <div className="mt-10">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSegTUNyNW4noXTen19fzInJUlb9foeR4UyZqyIKPIpdoFvvCg/viewform" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-100 text-purple-700 font-bold px-8 py-4 rounded-full shadow-md hover:bg-blue-200 transition-colors font-circular-web text-lg"
          >
            Preencher Formulário de Doação
          </a>
        </div>
      </div>
    </section>
  );
};
