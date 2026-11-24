import { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Code2,
  Compass,
  ExternalLink,
  LockKeyhole,
  Instagram,
  Layers3,
  Linkedin,
  Menu,
  MessageCircle,
  Monitor,
  Palette,
  Rocket,
  Send,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  X,
} from 'lucide-react';

type IconComponent = typeof Monitor;
type Service = {
  title: string;
  description: string;
  price: string;
  icon: IconComponent;
  items: string[];
};

type Project = {
  name: string;
  category: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  isPrivate?: boolean;
};

const WHATSAPP_URL = 'https://wa.me/5567999252257';

const services: Service[] = [
  {
    title: 'Landing Page + Painel',
    description: 'Uma página de conversão com gestão centralizada.',
    price: 'R$ 700,00',
    icon: Rocket,
    items: ['Página de alta conversão', 'Painel administrativo', 'Estrutura responsiva'],
  },
  {
    title: 'Site Institucional',
    description: 'A presença oficial da sua marca na internet.',
    price: 'R$ 1.200,00',
    icon: Monitor,
    items: ['Apresentação da empresa', 'Páginas estratégicas', 'Experiência em qualquer tela'],
  },
  {
    title: 'Portfólio Profissional',
    description: 'Seu trabalho apresentado com clareza e personalidade.',
    price: 'R$ 800,00',
    icon: Layers3,
    items: ['Galeria de projetos', 'Destaque para sua história', 'Contato facilitado'],
  },
  {
    title: 'Loja Virtual',
    description: 'Uma vitrine digital pronta para vender todos os dias.',
    price: 'R$ 2.000,00',
    icon: ShoppingCart,
    items: ['Catálogo de produtos', 'Jornada de compra', 'Experiência mobile'],
  },
  {
    title: 'Dashboard',
    description: 'Informação organizada para decisões mais inteligentes.',
    price: 'R$ 2.400,00',
    icon: BarChart3,
    items: ['Visualização de dados', 'Indicadores essenciais', 'Interface sob medida'],
  },
  {
    title: 'Sistema Web',
    description: 'Soluções digitais desenhadas para o seu negócio.',
    price: 'R$ 3.400,00',
    icon: Code2,
    items: ['Fluxos personalizados', 'Funcionalidades específicas', 'Arquitetura escalável'],
  },
  {
    title: 'Identidade Visual',
    description: 'Uma linguagem visual consistente para a sua marca.',
    price: 'R$ 400,00',
    icon: Palette,
    items: ['Direção visual', 'Cores e tipografia', 'Aplicações essenciais'],
  },
];

const projects: Project[] = [
  {
    name: 'Estoque GRAJ',
    category: 'Sistema de gestão de estoque',
    description: 'Controle de produtos, movimentações e rotinas administrativas.',
    url: 'https://estoque-graj.netlify.app/',
    isPrivate: true,
  },
  {
    name: 'NG Store',
    category: 'Loja virtual',
    description: 'Experiência de varejo para moda masculina country e casual.',
    url: 'https://ngstore-opal.vercel.app/',
    image: 'https://images.pexels.com/photos/5264914/pexels-photo-5264914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Interior de uma loja de moda masculina para a apresentação da NG Store',
  },
  {
    name: 'Sabor Digital',
    category: 'Projeto digital de gastronomia',
    description: 'Cardápio digital para uma experiência mais simples e apetitosa.',
    url: 'https://sabor-digital-ashy.vercel.app/',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1000&h=750&fit=crop&q=80',
    imageAlt: 'Pizza artesanal representando o projeto de cardápio Sabor Digital',
  },
  {
    name: 'Estuda PMMS',
    category: 'Plataforma educacional',
    description: 'Organização de estudos, metas e revisões em um só lugar.',
    url: 'https://estuda-pmms.vercel.app/',
    image: 'https://images.pexels.com/photos/8085264/pexels-photo-8085264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Pessoa estudando com livros e notebook para a apresentação do Estuda PMMS',
  },
];

const processSteps = [
  { number: '01', title: 'Descoberta', text: 'Entendemos o negócio, os objetivos e as necessidades do cliente.', icon: Compass },
  { number: '02', title: 'Planejamento', text: 'Definimos estrutura, experiência, funcionalidades e direção visual.', icon: Target },
  { number: '03', title: 'Desenvolvimento', text: 'Transformamos o planejamento em uma solução digital funcional.', icon: Code2 },
  { number: '04', title: 'Entrega', text: 'Realizamos a revisão final e entregamos o projeto.', icon: Sparkles },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function SectionHeading({ eyebrow, title, accent }: { eyebrow: string; title: string; accent?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {title} {accent && <span className="accent-text">{accent}</span>}
      </h2>
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
        <a className={`logo ${light ? 'logo-light' : ''}`} href="#inicio" aria-label="WEBPAGEART, voltar ao início">
      <img
        className={`logo-image ${light ? 'logo-image-footer' : ''}`}
        src={`${import.meta.env.BASE_URL}IMG_20260422_074917_901.webp`}
        alt="WEBPAGEART"
      />
    </a>
  );   // <- adicionar
}      // <- adicionar

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formError, setFormError] = useState('');
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {}
    : { variants: reveal, initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.18 } };

  const closeMenu = () => setMenuOpen(false);

  const handleBudgetSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const whatsapp = String(formData.get('whatsapp') ?? '').trim();
    const service = String(formData.get('service') ?? '').trim();
    const budget = String(formData.get('budget') ?? '').trim();
    const description = String(formData.get('description') ?? '').trim();
    const company = String(formData.get('company') ?? '').trim();

    if (!name || !whatsapp || !service || !budget || !description) {
      setFormError('Preencha todos os campos obrigatórios para continuar.');
      return;
    }

    setFormError('');
    const message = [
      'Olá, WEBPAGEART! Gostaria de solicitar um orçamento.',
      '',
      `Nome: ${name}`,
      company ? `Empresa ou marca: ${company}` : '',
      `WhatsApp: ${whatsapp}`,
      `Serviço desejado: ${service}`,
      `Faixa de investimento: ${budget}`,
      '',
      `Sobre o projeto: ${description}`,
    ].filter(Boolean).join('\n');

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
            {['inicio', 'servicos', 'portfolio', 'processo', 'contato'].map((item) => (
              <a key={item} href={`#${item}`} onClick={closeMenu}>
                {item === 'inicio' ? 'Início' : item === 'servicos' ? 'Serviços' : item === 'portfolio' ? 'Portfólio' : item === 'processo' ? 'Processo' : 'Contato'}
              </a>
            ))}
            <a className="header-cta" href="#orcamento" onClick={closeMenu}>
              Solicitar orçamento <ArrowUpRight size={14} />
            </a>
          </nav>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section section-dark">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="container hero-content">
            <motion.div className="hero-copy" initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
              <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Desenvolvimento web · Design · Estratégia</div>
              <h1>IDEIAS QUE<br /><span>GANHAM VIDA</span><br />NO DIGITAL.</h1>
              <p>Desenvolvemos experiências digitais estratégicas para marcas que desejam crescer, se destacar e conquistar seu espaço na internet.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#orcamento">Solicitar orçamento <ArrowUpRight size={17} /></a>
                <a className="button button-ghost" href="#portfolio"><span className="play-icon"><ArrowDownRight size={14} /></span> Explorar projetos</a>
              </div>
            </motion.div>
            <motion.div className="hero-side-note" initial={shouldReduceMotion ? false : { opacity: 0 }} animate={shouldReduceMotion ? undefined : { opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
              <span className="side-line" />
              <span>Estúdio digital<br />Bela Vista — MS</span>
            </motion.div>
            <a href="#manifesto" className="scroll-cue"><span className="scroll-mouse" /> Role para descobrir</a>
          </div>
          <div className="hero-orbit orbit-one" aria-hidden="true"><span /></div>
          <div className="hero-orbit orbit-two" aria-hidden="true"><span /></div>
        </section>

        <section id="manifesto" className="manifesto-section section-dark">
          <div className="container manifesto-layout">
            <motion.div {...animationProps} className="manifesto-copy">
              <SectionHeading eyebrow="Sobre a WEBPAGEART" title="Mais que um site. Uma" accent="presença digital." />
              <p>Somos uma agência de desenvolvimento web focada em entregar soluções digitais que impulsionam negócios, conectam marcas e geram resultados reais.</p>
              <a className="text-link" href="#contato">Conheça nossa abordagem <ArrowUpRight size={15} /></a>
            </motion.div>
            <motion.div {...animationProps} className="manifesto-visual">
              <div className="building-image" aria-label="Arquitetura moderna iluminada em azul" role="img" />
              <div className="visual-caption"><span>01</span><span>Estratégia que<br />se torna experiência</span></div>
              <div className="blue-cut" aria-hidden="true" />
            </motion.div>
            <motion.div {...animationProps} className="manifesto-points">
              {[
                ['01', 'Design exclusivo'],
                ['02', 'Desenvolvimento profissional'],
                ['03', 'Experiência do usuário'],
                ['04', 'Soluções personalizadas'],
                ['05', 'Suporte especializado'],
              ].map(([number, text]) => (
                <div className="manifesto-point" key={number}><span>{number}</span><b>{text}</b><ArrowUpRight size={14} /></div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="servicos" className="services-section section-dark section-lined">
          <div className="container">
            <motion.div {...animationProps} className="services-intro">
              <SectionHeading eyebrow="Nossos serviços" title="Soluções digitais para negócios que querem" accent="evoluir." />
              <p>Do conceito à entrega, oferecemos soluções completas para transformar sua ideia em um projeto de alto impacto.</p>
            </motion.div>
            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article key={service.title} className={`service-card ${index === 1 ? 'service-card-featured' : ''}`} {...(shouldReduceMotion ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { delay: index * 0.06, duration: 0.5 } })}>
                    <div className="service-card-top"><span className="service-index">0{index + 1}</span><Icon size={26} strokeWidth={1.45} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>{service.items.map((item) => <li key={item}><Check size={13} />{item}</li>)}</ul>
                    <div className="service-card-bottom"><strong>{service.price}</strong><a href="#orcamento" aria-label={`Solicitar orçamento para ${service.title}`}>Solicitar <ArrowUpRight size={14} /></a></div>
                  </motion.article>
                );
              })}
            </div>
            <p className="price-note">Os valores apresentados são iniciais. Projetos com funcionalidades adicionais ou requisitos específicos poderão receber orçamento personalizado.</p>
          </div>
        </section>

        <section id="portfolio" className="portfolio-section section-dark">
          <div className="container">
            <motion.div {...animationProps} className="portfolio-intro">
              <SectionHeading eyebrow="Portfólio" title="Projetos que materializam" accent="ideias." />
              <div><p>Alguns projetos que traduzem nossa forma de pensar, desenhar e construir experiências digitais.</p><a className="text-link" href="#contato">Fale sobre seu projeto <ArrowUpRight size={15} /></a></div>
            </motion.div>
            <div className="portfolio-grid">
              {projects.map((project, index) => (
                <motion.article className={`project-card project-card-${index + 1}`} key={project.name} {...(shouldReduceMotion ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: 0.6, delay: index * 0.08 } })}>
                  {project.isPrivate ? (
                    <div className="project-preview project-preview-private" role="img" aria-label={`${project.name}: projeto privado, acesso restrito ao clube`}>
                      <div className="private-project-art"><span className="private-lock"><LockKeyhole size={24} /></span><span className="private-grid-label">GRAJ / INTERNAL SYSTEM</span><strong>Projeto reservado</strong><small>O acesso é exclusivo<br />às pessoas do clube.</small></div>
                      <span className="private-status"><LockKeyhole size={14} /> Acesso restrito</span>
                    </div>
                  ) : (
                    <a href={project.url} target="_blank" rel="noreferrer" className="project-preview" aria-label={`Abrir projeto ${project.name}`}>
                      {project.image && <img src={project.image} alt={project.imageAlt ?? `Imagem do projeto ${project.name}`} loading="lazy" />}
                      <span className="preview-overlay"><ExternalLink size={18} /> Abrir projeto</span>
                    </a>
                  )}
                  <div className="project-info"><div><span className="project-number">0{index + 1}</span><h3>{project.name}</h3><p>{project.category}</p></div>{project.isPrivate ? <span className="project-private-label"><LockKeyhole size={14} /> Privado</span> : <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visualizar ${project.name}`}><ArrowUpRight size={18} /></a>}</div>
                  <p className="project-description">{project.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="process-section section-dark section-lined">
          <div className="container process-layout">
            <motion.div {...animationProps} className="process-intro"><SectionHeading eyebrow="Nosso processo" title="Da ideia à" accent="experiência digital." /><p>Um processo claro e eficiente para entregar o melhor resultado em cada projeto.</p></motion.div>
            <div className="process-steps">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return <motion.div className="process-step" key={step.number} {...(shouldReduceMotion ? {} : { initial: { opacity: 0, x: 16 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { delay: index * 0.1, duration: 0.55 } })}><div className="process-node"><span>{step.number}</span><Icon size={16} /></div><h3>{step.title}</h3><p>{step.text}</p></motion.div>;
              })}
            </div>
          </div>
        </section>

        <section id="contato" className="contact-section section-dark">
          <div className="container contact-grid">
            <motion.div {...animationProps} className="contact-copy">
              <span className="eyebrow">Vamos conversar?</span>
              <h2>Seu próximo projeto<br />começa <span>aqui.</span></h2>
              <p>Solicite um orçamento sem compromisso e dê o primeiro passo para transformar sua ideia em realidade.</p>
              <div className="contact-location"><span><Smartphone size={16} /> Bela Vista — MS</span><span>Atendimento online em todo o Brasil</span></div>
            </motion.div>
            <motion.a {...animationProps} className="whatsapp-direct" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span className="whatsapp-icon"><MessageCircle size={24} /></span><span><small>Fale diretamente pelo WhatsApp</small><strong>(67) 99925-2257</strong></span><ArrowUpRight size={18} /></motion.a>
            <motion.div {...animationProps} id="orcamento" className="budget-card">
              <div className="budget-card-heading"><span className="eyebrow">Orçamento</span><h3>Conte sobre sua ideia.</h3><p>Preencha os dados e fale com a gente.</p></div>
              <form onSubmit={handleBudgetSubmit}>
                <div className="form-row"><label><span>Nome completo *</span><input name="name" type="text" placeholder="Como podemos chamar você?" required /></label><label><span>WhatsApp *</span><input name="whatsapp" type="tel" placeholder="(67) 99999-9999" required /></label></div>
                <div className="form-row"><label><span>Empresa ou marca</span><input name="company" type="text" placeholder="Opcional" /></label><label><span>Serviço desejado *</span><select name="service" defaultValue="" required><option value="" disabled>Selecione uma opção</option>{services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}</select></label></div>
                <label><span>Faixa de investimento *</span><select name="budget" defaultValue="" required><option value="" disabled>Selecione uma faixa</option><option>Até R$ 1.000</option><option>R$ 1.000 a R$ 2.500</option><option>R$ 2.500 a R$ 4.000</option><option>Acima de R$ 4.000</option><option>Ainda não defini</option></select></label>
                <label><span>Descreva seu projeto *</span><textarea name="description" placeholder="Conte um pouco sobre o que você quer construir..." rows={4} required /></label>
                {formError && <p className="form-error" role="alert">{formError}</p>}
                <button className="button button-primary form-submit" type="submit">Enviar pelo WhatsApp <Send size={16} /></button>
                <p className="form-disclaimer">Ao enviar, você será direcionado para o WhatsApp comercial com a mensagem preenchida.</p>
              </form>
            </motion.div>
          </div>
        </section>

        <section className="commercial-section section-dark">
          <div className="container commercial-inner"><div><span className="eyebrow">Condições comerciais</span><h2>Transparência em<br /><span>cada etapa.</span></h2></div><div className="commercial-detail"><div className="payment-line"><strong>50%</strong><p>na aprovação e<br />início do projeto.</p></div><div className="payment-line"><strong>50%</strong><p>na entrega<br />do projeto.</p></div><p className="commercial-note">O escopo, os prazos e as condições específicas serão definidos na proposta comercial.</p></div></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main"><div className="footer-brand"><Logo light /><p>Design, tecnologia e experiências digitais.</p></div><div className="footer-links"><div><span>Navegue</span><a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#portfolio">Portfólio</a><a href="#processo">Processo</a></div><div><span>Contato</span><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a><a href="#contato">Bela Vista — MS</a><a href="mailto:contato@webpageart.com.br">E-mail</a></div></div><div className="footer-social"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a><a href="https://www.instagram.com/webpageart?xtok=ODk4bmxmazB6Ynk3" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a><a href="https://www.linkedin.com/in/luiz-gabriel-ramires-ba4198446?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a></div></div>
        <div className="container footer-bottom"><span>© 2026 WEBPAGEART. Todos os direitos reservados.</span><span>Feito para marcas que querem evoluir.</span></div>
      </footer>

      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Conversar no WhatsApp"><MessageCircle size={24} /></a>
    </div>
  );
}

export default App;
