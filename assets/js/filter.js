document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filters__btn");
    const projects = document.querySelectorAll(".project");

    const activeFilters = new Set();

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter");

            const isActive = button.classList.toggle("filters__btn--active");
            button.setAttribute("aria-pressed", isActive.toString());

            if (isActive) {
                activeFilters.add(filterValue);
            } else {
                activeFilters.delete(filterValue);
            }

            filterProjects();
        });
    });

    function filterProjects() {

        if (activeFilters.size === 0) {
            projects.forEach(project => project.style.display = "");
            return;
        }

        projects.forEach(project => {

            const categoriesAttr = project.getAttribute("data-categories");
            if (!categoriesAttr) return; 

            const projectCategories = categoriesAttr.split(" ");

            const isVisible = Array.from(activeFilters).some(activeFilter => 
                projectCategories.includes(activeFilter)
            );

            project.style.display = isVisible ? "" : "none";
        });
    }
});
