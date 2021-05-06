<template>
<div id="about" class="container max-w-7xl mx-auto pt-16 md:pt-32 break-normal">
    <h1 class="font-black uppercase text-3xl">Podcast</h1>
    <agile>
            <div class="slide">
                <iframe src="https://widget.spreaker.com/player?show_id=1433865" width="100%" height="200px" frameborder="0"></iframe>
            </div>
            
            
            
            <div class="slide">
                <iframe src="https://widget.spreaker.com/player?show_id=1433865" width="100%" height="200px" frameborder="0"></iframe>
            </div>
        </agile>
        <div class="container max-w-7xl mx-auto text-center break-normal">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Altro
                    </button>
		</div>	
</div>
</template>

<script>
import Vue from 'vue'
import VueAgile from 'vue-agile'

Vue.use(VueAgile)
export default {
}
</script>

<style>

</style>