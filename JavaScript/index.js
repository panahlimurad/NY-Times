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

  const render = () => {
    $("#newsList").html(
      arr.map((news) => {
        return `<div class="col-md-12">
        <div class="card mb-5">
          <img style="height: 400px; object-fit: cover;"
            src="https://around.uoregon.edu/sites/around3.uoregon.edu/files/field/image/nyt.jpg" class="card-img-top"
            alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
          </div>
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
