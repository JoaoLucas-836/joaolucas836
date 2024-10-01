// Dados dos gráficos
const data = {
    poverty: {
        labels: ['África', 'Ásia', 'América Latina', 'Europa', 'Oceania'],
        datasets: [{
            label: 'População em Pobreza (%)',
            data: [40, 25, 15, 5, 2],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            // Adiciona anotações
            datalabels: {
                display: true,
                align: 'end',
                formatter: (value) => `${value}%`,
                color: '#444'
            }
        }]
    },
    population: {
        labels: ['China', 'Índia', 'Estados Unidos', 'Indonésia', 'Paquistão'],
        datasets: [{
            label: 'População por País (Bilhões)',
            data: [1.4, 1.38, 0.332, 0.276, 0.242],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            // Adiciona anotações
            datalabels: {
                display: true,
                align: 'end',
                formatter: (value) => `${value} bilhões`,
                color: '#444'
            }
        }]
    },
    birthDeath: {
        labels: ['Nascimento', 'Mortalidade'],
        datasets: [{
            label: 'Taxa (por 1000 habitantes)',
            data: [25, 7],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1,
            // Adiciona anotações
            datalabels: {
                display: true,
                align: 'end',
                formatter: (value) => `${value}`,
                color: '#444'
            }
        }]
    }
};

// Configurações para a biblioteca Chart.js
const ctx = document.getElementById('chartCanvas').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: data.poverty,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            },
            datalabels: {
                display: true,
                align: 'end',
                formatter: (value) => `${value}`,
                color: '#444'
            }
        }
    }
});

// Função para exibir o gráfico correto
function showChart(chartType) {
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: chartType === 'birthDeath' ? 'doughnut' : 'bar',
        data: data[chartType],
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            if (chartType === 'population') {
                                return tooltipItem.label + ': ' + tooltipItem.raw + ' bilhões';
                            }
                            return tooltipItem.label + ': ' + tooltipItem.raw;
                        }
                    }
                },
                datalabels: {
                    display: true,
                    align: 'end',
                    formatter: (value) => `${value}`,
                    color: '#444'
                }
            }
        }
    });
}

// Adiciona o plugin ChartDataLabels
Chart.register(ChartDataLabels);
