<script>
    import '$lib/assets/css/global.css';
    import { base } from '$app/paths';

    let { children } = $props();
</script>

<header class="about-header">
    <nav>
        <ul class="sec-nav">
            <li><a href="#who-am-i">Představení</a></li>
            <li><a href="#why-create">Účel</a></li>
            <li><a href="#what-inspire">Inpirace</a></li>
            <li><a href="#and-me">O mně</a></li>
        </ul>
    </nav>
</header>

<main>
	{@render children()}
</main>