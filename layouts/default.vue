<template>
  <AwesomeHeader />
  <AwesomeNavbar />
  <div class="container">
    <main>
      <slot />
    </main>
    <aside>
      <h3>Sidebar</h3>
      <hr />
      <h4>What is this website?</h4>
      <h5>Awesome title 5</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
        explicabo vero commodi hic voluptates dignissimos non maxime, sunt enim
        architecto doloribus, minima nobis nemo. Numquam maiores aliquid itaque
        dolor aliquam!
      </p>
      <hr />
      <h5>Awesome title 5</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
        explicabo vero commodi hic voluptates dignissimos non maxime, sunt enim
        architecto doloribus, minima nobis nemo. Numquam maiores aliquid itaque
        dolor aliquam!
      </p>
      <p>Random text to conclude.</p>
    </aside>
  </div>
  <AwesomeFooter />
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

main {
  flex: 3;
  margin-right: 20px;
}

aside {
  flex: 1;
}

/* On screens that are 768px or less, make the columns stack on top of each other */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  main {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>
