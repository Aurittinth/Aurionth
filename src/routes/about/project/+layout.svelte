<script>
    import '../../../lib/assets/css/global.css';
    import { base } from '$app/paths';

    let { children } = $props();
</script>

<header class="about">
    <nav>
        <ul class="about-nav">
            <li><a href="#ap-what">Co to je?</a></li>
            <li><a href="#ap-born">Jak to vzniklo?</a></li>
            <li><a href="#ap-essence">Jaké je podstata?</a></li>
            <li><a href="#ap-definition">A cože to vlastně je?</a></li>
            <li><a href="#ap-findings">A co zde najdeme?</a></li>
            <li><a href="#ap-author">A kdože je tvůrce?</a></li>
            <li><a href="#ap-finish">A kdy bude hotov?</a></li>
        </ul>
    </nav>
</header>

<main>
	{@render children()}
</main>