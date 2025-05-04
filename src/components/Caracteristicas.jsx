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
            A CASA DA MULHER - ASSOCIAÇÃO DE ATENDIMENTO, ESTUDO E PESQUISA, fundada em 10 de abril de 1999, declarada de Utilidade Pública em 13 de janeiro de 2003, Lei nº 9727, Câmara Municipal de Ribeirão Preto/SP. É uma associação civil feminista, autônoma, sem fins lucrativos, sem distinção de gênero, sexo, crença, raça, geracional ou categoria social, com personalidade jurídica de direito privado, sem fins econômicos, de duração indeterminada, de caráter educativo, garantia de direitos sociais: saúde, educação, transporte, trabalho, lazer, cultura, esporte, moradia, assistencial social,  meio ambiente, segurança, patrimonial com número de associados indeterminados
          </p>

          <p className="font-circular-web text-xl mb-6 text-blue-50">
            A CASA DA MULHER tem como objetivos:<br />
            I – atuar, por meio de ações de assistência social, de psicologia e jurídica, na proteção do público feminino em situação de violência;<br />
            II – propor a adoção de políticas públicas que favoreçam a instrumentalização dos direitos humanos relativos às mulheres;<br />
            III - promover o acesso à rede socioassistencial, aos demais órgãos do Sistema de Garantia de Direitos; encaminhando as mulheres em situação de violência;<br />
            III – Orientar, fortalecer e empoderar as mulheres quanto às relações sociais de dominação e de subordinação que permeiam as relações homem/mulher na sociedade;<br />
            VI - Promover estudos e pesquisas em prol do desenvolvimento de tecnologias, promoção e divulgação de informações, bem como de conhecimentos técnicos e científicos na pesquisa sobre direitos humanos, e em especial, no que diz ao tema da violência cometida contra as mulheres;
          </p>

          <p className="font-circular-web text-xl mb-6 text-blue-50">
            Artigo 3º - No desenvolvimento de suas atividades a Casa da Mulher não fará qualquer discriminação de gênero, étnico/racial, geracional e orientação sexual.
          </p>

          <p className="font-circular-web text-xl mb-6 text-blue-50">
            Artigo 4º - A Casa da Mulher terá um Regimento Interno que homologado pela Assembleia Geral, disciplinará seu funcionamento.
          </p>

          <p className="font-circular-web text-xl mb-6 text-blue-50">
            Artigo 5º - A fim de cumprir suas finalidades a associação civil se organizará em tantas unidades de prestação de serviços no município de Ribeirão Preto ou em outros municípios quantas se fizerem necessárias, as quais se regerão pelo Regimento Interno aludido no artigo
          </p>

          <p className="font-circular-web text-xl mb-6 text-blue-50">
            MEMBROS DA CASA<br /><br />
            <strong>Cargo: Presidente</strong><br />
            Taís Silva<br />
            Formação acadêmica: Serviço Social<br />
            Especialização: Enfrentamento à violência familiar e contra a mulher<br /><br />
            Minha trajetória é pautada na participação em movimentos sociais. Iniciei minha atuação na OSC Casa da Mulher como estagiária, posteriormente como voluntária, e hoje faço parte da equipe técnica e atuo como representante legal da instituição.
          </p>
          <img src="/img/PresidenteCDM.png" alt="Imagem da Casa da Mulher" className="my-8 mx-auto rounded shadow" />

          <p className="font-circular-web text-xl mb-6 text-blue-50">
            Rosa Vanessa é Promotora Legal Popular, enfermeira e doutoranda na EERP/USP. Colabora com a OSC Casa da Mulher – Associação e Atendimento, Estudos e Pesquisa, onde atua em projetos de promoção dos Direitos Humanos das Mulheres. Conduz rodas de conversa sobre saúde das mulheres, saúde da população negra, saúde mental, violência contra a mulher e empreendedorismo feminino, promovendo acolhimento, escuta e fortalecimento de vínculos.
          </p>
          <img src="/img/RosaVanessa.png" alt="Imagem da Casa da Mulher" className="my-8 mx-auto rounded shadow" />
          
          <p className="font-circular-web text-xl mb-6 text-blue-50">
            Adria Maria<br />
            Mulher negra, feminista, professora, socióloga, ex diretora do Departamento de Educação da Rede Municipal de Ensino/RP. Membra da diretoria da Casa da Mulher. Criadora e coordenadora do Curso Promotora Legal Popular.
          </p>
          <img src="/img/Adria.png" alt="Imagem da Casa da Mulher" className="my-8 mx-auto rounded shadow" />

          <p className="font-circular-web text-xl mb-6 text-blue-50">
            2. Sobre a Organização<br /><br />
            <strong>Missão:</strong> Promover ações de assistência social, apoio e defesa dos direitos das mulheres, combatendo desigualdades, preconceitos e violência. Atuar de forma inclusiva e humanizada, oferecendo serviços, programas e projetos que promovam o empoderamento, a igualdade e a cidadania.<br /><br />
            <strong>Visão:</strong> Ser referência no combate às desigualdades sociais e na promoção dos direitos humanos das mulheres e populações vulneráveis, tornando-se uma instituição reconhecida nacionalmente por sua atuação efetiva na construção de uma sociedade mais justa e igualitária.<br /><br />
            <strong>Valores:</strong><br />
            1. Inclusão: Respeito às diversidades de gênero, raça, etnia, orientação sexual e condições sociais de mulheres.<br />
            2. Empoderamento: Contribuir para o fortalecimento da autonomia das mulheres e populações atendidas.<br />
            3. Igualdade: Lutar pela democratização das relações sociais e combate a todas as formas de preconceito.<br />
            4. Compromisso: Transparência, ética e responsabilidade nas ações realizadas.<br />
            5. Humanidade: Atendimento acolhedor, com escuta qualificada e respeito à dignidade humana.<br />
            6. Colaboração: Trabalho em rede com entidades governamentais, organizações da sociedade civil e movimentos sociais.
          </p>

        </div>
      </div>
    </section>
  );
};
