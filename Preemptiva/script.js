const processos = [];

    function adicionarProcesso() {
      const id = parseInt(document.getElementById("id").value);
      const tempoExecucao = parseInt(document.getElementById("tempoExecucao").value);
      const prioridade = parseInt(document.getElementById("prioridade").value);

      // Adiciona o processo à lista de processos
      processos.push({ id, tempoExecucao, prioridade });

      // Limpa os campos do formulário
      document.getElementById("id").value = "";
      document.getElementById("tempoExecucao").value = "";
      document.getElementById("prioridade").value = "";

      // Atualiza a lista de processos exibida na tela
      atualizarListaProcessos();
    }

    function atualizarListaProcessos() {
    
      const listaProcessos = document.getElementById("listaProcessos");
      
      const tempoExecucao = document.getElementById("tempo-Execucao");
      
      const listaPrioridades = document.getElementById("listaPrioridades");
      
      listaProcessos.innerHTML = "";
      
      tempoExecucao.innerHTML = "";
      
      listaPrioridades.innerHTML = "";
      
      processos.forEach((processo) => {
      
        const listItemId = document.createElement("li");
        
        const listItemTempoExec = document.createElement("li");
        
        const listItemPrioridade = document.createElement("li");
        
        
        listItemId.textContent = `Processo ${processo.id}`;
        listaProcessos.appendChild(listItemId);
        
        listItemTempoExec.textContent = `Tempo de Execução: ${processo.tempoExecucao}`;
        tempoExecucao.appendChild(listItemTempoExec);
        
        listItemPrioridade.textContent = `Prioridade: ${processo.prioridade}`;
        listaPrioridades.appendChild(listItemPrioridade);
        
      });
    }

    function calcularEscalonamento() {
      const resultado = prioridadePreemptiva(processos);
      
      document.getElementById("tempoTotalExecucao").textContent = `Tempo total de execução: ${resultado.tempoTotalExecucao}`;
      document.getElementById("tempoMedioEspera").textContent = `Tempo médio de espera: ${resultado.tempoMedioEspera.toFixed(2)}`;
    }
    
    function prioridadePreemptiva(processos) {
      // Copia os processos para não modificar a lista original
      const processosCopia = [...processos];
    
      // Ordena os processos por prioridade (menor número = maior prioridade)
      processosCopia.sort((a, b) => a.prioridade - b.prioridade);
    
      // Inicializa variáveis para armazenar o tempo total de execução e o tempo de espera
      let tempoTotalExecucao = 0;
      let tempoDeEsperaTotal = 0;
    
      // Armazena o tempo atual
      let tempoAtual = 0;
    
      // Executa os processos
      while (processosCopia.length > 0) {
        // Seleciona o próximo processo a ser executado (o de maior prioridade)
        const processoAtual = processosCopia.shift();
    
        // Verifica se o processo precisa ser preemptado (tem tempo de execução restante)
        if (processoAtual.tempoExecucao > 0) {
          // Atualiza o tempo de espera total com o tempo atual
          tempoDeEsperaTotal += tempoAtual;
    
          // Executa o processo por 1 unidade de tempo
          processoAtual.tempoExecucao--;
          tempoTotalExecucao++;
    
          // Se ainda houver tempo de execução restante, insere o processo de volta na lista de processos
          if (processoAtual.tempoExecucao > 0) {
            processosCopia.push(processoAtual);
          }
        }
    
        // Atualiza o tempo atual
        tempoAtual++;
      }
    
      // Calcula o tempo médio de espera
      const tempoMedioEspera = tempoDeEsperaTotal / processos.length;
    
      // Retorna o tempo total de execução e o tempo médio de espera
      return { tempoTotalExecucao, tempoMedioEspera };
    }
    
    // Exemplo de uso:
    const processo = [
      { id: 1, tempoExecucao: 4, prioridade: 3 },
      { id: 2, tempoExecucao: 2, prioridade: 1 },
      { id: 3, tempoExecucao: 6, prioridade: 2 },
    ];
    
    const resultado = prioridadePreemptiva(processo);
    console.log("Tempo total de execução:", resultado.tempoTotalExecucao);
    console.log("Tempo médio de espera:", resultado.tempoMedioEspera);
    