<script>
    import '$styles/transport.css';

    let { categories = [], selected = null, onSelect } = $props();
</script>

<nav class="category-tabs">
    {#each categories as cat}
        <button
          class="category-tabs-item"
          class:active={selected === cat}
          onclick={() => onSelect(cat)}
        >
            {cat}
        </button>
    {/each}
</nav>