"use client";

interface PageHeaderProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  descriptionHighlight?: string;
  icon?: React.ReactNode;
  showQuoteButton?: boolean;
  quoteHref?: string;
}

export function PageHeader({
  // Header strip intentionally removed across admin pages per UX request.
  label,
  title,
  highlight,
  description,
  descriptionHighlight,
  icon,
  showQuoteButton = true,
  quoteHref = "/quote",
}: PageHeaderProps) {
  void label;
  void title;
  void highlight;
  void description;
  void descriptionHighlight;
  void icon;
  void showQuoteButton;
  void quoteHref;
  return null;
}
