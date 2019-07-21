<template>
  <div id="app">
    <router-view />
    <Footernav />
  </div>
</template>

<script>
    import FooterNav from "@/components/FooterNav.vue";
    export default{
      data(){
        return{

        }
      },
      methods:{
        fontsize(){
          const html=document.querySelector("html");
          let fsize=window.innerWidth/10;
          fsize = fsize>50 ? 50 : fsize;
          html.style.fontSize = fsize + "px";
        }
      },
      components:{
       Footernav:FooterNav,
      },
      mounted(){
        this.fontsize();
      }
    }
</script>

<style lang="scss">



</style>
