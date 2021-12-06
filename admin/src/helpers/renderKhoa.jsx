const renderKhoa = (khoas) => {
  const data = [];

  for (const khoa of khoas) {
    data.push(<option value={khoa._id}>{`${khoa.mso} ${khoa.ten}`}</option>);
  }

  return data;
};

export { renderKhoa };
