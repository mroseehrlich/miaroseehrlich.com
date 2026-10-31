
"use client";

import { useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "motion/react";

const transition = {
  type: "spring",
  stiffness: 110,
  damping: 23,
  mass: 1,
};

export default function SpatialPrototype() {
  const [view, setView] = useState("home");
  const reducedMotion = useReducedMotion();

  return (
    <LayoutGroup id="spatial-prototype">
      <main className="spatial-prototype">
          {view === "home" ? (
            <motion.section
              key="home"
              className="spatial-home"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="spatial-eyebrow">
                An experiment in navigation
              </p>

              <h1>Mia Rose Ehrlich</h1>

              <p>
                Backend systems, web applications,
                writing, and digital spaces
                with a sense of place.
              </p>

              <div className="spatial-home-links">
                <motion.button
                  layoutId="projects-title"
                  layout="position"
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : transition
                  }
                  className="spatial-projects-trigger"
                  onClick={() => setView("projects") }
                >
                  Projects
                  <span className="spatial-projects-arrow" aria-hidden="true"> ↗</span>
                </motion.button>

                <span>Writing</span>
                <span>Still Life</span>
              </div>
            </motion.section>
          ) : (
            <motion.section
              key="projects"
              className="spatial-projects"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                className="spatial-return"
                onClick={() => setView("home")}
              >
                ← Return
              </button>

              <motion.h1
                layoutId="projects-title"
                layout="position"
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : transition
                }
                className="spatial-projects-title"
              >
                Projects
              </motion.h1>

              <motion.div
                className="spatial-projects-content"
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, y: 25 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
              >
                <p>
                  Selected software work and
                  ongoing experiments.
                </p>

                <div className="spatial-project">
                  <span>01 / Backend systems</span>
                  <h2>Quiet Ledger</h2>
                  <p>
                    Structured audit events,
                    queryable histories, and redaction.
                  </p>
                </div>

                <div className="spatial-project">
                  <span>02 / In development</span>
                  <h2>Relay</h2>
                  <p>
                    Exploring webhook delivery,
                    reliability, and operational visibility.
                  </p>
                </div>
              </motion.div>
            </motion.section>
          )}
      </main>
    </LayoutGroup>
  );
}
