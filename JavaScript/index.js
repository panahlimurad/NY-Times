$(document).ready(function () {
  const getFormInfo = () => {
    let q = $("#titleNews").val();
    let begin_date = $("#startDateNews").val();
    let end_date = $("#endtDateNews").val();
    let sort = $("#sortNews").val();

    let formDate = {
      end_date,
      begin_date,
      q,
      sort,
      "api-key": "EqdAKXALUM5TFZcOJfMPSAQWyPJVDd2L",
    };
    return formDate;
  };

  const render = (arr) => {
    $("#newsList").html(
      arr.map((news) => {
        return `<div class="col-md-12">
        <div class="card mb-5">
          <img style="height: 400px; object-fit: cover;"
            src="https://www.nytimes.com/${news.multimedia[0].url}" class="card-img-top"
            alt="...">
          <div class="card-body">
            <h5 class="card-title">${news.abstract}</h5>
            <p class="card-text">${news.lead_paragraph}</p>
          </div>
          <a href="${news.web_url}" class="btn btn-dark">Read More</a>
        </div>
      </div> `;
      })
    );
  };

  $("#searchNews").on("click", (e) => {
    console.log(e);
    e.preventDefault();
    let form = getFormInfo();

    getNews(form);
  });

  const getNews = (data) => {
    $.ajax({
      method: "GET",
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      data,
    }).done((res) => {
      console.log(res);
      render(res.response.docs);
    });
  };
});
