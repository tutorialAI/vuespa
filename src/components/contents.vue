<template lang="html">
  <div class="container">
    <span class="section_name">
      DASHBOARDS
    </span>
    <div class="fm col-sm-8">
            <div class="border-top col-sm-12 row">
              <div class="input-group col-sm-10">
                <input type="text" class="form-control " placeholder="Добавьте что-нибдь в список своих дел...">
                <div class="bpt">
                  <!-- <button type="button" class="cg ns yf">
                    <span class="h bao">go</span>
                  </button> -->
                </div>
              </div>
              <div class="col-sm-2">
                <div class="add_post rounded-circle main_bg" @click="addTask()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                </div>
              </div>
            </div>
            <div class="col-sm-12 row task_list">
              <!-- <div class="border-bottom clear sf">
                <div class="col-sm-2">
                  <img class="rounded-circle" src="src/assets/img/avatar/avatar-dhg.png">
                </div>
                <div class="col-sm-10">
                  <div class="bpb">
                    <small class="acx axc">4 min</small>
                    <h6>Dave Gamache</h6>
                  </div>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  </p>
                </div>
              </div> -->
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data: {
    num: 123,
    taskBox: "document.getElementsByClassName('task_list')[0]"
  },
  methods:{
    addTask: function(){
      alert(this.num)
    }
  }
}
</script>

<style lang="css" scoped>
  .sf{
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;

  }
  .border-top{
    border: solid 1px #aeaeae;
    padding: 25px;
    border-radius: 5px 5px 0 0;
  }
  .border-bottom{
    border: solid 1px #aeaeae;
    padding: 25px;
    border-radius: 0 0 5px 5px;
  }
  .add_post{
    width: 50px;
    height: 50px;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    cursor: pointer;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
  }
</style>
