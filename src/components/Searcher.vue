<script>
import { mapMutations } from 'vuex';

export default {
  name: "Searcher",
  data(){
    return{
      visible: false,
    }
  },
  props: {
    gifs: Promise,
    handleQueryCount: { type: Function }
  },
  methods: {
    getImage: function(elem) {
      return elem.url;
    },
    gif_add: function(event){
      let self, parent;
      
      self = event.target;
      
      parent = self;
      while( !parent.classList.contains('wrap') ){
        parent = parent.parentNode
      }
      
      const list = {
        image: parent.getAttribute('img'),
        title: parent.getAttribute('title'),
        embed: parent.getAttribute('embed'),
        id: parent.getAttribute('data-id'),
        likes: 0,
      }

      this.increment(list);
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, 5000);
    },
    handleClick: function(e){
      e.preventDefault()
      this.handleQueryCount()
    },
    handleDismiss() {
      this.visible = false;
    },
    ...mapMutations([
      'increment',
    ])
  },
  computed: {
    loves(){
      return store.state.love
    }
  },
};
</script>

<template>
  <div>
    <div class="container" id="repeat">
      <div class="grid">
        <div class="column" v-for="gif in gifs">
          <div class="wrap" :style="{'backgroundImage':'url('+ getImage(gif) +')'}" :title="gif.title" :embed="gif.embed" :img="gif.url" :data-id="gif.id">
            <ul class="icons">
              <li>
                <img src="../assets/heart.png" alt="loved" v-on:click="gif_add" />
              </li>
              <li>
                <img src="../assets/copy.png" alt="embed" />
              </li>
              <li>
                <img src="../assets/like.png" alt="like" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="loadmore" @click="handleClick">
        <a href="#" class="btn btn-primary">Carregar mais</a>
      </div>
    </div>

    <transition name="fade">
      <sui-message
        v-if="visible"
        header="GIF Adicionado!"
        content="Agora você pode gerenciar seus GIFs, é só fazer o login."
        dismissable
        @dismiss="handleDismiss"
      />
    </transition>

  </div>
</template>

<style lang="scss">
@import "../scss/main.scss";

#repeat {
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: $spacer 0;

    .column {
      background: $primary;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      padding: 10px;
      border-radius: 10px;

      .wrap {
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 100%;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        padding-bottom: 10px;

        .icons {
          background: #fff;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 190px;
          padding: 5px 25px;
          border-radius: 60px;
          opacity: 0;
          transition: all 200ms ease;
          transform: translateY(10px);

          li {
            display: inline-block;
            cursor: pointer;
            opacity: 0.7;
            line-height: 1em;

            &:hover {
              opacity: 1;
            }
          }
        }

        &:hover {
          .icons {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }

      figure {
        width: 100%;
        height: auto;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}

.loadmore {
  padding: 0 0 $spacer;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    background: $primary;
    padding: 10px 25px;
    border-radius: 60px;
    display: inline-block;
    color: #fff;
    font-weight: 600;
  }
}

.ui.message {
    position: fixed;
    right: 10px;
    bottom: 10px;
    background: #7159c1;
    color: #fff;
    animation: fadeInSunshine 1s 1;
    animation-fill-mode: forwards;
}

@keyframes fadeInSunshine {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
</style>