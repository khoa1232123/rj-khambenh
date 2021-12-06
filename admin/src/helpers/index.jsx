const randomMaso = (prefix) => {
  let random = Math.floor(Math.random() * 999999) + 1000001;
  random = random + "";
  let del_str = random.replace("1", "");
  return prefix + del_str;
};

const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join(" - ");
};

const renderGioitinh = () => {
  var data = [];
  data.push(<option value="">--Select Options--</option>);
  data.push(<option value="nam">Nam</option>);
  data.push(<option value="nu">Nữ</option>);
  data.push(<option value="khac">Khác</option>);

  return data;
};

export { randomMaso, formatDate, renderGioitinh };
