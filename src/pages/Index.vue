<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">
          Hi there, I'm an independent Digital Designer &amp; Art Director
          focused on digital design for brands that like to have fun.
        </h2>
      </div> 
      <div class="projects">
        <div class="project" v-for="item in $page.indexs.edges" :key="item.node.id">
          <g-link :to="'/projects/' + item.node.id"  class="project-link">
            <img alt="item.node.imgs.title" class="thumbnail" :src="GRIDSOME_API_URL + item.node.imgs.url" />
            <h3 class="project-title">{{item.node.title}}</h3>
            <div class="categories">
              <span class="category" v-for="citem in item.node.categories" :key="citem.id">{{citem.title}}</span>
            </div>
          </g-link>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div>
      <div class="latest-journals-heading container">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="container" >
          <div class="journal" v-for="item in $page.mores.edges" :key="item.node.id">
            <g-link :to="'/post/' + item.node.id"   >
              <h3 class="journal-title">{{item.node.title}}</h3>
            </g-link>
          </div>
          
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  indexs:allStrapiIndex{
   edges{
    node{
      id
      title
      imgs{
        url
      }
      categories{
        id
        title
      }
    }
  } 
  }
  mores:allStrapiMore{
    edges{
      node{
        id
        title
      } 
    }
  }
} 
</page-query>
<script>

export default { 
  metaInfo: {
    title: "Hello, world!",
  },
  name: "HomePage",
  data(){
    return {
      baseurl:"http://localhost:1337"
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  .hero {
    text-align: center;
    width: 480px;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Arial, sans-serif;
    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      padding: 0;
      margin: 0 0 2rem;
    }
    .hero-subtitle {
      font-size: 1.15em;
      font-weight: 400;
      line-height: 1.68;
      opacity: 0.6;
      margin: 0;
      padding: 0;
    }
  }
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;

    @media (min-width: 920px) {
      .project:nth-child(3n + 1) {
        grid-column: auto/span 2;
      }
      .project {
        grid-column: auto/span 1;
      }
    }

    .project {
      text-align: center;

      .project-link {
        text-decoration: none;
        .thumbnail {
          height: 560px;
          -o-object-fit: cover;
          object-fit: cover;
          transition: all 0.15s ease;
          box-shadow: 0 0 40px -20px rgb(0 0 0 / 25%);
        }
        img {
          max-width: 100%;
          width: 2560px;
          &:hover {
            transform: scale(1.02);
          }
        }
        .project-title {
          font-size: 1rem;
          color: #000000;
          margin: 2rem 0 1rem;
        }
        .categories {
          font-size: 0.8rem;
          color: #2b2b2b;

          .category {
            margin-right: 0.8rem;
            &:last-of-type {
              margin: 0;
            }
          }
        }
      }
    }
  }
}
.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: 0.6rem;
  font-weight: 400;
  text-transform: uppercase;
  .label {
    display: block;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
}
.latest-journals {
  max-width: 100%;
  margin: 0 2rem;
  border: 1px solid #f3f3f3;
  .container {
    display: flex;
    flex-wrap: wrap;
    .journal {
      flex: 0 0 100%;
      display: block;
      padding: 2rem;
      transition: background 0.25s ease;
      text-decoration: none;
      border-bottom: 1px solid #f3f3f3;
      &:hover {
        background: #f3f3f3;
      }
      .journal-title {
        font-size: 1rem;
        line-height: 1.35;
        color: #000;
        text-align: center;
      }
    }
    @media (min-width: 580px) {
      .journal {
        flex: 0 0 50%;
      }
    }
    @media (min-width: 920px) {
      .journal:first-child,
      .journal:nth-child(2),
      .journal:nth-child(3) {
        border: 0;
        border-right: 1px solid #f3f3f3;
      }
      .journal {
        flex: 0 0 25%;
      }
    }
  }
}
@media (min-width: 920px) {
  .latest-journals {
    margin: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
  }
}
@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}
</style>