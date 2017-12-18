<template>
  <div class="menu">
    <ul>
      <li>
        <a :class="{active: step === 1}">
          Pribadi <i class="fa fa-chevron-right"></i>
        </a>
      </li>
      <li>
        <a :class="{active: step === 2}">
          Akademik <i class="fa fa-chevron-right"></i>
        </a>
      </li>
      <li>
        <a :class="{active: step === 3}">
          Pekerjaaan <i class="fa fa-chevron-right"></i>
        </a>
      </li>
      <li>
        <a :class="{active: step === 4}">
          Foto <i class="fa fa-chevron-right"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['step']
  }
</script>

<style type="text/css" scoped>
  .menu {
    margin-right: -30px;
    padding-top: 15px;
  }

  .menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .menu ul a {
    cursor: pointer;
    display: block;
    padding: 10px;
    padding-left: 20px;
    color: rgb(150, 150, 150);
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }

  .menu ul a.active {
    text-decoration: none;
    /*background-color: #337ab7;*/
    background-color: rgb(80, 80, 80);
    color: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }

  .menu ul a:hover {
    text-decoration: none;
  }

  .menu ul a i.fa {
    float: right;
    color: rgb(140, 140, 140);
  }

  .menu a.active .fa {
    color: white;
  }
</style>