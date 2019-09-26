<script>
import "../scss/account.scss";
import { store } from "../../store/index";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Account",
  computed: {
    ...mapState({
      love: state => state.love
    })
  },
  props: {
    open: Boolean,
    setModalStates: { type: Function }
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
      launch: false,
      selectable: []
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
    },
    selectedGif(e) {
      let self, ID, parent;

      self = e.target;
      ID = self.getAttribute('data-id');

      if ( this.selectable.includes(ID) ) return
      this.selectable.push(ID);
    },
    handleRemove() {
      this.remove(this.selectable)
    },
    ...mapMutations([
      'remove'
    ])
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
                <sui-table-row v-for="arr in love">
                  <sui-table-cell collapsing>
                    <div class="ui fitted toggle checkbox" data-id="Y4pAQv58ETJgRwoLxj">
                      <input
                        readonly="readonly"
                        @change="selectedGif"
                        :data-id="arr.id"
                        tabindex="0"
                        type="checkbox"
                      />
                      <label></label>
                    </div>
                  </sui-table-cell>
                  <sui-table-cell>{{arr.title}}</sui-table-cell>
                  <sui-table-cell>
                    <figure class="isolador">
                      <img :src="arr.image" alt="arr.title" />
                    </figure>
                  </sui-table-cell>
                  <sui-table-cell>
                    <span :href="arr.embed">
                      <sui-icon name="share alternate" disabled />
                    </span>
                  </sui-table-cell>
                  <sui-table-cell>{{arr.likes}}</sui-table-cell>
                </sui-table-row>
              </sui-table-body>
            </sui-table>
            <div class="sidebar">
              <p v-if="selectable.length === 0">0 itens selected</p>
              <p v-else>{{selectable.length}} iten selected</p>
              <a href="#" class="btn btn-primary">Share</a>
              <ul>
                <li>
                  <span @click="handleRemove">
                    <sui-icon name="trash alternate outline" />Deletar
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