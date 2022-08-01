document.addEventListener("DOMContentLoaded", () => {
  const sendData = (url, data) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  };
  const getData = (url) => {
    return fetch(url).then((response) => response.json());
  };

  const g = getData("db.json");
  g.then((data) => {
    sendData("https://jsonplaceholder.typicode.com/posts", data).then(
      (rdata) => {
        console.log(rdata);
      }
    );
  }).catch((err) => {
    console.log(err);
  });
});
