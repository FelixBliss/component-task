import React from "react";
import type { Procedure } from "../data/procedures";

type ProcedureCardProps = {
  procedure: Procedure;
  onClick: () => void;
};

export default function ProcedureCard({
  procedure,
  onClick,
}: ProcedureCardProps) {
  return (
    <button
      className="procedure-card"
      onClick={onClick}
      type="button"
      aria-label={`Open ${procedure.title}`}
    >
      <div className="procedure-card-icon">
        🩺
      </div>

      <div className="procedure-card-content">
        <span className="procedure-card-category">
          {procedure.category}
        </span>

        <strong>{procedure.title}</strong>

        <small>
          View procedure details, steps and learning resources
        </small>

        <span className="procedure-card-id">
          Procedure {procedure.id}
        </span>
      </div>

      <span className="procedure-card-arrow">
        ›
      </span>
    </button>
  );
}
