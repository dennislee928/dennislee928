const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");

// 註冊 Handlebars 輔助函數
function registerHelpers(Handlebars) {
  Handlebars.registerHelper("toLowerCase", function (str) {
    return str.toLowerCase();
  });

  Handlebars.registerHelper("formatDate", function (date) {
    return new Date(date).toLocaleDateString();
  });

  Handlebars.registerHelper("isYouTubeLink", function (text) {
    return text.includes("youtu.be/");
  });

  Handlebars.registerHelper("extractYouTubeId", function (text) {
    const match = text.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : "";
  });

  Handlebars.registerHelper("removeYouTubeUrl", function (text) {
    return text.replace(/- youtu\.be\/[a-zA-Z0-9_-]+$/, "").trim();
  });

  Handlebars.registerHelper("skillLevel", function (level) {
    const maxDots = 5;
    const filledDots = Math.round((level / 100) * maxDots);
    return "●".repeat(filledDots) + "○".repeat(maxDots - filledDots);
  });
}

function render(resume) {
  const css = fs.readFileSync(
    path.join(__dirname, "public/custom-theme.css"),
    "utf-8"
  );
  const template = fs.readFileSync(path.join(__dirname, "resume.hbs"), "utf-8");

  registerHelpers(Handlebars);
  const compiledTemplate = Handlebars.compile(template);

  return compiledTemplate({
    css: css,
    resume: resume,
    lang: resume.basics.lang || "en",
  });
}

module.exports = {
  render: render,
};
