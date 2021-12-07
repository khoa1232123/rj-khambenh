const renderKhoa = (khoas) => {
  const data = [];
  data.push(
    <option value="" key="1">
      -- Select Options --
    </option>
  );

  for (const khoa of khoas) {
    data.push(
      <option
        value={khoa._id}
        key={khoa._id}
      >{`${khoa.mso} ${khoa.ten}`}</option>
    );
  }

  return data;
};

export { renderKhoa };
