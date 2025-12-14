# Ticket 02 – Projects page rewired to vertical list

## Goal
Replace the projects grid/modal experience with a vertical list of `ProjectRow` instances that expand inline on both desktop and mobile, keeping existing project data intact.

## Deliverables
- `app/projects/page.tsx` renders a vertical list of `ProjectRow` rows instead of the modal/grid.
- Hash/scroll behavior preserved: stable ids per project, and navigating to `/#<id>` auto-expands and scrolls the matching row into view.
- Modal/Radix Dialog usage removed from the projects page.

## Tasks
- Swap the existing grid + dialog wiring for the new inline list using `ProjectRow`.
- Ensure each row has a stable id/ref keyed to its project slug/id; wire hash detection to open the matching row on load or hash change.
- Preserve CTA link targets and existing project metadata display.
- Remove dialog-only state/handlers that are no longer needed.

## Acceptance Criteria
- Visiting `/projects` shows the vertical list; clicking a row expands it inline without opening a dialog.
- Changing the URL hash to a project id auto-expands the corresponding row and scrolls it into view.
- No Radix Dialog imports or usage remain on the projects page.
- Data displayed matches previous content (titles, descriptions, tech, CTAs).

## Dependencies
- Depends on Ticket 01 (`ProjectRow`) being available.
