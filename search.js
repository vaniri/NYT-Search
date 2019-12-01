$("#run-search").click(() => {
    event.preventDefault();
    searchTerms = new Object ();
    searchTerms.q = $('#search-term').val();
    if ($('#begin-date').val()){ searchTerms["begin-date"] = $('#begin-date').val(); }
    if ($('#end-date').val()){ searchTerms["end-date"] = $('#end-date').val(); }

    let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?${$.param(searchTerms)}&api-key=kdjdawKhMdyUhJm90JcVk30M0ryADXkg`;
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

