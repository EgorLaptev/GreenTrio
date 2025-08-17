<template>
  <footer class="footer swipe-up">
    <div class="footer__container container">
      <img src="/assets/icons/logo-text.svg" class="footer__brand" alt="">

      <div class="footer__columns">
        <div class="footer__column">
          <h3>Разделы</h3>
          <ul>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Плеер</a></li>
            <li><a href="#">Личный кабинет</a></li>
          </ul>
        </div>

        <div class="footer__column">
          <h3>Клиентам</h3>
          <ul>
            <li><a href="#">Вопросы — ответы</a></li>
            <li><a href="#">Доставка и оплата</a></li>
            <li><a href="#">Оферта</a></li>
            <li><a href="#">Гарантия качества</a></li>
            <li><a href="#">Обработка персональных данных</a></li>
          </ul>
        </div>

        <div class="footer__column">
          <h3>Сотрудничество</h3>
          <ul>
            <li><a href="#">Дистрибьюторам</a></li>
            <li><a href="#">Контрактное производство</a></li>
            <li><a href="#">Инфлюенсерам и блогерам</a></li>
            <li><a href="#">Партнёрская программа</a></li>
          </ul>
        </div>

        <div class="footer__column">
          <div class="footer__socials">
            <a href="#"><img src="/assets/icons/inst.svg" alt="Instagram"/></a>
            <a href="#"><img src="/assets/icons/tg.svg" alt="Telegram"/></a>
            <a href="#"><img src="/assets/icons/vk.svg" alt="VK"/></a>
            <a href="#"><img src="/assets/icons/spotify.svg" alt="Spotify"/></a>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__copyright">
          © 2023 Зелёный Треугольник<br>
          Любое использование либо копирование материалов или подборки материалов сайта, элементов дизайна и оформления
          допускается лишь с разрешения правообладателя и только со ссылкой на источник: <a href="https://greentrio.ru">greentrio.ru</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: transparent;
  color: #111;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;


  &__brand {
    width: 100%;
    object-fit: contain;
    padding-bottom: 80px;
  }

  &__columns {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 0 48px;
    font-family: Gilroy, sans-serif;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 24px;
    }
  }

  &__column {
    flex: 1;
    min-width: 200px;

    h3 {
      font-weight: 600;
      margin-bottom: 28px;
      font-size: 24px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 20px;
        font-weight: 300;

        a {
          color: #111;
          font-size: 20px;
          text-decoration: none;

          &:hover {
            //text-decoration: underline;
            color: #006622;
          }
        }
      }
    }
  }

  &__bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    font-size: 12px;
    color: #555;

    a {
      color: #006622;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__socials {
    padding-top: 24px;
    display: flex;
    justify-content: end;
    gap: 16px;

    img {
      width: 36px;
      height: 36px;
    }
  }

  &__copyright {
    padding-top: 32px;
    max-width: 500px;
    line-height: 1.4;
  }
}
</style>
