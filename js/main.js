var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var submitBtn = document.getElementById("submitBtn");
var tbody = document.getElementById("tableContent");
var arr;

if (localStorage.bookmarks != null) {
  arr = JSON.parse(localStorage.bookmarks);
} else {
  arr = [];
}

function create() {
  var bookmarkContent = {
    siteName: siteName.value,
    siteUrl: siteUrl.value,
  };
  arr.push(bookmarkContent);
  localStorage.setItem("bookmarks", JSON.stringify(arr));

  show();
  clearInput();
}

function show() {
  var tbodyContent = "";
  for (var i = 0; i < arr.length; i++) {
    tbodyContent += `  
      <tr>
        <td>${i + 1}</td>

        <td>${arr[i].siteName}</td>
        <td><a target="_blank" class=" btn bg-success" href="${
          arr[i].siteUrl
        }"><i class="bi bi-eye"></i> Visit</a>
        </td>
        


        <td><button onclick="deleteData(${i})" id="delete" class="btn bg-danger"><i class="bi bi-trash3"></i> Delete</button></td>

      </tr>`;
  }

  tbody.innerHTML = tbodyContent;
}
show();

function deleteData(i) {
  arr.splice(i, 1);
  localStorage.bookmarks = JSON.stringify(arr);

  show();
}

function visit(i) {
  console.log(i);
}

function clearInput() {
  siteName.value = "";
  siteUrl.value = "";
}
