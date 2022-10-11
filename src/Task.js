export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1> Ves que si soy programador?</h1>
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready === true ? "Curso terminado ♥‿♥" : "curso no terminado (ಥ﹏ಥ)"}
      </span>
    </div>
  );
}
