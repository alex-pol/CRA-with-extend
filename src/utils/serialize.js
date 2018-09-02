export default function (obj) {
  return Object.keys(obj).reduce((a, k) => {
    if (obj[k] !== '' && obj[k] !== 'user') {
      a.push(`${k}=${encodeURIComponent(obj[k])}`);
    }
    return a;
  }, []).join('&');
}
