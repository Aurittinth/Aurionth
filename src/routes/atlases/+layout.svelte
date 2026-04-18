<script>
    import '$lib/assets/css/global.css';
    import { base } from '$app/paths';
    let { children } = $props();
</script>

<header class="atlas-header">
    <nav>
        <ul class="sec-nav">
            <li>FIRST</li>
            <li>SECOND</li>
            <li>THIRD</li>
            <li>FOURTH</li>
        </ul>
    </nav>
</header>

<main>
	{@render children()}
</main>