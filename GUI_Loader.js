
function insertNavBar(projects) {

    let width = 1310/projects.length - (projects.length - 1) * 3.75;

    for (const project of projects) {
        document.write(`<a onclick="location.href='#` + project.getID() + `'">`);
        document.write(`<div class="navTab" style="width: ` + width + `px">`);
        document.write(`<h4>` + project.getName() + `</h4>`);
        document.write(`</div>`);
        document.write(`</a>`);
    }
}

function loadProject(project) {

    // load name and description
    document.write("<div id='" + project.getID() + "' class='project'>");
    document.write("<h3>" + project.getName() + "</h3>");
    document.write("<p>" + project.getDescription() + "</p>");
    document.write("<p>Uses:" + project.getTechnologies() + "</p>");

    // load video
    document.write("<div class='projectVideo'>");
    document.write("<video width='1025' height='576' controls>");
    document.write("<source src='Media/Videos/" + project.getID() +".mp4' type='video/mp4'>");
    document.write("<video><br/>");
    document.write("</div>");

    // load images
    loadProjectImage(project.getID() + "1");
    loadProjectImage(project.getID() + "2");
    loadProjectImage(project.getID() + "3");

    console.log('loading project');
    // load links to GitHub
    if (project.getLinks().length > 0) {
        document.write("<p>GitHub:</p>");
        for (const link of project.getLinks()) {
            console.log('link -> ' + link);
            document.write("<p class='link'><a href='" + link + "'>" + link + "</a></p>");
        }
    }

    document.write("<br/><br/></div><hr/>");
}

function loadProjectImage(id) {
    document.write("<a href ='Media/Images/" + id + ".png'>");
    document.write("<img class='projectImage' src='Media/Images/" + id + ".png'/>");
    document.write("</a>");
}