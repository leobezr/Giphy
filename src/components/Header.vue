<script>
import Account from "./Account";

export default {
  name: "Header",
  props: {
    msg: String
  },
  components: {
    Account
  },
  methods: {
    setModalStates(e){
      event.preventDefault();
      this.open = this.open === true ? false : true;
    },
    summonMenu(e){
      e.preventDefault();
      this.open = true;
    }
  },
  data(){
    return {
      open: false,
    }
  },
};
</script>

<template>
  <div id="header">
    <div class="container">
      <ul>
        <li>
          <a href="#">
            <h1>
              Powered by
              <strong>GIPHY API</strong>
            </h1>
          </a>
        </li>
        <li>
          <a href="#">Pesquisar</a>
        </li>
        <li>
          <a href="#" v-on:click="setModalStates">
            Meus
            <strong>GIFs</strong>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://leobezr.com.br/" target="_blank" rel="nofollow">
            <img src="../assets/lb.png" alt="LB" />
          </a>
        </li>
        <li>
          <a href="https://github.com/leobezr" target="_blank" rel="nofollow">
            <img src="../assets/github.png" alt="Github" />
          </a>
        </li>
      </ul>
    </div>
    <Account :open="open" :setModalStates="setModalStates"/>
  </div>
</template>

<style lang="scss">
@import "../scss/main.scss";

#header {
  background-color: $primary;
  color: $white;

  .container {
    padding: 20px 0;
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    margin-top: 0 $i;

    h1 {
      font-size: 18px;
    }

    & > ul {
      &:first-child {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        li {
          display: inline-block;
          margin-right: 20px;

          a {
            color: #fff;
            filter: brightness(0.9);
            transition: all 300ms ease;

            &:hover {
              filter: brightness(1.3);
            }
          }

          &:first-child {
            border-right: solid 1px rgba(255, 255, 255, 0.3);
            padding-right: 20px;
          }
        }
      }

      &:last-child {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        li {
          display: inline-block;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>