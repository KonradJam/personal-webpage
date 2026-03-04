document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filters__btn");
  const projects     = document.querySelectorAll(".project");

  const activeFilters = new Set();

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filterValues = button.getAttribute("data-filter").trim().split(/\s+/);

      const isActive = button.classList.toggle("filters__btn--active");
      button.setAttribute("aria-pressed", isActive.toString());

      filterValues.forEach(value => {
        if (isActive) {
          activeFilters.add(value);
        } else {
          activeFilters.delete(value);
        }
      });

      filterProjects();
    });
  });

  function filterProjects() {
    if (activeFilters.size === 0) {
      projects.forEach(project => (project.style.display = ""));
      return;
    }

    projects.forEach(project => {
      const categoriesAttr = project.getAttribute("data-categories");
      if (!categoriesAttr) return;

      const projectCategories = categoriesAttr.trim().split(/\s+/);

      const isVisible = [...activeFilters].some(activeFilter =>
        projectCategories.includes(activeFilter)
      );

      project.style.display = isVisible ? "" : "none";
    });
  }
});
