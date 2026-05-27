<script>
    import '$lib/assets/css/atlas.css';

    export let pattern = '';
    export let shapes = [];
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
                    <td>
                        {shape.singular}
                        {#if shape.alterSingular}
                            {#each shape.alterSingular as alt}
                                <span class="alternative">{alt}</span>
                            {/each}
                        {/if}
                    </td>
                    <td>
                        {shape.plural}
                        {#if shape.alterPlural}
                            {#each shape.alterPlural as alt}
                                <span class="alternative">{alt}</span>
                            {/each}
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<div class="after-table-divider"></div>