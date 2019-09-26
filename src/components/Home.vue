
<script>
import Searcher from "./Searcher.vue";
import Spinner from "./Spinner";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      query: "",
      gifs: [],
      erros: [],
      loading: false,
      queryCounter: 8
    };
  },
  components: {
    Searcher,
    Spinner
  },
  methods: {
    changeHandle: function(e, bool) {
      if ( e.target !== undefined ){
        e.preventDefault();
        this.queryCounter = 8;
      }
      this.loading = true;
      this.gifs = [];

      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=GQFWqxR0ulxqek3YGvXMIOUwMhUpzaX3&limit=${this.queryCounter}&q=${this.filterQuery(
            this.query
          )}`
        )
        .then(resp => {
          this.gif = resp.data.data;

          this.gif.map(item => {
            let store = {
              url: item.images.original.url,
              embed: item.embed_url,
              title: item.title,
              id: item.id
            };
            this.gifs.push(store);
          });

          const tester = this.gif;
          window.tester = tester;
        })
        .catch(e => {
          this.erros.push(e);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    filterQuery: function(string) {
      if (!typeof string == "string" || string.length < 3) return;
      string = string.replace(" ", "-").toLowerCase();
      return string;
    },
    handleQueryCount: function(){
      this.queryCounter += 8;
    }
  },
  computed: {
    love() {
      return this.$store.state.love;
    }
  }
};
</script>

<template>
  <div>
    <div class="container" id="about">
      <div class="grid">
        <div class="column">
          <h3>Precisamos de sua ajuda!</h3>
          <p>A Aliança Rebelde precisa de você. Nosso infiltrado Jar-Jar Binks bolou um plano para acabar com a ameaça de Darth Vader uma vez por todas. A Finxi foi contratada – por meios escusos, para não dar pinta – para fazer o Lord Sith morrer. De rir. Literalmente.</p>
          <p>
            Enquanto nosso setor de ursinhos de pelúcia é pago para produzir um trilhão de ursinhos carinhosos, sua missão é achar o melhor gif e/ou meme – através da
            <a
              href="https://developers.giphy.com/"
              target="_blank"
              rel="nofollow"
            >API Pública do Giphy</a>.
          </p>
          <p>Use o search abaixo para ajudar nessa missão!</p>
        </div>
        <div class="column">
          <img src="../assets/coders.png" alt="Coders" />
        </div>
      </div>
    </div>

    <div class="fluid" id="searcher">
      <div class="container">
        <div class="wrap">
          <h2>Procure um meme</h2>
          <form>
            <input type="text" placeholder="Pesquisar!" v-model="query" />
            <input type="submit" v-on:click="changeHandle" value="avante!" />
          </form>
        </div>
      </div>
    </div>
    <Spinner v-if="loading" />

    <div v-if="!!gifs.length">
      <Searcher :gifs="gifs" :handleQueryCount="handleQueryCount" />
    </div>
    <div v-else id="oh-oh">
      <h3>Listagem de memes vazia!</h3>
    </div>
  </div>
</template>

<style lang="scss">
@import "../scss/main.scss";

#about {
  padding: $spacer 0;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;

    & > .column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      a {
        color: $primary;
        font-weight: 800;
      }

      img {
        display: block;
        margin: 0 auto;
      }
    }
  }
}

#searcher {
  background: $primary;
  padding: $spacer 0;
  color: #fff;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    .wrap {
      display: block;
      width: 100%;
    }

    h2 {
      font-size: 3em;
      text-align: center;
      font-weight: 800;
      margin-bottom: 40px;
    }

    form {
      display: flex;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      input {
        display: flex;
        justify-content: center;
        align-items: center;

        &[type="text"] {
          border-radius: 60px;
          border: none;
          height: 40px;
          font-weight: 700;
          font-size: 18px;
          font-family: $fontfamily;
          padding: 5px 5px 5px 15px;
          color: $primary;
          width: 100%;
          margin: 0 auto;
          text-align: center;

          &::placeholder {
            color: $primary;
          }
        }

        &[type="submit"] {
          background: $primaryHot;
          padding: 5px;
          border-radius: 60px;
          border: none;
          color: #fff;
          width: 100%;
          font-weight: 600;
          font-family: inherit;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          max-width: 300px;
          margin: 20px auto 0;
          height: 40px;
        }
      }
    }
  }
}

#oh-oh {
  h3 {
    text-align: center;
    padding: $spacer 0;
  }
}
</style>

