import * as gulp from "gulp";
import { clean } from "./dx/clean";
import { createWidgets } from "./dx/create-widgets";

const main = gulp.series([
  clean,
  createWidgets
]);

export { main as default };