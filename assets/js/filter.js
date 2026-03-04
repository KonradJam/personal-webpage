document.addEventListener("projectsLoaded", () => {
  const filterButtons = document.querySelectorAll(".filters__btn");
  const projects = document.querySelectorAll(".project");

  const activeFilters = new Set();

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filterAttr = button.getAttribute("data-filter") || "";
      const filterValues = filterAttr.trim().split(/\s+/);

      const isActive = button.classList.toggle("filters__btn--active");
      button.setAttribute("aria-pressed", isActive.toString());

      filterValues.forEach(value => {
        if (!value) return; 
        if (isActive) {
          activeFilters.add(value);
        } else {
          activeFilters.delete(value);
        }
      });

      filterProjects();

    setTimeout(() => {
        button.blur();
      }, 50);
    });
  });

  function filterProjects() {
    if (activeFilters.size === 0) {
      projects.forEach(project => (project.style.display = ""));
      return;
    }

    projects.forEach(project => {
      const categoriesAttr = project.getAttribute("data-categories") || "";
      const projectCategories = categoriesAttr.trim().split(/\s+/);

      const isVisible = [...activeFilters].some(activeFilter =>
        projectCategories.includes(activeFilter)
      );

      project.style.display = isVisible ? "" : "none";
    });
  }
});
