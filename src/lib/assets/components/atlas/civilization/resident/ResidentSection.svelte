<script>
    import '$lib/assets/css/atlas.css';
    
    import DeclensionTable from './DeclensionTable.svelte';

    export let title = '';     // např. "Humikus"
    export let pattern = '';
    export let shapes = [];
</script>

<h2>{title}</h2>
<DeclensionTable {pattern} {shapes} />
<div class="content">
    <slot />
</div>