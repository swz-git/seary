<script>
  export let data;
</script>

<div class="infoBox">
  <div class="textStuff">
    <a href={data.id}><h1>{data.infobox}</h1></a>
    <p>{data.content}</p>
  </div>
  {#if data.img_src}
    <img
      src="https://swz-imageproxy.herokuapp.com/x/{data.img_src}"
      alt={data.infobox}
      loading="lazy"
    />
  {/if}
</div>

<style scoped>
  .infoBox {
    display: flex;
    flex-direction: row;
    border-radius: 1.125rem;
    background-color: var(--color-background);
    margin-bottom: 1rem;
    padding: 1rem;
    width: min-content;
    gap: 2rem;
  }
  .textStuff {
    width: 18rem;
    display: flex;
    flex-direction: column;
  }
  img {
    width: 20vh;
    height: fit-content;
  }
</style>
