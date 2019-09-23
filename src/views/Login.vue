<template>
  <div class="login" :style="{color: platforms[currentPlatform].bgColor}">
    <div class="login-domain">
      <div class="login-smooth">Smooth</div>
      <div class="login-x">×</div>
      <div
        class="login-domain-select-container"
        v-touch:verticalMoves.throttleTime(600)="setPlatform"
      >
        <div
          class="login-domain-select"
          :style="{transform:`translateY(-${45*currentPlatform}px)`}"
        >
          <div
            class="login-domain-select-item"
            v-for="(platform, index) in platforms"
            @touchover="setPlatform(index)"
            :key="platform.name"
            :class="{'login-domain-inactive':index!==currentPlatform}"
            :style="{backgroundImage:`url(${platform.text})`, opacity: 1 - (Math.abs(index - currentPlatform)===0?0:0.3)-Math.abs(index - currentPlatform) * 0.30 }"
          ></div>
        </div>
      </div>
    </div>
    <div class="login-form-header"></div>
    <form class="login-form">
      <input class="login-form-input" placeholder="Input Email" type="email" />
      <input class="login-form-input" placeholder="and Password Here" type="password" />
      <div class="login-submit"></div>
    </form>
  </div>
</template>
<script>
import "css-doodle";
export default {
  mounted() {},
  methods: {
    setPlatform(event) {
      if (typeof event === "number") {
        this.currentPlatform = event;
        return;
      }
      const offset = event.y < 0 ? 1 : -1;
      this.currentPlatform = [
        0,
        this.platforms.length - 1,
        this.currentPlatform + offset
      ].sort((a, b) => a - b)[1];
    }
  },
  data() {
    return {
      currentPlatform: 1,
      platforms: [
        {
          name: "netease",
          text: "/img/neteaseText.svg",
          bgColor: "#2c3e50"
        },
        {
          name: "ximalaya",
          text: "/img/ximalayaText.png",
          bgColor: "#ea5e09"
        },
        {
          name: "douban",
          text: "/img/doubanText.svg",
          bgColor: "#74c280"
        },
        {
          name: "xiami",
          text: "/img/xiamiText.png",
          bgColor: "#ff410f"
        },
        {
          name: "qq",
          text: "/img/qqText.png",
          bgColor: "#31c27c"
        }
      ],
      user: "",
      pass: ""
    };
  }
};
</script>
<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Amaranth|Josefin+Sans&display=swap");
    .login {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden auto;
    }
    .login-domain {
        flex-shrink: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 35px;
        height: 300px;
    }
    .login-x {
        font-size: 1.5em;
        line-height: 50px;
        transition: color 0.3s
    }
    .login-smooth {
        font-family: "Josefin Sans";
        width: 150px;
        height: 50px;
        line-height: 50px;
        text-align: right;
        transition: color 0.3s
    }
    .login-domain-select-container {
        height: 100%;
    }
    .login-domain-select {
        position: relative;
        top: 135px;
        width: 150px;
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        transition: all 0.3s;
    }
    .login-domain-select-item {
        width: 130px;
        height: 25px;
        background: center/contain no-repeat;
        flex-shrink: 0;
        margin-bottom: 20px;
        transition: all 0.3s;
    }
    .login-domain-inactive {
        filter: grayscale(1);
    }
    .login-form {
        flex-grow: 1;
        transition: all 0.3s;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .login-form-input {
        -webkit-appearance: none;
        border: none;
        padding: 0;
        line-height: 55px;
        margin-bottom: 20px;
        font-size: 26px;
        padding-left: 2.2em;
        font-family: "Amaranth", "幼圆";
        font-weight: 800;
        outline: none;
        background: transparent;
        color: currentColor;
        transition: all 0.15s;
    }
    .login-form-input::placeholder {
        color: currentColor;
    }
    .login-form-input:focus::placeholder {
        color: #fff;
        opacity: 0.5;
    }
    .login-form-input:focus {
        background-color: currentColor;
        box-shadow: rgba(0, 0, 0, 0.15) 0 0 8px 1px;
        border-radius: 40px;
        margin: 10px 20px;
    }
    .login-form-input:focus::first-line {
        color: #fff
    }
    .login-submit {
        height: 100px;
    }
</style>