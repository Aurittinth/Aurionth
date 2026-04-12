<script>
    import { base } from '$app/paths';
	
	import favicon from '../lib/assets/images/favicon/favicon.svg';
	import '../lib/assets/css/global.css';
	import Stars from '../lib/assets/components/stars.svelte';
	import logo from '../lib/assets/images/favicon/aurionth-logo-favicon.svg';
	import GitHubIcon from '../lib/assets/images/icons/GitHub_Invertocat_White_Clearspace.svg';
	import GmailIcon from '../lib/assets/images/icons/Gmail_icon_(2020).svg';

	let { children } = $props();

	import { onMount } from 'svelte';

	let orbs = $state([]);

	onMount(() => {
		orbs = Array.from({ length: 5 }, () => ({
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: Math.random() * 300 + 200,
			color: ['#5030c0', '#2050a0', '#8040a0', '#6040c0', '#3040b0'][Math.floor(Math.random() * 5)]
		}));
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet" />
</svelte:head>

<Stars />

{#each orbs as orb}
	<div
		class="glow-orb"
		style="
			left: {orb.x}%;
			top: {orb.y}%;
			width: {orb.size}px;
			height: {orb.size}px;
			background: {orb.color};
		"
	></div>
{/each}

<header>
	<nav>
		<a href="{base}/">
			<img src={logo} alt="Aurionth Logo" class="nav-logo" />
		</a>
		<ul class="nav-links">
			<li><a href="{base}/">xyz.ath</a></li>
			<li><a href="{base}/">xyz.ath</a></li>
			<li><a href="{base}/">xyz.ath</a></li>
			<li><a href="{base}/">xyz.ath</a></li>
			<li><a href="{base}/">xyz.ath</a></li>
		</ul>
	</nav>
</header>

<main>
	{@render children()}
</main>

<footer>
	<div class="footer-inner">
		<div class="footer-col">
			<span class="footer-title">Kontakty</span>
			<ul>
				<li>
					<img src={GitHubIcon} alt="GitHub Icon" class="footer-icon-github">
					<a href="https://github.com/Aurittinth" target="_blank">@Aurittinth</a>
				</li>
				<li>
					<img src={GmailIcon} alt="Gmail Icon" class="footer-icon-gmail">
					<a href="mailto:aurionth.files@gmail.com">aurionth.files@gmail.com</a>
				</li>
			</ul>
		</div>
		<div class="footer-col">
			<span class="footer-title">Navigace</span>
			<ul>
				<li><a href="{base}/">xyz.cz</a></li>
				<li><a href="{base}/">xyz.cz</a></li>
				<li><a href="{base}/">xyz.cz</a></li>
				<li><a href="{base}/">xyz.cz</a></li>
				<li><a href="{base}/contact">Kontakt</a></li>
				<li><a href="{base}/about-project">O projektu</a></li>
			</ul>
		</div>
	</div>
	
	
	<div class="footer-bottom">
		<a href="{base}/"><img src={logo} alt="Aurionth Logo" class="footer-logo"></a>
		<p>&copy;2026<br>Všechna práva vyhrazena</p>
	</div>
</footer>