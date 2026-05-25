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
	import Stars from '$lib/assets/components/Stars.svelte';

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

	function closeMenu() {
        menuOpen = false;
    }

    let openSubmenu = $state(null);
    
    function toggleSubmenu(name) {
        openSubmenu = openSubmenu === name ? null : name;
    }

	function arrow(name) {
		return openSubmenu === name ? '☷' : '☰'; // close : open status
}
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

<!-- Floating navigation and logo bar -->
<div class="floating-bar">
    <a href="{base}/">
        <img src={logo} alt="Aurionth Logo" class="nav-logo" />
    </a>
    <button class="hamburger" onclick={() => menuOpen = !menuOpen} aria-label="Menu">
        ☰
    </button>
</div>

<!-- Overlay -->
{#if menuOpen}
    <div class="drawer-overlay" onclick={closeMenu} aria-hidden="true"></div>
{/if}

<!-- Drawer menu -->
<aside class="drawer" class:drawer-open={menuOpen} aria-hidden={!menuOpen}>
    <div class="drawer-header">
        <img src={logo} alt="Aurionth" class="drawer-logo" />
        <button class="drawer-close" onclick={closeMenu} aria-label="Zavřít menu">☷</button>
    </div>

    <nav class="drawer-nav">
        <ul>
            <li><a href="{base}/" onclick={closeMenu} class="disable">XYZ.ATH</a></li>

            <li class="has-submenu">
                <button
					class="submenu-toggle"
					onclick={() => toggleSubmenu('atlases')}
					aria-expanded={openSubmenu === 'atlases'}
					class:is-open={openSubmenu === 'atlases'}
				>
                    Atlasy
					<span class="submenu-arrow">{arrow('atlases')}</span>
                </button>
                {#if openSubmenu === 'atlases'}
                    <ul class="submenu">
                        <li><a href="{base}/atlases" onclick={closeMenu}>Úvod</a></li>
                        <li class="disable"><a href="{base}/atlases/reality" onclick={closeMenu}>Realita</a></li>
                        <li class="disable"><a href="{base}/atlases/life" onclick={closeMenu}>Život</a></li>
                        <li class="disable"><a href="{base}/atlases/entity" onclick={closeMenu}>Bytosti</a></li>
                        <li class="disable"><a href="{base}/atlases/magic" onclick={closeMenu}>Magie</a></li>
                        <li class="disable"><a href="{base}/atlases/civilization" onclick={closeMenu}>Civilizace</a></li>
                        <li class="disable"><a href="{base}/atlases/systems" onclick={closeMenu}>Seznamy</a></li>
                        <li class="disable"><a href="{base}/atlases/lists" onclick={closeMenu}>Seznamy</a></li>
                    </ul>
                {/if}
            </li>
            
            <li><a href="{base}/languages" onclick={closeMenu} class="disable">Jazyky</a></li>

            <li class="has-submenu">
                <button
					class="submenu-toggle"
					onclick={() => toggleSubmenu('about')}
					aria-expanded={openSubmenu === 'about'}
					class:is-open={openSubmenu === 'about'}
				>
                    O nás
					<span class="submenu-arrow">{arrow('about')}</span>
                </button>
                {#if openSubmenu === 'about'}
                    <ul class="submenu">
                        <li><a href="{base}/about/me"     	onclick={closeMenu}>O tvůrci</a></li>
                        <li><a href="{base}/about/project"	onclick={closeMenu}>O projektu</a></li>
                        <li><a href="{base}/about/licence"	onclick={closeMenu}>Licence</a></li>
                    </ul>
                {/if}
            </li>
        </ul>
    </nav>
</aside>

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
					<a href="https://github.com/Aurittinth" target="_blank">
						@Aurittinth
					</a>
				</li>
				<li>
					<img src={GmailIcon} alt="Gmail Icon" class="footer-icon-gmail">
					<a href="mailto:aurionth.files@gmail.com">
						aurionth.files@gmail.com
					</a>
				</li>
			</ul>
		</div>
		<div class="footer-col">
			<div class="footer">
				<span class="footer-title">Navigace</span>
				<ul>
					<li><a href="{base}/" class="disable">xyz.cz</a></li>
					<li><a href="{base}/atlases">Atlasy</a></li>
					<li><a href="{base}/languages" class="disable">Jazyky</a></li>
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