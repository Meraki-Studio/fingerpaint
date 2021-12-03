export function register() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register(new URL('./service-worker.js', import.meta.url), {
        type: 'module',
      })
      .then(
        function (registration) {
          // Registration was successful
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope
          );
        },
        function (err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        }
      );
  }
}
