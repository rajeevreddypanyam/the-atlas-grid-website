"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Deliverable } from "../capability-data";

type DeliverableAccordionProps = {
  capabilitySlug: string;
  deliverables: Deliverable[];
};

export default function DeliverableAccordion({ capabilitySlug, deliverables }: DeliverableAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="deliverable-list">
      {deliverables.map((deliverable, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${capabilitySlug}-deliverable-${index + 1}-button`;
        const panelId = `${capabilitySlug}-deliverable-${index + 1}-details`;

        return (
          <div className={`deliverable-item${isOpen ? " is-open" : ""}`} key={deliverable.name}>
            <button
              id={buttonId}
              className="deliverable-trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="deliverable-number">0{index + 1}</span>
              <span className="deliverable-name">{deliverable.name}</span>
              <span className="deliverable-formats">{deliverable.formats}</span>
              <ChevronDown aria-hidden="true" />
            </button>
            <div
              id={panelId}
              className="deliverable-detail"
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
            >
              <p>{deliverable.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
