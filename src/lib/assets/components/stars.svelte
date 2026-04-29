<script>
	import { onMount } from 'svelte';

	let stars = $state([]);

	onMount(() => {
    const count = Math.floor(Math.random() * 320 + 80); // 80 až 400 hvězd

    stars = Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 0.5,
			opacity: Math.random() * 0.75 + 0.1
    }));
});
</script>

<div class="stars">
	{#each stars as star}
		<div
			class="star"
			style="
				left: {star.x}%;
				top: {star.y}%;
				width: {star.size}px;
				height: {star.size}px;
				opacity: {star.opacity};
				">
		</div>
	{/each}
</div>