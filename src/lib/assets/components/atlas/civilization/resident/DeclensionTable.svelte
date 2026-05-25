<script>
    import '$lib/assets/css/atlas.css';

    export let pattern = '';     // např. "Pán"
    export let shapes = [];    // pole objektů [{ jednotne, mnozne }, ...]
</script>

<div class="declension-wrapper">
    <p class="declension-title">Deklinace</p>
    <div class="declension-divider"></div>
    <p class="declension-pattern">{pattern}</p>
    <table class="declension-table">
        <thead>
            <tr>
                <th>pád</th>
                <th>jednotné</th>
                <th>množné</th>
            </tr>
        </thead>
        <tbody>
            {#each shapes as shape, i}
                <tr>
                    <td class="number">{i + 1}.</td>
                    <td>{shape.single}</td>
                    <td>{shape.plural}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<div class="after-table-divider"></div>