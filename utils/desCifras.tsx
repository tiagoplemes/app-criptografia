export const decifraCesar = (texto: string, chave: number) => {
  return texto
    .split("")
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) { // Garante que apenas letras sejam afetadas
        const base = char === char.toUpperCase() ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - base - chave + 26) % 26) + base);
      }
      return char; // Mantém caracteres especiais e espaços intactos
    })
    .join("");
};


export const decifraVigenere = (texto: string, chave: string) => {
  let resultado = "";
  let chaveIndex = 0;

  for (let i = 0; i < texto.length; i++) {
    let char = texto[i];
    if (/[a-z]/i.test(char)) { // Apenas letras serão processadas
      const base = char === char.toUpperCase() ? 65 : 97;
      const chaveChar = chave[chaveIndex % chave.length].toLowerCase();
      const shift = chaveChar.charCodeAt(0) - 97;
      resultado += String.fromCharCode(((char.charCodeAt(0) - base - shift + 26) % 26) + base);
      chaveIndex++;
    } else {
      resultado += char; // Mantém caracteres especiais e espaços intactos
    }
  }

  return resultado;
};

export const decifraEyme = (texto: string) => {
  return texto.split("").reverse().join(""); // Reverte novamente para obter o original
};
