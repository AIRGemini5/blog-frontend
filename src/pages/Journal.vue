<template>
  <Layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">a wise person once said...</h1>
      </div>
    </div>
    <div v-for="item in $page.mores.edges" :key="item.node.id">
      <g-link :to="'/post/' + item.node.id" class="journal-post">
        <div class="container journal">
          <h2 class="journal-title">{{item.node.title}}</h2>
          <p class="journal-excerpt">
           {{item.node.describe}}
          </p>
        </div>
      </g-link>
    </div>

  </Layout>
</template>
<page-query>
query {
  mores:allStrapiMore{
    edges{
      node{
        id
        title
        describe
      } 
    }
  }
} 
</page-query>

<style scoped lang="scss">
.journal-hero {
  padding: 4rem 0;
  text-align: center;
  color: #f3f3f3;
  .journal-header {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }
}
.journal-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
//   transition: transform 0.5s ease;
  &:hover {
    background-color: #f3f3f3;
    // transform: translateX(4rem);
  }
  &:hover .journal{
    // background-color: #f3f3f3;
    transform: translateX(4rem);
  }

  .journal {
    max-width: 720px;
    transition: transform 0.5s ease;
    // &:hover {
    //   transform: translateX(4rem);
    // }

    .journal-title {
      font-size: 2rem;
      color: #000;
    }
    .journal-excerpt {
      color: #2b2b2b;
    }
  }
}
.journal-post h1,
.journal-post h2 {
  margin: 0;
  padding: 0;
}
//   .journal-post {
//     transition: transform .5s ease;
// }
@media (min-width: 860px) {
  .journal-post {
    padding: 5rem 0;
  }
}
@media (min-width: 560px) {
  .journal-post[data-v-da896d1e] {
    padding: 3rem 0;
  }
}
</style>
