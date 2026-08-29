import React, { useMemo, useState } from "react";
import { procedures } from "../data/procedures";
import ProcedureCard from "./ProcedureCard";

type ProcedureListProps = {
  category: string;
  onSelectProcedure: (procedureId: string) => void;
};

export default function ProcedureList({
  category,
  onSelectProcedure,
}: ProcedureListProps) {
  const [search, setSearch] = useState("");

  const filteredProcedures = useMemo(() => {
    const term = search.trim().toLowerCase();

    return procedures.filter((procedure) => {
      const belongsToCategory =
        procedure.category === category;

      const matchesSearch =
        !term ||
        procedure.title.toLowerCase().includes(term) ||
        procedure.overview.toLowerCase().includes(term);

      return belongsToCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <div className="procedure-library">
      <div className="procedure-search">
        <span>🔍</span>

        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search procedures..."
          aria-label="Search procedures"
        />
      </div>

      <div className="procedure-count">
        <strong>
          {filteredProcedures.length}{" "}
          {filteredProcedures.length === 1
            ? "Procedure"
            : "Procedures"}
        </strong>

        <span>{category}</span>
      </div>

      {filteredProcedures.length > 0 ? (
        <div>
          {filteredProcedures.map((procedure) => (
            <ProcedureCard
              key={procedure.id}
              procedure={procedure}
              onClick={() =>
                onSelectProcedure(procedure.id)
              }
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>

          <h3>
            {search
              ? "No procedures found"
              : "No procedures added yet"}
          </h3>

          <p>
            {search
              ? "Try searching with another procedure name."
              : "Procedures for this category will appear here."}
          </p>
        </div>
      )}
    </div>
  );
          }
