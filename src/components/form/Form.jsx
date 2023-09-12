const Form = () => {
  return (
    <>
      <form action="">
        <h3>NEW ENTRY</h3>
        <label htmlFor="motto">Motto</label>
        <input type="text" id="motto" name="motto" />
        <label htmlFor="notes">Notes</label>
        <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default Form;
