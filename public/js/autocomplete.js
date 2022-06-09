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
    keys: ["city"],
    cache: false,
  },
  threshold: 3,
  resultItem: {
    highlight: false,
  },
  resultItem: {
    tag: "li",
    class: "has-text-info",
    selected: "autoComplete_selected",
    highlight: "has-text-danger",
  },
  events: {
    input: {
      selection: async (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = `${selection.city}`;
      },
    },
  },
});

const searchCity = async (event) => {
  event.preventDefault();
  console.log(autoCompleteJS.input.value);
  try {
    const source = await fetch(
      `/api/autocomplete/city/${autoCompleteJS.input.value}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      if (res.ok) {
        console.log(res.ok);
        document.location.replace(
          `/api/autocomplete/city/${autoCompleteJS.input.value}`
        );
      }
    });
  } catch (error) {
    return error;
  }
};

document
  .querySelector(".search-form")
  .addEventListener("click", autoCompleteJS);

document.querySelector(".search-btn").addEventListener("click", searchCity);
