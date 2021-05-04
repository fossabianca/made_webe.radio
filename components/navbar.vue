<template>

<div class="h-screen w-screen flex bg-gray-200">
	<!-- container -->

	<aside
		class="flex flex-col items-center bg-white text-gray-700 shadow h-full">
		<!-- Side Nav Bar-->

		<div class="h-16 flex items-center w-full my-10">
			<!-- Logo Section -->
			<a class="h-15 w-15 mx-auto" href="#">
				<img
					class="h-12 w-12 mx-auto"
					src="~/assets/img/logo.png"
					alt="logo" />
			</a>
		</div>

		<ul>
			<!-- Items Section -->
			<li class="hover:bg-gray-100 mt-8">
				<a
					href="."
					class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500">
					<img class="h-10 w-12" src="~/assets/img/icona_home.png" alt="">

				</a>
			</li>

			<li class="hover:bg-gray-100 mt-8">
				<a
					href="."
					class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500">
					<img class="h-10 w-12" src="~/assets/img/icona_cuffie.png" alt="">
                    

				</a>
			</li>

			<li class="hover:bg-gray-100 mt-8">
				<a
					href="."
					class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500">

					<img class="h-12 w-12" src="~/assets/img/icona_news.png" alt="">

				</a>
			</li>

			<li class="hover:bg-gray-100 mt-8">
				<a
					href="."
					class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500">
					<img class="h-12 w-12" src="~/assets/img/icona_punto_interrogativo.png" alt="">

				</a>
			</li>   

		</ul>
	</aside>
    <home></home>
</div>

</template>
<script>
export default {}
</script>