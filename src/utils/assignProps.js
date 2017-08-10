export default function assignProps(to, from, props){
  const filterKeys = (obj, keys) => Object.keys(obj).filter(k => keys.includes(k)).reduce((acc, k) => ({ ...acc, [k]: obj[k] }), {});
  return Object.assign(to, filterKeys(from, props));
}
