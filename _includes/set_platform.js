(function () {
  "use strict";

  function detect_platform() {
    if (navigator.platform === "Linux i686") { return "i686-unknown-linux-gnu";}
    if (navigator.platform === "Linux x86_64") { return "x86_64-unknown-linux-gnu";}
    if (navigator.appVersion.indexOf("Linux")  !== -1) { return "x86_64-unknown-linux-gnu";}
    if (navigator.appVersion.indexOf("Mac") !== -1) { return "x86_64-apple-darwin";}
    if (navigator.appVersion.indexOf("Win") !== -1) { return"x86_64-pc-windows-gnu";}
    return "unknown";
  }

  var platform = detect_platform();

  var rec_package_name = "{{ site.stable }}";
  var rec_version_type = "source";
  var rec_download_file = "rustc-{{ site.stable }}-src.tar.gz";

  if (platform == "x86_64-unknown-linux-gnu") {
    rec_version_type = "Linux binary";
    rec_download_file = "rust-" + rec_package_name + "-x86_64-unknown-linux-gnu.tar.gz";
  } else if (platform == "i686-unknown-linux-gnu") {
    rec_version_type = "Linux binary";
    rec_download_file = "rust-" + rec_package_name + "-i686-unknown-linux-gnu.tar.gz";
  } else if (platform == "x86_64-apple-darwin") {
    rec_version_type = "Mac installer";
    rec_download_file = "rust-" + rec_package_name + "-x86_64-apple-darwin.pkg";
  } else if (platform == "x86_64-pc-windows-gnu") {
    rec_version_type = "Windows installer";
    rec_download_file = "rust-" + rec_package_name + "-x86_64-pc-windows-gnu.msi";
  }

  var rec_package_desc = rec_package_name + " (<span>" + rec_version_type + "</span>)";
  var rec_vers_div = document.getElementById("install-version");
  rec_vers_div.innerHTML = rec_package_desc;

  var rec_dl_addy = "https://static.rust-lang.org/dist/" + rec_download_file;
  var rec_inst_link = document.getElementById("inst-link");
  rec_inst_link.setAttribute("href", rec_dl_addy);
}());
