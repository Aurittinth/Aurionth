<script>
    import '$styles/transport.css';
    import SignDetail from '$components/atlas/system/transport/SignDetail.svelte';

    let { signs = [], selectedSign = null, onSelect } = $props();

    const rowSize = 5;

    function chunkSigns(items) {
        const rows = [];

        for (let i = 0; i < items.length; i += rowSize) {
            rows.push(items.slice(i, i + rowSize));
        }

        return rows;
    }

    let signRows = $derived(chunkSigns(signs));
</script>

<div class="sign-grid">
    {#each signRows as row, rowIndex (`row-${rowIndex}`)}
        <div class="sign-grid-row">
            {#each row as sign (sign.ID)}
                <button
                    class="sign-grid-box"
                    class:active={selectedSign?.ID === sign.ID}
                    onclick={() => onSelect(sign)}
                >
                    <img class="sign-grid-thumb" src={sign.svgPath} alt={sign.name} />
                    <span class="sign-grid-label">{sign.shortName || sign.name}</span>
                </button>
            {/each}
        </div>

        {#if row.some((sign) => sign.ID === selectedSign?.ID)}
            <SignDetail sign={selectedSign} />
        {/if}
    {/each}
</div>