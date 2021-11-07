<template>
  <div class="layout sticky-header">
    <!-- 头部 -->
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <a
            href="/"
            aria-current="page"
            class="home-link active--exact active"
          >
            <img src="/img/logo.svg" alt="Nichlas W. Andersen" class="logo" />
          </a>
        </div>
        <nav class="nav right">
          <a href="/journal" class="nav__link">Journal</a>
          <a href="/contact" class="nav__link">Say Hi!</a>
        </nav>
      </div>
    </header>
    <!-- 插槽 -->
    <slot />

    <!-- 底部 -->
    <footer class="footer">
      <div class="container">
        <span>Copyright © 2021</span>
      </div>
    </footer>
  </div>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
* {
  box-sizing: border-box;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
@media (min-width: 860px) {
  .container {
    padding: 0 6rem !important;
  }
}
p {
  line-height: 1.5;
  font-size: 1.15rem;
}

.layout {
  color: var(--color);
  .header {
    position: relative;
    height: 6rem;
    z-index: 10;
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      .left {
        .logo {
          height: 1.5rem;
        }
      }
      .nav {
        a {
          color: inherit;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          margin-top: 4px;
          margin-right: 3rem;
          padding-bottom: 4px;
          border-bottom: 1px solid;
          border-color: transparent;
          transition: border 0.15s;
          &:last-of-type {
            margin: 0;
          }
          &:hover {
            border-bottom: 1px solid black;
          }
        }
      }
    }
  }
  .sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .footer {
    font-size: 0.8rem;
    padding: 6rem 0;
  }
  footer {
    text-align: center;
  }
}
.sticky-header {
  padding: 6rem 0 0;
}
.nav__link {
  margin-left: 20px;
}
</style>
