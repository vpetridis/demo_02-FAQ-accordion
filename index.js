const itemsList = document.querySelectorAll(".item");
const contentList = document.querySelectorAll(".item p");
const titleList = document.querySelectorAll(".item h3");
const box = document.querySelector(".logo-box");

console.log(contentList);
console.log(itemsList);


itemsList.forEach((item) => {
  item.addEventListener("click", () => {
    //find the exact next paragraph & title
    const itemContent = item.querySelector("p");
    const itemTitle = item.querySelector("h3");
    const arrowUp = item.querySelector("img");

    //filter all other items and hide them
    const itemsArray = Array.from(itemsList);
    const hiddenItems = itemsArray.filter((i) => i !== item);
    hiddenItems.forEach((item) => {
      const hideContent = item.querySelector("p");
      const hideTitle = item.querySelector("h3");
      const arrowUp = item.querySelector("img")

      arrowUp.classList = "arrow-down"
      hideContent.classList = "content-hidden";
      hideTitle.classList = " ";
    });

    //toggle visibility only on the clicked items
    itemContent.classList.toggle("content-visible");
    itemTitle.classList.toggle("title-bold");
    //disable :hover color, because it's already selected
    itemTitle.classList.toggle("active");
    arrowUp.classList.toggle("up");
    box.classList.toggle("active-box");

  });
});
