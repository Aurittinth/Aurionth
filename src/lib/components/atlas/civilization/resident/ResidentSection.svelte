<script>
    import '$styles/atlas.css';

    import declensionData from '$data/atlases/civilization/resident.json';
    import DeclensionTable from './DeclensionTable.svelte';

    export let title = '';
    export let key = '';
    
    $: ({ pattern, shapes } = declensionData[key] ?? { pattern: '', shapes: [] });
</script>

<h2>{title}</h2>
<DeclensionTable {pattern} {shapes} />
<div class="content">
    <slot />
</div>