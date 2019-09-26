<script>
export default {
  name: "Searcher",
  props: {
    gifs: Promise,
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
        id: parent.getAttribute('data-id')
      }

      console.log(list);
    }
  },
  computed: {
    loves(){
      return store.state.love
    }
  }
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
    </div>
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
</style>