
const divPrincipal = document.getElementById('home');
const divTempoJuntos = document.getElementById('container-tempo-juntos');
const divTempoConhecendo = document.getElementById('container-tempo-conhecendo');

function tempoJuntos(){
    divPrincipal.style.display = 'none';
    divTempoJuntos.style.display = 'inline-block';
}

function tempoConhecemos(){
    divPrincipal.style.display = 'none';
    divTempoConhecendo.style.display = 'inline-block';
}

function backHomeTj(){
    divPrincipal.style.display = 'inline-block';
    divTempoJuntos.style.display = 'none';
    divTempoConhecendo.style.display = 'none';
}

const dataInicioNamoro = new Date('September 06, 2024 16:30:00');
const dataTempoConhecemos = new Date('August 10, 2024 20:33:00');

function calcularDiasRestantes(dataInicio, dataAtual) {
    let diasRestantes = dataAtual.getDate() - dataInicio.getDate();
    if (diasRestantes < 0) {
        const mesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0);
        diasRestantes += mesAnterior.getDate();
    }
    return diasRestantes;
}

function atualizarTempo() {
    const dataAtual = new Date();

    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    const anoNamoro = dataInicioNamoro.getFullYear();
    const mesNamoro = dataInicioNamoro.getMonth() + 1;
    const diaNamoro = dataInicioNamoro.getDate();

    const anoConhece = dataTempoConhecemos.getFullYear();
    const mesConhece = dataTempoConhecemos.getMonth() + 1;
    const diaConhece = dataTempoConhecemos.getDate();

    let tempoNamoroAno = anoAtual - anoNamoro;
    let tempoNamoroMes = mesAtual - mesNamoro;

    let tempoConheceAno = anoAtual - anoConhece;
    let tempoConheceMes = mesAtual - mesConhece;

    if (mesNamoro > mesAtual || (mesNamoro === mesAtual && diaNamoro > diaAtual)) {
        tempoNamoroAno -= 1;
        tempoNamoroMes += 12;
    }

    if (diaAtual < diaNamoro) {
        tempoNamoroMes -= 1;
    }

    if (mesConhece > mesAtual || (mesConhece === mesAtual && diaConhece > diaAtual)) {
        tempoConheceAno -= 1;
        tempoConheceMes += 12;
    }

    if (diaAtual < diaConhece) {
        tempoConheceMes -= 1;
    }

    const diferencaMilissegundosNamoro = dataAtual.getTime() - dataInicioNamoro.getTime();
    const diferencaTotalSegundosNamoro = Math.floor(diferencaMilissegundosNamoro / 1000);
    const diferencaTotalMinutosNamoro = Math.floor(diferencaTotalSegundosNamoro / 60);
    const diferencaTotalHorasNamoro = Math.floor(diferencaTotalMinutosNamoro / 60);
    const diferencaTotalDiasNamoro = Math.floor(diferencaTotalHorasNamoro / 24);
    const segundosRestantesNamoro = diferencaTotalSegundosNamoro % 60;
    const minutosRestantesNamoro = diferencaTotalMinutosNamoro % 60;
    const horasRestantesNamoro = diferencaTotalHorasNamoro % 24;
    const diasRestantesNamoro = calcularDiasRestantes(dataInicioNamoro, dataAtual);

    const diferencaMilissegundosConhece = dataAtual.getTime() - dataTempoConhecemos.getTime();
    const diferencaTotalSegundosConhece = Math.floor(diferencaMilissegundosConhece / 1000);
    const diferencaTotalMinutosConhece = Math.floor(diferencaTotalSegundosConhece / 60);
    const diferencaTotalHorasConhece = Math.floor(diferencaTotalMinutosConhece / 60);
    const diferencaTotalDiasConhece = Math.floor(diferencaTotalHorasConhece / 24);
    const segundosRestantesConhece = diferencaTotalSegundosConhece % 60;
    const minutosRestantesConhece = diferencaTotalMinutosConhece % 60;
    const horasRestantesConhece = diferencaTotalHorasConhece % 24;
    const diasRestantesConhece = calcularDiasRestantes(dataTempoConhecemos, dataAtual);

    if (tempoNamoroAno === 1) {
        document.getElementById('ano').innerHTML = tempoNamoroAno + ' ano';
    } else {
        document.getElementById('ano').innerHTML = tempoNamoroAno + ' anos';
    }

    if (tempoNamoroMes === 1) {
        document.getElementById('meses').innerHTML = tempoNamoroMes + ' mês';
    } else {
        document.getElementById('meses').innerHTML = tempoNamoroMes + ' meses';
    }

    if (diasRestantesNamoro === 1) {
        document.getElementById('dias').innerHTML = diasRestantesNamoro + ' dia';
    } else {
        document.getElementById('dias').innerHTML = diasRestantesNamoro + ' dias';
    }

    if (horasRestantesNamoro === 1) {
        document.getElementById('horas').innerHTML = horasRestantesNamoro + ' hora';
    } else {
        document.getElementById('horas').innerHTML = horasRestantesNamoro + ' horas';
    }

    if (minutosRestantesNamoro === 1) {
        document.getElementById('minutos').innerHTML = minutosRestantesNamoro + ' minuto';
    } else {
        document.getElementById('minutos').innerHTML = minutosRestantesNamoro + ' minutos';
    }

    if (segundosRestantesNamoro === 1) {
        document.getElementById('segundos').innerHTML = segundosRestantesNamoro + ' segundo';
    } else {
        document.getElementById('segundos').innerHTML = segundosRestantesNamoro + ' segundos';
    }


    if (tempoConheceAno === 1) {
        document.getElementById('ano-conhece').innerHTML = tempoConheceAno + ' ano';
    } else {
        document.getElementById('ano-conhece').innerHTML = tempoConheceAno + ' anos';
    }

    if (tempoConheceMes === 1) {
        document.getElementById('meses-conhece').innerHTML = tempoConheceMes + ' mês';
    } else {
        document.getElementById('meses-conhece').innerHTML = tempoConheceMes + ' meses';
    }

    if (diasRestantesConhece === 1) {
        document.getElementById('dias-conhece').innerHTML = diasRestantesConhece + ' dia';
    } else {
        document.getElementById('dias-conhece').innerHTML = diasRestantesConhece + ' dias';
    }

    if (horasRestantesConhece === 1) {
        document.getElementById('horas-conhece').innerHTML = horasRestantesConhece + ' hora';
    } else {
        document.getElementById('horas-conhece').innerHTML = horasRestantesConhece + ' horas';
    }

    if (minutosRestantesConhece === 1) {
        document.getElementById('minutos-conhece').innerHTML = minutosRestantesConhece + ' minuto';
    } else {
        document.getElementById('minutos-conhece').innerHTML = minutosRestantesConhece + ' minutos';
    }

    if (segundosRestantesConhece === 1) {
        document.getElementById('segundos-conhece').innerHTML = segundosRestantesConhece + ' segundo';
    } else {
        document.getElementById('segundos-conhece').innerHTML = segundosRestantesConhece + ' segundos';
    }
}

setInterval(atualizarTempo, 1000);