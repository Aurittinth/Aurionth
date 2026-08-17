<script>
    import '$styles/atlas.css';

    export let scientific = [];
    export let linguistic = [];
    export let popular = [];
</script>

<div class="classification">
    <span>Označení:</span>

    <table>
        <tbody>
            <tr>
                <th>Vědecké:</th>
                <td>{scientific[0] ?? '—'}</td>
                <td>{scientific[1] ? `[${scientific[1]}]` : '—'}</td>
            </tr>

            <tr>
                <th>Jazykové:</th>
                <td>{linguistic[0] ?? '—'}</td>
                <td>{linguistic[1] ? `[${linguistic[1]}]` : '—'}</td>
            </tr>

            {#if popular.length > 0}
                <tr>
                    <th class="verticalTop" rowspan={popular.length}>Lidové:</th>
                    <td>
                        {#each popular as name}
                            <div>{name[0] || '—'}</div>
                        {/each}
                    </td>
                    <td>
                        {#each popular as name}
                            <div>{name[1] ? `[${name[1]}]` : '—'}</div>
                        {/each}
                    </td>
                </tr>
            {:else}
                <tr>
                    <th class="verticalTop">Lidové:</th>
                    <td>—</td>
                    <td>—</td>
                </tr>
            {/if}
        </tbody>
    </table>
</div>