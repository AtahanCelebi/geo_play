var country_score = 0

// render map
new Datamap({
    done: function (datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
            var country = prompt("What is the name of the country?");
            var m = {};
            if (country == geography.properties.name) {
                m[geography.id] = '#009900';
                datamap.updateChoropleth(m);
                country_score = country_score + 1
                document.getElementById("score_point").innerHTML = "Score:" + "" + country_score;
                alert("Correct Answer!")
            } else {
                m[geography.id] = '#ff0000';
                datamap.updateChoropleth(m);
                alert("Wrong answer!")
            }
        });
    },
    scope: 'world',
    element: document.getElementById('container1'),
    projection: 'mercator',
    height: 800,
    width:2000,
    popupTemplate: function (geo, data) {
        return "<div class='hoverinfo'>It is " + data.name + "</div>";
    },
    fills: {
        defaultFill: '#f0af0a',
        lt50: 'rgba(0,244,244,0.9)',
        gt50: 'red'
    },
})
