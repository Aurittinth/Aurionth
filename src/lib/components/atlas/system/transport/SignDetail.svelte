<script>
    import '$styles/transport.css';
    
    let { sign = null } = $props();
</script>

{#if sign}
    <div class="sign-detail">
        <div class="sign-detail-description">
            <h3>{sign.name}</h3>
            <span>{sign.id} | {sign.code} | {sign.categoryCode}</span>
            <p>{sign.description}</p>
            <ul class="sign-detail-colors">
                {#each sign.color as c}
                    <li style="background-color: {c}">{c}</li>
                {/each}
            </ul>
        </div>
        <div class="sign-detail-image">
            <img src={sign.imageSrc} alt={sign.name} />
        </div>
    </div>
{/if}