import { readFileSync } from "fs";
import { compile } from "handlebars";

const css = readFileSync(__dirname + "/style.css", "utf-8");
const template = readFileSync(__dirname + "/resume.hbs", "utf-8");

export function render(resume) {
  const compiledTemplate = compile(template);
  return compiledTemplate({
    css: css,
    resume: resume,
    mermaidCharts: mermaidCharts,
  });
}
