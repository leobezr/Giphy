<script>
import "../scss/account.scss";

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
            <div class="sidebar">
              <p>0 itens selecionados</p>
              <a href="#" class="btn btn-primary">Share</a>
              <ul>
                <li>
                  <span>
                    <sui-icon name="trash alternate outline" disabled />Deletar
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>