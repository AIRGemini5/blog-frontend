<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header">
          <h1 class="project-title">{{$page.projects.title}}</h1>
          <div class="project-info">
            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span class="category" v-for="item in $page.projects.categories" :key="item.id">{{item.title}}</span>
              </div>
            </div>
            <div class="year-container">
              <span class="label">Year</span>
              <div>{{$page.projects.year}}</div>
            </div>
          </div>
        </div>

        <div class="content">
          <p v-html="mdToHtml($page.projects.content)">
            <!-- {{$page.projects.content}} -->
          </p>
          <p>
            <img
              class="g-image g-image--lazy g-image--loaded"
              :src="$page.projects.imgs.url"
            />
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name: "ProjectsPage",
  data(){
    return {
      baseurl:"http://localhost:1337",
    }
  },
  methods:{
    mdToHtml(markdown) {
      return md.render(markdown)
    }
  }

};
</script>

<page-query>
query($id:ID!) {
 projects: strapiIndex (id: $id){
    title
    id
    year
    created_at
    content
    categories{
      id
      title
    }
    imgs{
      url
    }
}
}
</page-query>

<style scoped lang="scss">
.project {
  .project-header {
    padding: 20vh 0 4rem;
    .project-title {
      font-size: 4rem;
      margin: 0 0 4rem;
      padding: 0;
    }
    .project-info {
      display: flex;
      flex-wrap: wrap;
      font-size: 0.8rem;
      .categories {
        .label {
          display: block;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .category:after {
          content: ", ";
        }
        .category:last-of-type:after {
          content: "";
        }
      }
    }
    .project-info > div {
      margin-right: 4rem;
    }
    .project-info > div:last-of-type {
      margin: 0;
    }
  }
  .content {
    p {
      line-height: 1.5;
      font-size: 1.15rem;

      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;

      img {
        max-width: 100%;
      }
    }
  }
}
</style>
