import * as gulp from "gulp";
import requiredir from "require-dir";

requiredir("./tasks");

gulp.task(
  "default",
  gulp.series([
    "clean",
    "copy-base",
    "copy-readme",
    "install-plugin-packages",
    "create-widgets",
    "build-plugin",
    "copy-test"
  ]));