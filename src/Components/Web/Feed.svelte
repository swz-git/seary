<script>
  import FeedItem from "./FeedItem.svelte";
  export let resultTime;
  export let data = [
    {
      url: "https://test.com/",
      title: "Test.com: Home",
      content:
        "An Internet Speed Test A COVID Test A Testing And Certification Platform A Lab Test Location ... An SAT Practice Test USMLE Step 1 Practice Tests",
      engine: "google",
      parsed_url: ["https", "test.com", "/", "", "", ""],
      engines: ["brave", "google"],
      positions: [1, 2],
      is_onion: false,
      score: 3,
      category: "general",
      pretty_url: "https://test.com/",
    },
    {
      url: "http://web-us.com/BRAIN/braindominance.htm",
      title: "Hemispheric Dominance Test determine if your left or right ...",
      content:
        "Hemispheric Dominance Test determine if your left or right brain hemisphere is dominant,mind altering brainwave syncronization audio tapes using binaural sound technology for brainwave entrainment. Enhance intelligence improve memory create altered states of consciousness meditation relaxation tapes",
      engine: "bing",
      parsed_url: [
        "http",
        "web-us.com",
        "/BRAIN/braindominance.htm",
        "",
        "",
        "",
      ],
      engines: ["bing"],
      positions: [1],
      score: 1,
      category: "general",
      pretty_url: "http://web-us.com/BRAIN/braindominance.htm",
    },
    {
      url: "https://www.speedtest.net/",
      title: "Speedtest by Ookla - The Global Broadband Speed Test",
      content:
        "March 14, 2022 - Use Speedtest on all your devices with our free desktop and mobile apps.",
      is_onion: false,
      engine: "brave",
      parsed_url: ["https", "www.speedtest.net", "/", "", "", ""],
      engines: ["brave"],
      positions: [1],
      score: 1,
      category: "general",
      pretty_url: "https://www.speedtest.net/",
    },
  ];
</script>

<div class="feed">
  {#if resultTime > 0}
    <p class="resultTime">
      Took {resultTime / 1000}s
    </p>
  {/if}
  {#each data as feedItem}
    <FeedItem data={feedItem} />
  {/each}
</div>

<style scoped>
  .feed {
    display: flex;
    height: 100%;
    width: 100%;
    padding: 0 1.5rem;
    flex-direction: column;
  }
  .resultTime {
    margin-bottom: 0;
  }
</style>
