/**
* Template Name: Avilon
* Template URL: https://bootstrapmade.com/avilon-bootstrap-landing-page-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });
  fetch('https://raw.githubusercontent.com/dcat727/dcat727.github.io/main/kuvat.json')
  .then(response => response.json())
  .then(data => {
    const carouselInner = document.querySelector('.carousel-inner');
    const indicators = document.querySelector('.carousel-indicators');

    data.forEach((item, index) => {
      // Karuselli-item
      const div = document.createElement('div');
      div.className = 'carousel-item' + (index === 0 ? ' active' : '');
      div.innerHTML = `
        <img src="${item.src}" class="d-block w-100" alt="${item.alt}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${item.title}</h5>
          <p>${item.caption}</p>
        </div>
      `;
      carouselInner.appendChild(div);

      // Indikaattori
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('data-bs-target', '#portfolioCarousel');
      button.setAttribute('data-bs-slide-to', index);
      button.setAttribute('aria-label', `Slide ${index + 1}`);
      if (index === 0) {
        button.classList.add('active');
        button.setAttribute('aria-current', 'true');
      }
      indicators.appendChild(button);
    });
  })
  .catch(error => console.error('JSON-haku epäonnistui:', error));


  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });
  const descriptions = {
  web: "Suunnittelemme responsiivisia ja saavutettavia verkkosivustoja, jotka tukevat brändiäsi ja tarjoavat erinomaisen käyttäjäkokemuksen.Verkkosuunnittelu on paljon enemmän kuin visuaalinen ilme – se on kokonaisvaltainen prosessi, jossa yhdistyvät käytettävyys, saavutettavuus, tekninen toimivuus ja brändin viestintä. Suunnittelemme responsiivisia sivustoja, jotka mukautuvat eri laitteille ja tarjoavat selkeän, intuitiivisen käyttökokemuksen. Jokainen sivusto rakennetaan asiakkaan tavoitteiden pohjalta, olipa kyse informaation jakamisesta, myynnin kasvattamisesta tai asiakaspalvelun tehostamisesta. Hyödynnämme moderneja teknologioita kuten HTML5, CSS3 ja Bootstrap, ja varmistamme että lopputulos on sekä visuaalisesti vaikuttava että teknisesti kestävä",
  dev: "Ohjelmistokehityspalvelumme keskittyy modernien, skaalautuvien ja käyttäjäystävällisten web-sovellusten rakentamiseen, jotka tukevat liiketoimintasi tavoitteita. Hyödynnämme teknologioita kuten HTML5, CSS3, JavaScript ja Bootstrap, ja integroimme tarvittaessa ulkoista dataa JSON-muodossa, jotta ratkaisut ovat älykkäitä ja joustavia. Kehitysprosessimme perustuu ketterään työskentelyyn, jossa asiakas osallistuu suunnitteluun ja testaukseen alusta alkaen. Lopputuloksena syntyy teknisesti toimiva, visuaalisesti eheä ja saavutettava sovellus, joka toimii saumattomasti eri laitteilla ja käyttöympäristöissä.",
  pm: "Tuotteen hallinta on strateginen prosessi, jossa yhdistetään käyttäjien tarpeet, tekniset mahdollisuudet ja liiketoiminnan tavoitteet yhdeksi selkeäksi ja toteuttamiskelpoiseksi suunnitelmaksi. Palvelumme kattaa koko tuotteen elinkaaren ideoinnista lanseeraukseen ja jatkuvaan kehitykseen, varmistaen että ratkaisu vastaa markkinoiden vaatimuksiin ja tuottaa arvoa käyttäjille. Hyödynnämme ketteriä menetelmiä, datalähtöistä päätöksentekoa ja tiivistä yhteistyötä sidosryhmien kanssa, jotta tuote pysyy relevanttina ja kilpailukykyisenä. Lopputuloksena syntyy digitaalisia ratkaisuja, jotka eivät vain toimi – vaan myös kehittyvät käyttäjien mukana.",
  design: "Graafinen suunnittelu on visuaalisen viestinnän ydin, jossa typografia, värit, muodot ja sommittelu yhdistyvät vaikuttavaksi kokonaisuudeksi. Palvelumme kattaa kaiken brändi-ilmeen suunnittelusta kampanjamateriaaleihin ja käyttöliittymien visuaaliseen muotoiluun. Suunnittelemme selkeitä, erottuvia ja tarkoituksenmukaisia visuaaleja, jotka tukevat viestin sisältöä ja vahvistavat käyttäjäkokemusta. Käytämme Adobe Illustratorin edistyneitä työkaluja, kuten Opacity Mask, Clipping Mask ja tekstuuriefektejä, jotta jokainen toteutus on sekä teknisesti viimeistelty että visuaalisesti mieleenpainuva.",
  marketing: "Markkinointipalvelumme yhdistää strategisen suunnittelun, sisällöntuotannon ja datalähtöisen analytiikan tulokselliseksi kokonaisuudeksi, joka tavoittaa oikeat ihmiset oikeaan aikaan. Rakennamme kampanjoita, jotka tukevat brändiäsi ja ohjaavat käyttäjiä kohti haluttua toimintaa – olipa kyse verkkosivuvierailusta, yhteydenotosta tai ostosta. Hyödynnämme digitaalisia kanavia, hakukoneoptimointia (SEO), sosiaalisen median sisältöjä ja kohdennettua mainontaa, jotta viestisi erottuu ja vaikuttaa. Jokainen markkinointitoimenpide perustuu mitattaviin tavoitteisiin ja jatkuvaan optimointiin, jotta saat parhaan mahdollisen tuoton investoinnillesi."
};

document.querySelectorAll('#service-list a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const key = this.getAttribute('data-service');
    const box = document.getElementById('service-description');
    box.innerHTML = `<p>${descriptions[key]}</p>`;
  });
});


  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();