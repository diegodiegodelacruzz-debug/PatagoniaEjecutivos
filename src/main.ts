import './style.css'

const WA = '5491161593888'
const phone = 'tel:+541149121001'
const email = 'reservas@patagoniatransfer.com.ar'

const photos = {
  hero: '/images/sentra.jpg',
  sedan: '/images/corolla.jpg',
  premium: '/images/sentra.jpg',
  van: '/images/mercedes-vans.jpg',
}

const services = [
  ['01', 'Traslados ejecutivos', 'Movilidad privada para directivos, profesionales y pasajeros que valoran su tiempo.'],
  ['02', 'Aeropuertos', 'Recepción y traslados desde y hacia Ezeiza y Aeroparque, con coordinación de horarios.'],
  ['03', 'Empresas y corporaciones', 'Soluciones de transporte para reuniones, visitas comerciales, personal y operaciones empresariales.'],
  ['04', 'Viajes al interior', 'Traslados de larga distancia con planificación, comodidad y atención personalizada.'],
  ['05', 'Eventos y ocasiones especiales', 'Movilidad para congresos, reuniones, celebraciones y acontecimientos privados.'],
  ['06', 'Servicios VIP y privados', 'Una experiencia de traslado discreta, confortable y adaptada a cada necesidad.'],
  ['07', 'Traslados grupales', 'Coordinación de viajes para grupos, equipos de trabajo y delegaciones.'],
  ['08', 'Hoteles y turismo', 'Conexiones con hoteles, destinos turísticos y recorridos privados.'],
]

const clients = [
  ['Raízen', 'raizen.svg'],
  ['Shell', 'shell.png'],
  ['Farmacity', 'farmacity.png'],
  ['Citibank', 'citibank.png'],
  ['Supervielle', 'supervielle.png'],

]

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="announcement">
    <span class="announcement-dot"></span>
    SERVICIO Y COORDINACIÓN LAS 24 HORAS
    <span class="announcement-divider"></span>
    BUENOS AIRES · ARGENTINA
  </div>

  <div class="brand-stage">
    <img class="brand-logo image-open" src="/images/loggo.jpg" alt="Patagonia Transfer" />
  </div>

  <header class="site-header">
    <a class="header-signature" href="#inicio">
      <span class="signature-mark">PT</span>
      <span><strong>PATAGONIA</strong><small>TRANSFER · EXECUTIVE MOBILITY</small></span>
    </a>
    <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">
      <span></span><span></span>
    </button>
    <nav class="main-nav">
      <a href="#servicios">Servicios</a>
      <a href="#experiencia">Experiencia</a>
      <a href="#flota">Flota</a>
      <a href="#empresas">Empresas</a>
      <a href="#contacto">Contacto</a>
      <a class="nav-reserve" href="https://wa.me/${WA}?text=${encodeURIComponent('Hola, quisiera solicitar información sobre un traslado ejecutivo.')}" target="_blank" rel="noopener">Solicitar traslado <span>↗</span></a>
    </nav>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-image" role="img" aria-label="Automóvil ejecutivo negro de alta gama"></div>
      <div class="hero-shade"></div>
      <div class="hero-content">
        <div class="eyebrow eyebrow-light"><span></span> MOVILIDAD EJECUTIVA · SERVICIO PREMIUM</div>
        <h1>El viaje es parte<br>de <em>su destino.</em></h1>
        <p>Traslados ejecutivos, corporativos y privados. Una experiencia de movilidad pensada alrededor de su tiempo, su comodidad y su tranquilidad.</p>
        <div class="hero-actions">
          <a class="button-gold" href="https://wa.me/${WA}?text=${encodeURIComponent('Hola, quisiera cotizar un traslado con Patagonia Transfer.')}" target="_blank" rel="noopener">Cotizar un traslado <span>↗</span></a>
          <a class="hero-link" href="#servicios">Descubrir servicios <span>↓</span></a>
        </div>
      </div>
      <div class="hero-bottom">
        <span>BUENOS AIRES · ARGENTINA</span>
        <span class="hero-bottom-center">PATAGONIA TRANSFER</span>
        <span>DISPONIBILIDAD 24/7</span>
      </div>
      <div class="hero-index">01 <span>/</span> 04</div>
    </section>

    <section class="intro-section section-pad" id="experiencia">
      <div class="intro-kicker"><span>01</span> UNA FORMA SUPERIOR DE VIAJAR</div>
      <div class="intro-layout">
        <h2>Más que un traslado.<br><em>Una experiencia.</em></h2>
        <div class="intro-copy">
          <p class="intro-lead">En Patagonia Transfer entendemos que cada viaje tiene un propósito.</p>
          <p>Por eso ofrecemos soluciones de transporte ejecutivo y privado con atención personalizada, coordinación profesional y una mirada puesta en cada detalle. Desde un traslado al aeropuerto hasta la movilidad integral de una empresa.</p>
          <a class="text-link" href="#contacto">Conozca nuestra propuesta <span>↗</span></a>
        </div>
      </div>
      <div class="experience-stats">
        <div><strong>24<span>/7</span></strong><small>ATENCIÓN Y COORDINACIÓN</small><p>Disponibilidad permanente para organizar cada traslado.</p></div>
        <div><strong>365</strong><small>DÍAS DEL AÑO</small><p>Movilidad ejecutiva durante todo el año.</p></div>
      </div>
    </section>

    <section class="services-section section-pad" id="servicios">
      <div class="section-heading">
        <div class="intro-kicker"><span>02</span> SOLUCIONES DE MOVILIDAD</div>
        <div class="heading-layout">
          <h2>Un servicio para<br><em>cada destino.</em></h2>
          <p>Movilidad flexible para personas, empresas y organizaciones. Coordinamos cada recorrido según sus necesidades.</p>
        </div>
      </div>
      <div class="services-list">
        ${services.map(([number, title, description]) => `
          <div class="service-row">
            <span class="service-number">${number}</span>
            <span class="service-title">${title}</span>
            <span class="service-description">${description}</span>
            <a class="service-arrow" href="https://wa.me/${WA}?text=${encodeURIComponent(`Hola, quisiera consultar por el servicio de ${title} de Patagonia Transfer.`)}" target="_blank" rel="noopener" aria-label="Consultar por ${title} en WhatsApp">↗</a>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="airport-section">
      <div class="airport-photo"></div>
      <div class="airport-content">
        <div class="eyebrow eyebrow-light"><span></span> AEROPUERTOS · TRASLADOS PRIVADOS</div>
        <h2>Su llegada.<br><em>Nuestra atención.</em></h2>
        <p>Coordinamos traslados hacia y desde Aeropuerto Internacional de Ezeiza y Aeroparque Jorge Newbery. Planificación, puntualidad y atención personalizada desde el primer contacto.</p>
        <div class="airport-tags"><span>EZEIZA</span><span>AEROPARQUE</span><span>VUELOS NACIONALES E INTERNACIONALES</span></div>
        <a class="button-gold" href="https://wa.me/${WA}?text=${encodeURIComponent('Hola, necesito cotizar un traslado al aeropuerto.')}" target="_blank" rel="noopener">Coordinar aeropuerto <span>↗</span></a>
      </div>
    </section>

    <section class="fleet-section section-pad" id="flota">
      <div class="section-heading">
        <div class="intro-kicker"><span>03</span> CONFORT EN CADA RECORRIDO</div>
        <div class="heading-layout">
          <h2>El viaje merece<br><em>el vehículo ideal.</em></h2>
          <p>Distintas alternativas de movilidad para acompañar cada tipo de traslado. Consultá disponibilidad y configuración al reservar.</p>
        </div>
      </div>
      <div class="fleet-grid">
        <article class="fleet-card fleet-large">
          <div class="fleet-image-wrap"><img src="${photos.sedan}" alt="Toyota Corolla ejecutivo" loading="lazy" class="image-open"></div>
          <div class="fleet-meta"><span>01 / CATEGORÍA EJECUTIVA</span><span>↗</span></div>
          <h3>Sedanes ejecutivos</h3>
          <p>Una alternativa elegante para reuniones, traslados individuales y viajes corporativos.</p>
        </article>

        <article class="fleet-card">
          <div class="fleet-image-wrap"><img src="${photos.premium}" alt="Nissan Sentra premium" loading="lazy" class="image-open"></div>
          <div class="fleet-meta"><span>02 / CATEGORÍA PREMIUM</span><span>↗</span></div>
          <h3>Vehículos premium</h3>
          <p>Una experiencia diferencial para servicios VIP.</p>
        </article>
        <article class="fleet-card">
          <div class="fleet-image-wrap"><img src="${photos.van}" alt="Mercedes-Benz Sprinter pasajeros" loading="lazy" class="image-open"></div>
          <div class="fleet-meta"><span>03 / CATEGORÍA GRUPAL</span><span>↗</span></div>
          <h3>Vans y grupales</h3>
          <p>Espacio y comodidad para grupos, equipos y traslados coordinados.</p>
        </article>
      </div>
      <p class="fleet-note">Las fotografías son ilustrativas y no representan necesariamente las unidades disponibles de la empresa. Consultar flota y disponibilidad.</p>
    </section>

    <section class="corporate-section">
      <div class="corporate-copy">
        <div class="intro-kicker intro-kicker-light"><span>04</span> MOVILIDAD PARA ORGANIZACIONES</div>
        <h2>Su empresa<br>en <em>movimiento.</em></h2>
        <p>Desarrollamos soluciones de traslado para empresas que necesitan una operación confiable, flexible y coordinada. Atención para reuniones, visitas, equipos de trabajo, eventos y viajes corporativos.</p>
        <a class="button-gold" href="https://wa.me/${WA}?text=${encodeURIComponent('Hola, represento a una empresa y quisiera consultar por soluciones de transporte corporativo.')}" target="_blank" rel="noopener">Consultar servicio corporativo <span>↗</span></a>
      </div>
      <div class="corporate-image"></div>
    </section>

    <section class="clients-section section-pad" id="empresas">
      <div class="clients-heading">
        <div class="intro-kicker"><span>05</span> VÍNCULOS Y CONFIANZA</div>
        <h2>Empresas que<br><em>nos eligen.</em></h2>
        <p>Organizaciones con las que compartimos experiencias de trabajo y servicio.</p>
      </div>
      <div class="clients-grid">
        ${clients.map(([name, file]) => `
          <div class="client-logo">
            <img src="/images/clientes/${file}" alt="${name}" loading="lazy">
          </div>
        `).join('')}
      </div>
      <p class="clients-note">Marcas y organizaciones presentadas como referencias institucionales. Sus logotipos pertenecen a sus respectivos titulares.</p>
    </section>

    <section class="quote-section" id="contacto">
      <div class="quote-left">
        <div class="eyebrow eyebrow-light"><span></span> RESERVAS Y CONSULTAS</div>
        <h2>Su próximo viaje<br>comienza <em>aquí.</em></h2>
        <p>Contanos qué traslado necesitás. Nuestro equipo puede ayudarte a coordinar los detalles.</p>
        <div class="contact-details">
          <a href="${phone}"><small>TELÉFONO</small><strong>011 4912-1001</strong></a>
          <a href="https://wa.me/${WA}" target="_blank" rel="noopener"><small>WHATSAPP</small><strong>11 6159-3888</strong></a>
          <a href="mailto:${email}"><small>CORREO ELECTRÓNICO</small><strong>${email}</strong></a>
          <div><small>UBICACIÓN</small><strong>Guaraní 26 · Parque Patricios · CABA</strong></div>
        </div>
      </div>
      <form class="quote-form">
        <div class="form-heading"><span>FORMULARIO DE CONSULTA</span><span>01 — 05</span></div>
        <label>Nombre y apellido<input name="nombre" type="text" placeholder="Cómo te llamás" required></label>
        <div class="form-row">
          <label>Tipo de servicio
            <select name="servicio" required>
              <option value="">Seleccionar</option>
              <option>Traslado ejecutivo</option>
              <option>Aeropuerto Ezeiza</option>
              <option>Aeroparque</option>
              <option>Traslado corporativo</option>
              <option>Viaje al interior</option>
              <option>Traslado grupal</option>
              <option>Otro servicio</option>
            </select>
          </label>
          <label>Fecha estimada<input name="fecha" type="date"></label>
        </div>
        <div class="form-row">
          <label>Origen<input name="origen" type="text" placeholder="Lugar de salida"></label>
          <label>Destino<input name="destino" type="text" placeholder="Lugar de llegada"></label>
        </div>
        <label>Detalles del viaje<textarea name="mensaje" rows="3" placeholder="Horario, pasajeros, equipaje u otra información"></textarea></label>
        <button class="button-gold form-submit" type="submit">Enviar consulta por WhatsApp <span>↗</span></button>
        <p class="form-privacy">Al enviar, se abrirá WhatsApp con los datos de tu consulta para que puedas confirmarlos.</p>
      </form>
    </section>

    <section class="map-section">
      <div class="map-info">
        <div class="intro-kicker"><span>06</span> NUESTRA BASE</div>
        <h2>Estamos<br><em>cerca.</em></h2>
        <p>Guaraní 26, Parque Patricios, Ciudad Autónoma de Buenos Aires, Argentina.</p>
        <a class="text-link" href="https://www.google.com/maps/search/?api=1&query=Guarani+26+Parque+Patricios+Buenos+Aires" target="_blank" rel="noopener">Cómo llegar <span>↗</span></a>
      </div>
      <iframe title="Ubicación de Patagonia Transfer" src="https://www.google.com/maps?q=Guarani+26+Parque+Patricios+Buenos+Aires&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand">
        <span class="signature-mark">PT</span>
        <div><strong>PATAGONIA TRANSFER</strong><small>EXECUTIVE MOBILITY</small></div>
      </div>
      <p>Movilidad ejecutiva.<br>Atención en cada detalle.</p>
      <a class="footer-wa" href="https://wa.me/${WA}" target="_blank" rel="noopener">Hablemos por WhatsApp ↗</a>
    </div>
    
    <a class="instagram-feature" href="https://www.instagram.com/grupotransfers" target="_blank" rel="noopener">
      <span class="instagram-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
        </svg>
      </span>
      <span class="instagram-copy">
        <small>SEGUINOS EN INSTAGRAM</small>
        <strong>@grupotransfers</strong>
      </span>
      <span class="instagram-arrow">↗</span>
    </a>

    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} PATAGONIA TRANSFER</span>
      <span>GUARANÍ 26 · PARQUE PATRICIOS · CABA</span>
      <span>UNA MARCA DE GRUPO TRANSFERS</span>
    
      
    </div>
  </footer>

  <a class="floating-wa" href="https://wa.me/${WA}?text=${encodeURIComponent('Hola, quisiera consultar por un traslado.')}" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
    <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.02 3C8.86 3 3.04 8.78 3.04 15.9c0 2.28.6 4.5 1.74 6.45L3 29l6.83-1.77a13.1 13.1 0 0 0 6.19 1.56h.01c7.15 0 12.97-5.79 12.97-12.9 0-3.45-1.35-6.7-3.8-9.14A12.9 12.9 0 0 0 16.02 3zm0 23.6h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.24-4.05 1.05 1.08-3.92-.26-.4a10.68 10.68 0 0 1-1.65-5.69c0-5.95 4.87-10.8 10.8-10.8 2.88 0 5.6 1.12 7.63 3.16a10.7 10.7 0 0 1 3.16 7.63c0 5.95-4.86 10.8-10.8 10.8zm5.93-8.1c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.61-1.9-1.8-2.22-.2-.32-.02-.5.14-.66.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.27-.63-.54-.54-.73-.55h-.62c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.68s1.16 3.1 1.32 3.31c.16.21 2.28 3.47 5.52 4.87.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.1 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38z"/></svg>
  </a>

  <div class="lightbox" aria-hidden="true">
    <button class="lightbox-close" aria-label="Cerrar imagen">×</button>
    <img src="" alt="">
  </div>
`

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
const nav = document.querySelector<HTMLElement>('.main-nav')

menuToggle?.addEventListener('click', () => {
  const open = nav?.classList.toggle('is-open') ?? false
  menuToggle.classList.toggle('is-active', open)
  menuToggle.setAttribute('aria-expanded', String(open))
})

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open')
    menuToggle?.classList.remove('is-active')
    menuToggle?.setAttribute('aria-expanded', 'false')
  })
})

document.querySelector<HTMLFormElement>('.quote-form')?.addEventListener('submit', event => {
  event.preventDefault()
  const form = event.currentTarget as HTMLFormElement
  const data = new FormData(form)
  const message = [
    'Hola, quiero solicitar un traslado con Patagonia Transfer.',
    '',
    `Nombre: ${data.get('nombre') || '-'}`,
    `Servicio: ${data.get('servicio') || '-'}`,
    `Fecha: ${data.get('fecha') || '-'}`,
    `Origen: ${data.get('origen') || '-'}`,
    `Destino: ${data.get('destino') || '-'}`,
    `Detalles: ${data.get('mensaje') || '-'}`,
  ].join('\n')
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(message)}`, '_blank', 'noopener')
})

const lightbox = document.querySelector<HTMLElement>('.lightbox')
const lightboxImage = lightbox?.querySelector<HTMLImageElement>('img')

document.querySelectorAll<HTMLImageElement>('.image-open').forEach(image => {
  image.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return
    lightboxImage.src = image.src
    lightboxImage.alt = image.alt
    lightbox.classList.add('is-open')
    lightbox.setAttribute('aria-hidden', 'false')
  })
})

const closeLightbox = () => {
  lightbox?.classList.remove('is-open')
  lightbox?.setAttribute('aria-hidden', 'true')
}

lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox)
lightbox?.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox()
})
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeLightbox()
})

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.service-row, .fleet-card, .clients-heading, .client-logo, .intro-layout, .experience-stats').forEach(element => {
  element.classList.add('reveal')
  revealObserver.observe(element)
})
