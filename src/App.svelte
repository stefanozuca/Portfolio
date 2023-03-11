<script>
	import About from "./components/About.svelte";
	import Text from "./components/Text.svelte";
	import Person from "./components/Person.svelte";
    import Skills from "./components/Skill.svelte";

	export let name;
	export let lastName;
	let backgroundImage = 'https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=220'

	const personData = {
		name:"Stefano",
		lastName:"Zucarelli",
		age:25
	}
</script>

<style>
	:global(body) {
		background-color: var(--theme-color);
		color: aliceblue;
	}

	:global(:root) {
		--theme-color:#e8e8e8;
	}

	:global(body.dark-mode) {
		background-color: darkgrey;
		color: blue;
	}
	
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello {name} {lastName}!</h1>

	<About/>
	<Text anotherText="Hola!" />
	<Text  />
	<Person {...personData}></Person>
	<Skills/>

	<img src="{backgroundImage}" alt="">

</main>
