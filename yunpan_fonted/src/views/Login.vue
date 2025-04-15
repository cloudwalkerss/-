<script setup>



</script>

<template>
  <div class="wrapper">
<!--    //登录表单-->
    <form>
      <h1>Login</h1>
      <div class="input-box">
        <i class="fas fa-envelope icon"></i>
        <input id="username" type="text" required /><!--输入用户名-->
        <label>用户名</label>
      </div>
      <!---密码输入-->
      <div class="input-box">
        <i class="fas fa-lock icon"></i>
        <input id="password" type="password" required />
        <label>Password</label>
      </div>
      <!--忘记密码-->

      <div class="row">
        <a @click="forgotman">忘记密码?</a>
      </div>
      <!--登录按钮=-->
      <button type="submit" class="btn">登录</button>

      <div class="signup-link">
        <p>还没有一个账号? <a href="#">创建一个</a></p>
      </div>
    </form>
  </div>
</template>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://th.bing.com/th/id/R.ff287f9946d6cecc8adbb7eb4f5596cd?rik=NQ6mx%2f9vr7yH1g&riu=http%3a%2f%2fwww.08lr.cn%2fuploads%2fallimg%2f220330%2f1-2300149618.jpg&ehk=iWInQTJkJ%2f%2brlR9se7dELc7QzjrtbGzTOK2uUpXjZX0%3d&risl=&pid=ImgRaw&r=0");
  background-size: cover;
  background-position: center;
  position: relative;
}

.wrapper {
  position: relative;
  width: 600px;
  height: 450px;
  background: rgba(62, 64, 77, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.wrapper:hover {
  box-shadow: 0 0 40px rgba(255,255,255,0.2);
  background: rgba(70, 71, 78, 0.7);
}

.wrapper h1 {
  font-size: 2em;
  color: #fff;
  text-align: center;
}

.wrapper .input-box {
  position: relative;
  width: 450px;
  margin: 30px 0;
  border-bottom: 2px solid #fff;
}

.wrapper .input-box input {
  width: 100%;
  height: 50px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 1em;
  color: #fff;
  padding: 0 40px 0 5px;
}

.wrapper .input-box label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1em;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.wrapper .input-box input:focus ~ label,
.wrapper .input-box input:valid ~ label {
  top: -5px;
}

.wrapper .input-box .icon {
  position: absolute;
  right: 8px;
  color: #fff;
  font-size: 1.2em;
  line-height: 57px;
}

.wrapper .row {
  margin: -15px 0 15px;
  font-size: 0.9em;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.wrapper .row label {
  display: flex;
  align-items: center;
  gap: 5px;
}

.wrapper .row a {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.wrapper .options a:hover {
  text-decoration: underline;
}

.wrapper .btn {
  width: 100%;
  height: 40px;
  background: #fff;
  outline: none;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  color: #000;
  margin-top: 10px;
}

.btn:hover {
  background: #ffffea;
}

.wrapper .signup-link {
  font-size: 0.9em;
  color: #fff;
  text-align: center;
  margin: 25px 0 10px;
}

.wrapper .signup-link a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.wrapper .signup-link a:hover {
  text-decoration: underline;
}

@media (max-width: 360px) {
  .wrapper {
    width: 100%;
    height: 100vh;
    border: none;
    border-radius: 0px;
  }

  .wrapper .input-box {
    width: 290px;
  }
}
</style>