import React from 'react'
import { AnimatedTitle } from './AnimatedTitle'
export const ProjetoAtividade = () => {



  
  return (
    <>
    <section id='voce-pode' className='min-h-screen bg-purple-700 p-8'>
          <div className='relative mb-8 mt-36 flex flex-col  gap-5 px-6'>
            <AnimatedTitle
              title="Projetos"
            />
          </div>
          <div className='relative mb-8 mt-20 flex flex-col  gap-5 px-6'>
          <AnimatedTitle
          title='Você pode'/>
          </div>
          <div>             
            <p className='font-circular-web text-lg mt-2 mb-2 text-blue-50'>O projeto <b>“Você Pode”,</b> surge como resposta à violência contra a mulher, reconhecida internacionalmente como uma violação dos direitos humanos e reflexo de relações historicamente desiguais de poder entre homens e mulheres. A violência doméstica, em especial, afeta profundamente não só a saúde física e emocional das vítimas, mas também o bem-estar das famílias e comunidades, sendo considerada um grave problema de saúde pública pela Organização Mundial da Saúde.</p>
            <p className='font-circular-web text-lg mt-2 mb-2 text-blue-50'>Fundamentado na <b>Lei Maria da Penha (11.340/2006)</b>, que tipifica diversas formas de violência — física, psicológica, sexual, patrimonial e moral — o projeto busca enfrentar e prevenir a violência doméstica por meio da <b>implantação de uma Casa de Apoio à Cidadania da Mulher</b>, com atuação em Ribeirão Preto (SP), nas comunidades de <b>Sete Curvas,Margarida Alves, Vila União e Vila Albertina</b>, especialmente onde há alta incidência de casos.</p>
            <p className='font-circular-web text-lg mt-2 mb-2 text-blue-50'>A organização da sociedade civil responsável atua com foco no acolhimento, orientação e suporte às mulheres em situação de vulnerabilidade, incluindo vítimas de discriminação por gênero, raça, orientação sexual ou identidade de gênero. O projeto dá atenção especial a <b>mulheres encarceradas</b>, em instituições como a Cadeia e Penitenciária Feminina de Vila Branca, e à população <b>LGBTQIA+</b>.</p>
            <p className='font-circular-web text-lg mt-2 mb-2 text-blue-50'>Além do atendimento direto, o projeto promove <b>ações preventivas e socioeducativas</b> em escolas, centros comunitários e outros espaços, buscando transformar comportamentos e atitudes, com base no respeito à diversidade, à cidadania e aos direitos humanos. Outro pilar importante é a <b>formação de agentes multiplicadoras</b> — as chamadas promotoras legais populares — para atuarem como lideranças comunitárias na promoção da cultura de paz, mediação de conflitos e justiça restaurativa.</p>
            <p className='font-circular-web text-lg mt-2 mb-2 text-blue-50'>A proposta visa fortalecer os vínculos familiares e comunitários, resgatar a dignidade das mulheres e <b>empoderá-las</b> para que possam romper o ciclo da violência. Trata-se de uma ação de interesse coletivo, voltada a um grupo vulnerável por sua condição de gênero, com impacto direto na transformação social</p>
          </div>

          <img src="/img/vocepodeproject.png" alt="imagem do projeto" className='my-8 mt-20 mx-auto rounded shadow w-11/12' />

    </section>

    <section id='' className='min-h-screen bg-purple-700 p-8'>
    <div className='relative mb-8 mt-20 flex flex-col  gap-5 px-6'>
          <AnimatedTitle
          title='Promotoras Legais Populares'/>
          </div>
          <div>             
            <p className='font-circular-web text-lg mt-2 mb-2 text-blue-50'>Promovido por lideranças comunitárias capacitadas para trabalhar com condições de direito, direitos humanos das mulheres e organizações judiciárias, o projeto empresta suas habilidades e competências para promover interações, diálogos e trocas de experiências. Surge da necessidade de sensibilização diante das dificuldades de acesso à justiça e atua capacitando mulheres líderes comunitárias com conhecimentos teóricos e práticos sobre leis e direitos, desenvolvendo consciências críticas e reflexivas sobre conteúdos machistas, classistas e patriarcais.</p>
            <p className='font-circular-web text-lg mt-2 mb-2 text-blue-50'>E quem essa mulher se torna após se formar? Uma mulher com formação e capacitação em direitos humanos, direitos das mulheres e cidadania, preparada para atuar como agente multiplicadora de informação e conscientização.</p>
            <p className='font-circular-web text-lg mt-2 mb-2 text-blue-50'>Isso não a torna uma advogada, mas sim uma liderança popular, pronta para ajudar outras mulheres a reconhecerem seus direitos, identificar situações de violência, desigualdade ou discriminação e buscar os serviços e mecanismos de apoio disponíveis, como a Delegacia da Mulher, o Ministério Público ou a Defensoria Pública. Ela trabalha para garantir que o conhecimento jurídico básico seja uma ferramenta de transformação social.</p>            
          </div>
          <img src="/img/promotoraslegais.png" alt="imagem do projeto" className='my-8 mt-20 mx-auto rounded shadow w-3/4' />
    </section>
    </>
  )
}
