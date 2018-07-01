<template>
  <div class="header-container">
    <header>
      <div class="container">
        <div class="row">
          <div class="col-sm-10 col-sm-offset-1">
            <div class="row">
              <div class="col-sm-8">
                <h1>Menjaga data alumni agar tidak hilang.</h1>
                <p>
                  Platform Tracer Study ini digunakan sebagai tempat/portal di mana semua data alumni tersimpan di dalamnya. Data bisa digunakan untuk melihat pekerjaan alumni, data akademik, melanjutkan studi atau tidak, dan sebagainya.
                </p>
                <div class="btn-group">
                  <router-link to="/tracer-study/mahasiswa" class="btn btn-primary btn-lg">
                    Lihat Semua Alumni
                  </router-link>
                  <!-- <router-link to="/tracer-study/tracer-study" class="btn btn-lg btn-default">
                    Cari Mahasiswa
                  </router-link> -->
                </div>
              </div>
              <div class="col-sm-4">
                <img src="../../../assets/mortarboard.png" style="width: 100%">
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style type="text/css" scoped>
  .header-container {
    margin-top: -20px;
    background-color: black;
    background-image: url("https://www.transparenttextures.com/patterns/exclusive-paper.png");
  }

  header {
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    color: rgb(240, 240, 240);
    transform: translateY(-20px);
    padding-top: 150px;
    padding-bottom: 200px;
  }

  header h1 {
    font-size: 40pt;
  }

  header p {
    font-size: 15pt;
    color: rgb(150, 150, 150);
  }
</style>