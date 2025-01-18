import { readFileSync } from "node:fs";
import { compile } from "handlebars";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// 獲取 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 註冊 Handlebars 輔助函數
function registerHelpers(Handlebars) {
  Handlebars.registerHelper("toLowerCase", function (str) {
    return str.toLowerCase();
  });

  Handlebars.registerHelper("formatDate", function (date) {
    return new Date(date).toLocaleDateString();
  });
}

function errorHandler(error) {
  console.error("Resume generation error:", error);
  return {
    statusCode: 500,
    body: "Failed to generate resume",
  };
}

export function render(resume, method = "GET") {
  try {
    if (method !== "GET") {
      return {
        statusCode: 405,
        body: "Method Not Allowed",
      };
    }

    // 使用 join 而不是 path.join
    const css = readFileSync(join(__dirname, "style.css"), "utf-8");
    const template = readFileSync(join(__dirname, "resume.hbs"), "utf-8");

    // 使用 import 替代 require
    import("handlebars").then((Handlebars) => {
      registerHelpers(Handlebars);

      const compiledTemplate = compile(template);
      const html = compiledTemplate({
        css: css,
        resume: resume,
        lang: resume.basics.lang || "en",
      });

      return {
        statusCode: 200,
        body: html,
        headers: {
          "Content-Type": "text/html",
        },
      };
    });
  } catch (error) {
    return errorHandler(error);
  }
}

export const contentType = "text/html";
