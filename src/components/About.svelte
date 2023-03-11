<script>
    let aboutMessage = "Software Developer";
    let count = 0;
    let styles = {darkMode: false}

    function handleClick() {
        count+= 1;
    } 

    function toggleStyleMode() {
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle("dark-mode");
    }
    
</script>

<style>
    p {
		color:var(--theme-color);
		font-size: 20px;
	}

    button {
    color: #090909;
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    background: var(--theme-color);
    border: 1px solid var(--theme-color);
    transition: all .3s;
    box-shadow: 6px 6px 12px #c5c5c5,
                -6px -6px 12px #ffffff;
    }

    button:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5,
                inset -4px -4px 12px #ffffff;
    }

</style>

<div class="About">

    {#if !styles.darkMode}
        <p>{aboutMessage}</p>
    {:else}
        <p>White mode</p>
    {/if}

    <button on:click={handleClick}>Click! {count == 0? '' : count}</button>
    <button on:click={toggleStyleMode}>DarkMode</button>
</div>