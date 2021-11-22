module.exports = {
  "globDirectory": "build/", // the base directory you wish to match globPatterns against,
  "globPatterns": [
  // Add more assets or resources to cache...
  "**/*.css",
  "index.html",
  "app.webmanifest",
  ],
  // The path and filename of the Service Worker file that will be created by the build process...
  "swSrc": "src/service-worker.js",
  "globIgnores": [
  "../sw-config.js"
  
  ]
  };