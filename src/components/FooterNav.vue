<template>
	<div id="nav">
		<ul>
			<li>
				<router-link :to="{name:'home'}" exact-active-class="footactive">
					<span class="iconfont icon-shouye" ></span>
					<span class="footspantxt">首页</span>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'search'}" exact-active-class="footactive">
					<span class="iconfont icon-sousuo" ></span>
					<span class="footspantxt">搜索</span>
				</router-link>

			</li>
			<li>
				<router-link :to="{name:'order'}" exact-active-class="footactive">
					<span class="iconfont icon-T-talk" ></span>
					<span class="footspantxt">订单</span>
				</router-link>

			</li>
			<li>
				<router-link :to="{name:'personal'}" exact-active-class="footactive">
					<span class="iconfont icon-xingming" ></span>
					<span class="footspantxt">我的</span>
				</router-link>

			</li>
		</ul>
		
	</div>
</template>


<script>

	export default {

		data () {
			return {

			}
		}

	}

</script>


<style lang="scss">
@import "@/assets/style/global.scss";
#nav{
	width:100%;
	height:pxrem(60);
	display:flex;
	align-items:center;
	position:fixed;
	bottom:0px;
	border-top:1px solid #eee;
	ul{
		display:flex;
		flex:1 1 auto;
		flex-flow:row wrap;
		justify-content:space-around;
		align-items:center;
		li{
			
			a{
				display:flex;
				flex-flow:column wrap;
				align-items:center;
				span{
					font-size:pxrem(15);
				}
				span.iconfont {
					font-size:pxrem(22);
				}
				span.footspantxt{

					margin-top:pxrem(5);
				}

			}
		}
	}
}
.footactive {
  color:green!important;
}

</style>