let selectedFile;
console.log(window.XLSX);

const file = document.getElementById("input");
file.addEventListener("change", event => {
  selectedFile = event.target.files[0];
});

document.getElementById("button").addEventListener("click", () => {
  if (selectedFile) {
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = event => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: "binary" });

      console.log(workbook);

      workbook.SheetNames.forEach(sheet => {
        const rowObject = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheet]
        );

        console.log(rowObject);

        document.getElementById("jsondata").innerHTML =
          JSON.stringify(rowObject);
      });
    };
  }
});
