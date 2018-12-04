/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 */

const colors = require("colors");
const favicons = require("favicons");
const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");
const appRoot =  path.resolve(__dirname, "../../");
const picture = path.join(appRoot, "src", "icon.png"); // Source image(s). `string`, `buffer` or array of `string` 
const output = path.join(appRoot, "public"); // Source image(s). `string`, `buffer` or array of `string` 
const configuration = {
    preferOnline: false,            // Use offline generation, if online generation has failed. `boolean` 
    icons: {
        favicons: true,                // Create regular favicons. `boolean` 
        android: true,              // Create Android homescreen icon. `boolean` or `{ offset, background, shadow }` 
        appleIcon: true,            // Create Apple touch icons. `boolean` or `{ offset, background }` 
        appleStartup: false,         // Create Apple startup images. `boolean` or `{ offset, background }` 
        coast: false,      // Create Opera Coast icon with offset 25%. `boolean` or `{ offset, background }` 
        firefox: false,              // Create Firefox OS icons. `boolean` or `{ offset, background }` 
        windows: true,              // Create Windows 8 tile icons. `boolean` or `{ background }` 
        yandex: false                // Create Yandex browser icon. `boolean` or `{ background }` 
    }
};

favicons(picture, configuration, (error, response) => {
    if (error) return console.log(error);
    if (response.images && response.images.map) {
        Promise.all(response.images.map(async (icon) => {
            let copyPath = "";
            if (icon.name && icon.name.indexOf("coast") > -1) copyPath = "icon.jpg";
            else copyPath = icon.name;
            await fs.writeFileSync(path.join(output, copyPath), icon.contents);
            let resized = await sharp(picture).resize(256, 256).toBuffer();
            fs.writeFile(path.join(output, "icon.png"), resized);
        }));
    }
    console.log((`☮ Favicon generator: Favicons generated successfully!`.green));
});