import React from 'react'
import { AnimatedTitle } from './AnimatedTitle'
export const Caracteristicas = () => {
  return (
    <section className='bg-purple-700 pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <AnimatedTitle
                    title="QUEM SOMOS?"
                    containerClass="mt-5 !text-blue-50 text-center"
                />
            <p className='font-circular-web text-lg mt-10 mb-10 text-blue-50'>A Casa da Mulher de Ribeirão Preto é uma instituição voltada para o apoio às mulheres, com foco em promover a igualdade de gênero, a proteção contra a violência e a promoção dos direitos das mulheres. Criada em 1999, a Casa oferece uma série de serviços de acolhimento e apoio jurídico e social para mulheres em situação de violência ou vulnerabilidade.</p>
            <img src="/img/casadamulher-desktop-1.png"/>
            <p className='font-circular-web text-lg mt-10 text-blue-50'>A Casa da Mulher foi criada pela Prefeitura de Ribeirão Preto, com o objetivo de proporcionar um ambiente seguro e especializado para as mulheres da cidade, atendendo tanto as vítimas de violência doméstica quanto aquelas em busca de apoio para o fortalecimento da autoestima e da autonomia. O espaço surgiu em um contexto onde se observava a crescente necessidade de políticas públicas voltadas para o combate à violência contra as mulheres e a promoção de seus direitos em uma sociedade ainda marcada por desigualdades.</p>
            </div>
        </div>
    </section>
  )
}
