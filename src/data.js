// import images
import LogoImg from '../src/assets/img/header/logo-hapvida.svg';
import HeroImg from '../src/assets/img/hero/image.svg';
//import OverviewProductImg from '../src/assets/img/overview/product.svg';
import FacebookImg from '../src/assets/img/overview/brands/facebook.svg';
import GoogleImg from '../src/assets/img/overview/brands/google.svg';
import CocaColaImg from '../src/assets/img/overview/brands/coca-cola.svg';
import LinkedInImg from '../src/assets/img/overview/brands/linkedin.svg';
import SamsungImg from '../src/assets/img/overview/brands/samsung.svg';
import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import CardIconImg1 from '../src/assets/img/product/cards/icon1.svg';
import CardIconImg2 from '../src/assets/img/product/cards/icon2.svg';
import CardIconImg3 from '../src/assets/img/product/cards/icon3.svg';
import PricingIcon1 from '../src/assets/img/pricing/icon1.svg';
import PricingIcon2 from '../src/assets/img/pricing/icon2.svg';
import PricingIcon3 from '../src/assets/img/pricing/icon3.svg';
import AvatarImg1 from '../src/assets/img/testimonial/avatar1.png';
import AvatarImg2 from '../src/assets/img/testimonial/avatar2.png';
import AvatarImg3 from '../src/assets/img/testimonial/avatar3.png';
import AvatarImg4 from '../src/assets/img/testimonial/avatar4.png';
import AvatarImg5 from '../src/assets/img/testimonial/avatar5.png';
import CtaImg1 from '../src/assets/img/cta/image1.svg';
import CtaImg2 from '../src/assets/img/cta/image2.svg';
import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
import TwitterIcon from '../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../src/assets/img/copyright/linkedin.svg';

export const header = {
  logo: LogoImg,
  btnText: 'Solicite um orçamento',
};

export const nav = [
  { name: 'Benefícios', href: '/' },
  { name: 'Sobre nós', href: '/' },
  { name: 'Planos', href: '/' },
  { name: 'Comentários', href: '/' },
];

export const hero = {
  title: 'Hapvida, Saúde pra valer.',
  subtitle: 'Deixe a Rede Hapvida cuidar de você',
  btnText: 'Planos',
  compText: '— Conheça os nossos planos!',
  image: HeroImg,
};

export const planos = {
  title: 'Faça uma simulação totalmente gratuita!' ,

brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ], 
}; 

export const features = {
  feature1: {
    pretitle: 'Alwalys online',
    title: 'Real-time support with cloud',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Economia!',
    title: 'Economize custos para você e sua família',
    subtitle:
      'Com planos especiais que cabem no seu bolso!.',
    btnLink: 'Saber mais',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'De qualquer lugar!',
    title: 'Use sempre que precisar',
    subtitle:
      'Marque suas consultas e seus exames de forma prática e fácil.',
    btnLink: 'Saber mais',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'A Maior rede de Hospitais e Clinicas médicas do Brasil.',
  subtitle:
    'Deixe a Rede HapVida cuidar de você.',
  cards: [
    {
      icon: CardIconImg1,
      title: 'Rede Exclusiva',
      subtitle: 'Com 43 hospitais próprios, 45 prontos atendimentos, 130 clínicas e 109 centros de diagnóstico por imagem e coleta laboratorial.',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Odontologia',
      subtitle: 'Só no Hapvida, você tem um plano completo de odontologia incluso, com prevenção, diagnóstico, urgência 24h e cobertura em todo Brasil.',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Maior Rede Pediátrica',
      subtitle: 'A maior rede de atendimento infantil, com UTI neonatal, acompanhamento pediátrico e uma infraestrutura moderna.',
      delay: 500,
    },
  ],

  cards2: [
    {
      icon: CardIconImg1,
      title: 'Atendimento ao cliente 24h',
      subtitle: 'A sua saúde não pode esperar e por isso, temos uma equipe exclusiva para te ajudar com marcações de consulta, exames e autorizações.',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Teleconsulta',
      subtitle: 'De onde estiver: você pode fazer suas consultas preventivas ou mesmo ter atendimento básico pela teleconsulta, no seu smartphone, tablet ou computador..',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Chat Hapvida',
      subtitle: 'aça agendamentos, solicite autorizações e tire as suas dúvidas pelo nosso chat.',
      delay: 500,
    },
  ],
};

export const pricing = {
  title: 'Escolha seu plano flexível.',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Plano Inicial',
      services: [
        { name: 'Marcação de consulta grátis' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: 'R$ 81.75',
      userAmount: 'Para toda familia!',
      btnText: 'Saiba mais',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Plano Prata',
      services: [
        { name: 'Marcação de consulta grátis' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: 'R$ 134.90',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Saiba mais',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Plano Diamante',
      services: [
        { name: 'Marcação de consulta grátis' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: 'R$ 184.90',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Saiba mais',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: 'Você saudável e Feliz é a nossa meta',
  clients: [
    {
      message:
        'Os planos são excelentes, minha família toda usa, e nós adoramos!',
      image: AvatarImg1,
      name: 'Carla Fonseca',
      position: 'Cliente',
      borderColor: '#FF7235',
    },
    {
      message:
        'Adoro os planos da da Hapvida, sempre me ajudaram quando eu mais precisei o utilizei e fui super atendida nos hospitais e clinicas!',
      image: AvatarImg2,
      name: 'Marília Ribeiro',
      position: 'Cliente',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Muito Show!, recomendo!!',
      image: AvatarImg3,
      name: 'Helen Silva',
      position: 'Cliente',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg4,
      name: 'Norma Santos',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg5,
      name: 'Terri Conroy',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: '+20mil Clientes satisfeitos no Brasil',
  subtitle: 'Acesse o nosso portal HapVida',
  btnText: 'Acessar',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre nós', href: '/' },
    { name: 'Planos', href: '/' },
    { name: 'Comentários', href: '/' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '/' },
    { name: 'Terms of conditions', href: '/' },
    { name: 'Politica de Privacidade', href: '/' },
    { name: 'Política de cookies', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Mais de 5.000 pessoas já se inscreveram',
  },
  form: {
    placeholder: 'Digite o seu email',
    btnText: 'Inscrever',
    smallText: 'Não enviamos e-mail de spam',
  },
};

export const copyright = {
  link1: {
    name: 'Termos de Privacidade',
    href: '/',
  },
  link2: {
    name: 'Contato',
    href: '/',
  },
  copyText: '© Todos os direitos reservados 2022.',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};
