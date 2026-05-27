<script>
    import '$styles/atlas.css';
    
    import DeclensionTable from './DeclensionTable.svelte';

    export let title = '';
    export let pattern = '';
    export let shapes = [];
</script>

<h2>{title}</h2>
<DeclensionTable {pattern} {shapes} />
<div class="content">
    <slot />
</div>
<!-- Hello -->