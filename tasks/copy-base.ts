import * as gulp from "gulp";
import * as cpx from "cpx";

gulp.task("copy-base", done => {
  const source1 = __dirname.concat("/../au-dx-base/*.*");
  const source2 = __dirname.concat("/../au-dx-base/!(node_modules)/**/*");
  const target = __dirname.concat("/../au-dx-plugin");

  cpx.copySync(source1, target);
  cpx.copySync(source2, target);
  done();
});