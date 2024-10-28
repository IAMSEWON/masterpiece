// HTML 파일을 가져와서 div에 추가
fetch("../layout/footer.html") // 불러올 HTML 파일의 경로
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data; // 불러온 내용을 div에 삽입
  })
  .catch((error) => console.error("Error loading HTML:", error));
