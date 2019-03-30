import { execSync} from "child_process";
import * as gulp from "gulp";

gulp.task("install-plugin-packages", done => {
  const workDir = __dirname.concat("/../au-dx-plugin");
  
  process.chdir(workDir);
  execSync("npm i", { stdio: "inherit" });
  
  done();
});