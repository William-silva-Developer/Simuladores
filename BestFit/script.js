


function alocarMemoriaBestFit(blocosMemoria, tamanhoNecessario) {
    let melhorIndice = -1;
    let menorDiferenca = Infinity;
  
    for (let i = 0; i < blocosMemoria.length; i++) {
      const tamanhoBloco = blocosMemoria[i];
  
      if (tamanhoBloco >= tamanhoNecessario) {
        const diferenca = tamanhoBloco - tamanhoNecessario;
  
        if (diferenca < menorDiferenca) {
          melhorIndice = i;
          menorDiferenca = diferenca;
        }
      }
    }
  
    return melhorIndice;
  }
  
  
  
  // Exemplo de uso:
  const blocosMemoria = [100, 50, 200, 80, 150];
  
  const tamanhoNecessario = 100;
  
  const indiceAlocado = alocarMemoriaBestFit(blocosMemoria, tamanhoNecessario);
  
  if (indiceAlocado !== -1) {
  
    console.log(`Bloco alocado no índice ${indiceAlocado}`);
    
  } else {
  
    console.log("Nenhum bloco adequado encontrado.");
    
  }
  