document.addEventListener("DOMContentLoaded", async () => {
    const projectsContainer = document.querySelector(".projects");
    if (!projectsContainer) return;

    const githubUser = "konradjam";
    const githubRepo = "personal-webpage";
    const branchName = "main"; 
    
    const isEn = window.location.pathname.includes('/en/');
    const projectFolder = isEn ? 'content/projects/en' : 'content/projects/pl';

    const apiUrl = `https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${projectFolder}?ref=${branchName}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("API request failed.");
        const filesList = await response.json();

        const markdownFiles = filesList.filter(file => file.name.endsWith('.md'));

        for (const file of markdownFiles) {
            const fileResponse = await fetch(file.download_url);
            if (!fileResponse.ok) continue; 
            
            const rawText = await fileResponse.text();

            const yamlContent = rawText.replace(/---\n/g, "").trim();
            const project = jsyaml.load(yamlContent);

            const article = document.createElement("article");
            article.className = "project";
            
            const cats = Array.isArray(project.categories) ? project.categories.join(" ") : "";
            article.setAttribute("data-categories", cats);

            const techListHtml = Array.isArray(project.technologies) 
                ? project.technologies.map(tech => `<li class="project__tech-item">${tech}</li>`).join("")
                : "";

            article.innerHTML = `
                <header class="project__header">
                    <h2 class="project__title">
                        <a href="${project.project_url || '#'}" target="_blank" rel="noopener noreferrer" class="project__link">
                            ${project.title}
                        </a>
                    </h2>
                    <ul class="project__tech-list" aria-label="Technologie użyte w projekcie">
                        ${techListHtml}
                    </ul>
                </header>
                <div class="project__content">
                    <p class="project__detail">
                        <strong class="project__label">${isEn ? 'Problem:' : 'Problem:'}</strong> ${project.problem || ''}
                    </p>
                    <p class="project__detail">
                        <strong class="project__label">${isEn ? 'Solution:' : 'Rozwiązanie:'}</strong> ${project.solution || ''}
                    </p>
                    <p class="project__detail">
                        <strong class="project__label">${isEn ? 'Impact:' : 'Wpływ:'}</strong> ${project.impact || ''}
                    </p>
                </div>
            `;

            projectsContainer.appendChild(article);
        }

        document.dispatchEvent(new Event("projectsLoaded"));

    } catch (error) {
        console.error(error);
    }
});
