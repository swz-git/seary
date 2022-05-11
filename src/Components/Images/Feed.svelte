<script>
  import FeedItem from "./FeedItem.svelte";
  export let resultTime;
  export let data;
  let feed = data.results;
</script>

<div class="page">
  {#if resultTime > 0}
    <p class="resultTime">
      Took {resultTime / 1000}s
    </p>
  {/if}
  <div class="feed">
    {#each feed as feedItem}
      <FeedItem data={feedItem} />
    {/each}
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
  .feed {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.2rem;
  }
  .resultTime {
    margin-bottom: 0;
  }
</style>
