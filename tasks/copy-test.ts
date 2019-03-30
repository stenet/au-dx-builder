import * as gulp from "gulp";
import * as cpx from "cpx";

gulp.task("copy-test", done => {
  const source = __dirname.concat("/../au-dx-plugin/src/**/*");
  const target = __dirname.concat("/../au-dx-test/src/au-dx-plugin");

  cpx.copySync(source, target);
  done();
});