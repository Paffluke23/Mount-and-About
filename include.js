document.querySelectorAll("[data-include]").forEach(async (element) => {

  try {

    const response = await fetch(element.dataset.include);

    if (!response.ok) {
      throw new Error(
        `Could not load ${element.dataset.include}`
      );
    }

    element.outerHTML = await response.text();

  } catch (error) {

    console.error(error);

  }

});
