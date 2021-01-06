const itemsList = document.querySelectorAll(".item");
const contentList = document.querySelectorAll(".item p");
const titleList = document.querySelectorAll(".item h3")

console.log(contentList);
console.log(itemsList);

//hide all paragraphs
window.onload = () =>
  contentList.forEach((paragraph) => {
    paragraph.classList = "content-hidden";
    console.log(paragraph.className);
  });

//show only clicked items
itemsList.forEach((item) => {
  item.addEventListener("click", () => {
    //find the exact next paragraph
    const itemContent = item.querySelector("p");
    const itemTitle = item.querySelector("h3");
    
    //hide all other items to keep only one paragraph open
    const closeItems = Array.from(contentList);
    closeItems.forEach((item) => (item.classList = "content-hidden"));
    itemContent.classList.toggle("content-hidden");
    
    //make all bold titles normal again
    const closeTitles = Array.from(titleList);
    closeTitles.forEach((item) => (item.classList = ""));
    itemTitle.classList.toggle("title-bold");

    //added extra functionality to hide the already visible item
    item.addEventListener("click", () => {
      const itemContent = item.querySelector("p");
      const itemTitle = item.querySelector("h3");
      itemContent.classList.toggle("content-hidden");
      itemTitle.classList.toggle("title-bold");
    });
  });
});
