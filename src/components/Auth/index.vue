<template>
  <div class="flex-container">
    <div class="container">
      <nav class="nav">
        <div class="nav-left">
          <span class="nav-item is-brand">
            <router-link to="/">
              NoTe
            </router-link>
          </span>
        </div>

        <div class="nav-center">
          <a class="nav-item" href="https://github.com/jgthms/bulma">
            <span class="icon">
              <i class="fa fa-github"></i>
            </span>
          </a>
        </div>

        <span id="nav-toggle" class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div id="nav-menu" class="nav-right nav-menu">
          <a class="nav-item " href="http://bulma.io/">
            Home
          </a>
          <a class="is-hidden nav-item  " href="http://bulma.io/templates/">
            <span>Templates</span>
            <span class="tag is-small is-success">New!</span>
          </a>
          <a class="nav-item  is-active" href="/documentation/overview/start/">
            Documentation
          </a>
          <a class="nav-item " href="http://bulma.io/blog/">
            Blog
          </a>
        </div>
      </nav>
    </div>

    <div class="component-container">
      <transition name="component" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Note</strong> by <a href="*">YD</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          <p>
            <a class="icon" href="https://github.com/jgthms/bulma">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');

.component-enter-active, .component-leave-active {
  transition: all 0.3s ease;
}
.component-enter {
  opacity: 0;
  transform: translateX(200px);
}
.component-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}

.flex-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.component-container {
  flex: 1 0 auto;
}

.is-brand {
  font-family: 'Indie Flower', cursive;
  font-size: 2rem;
}
</style>
