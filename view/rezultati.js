export default (rezultati) => {
  if (rezultati.length < 1) {
    return `<br> <br><h2>Krivi unos!</h2>`;
  } else if (rezultati.length > 1)
    return `
    <br>
    <br>
    <h2>Rezultati za nas upit: ${rezultati[0].country}</h2>
    <br>
    <ol>
        ${rezultati
          .slice(0, 10)
          .map((ele) => {
            return `<li><a href="${ele.web_pages[0]}">${ele.name}</a></li> <br>`;
          })
          .join(" ")}
    </ol>
    `;
};
