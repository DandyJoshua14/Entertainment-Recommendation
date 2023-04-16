self.addEventListener('fetch', function(event) {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    // Make sure the request is for a page and not a static asset
    if (request.mode === 'navigate') {
      try {
        // Fetch the requested page
        const response = await fetch(request);
        return response;
      } catch (error) {
        // If there's an error, return a fallback response
        return new Response('An error occurred.', { status: 500 });
      }
    } else {
      // If the request is for a static asset, don't do anything special
      return fetch(request);
    }
  }
  