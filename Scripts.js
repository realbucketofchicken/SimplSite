let a = 2;

GetChangelog();

async function GetChangelog() {
    const url = "https://api.github.com/repos/notdraimdev/simplaudio/releases/latest";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const json = await response.json();
          console.log(json["body"]);

          document.getElementById("changelog").innerHTML = json["body"];
          document.getElementById("changelogname").innerHTML = "Changes for " + json["tag_name"];
        } catch (error) {
          console.error(error.message);
    }

}