export const cifraCesar = (texto: string, chave: number) => {
  return texto
    .split('')
    .map(char => {
      if (/[a-z]/i.test(char)) {
        const base = char === char.toUpperCase() ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - base + chave) % 26) + base);
      }
      return char;
    })
    .join('');
};

export const cifraVigenere = (texto: string, chave: string) => {
  let resultado = '';
  let chaveIndex = 0;
  for (let i = 0; i < texto.length; i++) {
    let char = texto[i];
    if (/[a-z]/i.test(char)) {
      const base = char === char.toUpperCase() ? 65 : 97;
      const chaveChar = chave[chaveIndex % chave.length].toLowerCase();
      const shift = chaveChar.charCodeAt(0) - 97;
      resultado += String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
      chaveIndex++;
    } else {
      resultado += char;
    }
  }
  return resultado;
};

export const cifraEyme = (texto: string) => {
  return texto.split('').reverse().join(''); // Simples inversão de texto
};