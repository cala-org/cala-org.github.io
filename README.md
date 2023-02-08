# CALA-web.github.io
# Chinese American Librarians Association

## To run in your local machine
  + Set up your ruby environment [https://www.ruby-lang.org/en/](https://www.ruby-lang.org/en/)
  + Clone this repo
  + Locate to the right path in your terminal, run `bundle install`, then `bundle update`
  + Run `bundle exec jekyll serve`
  + Check it on [http://localhost:4000](http://localhost:4000)
  + In order to check on a different port, run `bundle exec jekyll serve --port 4321`, replace 4321 with your preferred port #
  
 ## Netlify Deploy Status
 + [![Netlify Status](https://api.netlify.com/api/v1/badges/26329b40-e493-495d-86ac-d52f2169c8bd/deploy-status)](https://app.netlify.com/sites/cala-org/deploys)
 + Netlify admin logoin: cala-org.netlify.app/admin
 
 ## To create new post via Netlify
 + Switch account to CALA's in GitHub
 + Go https://cala-org.netlify.app/admin and log in
 + Log in via GitHub
 + Create the new post and wait until it get successfully published.

## Gulp Encryption
  + Go to `gulpfile.js ` in root file
  + find `gulp.task("firewall:encrypt", () => {
    return gulp
      .src("_protected/*.*")
      .pipe(encrypt("password"))
      .pipe(gulp.dest("_secret"));
    });` in the gulp file
  + `gulp.src()` suggests the directory which you want to encrypt the contents held in
  + `gulp.pipe(encrypt("password"))` means the password you wnat to have
  + `gulp.pipe(gulp.dest())` point out the encrypted file which will be AUTO-GENERATED
  + The `encrypted.html` under `_layouts` is responsible for interacting with gulpfile.js and setting up further frontend features (e.g. CSS, JS)
  + When using gulp's encryption feature, open up a different terminal and run `gulp` (need to install gulp CLI and check gulp's version first)
