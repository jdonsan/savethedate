<template>
  <section class="my-cover">
    <div class="my-cover-container">
      <div class="my-cover-picture"></div>
      <div class="my-cover-content">
        <img src="@/assets/img/curva-1.png" alt="curva" />
        <div class="my-cover-content-container">
          <h2 class="my-cover-save-the-date">Save the Date</h2>

          <div class="my-cover-names-container">
            <h1 class="my-cover-names">
              <span>Pilar</span>
              <span class="circle">&</span>
              <span>Borja</span>
            </h1>
            <p>¡Nos casamos!</p>
          </div>

          <h3 class="my-cover-date">
            <span class="text">Sábado</span>
            <span class="number">12</span>
            <span class="text">Septiembre</span>
          </h3>

          <h4>Finca Montealvar, Valdeluz</h4>

          <a
            href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Nm9vM2dkcjNjY3MzNGI5aWNoaDM2YjlrY2RnajJiOW83MWkzNGI5ZzZsaWphYzlqY2hoM2FkYjM2cyBmYW1pbHkxNjAxODczMzIwODc1ODUxNjQ5M0Bn&tmsrc=family16018733208758516493%40group.calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar fecha
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyCover'
}
</script>

<style lang="scss" scoped>
.my-cover {
  text-align: center;

  &-container {
    margin: 0 auto;
  }

  &-picture {
    width: 100%;
    max-width: 768px;
    height: 100vh;
    background-image: url('@/assets/img/bg.webp');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: fixed;
  }

  &-content {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 768px;

    &-container {
      padding-bottom: 32px;
      background-color: $color-5;
    }
  }

  &-save-the-date {
    margin-bottom: 10px;
    font-size: 28px;
    color: $color-3;
    font-family: $font-2;
    font-weight: $weight-font-light;
    padding: 10px;
    margin-top: -1px;
  }

  &-names-container {
    margin: 16px 0 32px;
  }

  &-names {
    color: $color-1;
    font-family: $font-1;
    font-weight: $weight-font-bold;
    font-size: 42px;

    .circle {
      position: relative;
      font-family: $font-1;
      background: $color-2;
      font-weight: $weight-font-regular;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      font-size: 32px;
      color: #fff;
      margin: 0 4px;
    }
  }

  p {
    font-size: 20px;
    margin: 2px 0 0;
    font-family: $font-2;
    font-weight: $weight-font-light;
    color: $color-3;
  }

  h4 {
    font-family: $font-2;
    font-weight: $weight-font-light;
    text-align: center;
    font-size: 16px;
    color: $color-3;
    margin-bottom: 16px;
  }

  &-date {
    font-family: $font-2;
    font-weight: $weight-font-regular;
    font-size: 20px;
    color: $color-2;
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      display: inline-block;
      margin: 0 10px;
      padding: 4px 8px;
      border-top: 1px solid $color-2;
      border-bottom: 1px solid $color-2;
    }

    .number {
      font-size: 48px;
      font-weight: $weight-font-bold;
      color: $color-1;
    }
  }

  a {
    min-width: 200px;
    border: 0;
    display: inline-block;
    background: $color-2;
    color: $color-5;
    font-family: $font-2;
    font-weight: $weight-font-regular;
    padding: 1rem;
    border-radius: 5rem;
    margin: 0.5rem;
    text-decoration: none;
  }
}
</style>
