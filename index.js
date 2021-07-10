// const canvas = d3.select('.canvas');

// const svg = canvas.append('svg')
//             .attr('height', 600)
//             .attr('width', 600); // get a new tag element inside the selector component

// const group = svg.append('g')
//                 .attr('transform', 'translate(50,100)') // group
// // append shapes to svg container

// group.append('rect')
//     .attr('width', 200)
//     .attr('height', 100)
//     .attr('fill', 'blue')
//     .attr('x', 20)
//     .attr('y', 20);

// group.append('circle')
// .attr('r', 50)
// .attr('cx', 300)
// .attr('cy', 70)
// .attr('fill', 'pink');

// group.append('line')
//     .attr('x1', 370)
//     .attr('x2', 400)
//     .attr('y1', 20)
//     .attr('y2', 120)
//     .attr('stroke', 'red');

// svg.append('text')
//     .attr('x', 20)
//     .attr('y', 200)
//     .attr('fill', 'grey')
//     .text('hello, Marshall')
//     .style('font-family', 'ariel');

// const data = [
//     {
//         width: 200,
//         height: 100,
//         fill: 'purple'
//     }
// ]

// const svg =d3.select('svg');

// const rect = svg.select('rect')
//             .data(data)
//             .attr('width', (d) =>{return d.width})
//             .attr('height', (d) => {return d.height})
//             .attr('fill', (d) => {return d.fill});

//const svg container
const svg = d3.select('svg')

d3.json('planet.json').then(data => {
    const circs = svg.selectAll('circle')
                    .data(data);

    circs.attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', r=> r.radius)
        .attr('fill', d=> d.fill);
    
    // append the enter selection to the DOM
    circs.enter()
        .append('circle')
        .attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', r=> r.radius)
        .attr('fill', d=> d.fill);
});