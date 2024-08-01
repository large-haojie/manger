<template>
    <div class="fillcontain">
        <head-top></head-top>
        <data-table :myTableTemp='myTableTemp'></data-table>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
	import dataTable from '../components/table'

    import { myTableTemp } from '../constants/tableTemplate'
    export default {
    	components: {
    		dataTable,
            headTop
    	},
        data(){
            return {
                myTableTemp
            }
        },
        mounted(){
         cb.models.register('model',  () => {
            return this
         })
        },
        mounted(){
            console.log('object :>> ', this.$route);
        //  cb.models.register('model',  () => {
        //     return this
        //  })
        }
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.explain_text{
		margin-top: 20px;
		text-align: center;
		font-size: 20px;
		color: #333;
	}
</style>
