"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateIndexHtml = name => {
    return {
        targetDir: `./${name}`,
        template: {
            '.index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ly Comp</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>   
  `,
        },
    };
};
exports.default = generateIndexHtml;
