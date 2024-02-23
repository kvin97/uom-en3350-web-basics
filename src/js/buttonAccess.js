const buttonAccess = () => {
  const selectedElement = document
    .getElementById("root")
    .querySelector("button");

  selectedElement.onclick = () => {
    const para = document.createElement("p");
    para.textContent = "Hello ! This is a paragraph !";

    document.getElementById("para").appendChild(para);
  };
};

export default buttonAccess;
