function send_to_create_gh_flow()
{
    var base = "https://github.com/ieee-vgtc/ieeevis.org/new/master";
    var p = base + window.location.pathname;
    var i = p.lastIndexOf("/");
    var filename = p.substr(i+1) + ".md";
    var pWithoutFileName = p.substring(0, i);

    var yaml_front_matter;
    yaml_front_matter = ["---",
                         "layout: main-2017",
                         "permalink: " + p.substr(i+1),
                         "---"];
    yaml_front_matter = "\n".join(yaml_front_matter);
    window.location = pWithoutFileName + "?filename=" + filename + "&value=" + yaml_front_matter;
}