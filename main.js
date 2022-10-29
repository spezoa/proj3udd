(()=>{
    

    function get(url){
        return Promise.resolve(
            fetch(url)
            .then((response) => response.json())
        ); 
    }

    let magnitudArray = [];
    let fechasArray =[];
    let nombre = '';
    const graph = document.getElementById('sismosChile');

    get('https://chilealerta.com/api/query/?user=antoniaa&select=ultimos_sismos&limit=3&country=Chile')
    .then((data)=> {
        nombre = data.metadata;
        let sismos = data.ultimos_sismos_Chile;

        magnitudArray = sismos.map((ultimos_sismos_Chile)=> ultimos_sismos_Chile.magnitude);
        fechasArray = sismos.map((ultimos_sismos_Chile)=> ultimos_sismos_Chile.chilean_time);

        const myChart = new Chart(graph, {
            type: 'bar',
            data: {
                labels: fechasArray,
                datasets: [{
                    label: nombre,
                    data: magnitudArray,
                    backgroundColor: [
                        'rgba(202, 213, 169)',
                        'rgba(235, 191, 153)',
                        'rgba(220, 170, 196)',
                        'rgba(169, 191, 237)',
                        'rgba(186, 136, 234)',
                        'rgba(235, 216, 234)',
                    
                    ],
                    
                    borderWidth: 1
                    
                }]
            },
            
        });
    });




    
  
})();