<script>
    // Výchozí skóre jako reaktivní stav
    let scores = {
        'blue': 0,
        'black': 0,
        'red': 0,
        'yellow': 0
    };

    // Výchozí jména hráčů
    let names = {
        'blue': 'Player 1',
        'black': 'Player 2',
        'red': 'Player 3',
        'yellow': 'Player 4'
    };

    function changeScore(color, amount) {
        scores[color] += amount;
        if (scores[color] < 0) scores[color] = 0;
        // Vytvoříme novou referenci objektu, aby Svelte zachytil změnu
        scores = { ...scores };
    }

    // Reaktivní řazení žebříčku – přepočítá se automaticky při každé změně skóre nebo jména
    $: leaderboard = Object.keys(scores)
        .map(color => ({
            color: color.toUpperCase(),
            name: names[color] || `Player (${color})`,
            score: scores[color]
        }))
        .sort((a, b) => b.score - a.score);
</script>

<div class="page-wrapper">
    <div class="container">
        <h1>Kroket - Zápis bodů</h1>
    
        <div id="players-container">
            <!-- blue -->
            <div class="player-card blue">
                <div class="player-info">
                    <span class="player-color-name">BLUE</span>
                    <input type="text" class="player-input-name" bind:value={names['blue']}>
                </div>
                <div class="score-section">
                    <button class="btn-score border-color back-blue" on:click={() => changeScore('blue', -1)}>-</button>
                    <span class="score-display">{scores['blue']}</span>
                    <button class="btn-score border-color back-blue" on:click={() => changeScore('blue', 1)}>+</button>
                </div>
            </div>
    
            <!-- black -->
            <div class="player-card black">
                <div class="player-info">
                    <span class="player-color-name">BLACK</span>
                    <input type="text" class="player-input-name" bind:value={names['black']}>
                </div>
                <div class="score-section">
                    <button class="btn-score border-color back-black white-plusminus" on:click={() => changeScore('black', -1)}>-</button>
                    <span class="score-display">{scores['black']}</span>
                    <button class="btn-score border-color back-black white-plusminus" on:click={() => changeScore('black', 1)}>+</button>
                </div>
            </div>
    
            <!-- red -->
            <div class="player-card red">
                <div class="player-info">
                    <span class="player-color-name">RED</span>
                    <input type="text" class="player-input-name" bind:value={names['red']}>
                </div>
                <div class="score-section">
                    <button class="btn-score border-color back-red" on:click={() => changeScore('red', -1)}>-</button>
                    <span class="score-display">{scores['red']}</span>
                    <button class="btn-score border-color back-red" on:click={() => changeScore('red', 1)}>+</button>
                </div>
            </div>
    
            <!-- yellow -->
            <div class="player-card yellow black-text">
                <div class="player-info">
                    <span class="player-color-name">YELLOW</span>
                    <input type="text" class="player-input-name black-text" bind:value={names['yellow']}>
                </div>
                <div class="score-section">
                    <button class="btn-score border-color back-yellow black-border" on:click={() => changeScore('yellow', -1)}>-</button>
                    <span class="score-display">{scores['yellow']}</span>
                    <button class="btn-score border-color back-yellow black-border" on:click={() => changeScore('yellow', 1)}>+</button>
                </div>
            </div>
        </div>
    
        <!-- Modrý blok Souhrn -->
        <div class="summary-box">
            <h2>Souhrn</h2>
            <ul class="leaderboard-list">
                {#each leaderboard as player, index}
                    <li class="leaderboard-item">
                        <div>
                            <span class="rank">{index + 1}.</span>
                            <span>{player.color} - {player.name}</span>
                        </div>
                        <strong>{player.score} b.</strong>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style>
    /* Přidej toto na začátek bloku <style> */
    .page-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }

    /* Globální reset pro ukázku (volitelně můžeš smazat, pokud máš globální styly) */
    :global(body) {
        background-color: #1f2021;
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .container {
        max-width: 500px;
        width: 100%;
        background: #229380;
        padding: 25px;
        border-radius: 16px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        box-sizing: border-box;
    }
    h1 {
        text-align: center;
        color: #f8f8f8;
        margin-bottom: 25px;
        font-size: 24px;
        margin-top: 0;
    }
    .player-card {
        border: 5px solid #000000;
        border-radius: 40px;
        padding: 15px 30px;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #f8f8f8;
    }
    .player-info {
        display: flex;
        flex-direction: column;
    }
    .player-color-name {
        font-size: 18px;
        font-weight: bold;
    }
    .player-input-name {
        border: none;
        border-bottom: 1px dashed #ffffff80;
        background-color: transparent;
        color: #f8f8f8;
        font-size: 16px;
        padding: 2px;
        margin-top: 4px;
        outline: none;
        width: 150px;
    }
    .player-input-name:focus {
        border-bottom-color: #ffffff;
    }
    .score-section {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .score-display {
        font-size: 32px;
        font-weight: bold;
        min-width: 45px;
        text-align: right;
    }
    .btn-score {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid transparent;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
    }
    .btn-score:hover {
        background: #ffffff80;
    }
    .btn-score:active {
        background: #08df3a !important;
        color: #000000 !important;
    }
    
    /* Barvy karet a tlačítek s opraveným kontrastem */
    .blue { background-color: #0d58a8; }
    .back-blue { background-color: #0f6dd1; color: #ffffff; }

    .black { background-color: #1c1a1a; }
    .back-black { background-color: #3d3939; color: #ffffff; }
    
    .red { background-color: #dc3545; }
    .back-red { background-color: #a82935; color: #ffffff; }
    
    .yellow { background-color: #eeb50d; color: #1c1c1c; }
    .yellow .player-input-name { color: #1c1c1c; border-bottom-color: #1c1c1c80; }
    .yellow .player-input-name:focus { border-bottom-color: #1c1c1c; }
    .back-yellow { background-color: #c49405; color: #ffffff; }
    
    .border-color { border-color: #f0f0f0; }
    .black-text { color: #1c1c1c; }
    .black-border { border-color: #1c1c1c; }
    .white-plusminus { color: #f8f8f8; }
    
    .summary-box {
        background-color: #4b0c86;
        color: #ffffff;
        padding: 25px;
        margin-top: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0,0,255,0.2);
    }
    .summary-box h2 {
        margin-top: 0;
        text-align: center;
        font-size: 22px;
        border-bottom: 2px solid rgba(255,255,255,0.3);
        padding-bottom: 10px;
    }
    .leaderboard-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .leaderboard-item {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        padding: 8px 0;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .leaderboard-item:last-child {
        border-bottom: none;
    }
    .rank {
        font-weight: bold;
        margin-right: 10px;
    }
</style>