<script>
    import '$lib/assets/css/global.css';
    import { base } from '$app/paths';

    let { children } = $props();
</script>

<header class="about-header">
    <nav>
        <ul class="sec-nav">
            <li><a href="#about-what">Identita</a></li>
            <li><a href="#about-born">Vznik</a></li>
            <li><a href="#about-essence">Podstata</a></li>
            <li><a href="#about-definition">Definice</a></li>
            <li><a href="#about-findings">Obsah</a></li>
            <li><a href="#about-author">Autor</a></li>
            <li><a href="#about-finish">Dokončení</a></li>
        </ul>
    </nav>
</header>

<main>
	{@render children()}
</main>