$("#run-search").click(() => {
    event.preventDefault();
    let userInput = $('#search-term').val();
    let startYear = $('#start-year').val();
    let endYear = $('#end-year').val();

    let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${userInput}&begin-date=${startYear}&end-date=${endYear}&api-key=kdjdawKhMdyUhJm90JcVk30M0ryADXkg`;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(response => {
        for (let el of response.response.docs) {
            let abstractDiv = $('<div class="abstract"></div>');
            $('#Output').append(abstractDiv);
            abstractDiv.text(el.abstract + el.web_url);
        }
    });
})


$("#clear-all").on("click", () => {
    $("#Output").html("");
})

