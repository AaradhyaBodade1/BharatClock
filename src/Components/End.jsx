function End() {
  let Time = new Date();
  return (
    <div className="End">
      This is the current time {Time.toLocaleDateString()}-{""}
      {Time.toLocaleTimeString()}
    </div>
  );
}

export default End;
