<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body">
        <h3 class="row-loading">Loading <small>loading</small></h3>
        <hr>
        <div class="row">
          <div class="col-md-2">
            <div class="avatar-loading"></div>
          </div>
          <div class="col-md-10">
            <table class="table">
              <tr>
                <th class="row-loading">Nama</th>
                <td class="row-loading">Loading</td>
              </tr>
              <tr>
                <th class="row-loading">Nim</th>
                <td class="row-loading">Loading</td>
              </tr>
              <tr>
                <th class="row-loading">Fakultas</th>
                <td class="row-loading">Loading</td>
              </tr>
              <tr>
                <th class="row-loading">Program Studi</th>
                <td class="row-loading">Loading</td>
              </tr>
              <tr>
                <th class="row-loading">Tempat Tanggal Lahir</th>
                <td class="row-loading">Loading</td>
              </tr>
              <tr>
                <th class="row-loading">Alamat</th>
                <td class="row-loading">Loading</td>
              </tr>
              <tr>
                <th class="row-loading">Email</th>
                <td class="row-loading">Loading</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-body">
            <h3 class="row-loading">Data Akademik</h3>
            <hr>
            <table class="table">
              <tr>
                <th class="row-loading">IPK</th>
                <td class="row-loading">Loading</td>
              </tr>
              <tr>
                <th class="row-loading">Lama Studi</th>
                <td class="row-loading">Loading</td>
              </tr>
              <tr>
                <th class="row-loading">Tanggal Wisuda</th>
                <td class="row-loading">Loading</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-body">
            <h3 class="row-loading">Riwayat Pekerjaan</h3>
            <hr>
            <table class="table">
              <tr>
                <th class="row-loading">Pekerjaan</th>
                <td class="row-loading">Loading</td>
              </tr>
              <tr>
                <th class="row-loading">Posisi</th>
                <td class="row-loading">Loading</td>
              </tr>
              <tr>
                <th class="row-loading">Lama Bekerja</th>
                <td class="row-loading">Loading</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style type="text/css" scoped>
  .avatar-loading {
    width: 100%;
    height: 120px;
  }

  .row-loading small {
    opacity: 0;
  }

  .row-loading, .avatar-loading {
    color: transparent;
    display: inline-block;
    margin-bottom: 2px;
    background: linear-gradient(90deg, 
      rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)
    );
    opacity: 0.3;
    border-radius: 2px;
    -webkit-animation: Gradient 2s ease infinite;
    -moz-animation: Gradient 2s ease infinite;
    animation: Gradient 2s ease infinite;
    background-size: 200% 100%;
  }

  td.row-loading {
    float: right;
    min-width: 150px;
  }
  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
</style>