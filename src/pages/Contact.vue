<template>
  <Layout>
    <div class="container">
      <div class="contact-header">
        <h1 class="contact-title">Say hi!</h1>
        <p>
          Leave me a note with any questions you might have, I'll get back to
          you as soon as possible.
        </p>
      </div>
      <form name="contact" class="contact-form">
        <div class="sender-info">
          <div>
            <label for="name" class="label">Your name</label
            ><input type="text" name="name" v-model="from.name" />
          </div>
          <div>
            <label for="email" class="label">Your email</label
            ><input type="email" name="email" v-model="from.email" />
          </div>
        </div>
        <div class="message">
          <label for="message" class="label">Message</label
          ><textarea name="message" v-model="from.message"></textarea>
        </div>
        <button class="button" @click.prevent="onsubmit">Submit form</button>
      </form>
    </div>
  </Layout>
</template>
<script>
import axios from "axios";
export default {
  name: "ContactPage",
  data() {
    return {
      from: {
        name:"",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async onsubmit() {
      try {
        await axios({
          method: "POST",
          url: "http://106.75.63.182:1337/contacts",
          data: this.from,
        });
        window.alert("发送成功");
        this.from = {
          name: "",
          email: "",
          message: "",
        };
      } catch (e) {
        // console.log(e,${GRIDSOME_API_URL+`/contacts`})
        window.alert("发送失败，请稍后重试");
      }
    },
  },
};
</script>


<style scoped lang="scss">
.contact-header {
  padding: 2rem 0 4rem;
  .contact-title {
    font-size: 4rem;
    margin: 0 0 4rem;
    padding: 0;
  }
}
form {
  display: block;
  margin-top: 0em;
  .sender-info {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    > div {
      flex: 1;
      margin-right: 4rem;
    }
  }
  .label {
    display: block;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  input,
  textarea {
    background: transparent;
    border: 1px solid #f3f3f3;
    outline: none;
    border-radius: 0.3rem;
    padding: 0.8rem 1rem;
    color: inherit;
    font-size: 1rem;
    width: 100%;
  }
  textarea {
    resize: none;
    height: 140px;
  }
  .button {
    color: #fff;
    background: #000;
    outline: none;
    border: 0;
    font-size: 0.8rem;
    padding: 0.8rem 1.6rem;
    border-radius: 0.3rem;
    margin-top: 2rem;
    cursor: pointer;
    transition: opacity 0.25s ease;
    font-size: 500;
    letter-spacing: 0.035em;
  }
}
</style>
