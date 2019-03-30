import * as gulp from "gulp";
import { execSync} from "child_process";

gulp.task("build-plugin", done => {
  const workDir = __dirname.concat("/../au-dx-plugin");
  
  process.chdir(workDir);
  execSync("npm run build", { stdio: "inherit" });
  
  done();
});