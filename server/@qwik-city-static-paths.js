const staticPaths = new Set(["/q-manifest.json"]);
function isStaticPath(p) {
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  return false;
}
export { isStaticPath };