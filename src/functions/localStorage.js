export function getLocalStorageValue(variable){
  const saved = localStorage.getItem(variable);
  if (saved) return saved;

  return null;
}

export function setLocalStorageValue(variable,value){
  const saved = localStorage.setItem(variable,value);
}
