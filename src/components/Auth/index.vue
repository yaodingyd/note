<template>
  <div>
    <div class="container">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-brand" href="http://bulma.io">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox">
          </a>
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

    <transition name="component" mode="out-in">
      <router-view></router-view>
    </transition>

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

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
