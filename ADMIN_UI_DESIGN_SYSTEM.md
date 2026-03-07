# Admin Dashboard Style Guide (Reusable)

Use this when you want another site to match this admin dashboard design, but keep a different sidebar.

## Source file to copy

- `src/admin-dashboard-theme.css`

## Required design tokens

This theme expects:

- `--font-open-sans`
- `--font-nunito-sans`

If your other site does not define these variables, set fallbacks in its global CSS.

## How to apply in another project

1. Copy `src/admin-dashboard-theme.css` into the other project.
2. Import it once in that project's global CSS.
3. Keep your existing sidebar component.
4. Apply these classes to admin pages:
   - Page wrapper: `admin-dashboard-shell admin-page-stack`
   - Header block: `admin-hero` with child `admin-hero-content`
   - Standard cards: `admin-card` or `admin-card-soft admin-card-hover`
   - Primary buttons: `admin-btn-primary`
   - Accent buttons: `admin-btn-accent`
   - Secondary buttons: `admin-btn-ghost`
   - Inputs/selects/textareas: `admin-input`
   - Data tables: `admin-table-wrap` + `admin-table`
   - Stats grid: `admin-stat-grid` + `admin-stat-card`
   - Section titles: `admin-title`
   - Small uppercase labels: `admin-kicker`

## Sidebar exception

This file does not include sidebar-specific styling. Keep your second site's sidebar classes as they are.
