<template>
  <head name="theme-color" content="#712cf9">
  <!-- Favicons -->
  <link href="https://getbootstrap.com/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

  <link rel="apple-touch-icon" href="https://getbootstrap.com/docs/5.2/assets/img/favicons/apple-touch-icon.png"
        sizes="180x180">
  <link rel="manifest" href="https://getbootstrap.com/docs/5.2/assets/img/favicons/manifest.json">
  <link rel="mask-icon" href="https://getbootstrap.com/docs/5.2/assets/img/favicons/safari-pinned-tab.svg"
        color="#712cf9">
  <!-- <link rel="icon" href="https://getbootstrap.com/docs/5.2/assets/img/favicons/favicon.ico"> -->
  </head>

    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 font-weight-normal">АВАНГАРД NEWS, ТОВ</h1>
          <div class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://th.bing.com/th/id/OIG.fe.lyBhTYmJjcCxdlzTG?pid=ImgGn" alt="Зображення 1" class="d-block w-100">
              </div>
              <div class="carousel-item">
                <img src="https://th.bing.com/th/id/OIG.TdirCYBsbFEkIY71SuTU?pid=ImgGn" alt="Зображення 2" class="d-block w-100">
              </div>
              <div class="carousel-item">
                <img src="https://th.bing.com/th/id/OIG.IR7o4xJHrbxOQt45JcJV?pid=ImgGn" alt="Зображення 3" class="d-block w-100">
              </div>
              <div class="carousel-item">
                <img src="https://th.bing.com/th/id/OIG.QjTr2nSZFGpUqpMyaUND?pid=ImgGn" alt="Зображення 4" class="d-block w-100">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Попередній слайд</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Наступний слайд</span>
            </button>
          </div>
        </div>
      </div>

  </template>

  <script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';
    import '../assets/block.css';

    export default {
      name: "Home"
    ,
  mounted() {
    // Активація каруселі
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
      interval: 3000, // Інтервал переключення слайдів (у мілісекундах)
      wrap: true, // Переключення на початок після останнього слайда
    });
  },
  };
  </script>
<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn.btn-lg.btn-secondary.fw-bold.border-white.bg-white {
  color: rgba(239, 237, 237, 0.97);
}

.nav-link.fw-bold.py-1.px-0 {
  color: white;
}

.nav-link.fw-bold.py-1.px-0 {
  color: white;
  margin-right: 31px;
}

main.px-3 h1 {
  margin-top: 165px;
}

.display-4.font-weight-normal {
  color: #ffffff;
  text-shadow: 2px 2px 4px #cebcbc;
}

.lead.font-weight-normal {
  color: #ffffff;
  text-shadow: 2px 2px 4px #f1e6e6;
}



.btn-outline-secondary {
  --bs-btn-color: #f8f8f8;
  --bs-btn-border-color: #ebedee;
}

.container.main-screen {
  position: relative;
  background-image: url("../assets/cat.png");
  background-position-Y: -56px;
  background-position-x: right;
  background-size: 500px 700px;
  background-repeat: no-repeat;
  height: 452px;
}

p.hometext {
  margin-top: 33px;
  text-align: left;
}

.border {
  border: var(--bs-border-width) var(--bs-border-style) #212529 !important;
}

span.headline {
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

a.rowItem p {
  color: white;
  padding-top: 2px;
}

#dropdown04 {
  color: white;
  margin-top: -4px;
  font-size: 16px;
  font-weight: 700;
  margin-right: 8px;
  margin-left: -8px;
}

.btn-outline-secondary {
  --bs-btn-hover-bg: #0086fe00;
}
.callUs {
  color: #fbfbfb;
  background-color: #f0ffff00;
  border: #f0ffff00;
}
</style>
