<script>
    import '$lib/assets/css/global.css';
    import { base } from '$app/paths';
    let { children } = $props();
</script>

<header class="atlas-header">
    <nav>
        <ul class="sec-nav">
            <li><a href="#opening">Úvod</a></li>
            <li><a href="#reality">Realita</a></li>
            <li><a href="#life">Život</a></li>
            <li><a href="#entity">Bytosti</a></li>
            <li><a href="#magic">Magie</a></li>
            <li><a href="#civilization">Civilizace</a></li>
            <li><a href="#systems">Seznamy</a></li>
            <li><a href="#lists">Seznamy</a></li>
        </ul>
    </nav>
</header>

<main>
	{@render children()}
</main>