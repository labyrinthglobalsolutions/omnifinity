function removeTrailingSlash(url) {
    if (url.endsWith('/')) {
      return url.slice(0, -1);
    }
    return url;
  }
  
  function addWwwToUrl(url) {
      const urlObj = new URL(url);
    
      if (!urlObj.hostname.startsWith('www.')) {
        urlObj.hostname = 'www.' + urlObj.hostname;
      }
    
      return removeTrailingSlash(urlObj.href);
  }
  
export default addWwwToUrl;