import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <a class="skip" href="#main">К содержанию</a>

  <header class="site-header" data-reveal>
    <a class="brand-nav" href="#top" aria-label="На главную">
      <img src="/images/logo.jpg" alt="" width="40" height="40" />
      <span>Студия Махновского</span>
    </a>
    <nav class="nav" aria-label="Основное">
      <a href="#directions">Услуги</a>
      <a href="#catalog">Каталог</a>
      <a href="#order">Заказ</a>
      <a href="#contacts">Контакты</a>
    </nav>
    <a class="nav-cta" href="#order">Заказать</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Меню">
      <span></span><span></span>
    </button>
  </header>

  <div class="mobile-nav" id="mobile-nav" hidden>
    <a href="#directions">Услуги</a>
    <a href="#catalog">Каталог</a>
    <a href="#order">Заказ</a>
    <a href="#contacts">Контакты</a>
  </div>

  <main id="main">
    <section class="hero" id="top">
      <div class="hero__stage">
        <div class="hero__copy" data-reveal>
          <img
            class="hero__seal"
            src="/images/logo.jpg"
            width="220"
            height="220"
            alt="Студия Махновского — услуги и продукция, работаем для вас"
          />
          <h1 class="hero__title">Фото. Печать. На память.</h1>
          <p class="hero__lead">
            Съёмка, полиграфия, сувениры и реставрация в Оленегорске.
            С&nbsp;1996&nbsp;года.
          </p>
          <div class="hero__actions">
            <a class="btn btn--solid" href="#order">Заказать</a>
            <a class="btn btn--ghost" href="#catalog">Каталог</a>
          </div>
        </div>
        <figure class="hero__product" data-reveal data-delay="1">
          <img
            src="/images/hero-calendar.jpg"
            alt="Календарь трио с видами Оленегорска — печать студии Махновского"
            width="720"
            height="960"
          />
        </figure>
      </div>
    </section>

    <section class="directions" id="directions">
      <div class="section-head" data-reveal>
        <p class="eyebrow">Что делаем</p>
        <h2>Четыре направления</h2>
      </div>
      <ol class="lanes">
        <li class="lane" data-reveal>
          <div class="lane__text">
            <span class="lane__num">01</span>
            <h3>Съёмка</h3>
            <p>Портреты, семьи, события и природа Оленегорска</p>
          </div>
          <img src="/images/shoot.jpg" alt="Пример семейной съёмки" width="280" height="280" />
        </li>
        <li class="lane" data-reveal>
          <div class="lane__text">
            <span class="lane__num">02</span>
            <h3>Печать</h3>
            <p>Фотографии, постеры, холсты, визитки и документы</p>
          </div>
          <img src="/images/prints.jpg" alt="Готовые фотоотпечатки" width="280" height="280" />
        </li>
        <li class="lane" data-reveal>
          <div class="lane__text">
            <span class="lane__num">03</span>
            <h3>Сувениры</h3>
            <p>Кружки, магниты, календари и печать на заказ</p>
          </div>
          <img src="/images/mug.jpg" alt="Кружка с видом Оленегорска" width="280" height="280" />
        </li>
        <li class="lane" data-reveal>
          <div class="lane__text">
            <span class="lane__num">04</span>
            <h3>Реставрация</h3>
            <p>Восстановление старых фотографий и документов</p>
          </div>
          <img src="/images/restore.jpg" alt="Реставрация старого фото: до и после" width="280" height="280" />
        </li>
      </ol>
    </section>

    <section class="catalog" id="catalog">
      <div class="section-head section-head--light" data-reveal>
        <p class="eyebrow">Из мастерской</p>
        <h2>Каталог продукции</h2>
        <p class="section-note">То, что можно заказать и забрать на Парковой, 29</p>
      </div>
      <div class="catalog-grid" data-reveal>
        <article class="item item--wide">
          <img src="/images/calendar-trio.jpg" alt="Календарь трио" />
          <h3>Календарь трио</h3>
        </article>
        <article class="item">
          <img src="/images/mug.jpg" alt="Кружка Оленегорск" />
          <h3>Кружка</h3>
        </article>
        <article class="item">
          <img src="/images/plate.jpg" alt="Тарелка декоративная" />
          <h3>Тарелка</h3>
        </article>
        <article class="item">
          <img src="/images/magnets.jpg" alt="Магниты с Оленегорском" />
          <h3>Магниты</h3>
        </article>
        <article class="item">
          <img src="/images/puzzle.jpg" alt="Пазл на заказ" />
          <h3>Пазл</h3>
        </article>
        <article class="item">
          <img src="/images/desk-calendar.jpg" alt="Календарь настольный" />
          <h3>Настольный календарь</h3>
        </article>
        <article class="item">
          <img src="/images/pillow.jpg" alt="Подушка с печатью" />
          <h3>Подушка</h3>
        </article>
        <article class="item">
          <img src="/images/postcards.jpg" alt="Открытки" />
          <h3>Открытки</h3>
        </article>
        <article class="item">
          <img src="/images/badges.jpg" alt="Значки на заказ" />
          <h3>Значки</h3>
        </article>
      </div>
    </section>

    <section class="order" id="order">
      <div class="order__panel" data-reveal>
        <div class="order__intro">
          <p class="eyebrow">Как заказать</p>
          <h2>Пришлите фото или макет</h2>
          <p>
            Опишите задачу — съёмка, печать, сувенир или реставрация.
            Ответим в VK или по телефону и согласуем срок.
          </p>
          <ul class="order__facts">
            <li>Пн–Пт · по записи / в часы студии</li>
            <li>Бесплатная доставка по договорённости</li>
            <li>Оленегорск, ул. Парковая, 29</li>
          </ul>
        </div>
        <form class="order-form" id="order-form" novalidate>
          <label>
            <span>Имя</span>
            <input name="name" type="text" autocomplete="name" required placeholder="Как к вам обращаться" />
          </label>
          <label>
            <span>Телефон или VK</span>
            <input name="contact" type="text" required placeholder="+7 … или ссылка VK" />
          </label>
          <label>
            <span>Что нужно</span>
            <select name="type" required>
              <option value="" disabled selected>Выберите направление</option>
              <option>Съёмка</option>
              <option>Печать</option>
              <option>Сувениры</option>
              <option>Реставрация</option>
            </select>
          </label>
          <label>
            <span>Комментарий</span>
            <textarea name="message" rows="4" placeholder="Формат, тираж, срок…"></textarea>
          </label>
          <label class="file-field">
            <span>Файл / макет (необязательно)</span>
            <input name="file" type="file" accept="image/*,.pdf,.zip" />
          </label>
          <button class="btn btn--navy" type="submit">Отправить заявку</button>
          <p class="form-hint" id="form-hint" role="status" aria-live="polite"></p>
          <p class="form-alt">
            Или напишите в
            <a href="https://vk.ru/fsm_ol" target="_blank" rel="noopener">VK</a>
            /
            <a href="tel:+79211715123">8&nbsp;921&nbsp;171-51-23</a>
          </p>
        </form>
      </div>
    </section>

    <section class="contacts" id="contacts" data-reveal>
      <div class="contacts__grid">
        <div>
          <p class="eyebrow">Контакты</p>
          <h2>Ждём в студии</h2>
          <address>
            <p>
              <a href="https://yandex.ru/maps/?text=Оленегорск%20Парковая%2029">
                ул. Парковая, д.&nbsp;29, Оленегорск
              </a>
            </p>
            <p><a href="tel:+79211715123">+7 (921) 171-51-23</a></p>
            <p><a href="mailto:photostudio-ms@yandex.ru">photostudio-ms@yandex.ru</a></p>
            <p><a href="https://vk.ru/fsm_ol" target="_blank" rel="noopener">vk.ru/fsm_ol</a></p>
          </address>
        </div>
        <div class="contacts__people">
          <p>Сергей Махновский — основатель</p>
          <p>Семён Махновский — фотограф, руководитель</p>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <img src="/images/logo.jpg" alt="" width="48" height="48" />
    <p>ФотоСтудия Махновского · Оленегорск</p>
  </footer>
`

const toggle = document.querySelector('.nav-toggle')
const mobileNav = document.querySelector('#mobile-nav')
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true'
  toggle.setAttribute('aria-expanded', String(!open))
  mobileNav.hidden = open
})

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false')
    mobileNav.hidden = true
  })
})

const form = document.querySelector('#order-form')
const hint = document.querySelector('#form-hint')
form?.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = new FormData(form)
  const name = String(data.get('name') || '').trim()
  const contact = String(data.get('contact') || '').trim()
  const type = String(data.get('type') || '').trim()
  const message = String(data.get('message') || '').trim()

  if (!name || !contact || !type) {
    hint.textContent = 'Заполните имя, контакт и направление.'
    return
  }

  const text = [
    'Здравствуйте! Заявка с сайта.',
    `Имя: ${name}`,
    `Контакт: ${contact}`,
    `Направление: ${type}`,
    message ? `Комментарий: ${message}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  const openDialog = () => {
    window.open('https://vk.me/fsm_ol', '_blank', 'noopener')
  }

  if (navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        hint.textContent = 'Текст заявки скопирован — вставьте его в диалог VK.'
        openDialog()
      })
      .catch(() => {
        hint.textContent = 'Открываем VK. Напишите заявку вручную.'
        openDialog()
      })
  } else {
    hint.textContent = 'Открываем VK. Напишите заявку вручную.'
    openDialog()
  }
})

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (!reduceMotion) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
  )
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
} else {
  document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'))
}

const header = document.querySelector('.site-header')
const onScroll = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24)
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()
