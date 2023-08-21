export const TaskBanner = ({ userName, taskItems }) => (
  <h4
    className="text-white text-center p-4 mb-5 fw-bold"
    style={{ background: "#2A7296" }}
  >
    {userName} Control de tareas {" "}
    <span className="text-info">
      ({taskItems.filter((t) => !t.done).length} Tareas que hacer )
    </span>
  </h4>
);