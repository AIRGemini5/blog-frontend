<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 class="journal-title">{{ $page.post.title }}</h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span
              ><span class="author-name">{{ $page.post.author }}</span>
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div>{{ $page.post.date }}</div>
            </div>
            <div class="journal-time">
              <span class="label">Time</span><span>{{ $page.post.time }}</span>
            </div>
          </div>
        </div>
        <div class="journal-content">
          <p>
            {{ $page.post.content }}
          </p>
          <p class="p-img">
            <img :src="GRIDSOME_API_URL + $page.post.img.url" />
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "ProjectsPage",
  data() {
    return {
      baseurl: "http://localhost:1337",
    };
  },
};
</script>

<page-query>
query($id:ID!) {
  post: strapiMore(id: $id){
    title
    id
    author
    time
    date
    content
    img{
      url
    }
  }
}
</page-query>
<style scoped lang="scss">
.journal {
  .journal-container {
    max-width: 840 px;
    .journal-header {
      padding: 2rem 0 4rem;
      .journal-title {
        font-size: 4rem;
        margin: 0 0 4rem;
        padding: 0;
      }
      .journal-meta {
        display: flex;
        flex-wrap: wrap;
        font-size: 0.8rem;
        .label {
          display: block;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        & >div {
          margin-right: 4rem;
        }
        .journal-meta > div:last-of-type {
          margin: 0;
        }
      }
      
    }
    .journal-content {
      .p-img {
        img {
          max-width: 100%;
          width: 2560px;
        }
      }
      h4,
      h5,
      h6 {
        font-size: 1.15rem;
      }
      p {
        line-height: 1.5;
        font-size: 1.15rem;
      }
    }
  }
}
</style>
