<script>
	/* CSS imports */
	import '$lib/assets/css/global.css';

	/* JS imports */
	import { afterNavigate } from '$app/navigation';
	import { fixOrphans } from '$lib/assets/js/typography.js';
	
	/* Favicon */
	import favicon from '$lib/assets/images/favicon/ath-favicon.ico';

	/* Images imports */
	import logo from '$lib/assets/images/logo/aurionth-logo.svg';
	import GitHubIcon from '$lib/assets/images/icons/GitHub_Invertocat_White_Clearspace.svg';
	import GmailIcon from '$lib/assets/images/icons/Gmail_icon_(2020).svg';
	
	/* Componets and Other imports */
    import { base } from '$app/paths';
	import Stars from '$lib/assets/components/stars.svelte';

	/* Other JavaScript Properties */ 
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

	afterNavigate(() => {
		const main = document.querySelector('main');
		if (main) fixOrphans(main);
	});

    let menuOpen = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
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
        
        <button class="hamburger" onclick={() => menuOpen = !menuOpen} aria-label="Menu">
            {#if menuOpen}✕{:else}☰{/if}
        </button>

        <ul class="nav-links" class:open={menuOpen}>
            <!-- Začátek (levo) navigace -->
            <li><a href="{base}/" onclick={() => menuOpen = false}>XYZ.ATH</a></li>
            <li><a href="{base}/atlases" onclick={() => menuOpen = false}>Atlasy</a></li>
            <li><a href="{base}/languages" onclick={() => menuOpen = false}>Jazyky</a></li>
            <li><a href="{base}/about/project" onclick={() => menuOpen = false}>About</a></li>
            <!-- Konec (pravo) navigace -->
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
			<div class="footer">
				<span class="footer-title">Navigace</span>
				<ul>
					<li><a href="{base}/">xyz.cz</a></li>
					<li><a href="{base}/atlases">Atlasy</a></li>
					<li><a href="{base}/languages">Jazyky</a></li>
					<li><a href="{base}/about/me">O tvůrci</a></li>
					<li><a href="{base}/about/project">O projektu</a></li>
				</ul>
			</div>
		</div>
	</div>
	
	
	<div class="footer-bottom">
		<a href="{base}/"><img src={logo} alt="Aurionth Logo" class="footer-logo"></a>
		<p>
			&copy;2026<br>
			Všechna práva vyhrazena
		</p>
	</div>
</footer>