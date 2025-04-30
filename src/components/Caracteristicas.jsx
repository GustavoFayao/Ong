import React from 'react';
import { AnimatedTitle } from './AnimatedTitle';

export const Caracteristicas = () => {
  return (
    <section id='caracteristicas' className="bg-purple-700 pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <AnimatedTitle
            title="QUEM SOMOS?"
            containerClass="mt-5 !text-blue-50 text-center"
          />
          <p className="font-circular-web text-lg mt-10 mb-6 text-blue-50">
            A <strong>CASA DA MULHER - ASSOCIAÇÃO DE ATENDIMENTO, ESTUDO E PESQUISA</strong>, fundada em 10 de abril de 1999, declarada de Utilidade Pública em 13 de janeiro de 2003, é uma associação civil feminista, autônoma, sem fins lucrativos, sem distinção de gênero, sexo, crença, raça, geração ou classe social. Atua com foco em garantir direitos sociais como saúde, educação, trabalho, moradia e proteção contra a violência.
          </p>
          <p className="font-circular-web text-xl mb-6 text-blue-50">
            <strong>Objetivos da Casa da Mulher:</strong><br />
            • Oferecer assistência social, psicológica e jurídica às mulheres em situação de violência;<br />
            • Propor políticas públicas de promoção dos direitos das mulheres;<br />
            • Facilitar o acesso das mulheres à rede de proteção e assistência social;<br />
            • Fortalecer a autonomia das mulheres e combater relações sociais desiguais;<br />
            • Promover pesquisas e estudos sobre violência contra a mulher e direitos humanos.
          </p>
          <p className="font-circular-web text-xl mb-6 text-blue-50">
            <strong>Princípios:</strong> Não há qualquer tipo de discriminação de gênero, raça, etnia, geração ou orientação sexual nas atividades da associação.
          </p>
          <p className="font-circular-web text-xl mb-6 text-blue-50">
            A associação organiza suas ações em unidades de atendimento em Ribeirão Preto e pode expandir conforme necessidade, com base em Regimento Interno aprovado por Assembleia Geral.
          </p>

          <p className="font-circular-web text-xl mb-6 text-blue-50">
            <strong>Missão:</strong> Promover ações sociais, apoio e defesa dos direitos das mulheres, combatendo a desigualdade, preconceitos e violências. Atuar de forma inclusiva, humana e empoderadora.
          </p>
          <p className="font-circular-web text-xl mb-6 text-blue-50">
            <strong>Visão:</strong> Ser referência nacional na promoção dos direitos humanos das mulheres, reduzindo desigualdades e construindo uma sociedade mais justa.
          </p>
          <p className="font-circular-web text-xl mb-6 text-blue-50">
            <strong>Valores:</strong><br />
            • Inclusão: Respeito à diversidade;<br />
            • Empoderamento: Fortalecimento da autonomia;<br />
            • Igualdade: Combate ao preconceito;<br />
            • Compromisso: Ética e transparência;<br />
            • Humanidade: Escuta e acolhimento;<br />
            • Colaboração: Trabalho em rede com outras entidades.
          </p>

          <p className="font-circular-web text-xl mb-6 text-blue-50">
            <strong>Presidente:</strong> <br />
            <img src="/img/PresidenteCDM.png" alt="Imagem da Casa da Mulher" className="my-8 mx-auto rounded shadow" />
            <strong>Taís Silva</strong> – Assistente social, especialista em enfrentamento à violência familiar. Iniciou sua trajetória como estagiária na Casa da Mulher e hoje atua como representante legal.
          </p>

          <p className="font-circular-web text-xl mb-6 text-blue-50">
            <strong>Outras Membros:</strong><br />
            <img src="/img/RosaVanessa.png" alt="Imagem da Casa da Mulher" className="my-8 mx-auto rounded shadow" />
            • <strong>Rosa Vanessa</strong> – Promotora Legal Popular, enfermeira e doutoranda na EERP/USP, conduz rodas de conversa e atua em projetos de Direitos Humanos das Mulheres.<br />
            <img src="/img/Adria.png" alt="Imagem da Casa da Mulher" className="my-8 mx-auto rounded shadow" />
            • <strong>Adria Maria</strong> – Professora, socióloga, feminista, ex-diretora da Educação Municipal e coordenadora do curso Promotora Legal Popular.
          </p>

          <p className="font-circular-web text-xl mb-6 text-blue-50">
            <strong>Local de atuação:</strong> Todo o município de Ribeirão Preto, com foco especial em comunidades e favelas.
          </p>
          <p className="font-circular-web text-xl mb-6 text-blue-50">
            <strong>Sobre a Organização</strong><br />
            <strong>Missão:</strong> Promover ações de assistência social, apoio e defesa dos direitos das mulheres, combatendo desigualdades, preconceitos e violência. Atuar de forma inclusiva e humanizada, oferecendo serviços, programas e projetos que promovam o empoderamento, a igualdade e a cidadania.
          </p>

          <p className="font-circular-web text-xl mb-6 text-blue-50">
            <strong>Visão:</strong> Ser referência no combate às desigualdades sociais e na promoção dos direitos humanos das mulheres e populações vulneráveis, tornando-se uma instituição reconhecida nacionalmente por sua atuação efetiva na construção de uma sociedade mais justa e igualitária.
          </p>

          <p className="font-circular-web text-xl mb-6 text-blue-50">
            <strong>Valores:</strong><br />
            • Inclusão: Respeito às diversidades de gênero, raça, etnia, orientação sexual e condições sociais de mulheres.<br />
            • Empoderamento: Contribuir para o fortalecimento da autonomia das mulheres e populações atendidas.<br />
            • Igualdade: Lutar pela democratização das relações sociais e combate a todas as formas de preconceito.<br />
            • Compromisso: Transparência, ética e responsabilidade nas ações realizadas.<br />
            • Humanidade: Atendimento acolhedor, com escuta qualificada e respeito à dignidade humana.<br />
            • Colaboração: Trabalho em rede com entidades governamentais, organizações da sociedade civil e movimentos sociais.
          </p>

        </div>
      </div>
    </section>
  );
};
