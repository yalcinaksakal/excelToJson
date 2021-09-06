//read file directly
const fileBlob = await fetch("/leet.ods").then(r => r.blob());

const fileReader = new FileReader();

fileReader.readAsBinaryString(fileBlob);
fileReader.onload = event => {
  const data = event.target.result;
  const workbook = XLSX.read(data, { type: "binary" });
  const result = [];
  workbook.SheetNames.forEach(sheet => {
    result.push(
      ...XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet])
    );

    console.log(result);
  });
};
