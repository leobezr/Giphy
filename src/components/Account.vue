<script>
export default {
  name: "Account",
  computed: {
    love() {
      return this.$store.state.love;
    }
  },
  props: {
    open: Boolean,
    setModalStates: { type: Function }
  },
  mounted() {
    this.$emit("setModalStates", false);
  },
  data() {
    return {
      user: [
        {
          name: "LeoBezr",
          username: "bezr",
          password: "12345"
        }
      ],
      oauth: {
        account: "bezr",
        pass: "",
        status: "LOGGED_OUT"
      },
      error: false,
      launch: false
    };
  },
  methods: {
    handleLogin(e) {
      e.preventDefault();
      let username, password, pass, account, setError, setAuth, setLaunch;

      username = this.user[0].username;
      password = this.user[0].password;

      account = this.oauth.account;
      pass = this.oauth.pass;

      setError = arg => this.setErrorStatus(arg);
      setAuth = arg => this.setOAuth(arg);
      setLaunch = bool => this.setLauncher(bool);

      setTimeout(function() {
        if (username === account && password === pass) {
          setError(false);
          setAuth("LOGGED_IN");
          setLaunch(true);
        } else {
          setError(true);
          setAuth("LOGGED_OUT");
          setLaunch(false);
        }
      }, 200);
    },
    handleCreate(e) {
      e.preventDefault();
    },
    setErrorStatus(status) {
      this.error = status;
    },
    setOAuth(status) {
      this.oauth.status = status;
    },
    setLauncher(bool) {
      this.launch = bool;
    }
  }
};
</script>

<template>
  <div id="myAccount" v-if="open">
    <div class="curtain" v-on:click="setModalStates"></div>
    <div class="menu" :class="launch ? 'launch' : 'static'">
      <div class="grid">
        <span class="closer" v-on:click="setModalStates">
          <span></span>
        </span>
        <div class="account">
          <div class="content">
            <img src="../assets/rocket.png" alt="rocket" />
            <h2>Olá, Memezeiro!</h2>
            <form>
              <div data-v-115c3d82 class="ui icon input" placeholder="Usuário">
                <input type="text" placeholder="Usuário" value="bezr" v-model="oauth.account" />
                <i class="user icon"></i>
              </div>
              <div data-v-115c3d82 class="ui focus input" placeholder="12345">
                <input type="password" placeholder="12345" v-model="oauth.pass" />
              </div>
              <div class="controllers">
                <input type="submit" value="logar!" v-on:click="handleLogin" />
                <input type="submit" value="criar senha" class="create" v-on:click="handleCreate" />
              </div>
              <label v-if="!!error" class="error">Viix, a senha ta errada. Tente usar bezr/12345</label>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="folder" :class="launch && oauth.status === 'LOGGED_IN' ? 'show' : 'dont'">
      <div class="header">
        <span v-on:click="setModalStates"></span>
        <span></span>
        <span></span>
      </div>
      <div class="body">
        <div class="column">
          <h3>
            My
            <strong>GIFs</strong>
          </h3>
          <ul>
            <li>
              <a href="#">GIFs Favoritos</a>
            </li>
            <li>
              <a href="#">Likes</a>
            </li>
            <li>
              <a href="#">Todos</a>
            </li>
            <li>
              <a href="#">Portfólio</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Fork</a>
            </li>
            <li>
              <a href="#">Sair</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <div class="topbar">
            <h3>Seus GIFs prediletos</h3>
            <div class="ui left icon action input">
              <i class="search icon"></i>
              <input type="text" placeholder="Nome do GIF" />
              <div class="ui primary submit button">Search</div>
            </div>
          </div>
          <div class="contain-table">
            <sui-table compact celled definition>
              <sui-table-header full-width>
                <sui-table-row>
                  <sui-table-header-cell />
                  <sui-table-header-cell>Título</sui-table-header-cell>
                  <sui-table-header-cell>Imagem</sui-table-header-cell>
                  <sui-table-header-cell>Embed</sui-table-header-cell>
                  <sui-table-header-cell>Likes</sui-table-header-cell>
                </sui-table-row>
              </sui-table-header>
              <sui-table-body>
                <sui-table-row>
                  <sui-table-cell collapsing>
                    <sui-checkbox toggle />
                  </sui-table-cell>
                  <sui-table-cell>John Lilki</sui-table-cell>
                  <sui-table-cell>Imagem</sui-table-cell>
                  <sui-table-cell>
                    <sui-icon name="share alternate" disabled />
                  </sui-table-cell>
                  <sui-table-cell>15</sui-table-cell>
                </sui-table-row>
              </sui-table-body>
            </sui-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../scss/main.scss";

#myAccount {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1010;
  width: 100vw;
  height: 100vh;

  .curtain {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
  }

  .menu {
    background: $primary;
    width: 50vw;
    height: 100%;
    padding: 2em;
    position: absolute;
    right: 0;
    z-index: 10;
    top: 0;

    &.launch {
      animation: rocketFly 1s 1;
      animation-fill-mode: forwards;
    }

    .closer {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;

      & > span {
        width: 100%;
        height: 2px;
        background: #fff;
        display: block;
        transform: rotate(45deg);
        position: relative;
        pointer-events: none;
        transition: all 300ms ease;

        &:before {
          content: "";
          width: 100%;
          height: 2px;
          background: #fff;
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          transform: rotate(90deg);
          transition: all 300ms ease;
        }
      }

      &:hover {
        & > span {
          transform: rotate(35deg);

          &:before {
            transform: rotate(110deg);
          }
        }
      }
    }

    .grid {
      display: grid;
      grid-template-columns: calc(2em + 20px) 1fr;
      height: 100%;

      .account {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .content {
          width: 100%;
          display: block;
          max-width: 550px;
          margin: 0 auto;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          h2 {
            text-align: center;
            margin: 0 0 40px;
          }

          img {
            display: block;
            margin: 0 auto 20px;
          }
        }

        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;

          .controllers {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            input {
              display: flex;
              flex: 2 2;
              padding: 5px 40px;
              text-align: center;
              cursor: pointer;
              background: $primaryHot;
              color: #fff;
              border: none;
              font-weight: 600;
              font-family: inherit;
              margin-top: 30px;
              justify-content: center;
              align-items: center;

              &.create {
                background: none $i;
                border: solid 1px $primaryHot $i;
                flex: 1 1;
              }

              &:not(.create) {
                margin-right: 10px;
              }
            }
          }

          & > div {
            width: 100%;

            input {
              width: 100%;
              display: block;
              margin-bottom: 10px;

              i {
                color: $primary;
              }
            }
          }

          input {
            height: 40px;
            border-radius: 60px;
          }

          .error {
            margin-top: 10px;
          }
        }
      }
    }
  }

  .folder {
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, -100vh);
    transition: all 800ms ease;
    transition-delay: 1s;
    display: block;
    background: #ffffff;
    width: 1440px;
    height: 90vh;
    z-index: 20;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 6px 6px 0 0;
    overflow: hidden;

    &.show {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -50%);
    }

    h3 {
      color: $color;
      font-size: 1.4em;
    }

    .header {
      display: flex;
      width: 100%;
      background: #ecf0f2;
      height: 40px;
      padding: 0 0 0 20px;
      justify-content: flex-start;
      align-items: center;

      span {
        display: inline-block;
        width: 13px;
        height: 13px;
        background: #fff;
        border-radius: 60px;
        margin-right: 20px;

        &:first-child {
          background: $primary;
          filter: brightness(1);
          transition: all 200ms ease;
          cursor: pointer;

          &:hover {
            filter: brightness(1.5);
          }
        }
      }
    }
    .body {
      display: grid;
      grid-template-columns: 15% 1fr;
      height: 100%;

      & > .column {
        &:first-child {
          padding: 2em;
          background: #f7f9fa;
          border-right: solid 2px #ecf0f2;

          h3 {
            color: $primary;
          }

          ul {
            padding: 0;
            margin: 20px 0;

            li {
              display: block;
              line-height: 1.2em;
              padding-bottom: 10px;
              margin-bottom: 10px;
              font-weight: 600;
              color: $color;

              a {
                color: inherit;
                filter: brightness(0.8);
                transition: all 300ms ease;

                &:hover {
                  filter: brightness(1.3);
                }
              }

              &:first-child {
                color: $primary;
              }
            }
          }
        }

        &:last-child {
          .topbar {
            display: flex;
            width: 100%;
            padding: 1em;
            justify-content: space-between;
            align-items: center;

            h3 {
              margin: 0;
            }

            .button {
              background: $primary $i;
              border-radius: 0 60px 60px 0;
            }

            input[type="text"] {
              border-radius: 15px 0 0 15px;

              &:focus {
                border-color: $primary;
              }
            }
          }

          .contain-table {
            padding: 0 1em 0;
          }
        }
      }
    }
  }
}

@keyframes rocketFly {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-20%, 0);
  }
  70% {
    transform: translate(100vw, 0);
  }
  100% {
    transform: translate(100vw, 0);
    opacity: 0;
  }
}
</style>