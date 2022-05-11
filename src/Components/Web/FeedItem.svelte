<script>
  export let data;
</script>

<div class="feedItem">
  <div class="top">
    <p class="url">{data.url}</p>
    <p class="engines">{data.engines.join(", ")}</p>
  </div>
  <a href={data.url}>{data.title}</a>
  <p class="description">{data.content || ""}</p>
</div>

<style scoped>
  .feedItem {
    display: flex;
    height: fit-content;
    max-width: 50rem;
    flex-direction: column;
    margin-top: 2rem;
  }
  .feedItem:nth-child(2) {
    margin-top: 0.5rem;
  }
  .top {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
  }
  .url {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .engines {
    color: var(--color-foreground-2);
  }
  a,
  p {
    margin: 0.25rem 0px;
    text-align: left;
  }
  .top > * {
    margin: 0px;
  }
  a {
    color: var(--color-accent-2);
    text-decoration: none;
    font-size: 1.2rem;
  }
  div:hover > a {
    text-decoration: underline;
  }
</style>
