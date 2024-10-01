document.addEventListener('DOMContentLoaded', function() {
    const infoBtns = document.querySelectorAll('.nav-btn');
    const tooltip = document.getElementById('tooltip');
    const sections = document.querySelectorAll('.chart-container');
    
    const infoTexts = {
        'poverty': 'Gráfico sobre pobreza.',
        'population': 'Gráfico sobre população.',
        'mortality': 'Gráfico sobre mortalidade.',
        'birthrate': 'Gráfico sobre natalidade.'
    };

    infoBtns.forEach(btn => {
        btn.addEventListener('mouseover', function() {
            const infoId = this.getAttribute('data-target');
            tooltip.innerText = infoTexts[infoId];
            tooltip.style.display = 'block';
            tooltip.style.left = `${this.offsetLeft}px`;
        });

        btn.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });

        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            sections.forEach(section => {
                if (section.id === target) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });

    const searchInput = document.getElementById('search');
    
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        
        const countryPages = {
            'brazil': 'brazil.html',
            'usa': 'usa.html',
            'canada': 'canada.html',
            'uk': 'uk.html',
            'germany': 'germany.html',
            'france': 'france.html',
            'spain': 'spain.html',
            'italy': 'italy.html',
            'australia': 'australia.html',
            'japan': 'japan.html',
            'china': 'china.html',
            'india': 'india.html'
        };
        
        const matchedCountries = Object.keys(countryPages).filter(country => country.includes(query));
        
        if (matchedCountries.length > 0) {
            window.location.href = countryPages[matchedCountries[0]];
        }
    });

    // Dados fictícios para gráficos
    const labels = ['2018', '2019', '2020', '2021', '2022'];
    
    const povertyData = [20, 18, 22, 15, 17];
    const populationData = [200000, 205000, 210000, 215000, 220000];
    const mortalityData = [5.5, 5.0, 4.8, 4.5, 4.2];
    const birthrateData = [15, 14, 13, 12, 11];

    new Chart(document.getElementById('povertyChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Pobreza (%)',
                data: povertyData,
                borderColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true }
            }
        }
    });

    new Chart(document.getElementById('populationChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'População',
                data: populationData,
                borderColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true }
            }
        }
    });

    new Chart(document.getElementById('mortalityChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Mortalidade (por 1000 habitantes)',
                data: mortalityData,
                borderColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true }
            }
        }
    });

    new Chart(document.getElementById('birthrateChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Natalidade (por 1000 habitantes)',
                data: birthrateData,
                borderColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true }
            }
        }
    });
});
