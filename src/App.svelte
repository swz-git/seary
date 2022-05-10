<script>
  import stylesheet from "./style.css";
  import WebFeed from "./Components/Web/Feed.svelte";
  document.title = window.env.APPNAME;
  document.setFavicon("/assets/search_icon.svg");

  const urlParams = new URLSearchParams(window.location.search);
  let searchInput = urlParams.get("q");

  let feed = [];
  let resultTime = 0;
  let currentlyLoading = false;
  let lastSearch = "";

  async function search(term) {
    let startTime = new Date().getTime();
    lastSearch = term;
    currentlyLoading = true;
    let req = await fetch(`https://${window.env.SEARXDOMAIN}/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        category_general: 1,
        q: term,
        pageno: 1,
        time_range: "None",
        language: "en-US",
        format: "json",
        engines: "google,bing,brave",
      }),
    }).catch((e) => {
      currentlyLoading = false;
      throw e;
    });
    currentlyLoading = false;
    let data = await req.json();
    let endTime = new Date().getTime();
    feed = data.results;
    resultTime = endTime - startTime;
    console.log;
  }

  if (searchInput) {
    search(searchInput);
  }

  function keydown(e) {
    console.log(e);
    if (e.key === "Enter") {
      window.location = "/?q=" + e.target.value;
    }
  }

  function images() {
    window.location = `https://duck.com/?q=${lastSearch}&ia=images&iax=images`;
  }
</script>

<main>
  <header>
    <div class="topHeader">
      <p class="title">{window.env.APPNAME}</p>
      <input type="text" on:keydown={keydown} value={searchInput} />
      <img src="/assets/search_icon.svg" class="search" alt="Search" />
    </div>
    <div class="bottomHeader">
      <p class="active">Web</p>
      <p on:click={images}>Images</p>
    </div>
  </header>
  <div class="content">
    {#if currentlyLoading}
      <h1>Loading results</h1>
    {/if}
    {#if !currentlyLoading}
      <WebFeed data={feed} {resultTime} />
    {/if}
  </div>
</main>

<link rel="stylesheet" type="text/css" href={stylesheet} />
