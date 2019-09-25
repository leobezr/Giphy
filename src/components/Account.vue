<script>
export default {
  name: "Account",
  computed: {
    love() {
      return this.$store.state.love;
    }
  },
  props: {
    open
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
      error: false
    };
  },
  methods: {
    handleLogin(e) {
      e.preventDefault();
      let username, password, pass, account, setError, setAuth;

      username = this.user[0].username;
      password = this.user[0].password;

      account = this.oauth.account;
      pass = this.oauth.pass;

      setError = arg => this.setErrorStatus(arg);
      setAuth = arg => this.setOAuth(arg);

      setTimeout(function() {
        if (username === account && password === pass) {
          setError(false);
          setAuth("LOGGED_IN");
        } else {
          setError(true);
          setAuth("LOGGED_OUT");
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
    }
  }
};
</script>

<template v-if="open">
  <div id="myAccount">
    <div class="menu">
      <div class="grid">
        <span class="closer">
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
  </div>
</template>

<style lang="scss">
@import "../scss/main.scss";

#myAccount {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1010;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;

  .menu {
    background: $primary;
    width: 50vw;
    height: 100%;
    padding: 2em;
    position: absolute;
    right: 0;
    top: 0;

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
}
</style>