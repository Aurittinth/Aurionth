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
            {#each row as sign (sign.id)}
                <button
                    class="sign-grid-box"
                    class:active={selectedSign?.id === sign.id}
                    onclick={() => onSelect(sign)}
                >
                    <img class="sign-grid-thumb" src={sign.imageSrc} alt={sign.name} />
                    <span class="sign-grid-label">{sign.code || sign.name}</span>
                </button>
            {/each}
        </div>

        {#if row.some((sign) => sign.id === selectedSign?.id)}
            <SignDetail sign={selectedSign} />
        {/if}
    {/each}
</div>