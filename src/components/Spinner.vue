<!-- Scripts -->
<script>
export default {
  name: "Spinner",
  data() {
    return {
      loading: true,
      color: "red",
      size: 15
    };
  }
};
</script>

<!-- Styles -->
<style lang="scss">
@import "../scss/main.scss";

#modal {
  background: rgba(113, 89, 193, .5);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    color: #ffffff;
    font-size: 10px;
    margin: 80px auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;

    &:before,
    &:after,
    & {
      border-radius: 50%;
      width: 2.5em;
      height: 2.5em;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation: load7 1.8s infinite ease-in-out;
      animation: load7 1.8s infinite ease-in-out;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
    }

    &:before {
      left: -3.5em;
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }

    &:after {
      left: 3.5em;
    }
  }

  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
}
</style>

<template>
  <div>
    <div id="modal">
      <div class="wrap">
        <div class="loader">Loading...</div>
      </div>
    </div>
  </div>
</template>