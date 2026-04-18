<script>
    import '../../../lib/assets/css/global.css';
    import { base } from '$app/paths';

    let { children } = $props();
</script>

<header class="about">
    <nav>
        <ul class="about-nav">
            <li><a href="{base}/about/me">PLACEHOLDER</a></li>
            <li><a href="{base}/about/me">PLACEHOLDER</a></li>
            <li><a href="{base}/about/me">PLACEHOLDER</a></li>
            <li><a href="{base}/about/me">PLACEHOLDER</a></li>
            <li><a href="{base}/about/me">PLACEHOLDER</a></li>
            <li><a href="{base}/about/me">PLACEHOLDER</a></li>
            <li><a href="{base}/about/me">PLACEHOLDER</a></li>
        </ul>
    </nav>
</header>

<main>
	{@render children()}
</main>