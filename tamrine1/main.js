$(document).ready(function () {
  $("#button").click(function () {
    let table = document.getElementById("table");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    $(delBtn).addClass("btn");
    $(delBtn).addClass("bg-danger");
    $(delBtn).addClass("text-white");

    $(delBtn).html(`    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                      id="trashSvg"
                    >
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      ></path>
                    </svg> Delete`);

    $(delBtn).on("click", function () {
      $(this).closest("tr").remove();
    });
    $(cell1).append(delBtn);

    const cloneBtn = document.createElement("button");
    cloneBtn.innerText = "Clone";
    $(cloneBtn).addClass("btn");
    $(cloneBtn).addClass("bg-primary");
    $(cloneBtn).addClass("text-white");
    $(cloneBtn).css("margin-left", "1%");
    $(cloneBtn).html(` <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-files"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"
                      />
                    </svg> clone `);
    $(cell1).append(cloneBtn);

    const input = document.createElement("input");
    $(cell2).append(input);
    const input2 = document.createElement("input");
    $(cell3).append(input2);

    const newLabel = document.createElement("label");

    newLabel.innerText = "New";
    $(newLabel).css("margin-left", "1%");
    const newCheck = document.createElement("input");
    newCheck.checked = true;
    newCheck.type = "radio";
    $(newLabel).append(newCheck);

    $(cell4).append(newCheck);
    $(cell4).append(newLabel);

    const progressLabel = document.createElement("label");
    progressLabel.innerText = "In progress";
    $(progressLabel).css("margin-left", "1%");
    const progressCheck = document.createElement("input");

    progressCheck.type = "radio";
    $(progressCheck).css("margin-left", "5%");
    $(progressLabel).append(progressCheck);

    $(cell4).append(progressCheck);
    $(cell4).append(progressLabel);

    const confirmedLabel = document.createElement("label");
    confirmedLabel.innerText = "Confirmed";
    $(confirmedLabel).css("margin-left", "1%");
    const ConfirmedCheck = document.createElement("input");
    ConfirmedCheck.id = "radioCheck";
    ConfirmedCheck.type = "radio";
    $(ConfirmedCheck).css("margin-left", "5%");
    $(confirmedLabel).append(ConfirmedCheck);

    $(cell4).append(ConfirmedCheck);
    $(cell4).append(confirmedLabel);

    $(ConfirmedCheck).click(function () {
      $(input2).attr("disabled", "disabled");
      $(input).attr("disabled", "disabled");
    });
    function allRows() {
      let curruntRow = document.getElementById("h5");
      $(curruntRow).css("display", "block");
      curruntRow.innerText = `All rows number:${$("  tr ").length - 1} `;
    }
    allRows();

    function confirmedRadio() {
      let notConfirmed = document.getElementById("secondH5");
      $(notConfirmed).css("display", "block");
      const all = $("input[id=radioCheck]").length;
      const checkedRadio = $("input[id=radioCheck]:checked").length;
      const notChecked = all - checkedRadio;
      notConfirmed.innerText = `Not confirmed row number: ${notChecked}`;
    }
    confirmedRadio();
    $(ConfirmedCheck).on("change", confirmedRadio);

    ConfirmedCheck.addEventListener("click", () => {
      $(progressCheck).prop("disabled", true); // disable
      $(newCheck).prop("disabled", true); // disable
    });

    $(cloneBtn).click(function () {
      $(row).after($(row).clone(true));
      allRows();
      confirmedRadio();
    });
  });
});
