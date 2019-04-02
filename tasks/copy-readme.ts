import * as gulp from "gulp";
import * as cpx from "cpx";

gulp.task("copy-readme", done => {
  const source = __dirname.concat("/../readme.md");
  const target = __dirname.concat("/../au-dx-plugin");

  cpx.copySync(source, target);
  done();
});