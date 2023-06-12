<template>
  <head name="theme-color" content="#712cf9">
  <link rel="apple-touch-icon" href="https://getbootstrap.com/docs/5.2/assets/img/favicons/apple-touch-icon.png"
        sizes="180x180">
  <link href="https://getbootstrap.com/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <link rel="manifest" href="https://getbootstrap.com/docs/5.2/assets/img/favicons/manifest.json">
  <link rel="mask-icon" href="https://getbootstrap.com/docs/5.2/assets/img/favicons/safari-pinned-tab.svg"
        color="#712cf9">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  </head>


    <div id="contact-card" class="fade-in-animation">
      <h2>Контакти</h2>
      <div class="contact-info">
        <i class="fas fa-building"></i>
        <p>Компанія: АВАНГАРД NEWS, ТОВ</p>
      </div>
      <div class="contact-info">
        <i class="fas fa-envelope"></i>
        <p>Email: info@avangardnews.com</p>
      </div>
      <div class="contact-info">
        <i class="fas fa-phone"></i>
        <p>Телефон: +380123456789</p>
      </div>
      <div class="about-us">
        <h3>Про компанію</h3>
        <p>
          АВАНГАРД NEWS, ТОВ є провідною компанією в галузі новинної інформації та медіа. Ми надаємо широкий спектр
          новинних послуг та контенту з різних сфер життя, включаючи політику, економіку, культуру, спорт та багато іншого.
          Наша мета - надавати своїм клієнтам найактуальнішу та достовірну інформацію у зручному форматі.
        </p>
        <p>
          Ми прагнемо до інновацій та завжди прагнемо до найвищих стандартів якості. Наша команда професіоналів забезпечує
          оперативне та об'єктивне висвітлення подій, що відбуваються в світі, і допомагає нашим читачам бути в курсі останніх
          новин.
        </p>
        <p>
          Будьте впевнені, що АВАНГАРД NEWS, ТОВ завжди прагне до найкращого, щоб задовольнити ваші потреби в інформації та
          допомогти вам розуміти світ навколо нас.
        </p>
      </div>
    </div>
  </template>

  <style>
    /* Стилі для контактної картки залишаються незмінними */
    #contact-card {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    #contact-card.show {
      opacity: 1;
      transform: translateY(0);
    }

    #contact-card h2 {
      font-size: 24px;
      color: #333;
      text-align: center;
      margin-bottom: 20px;
    }

    #contact-card .contact-info {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    #contact-card .contact-info i {
      margin-right: 10px;
      color: #8e44ad;
    }

    #contact-card p {
      font-size: 16px;
      color: #555;
      line-height: 1.5;
      margin-bottom: 10px;
    }

    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .fade-in-animation {
      animation: fade-in 0.5s ease-in-out;
    }
    .about-us {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .about-us h3 {
      font-size: 24px;
      color: #8e44ad;
      text-align: center;
      margin-bottom: 20px;
    }

    .about-us p {
      font-size: 18px;
      color: #555;
      line-height: 1.5;
      text-align: justify;
    }
  </style>

  <script setup>
    /* Скрипт для анімації залишається незмінним */
    import { onMounted } from 'vue';

    onMounted(() => {
      const contactCard = document.getElementById('contact-card');
      contactCard.classList.add('show');
    });
  </script>