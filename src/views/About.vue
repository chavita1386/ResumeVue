<template>
  <div class="about container">
    <h3 class="title">
      <img src="../assets/about.svg" class="icon icon--about" />About me
    </h3>
    <!-- eslint-disable-next-line -->
    <p class="about__text">I am a passionate Senior Web Developer with 7 years of experience, I've worked as back-end and front-end developer, for example I've developed Desktop and Web apps with .NET, Java, Go, PHP. I like to develop beautiful websites with a great UI/UX experience design using HTML, CSS (Sass), and Javascript (VanillaJS, Angular, VueJS, and litle React).</p>
    <!-- eslint-disable-next-line -->
    <!-- , in addition to development I like to watch movies and series(netflix), play videogames and exercise.     -->
    <h3 class="title">
      <img src="../assets/phonebook.svg" class="icon icon--data" />Personal data
    </h3>
    <div class="personal-data">
      <div class="info info--age">
        <span class="info__title">Age:</span>
        <span class="info__data">32 years</span>
      </div>
      <div class="info info--address">
        <span class="info__title">Address:</span>
        <span class="info__data">Aguascalientes, México</span>
      </div>
      <div class="info info--email">
        <span class="info__title">Email:</span>
        <span class="info__data">
          <a href="mailto:srochar86@hotmail.com" class="info__link">
            srochar86@hotmail.com
          </a>
        </span>
      </div>
      <div class="info info--phone">
        <span class="info__title">Phone:</span>
        <span class="info__data">(044) 449 124 8400</span>
      </div>
    </div>
    <h3 class="title">
      <img src="../assets/hobbies.svg" class="icon icon--hobbies" />Hobbies
    </h3>
    <div class="hobbies">
      <div class="hobbie">
        <img src="../assets/game.svg" alt="Videogames" class="hobbie__icon">
        <h4 class="hobbie__title">Videogames</h4>
        <p class="hobbie__examples">God of war, Halo, Gears of War</p>
      </div>
      <div class="hobbie">
        <img src="../assets/book.svg" alt="" class="hobbie__icon">
        <h4 class="hobbie__title">Books</h4>
        <p class="hobbie__examples">
          The Analyst by John Katzenbach Clean Code by Robert C. Martin
        </p>
      </div>
      <div class="hobbie">
        <img src="../assets/movies.svg" alt="" class="hobbie__icon">
        <h4 class="hobbie__title">Movies</h4>
        <p class="hobbie__examples">Action, Terror, Drama, Comedy...</p>
      </div>
      <div class="hobbie">
        <img src="../assets/coder.svg" alt="" class="hobbie__icon">
        <h4 class="hobbie__title">Coder</h4>
        <p class="hobbie__examples">Go, VueJs, Sass...</p>
      </div>
    </div>
  </div>
</template>
