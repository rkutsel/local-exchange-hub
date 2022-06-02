const autoCompleteJS = new autoComplete({
  data: {
    src: async (query) => {
      try {
        const source = await fetch(`/api/autocomplete`, {
          method: "POST",
          body: JSON.stringify({ query }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await source.json();
        return data;
      } catch (error) {
        return error;
      }
    },
    keys: ["offer_name"],
    cache: false,
    threshold: 3,
  },
  resultItem: {
    highlight: false,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection.offer_name;
      },
    },
  },
});

document
  .querySelector(".search-form")
  .addEventListener("click", autoCompleteJS);
