<script>
  import FeedItem from "./FeedItem.svelte";
  import InfoBox from "./InfoBox.svelte";
  export let resultTime;
  export let data;
  let feed = data.results;
  let infoboxes = data.infoboxes;
</script>

<div class="page">
  {#if resultTime > 0}
    <p class="resultTime">
      Took {resultTime / 1000}s
    </p>
  {/if}
  <div class="stuff">
    <div class="feed">
      {#each feed as data}
        <FeedItem {data} />
      {/each}
    </div>
    <div class="infoboxes">
      {#each infoboxes as data}
        <InfoBox {data} />
      {/each}
    </div>
  </div>
</div>

<style scoped>
  .page {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    padding: 0 1.5rem;
  }
  .stuff {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    gap: 1rem;
  }
  .feed,
  .infoboxes {
    display: flex;
    height: 100%;
    /* width: 100%; */
    flex-direction: column;
  }
  .resultTime {
    margin-bottom: 0;
  }
</style>
