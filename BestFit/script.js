function bestFitAllocation(memoryBlocks, blockSizeNeeded) {
  let bestFitIndex = -1;
  let smallestRemainingSize = Infinity;

  for (let i = 0; i < memoryBlocks.length; i++) {
    const blockSize = memoryBlocks[i];

    if (blockSize >= blockSizeNeeded && blockSize - blockSizeNeeded < smallestRemainingSize) {
      bestFitIndex = i;
      smallestRemainingSize = blockSize - blockSizeNeeded;
    }
  }

  return bestFitIndex;
}
/*
// Exemplo de uso:
const memoryBlocks = [100, 50, 200, 80, 150];
const blockSizeNeeded = 100;

const allocatedBlockIndex = bestFitAllocation(memoryBlocks, blockSizeNeeded);
if (allocatedBlockIndex !== -1) {
  console.log(`Bloco alocado no índice: ${allocatedBlockIndex}`);
} else {
  console.log("Nenhum bloco adequado encontrado.");
}
*/





function allocateMemory() {
  const memoryBlocksInput = document.getElementById('memoryBlocksInput').value;
  const blockSizeNeededInput = document.getElementById('blockSizeNeededInput').value;

  const memoryBlocks = memoryBlocksInput.split(',').map(Number);
  const blockSizeNeeded = parseInt(blockSizeNeededInput);

  const allocatedBlockIndex = bestFitAllocation(memoryBlocks, blockSizeNeeded);

  if (allocatedBlockIndex !== -1) {
    document.getElementById('result').textContent = `Bloco alocado no índice: ${allocatedBlockIndex}`;
  } else {
    document.getElementById('result').textContent = "Nenhum bloco adequado encontrado.";
  }
}
